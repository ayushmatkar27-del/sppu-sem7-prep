# 💬 Unit 5: Natural Language Processing & Sequence Modeling
### Deep Learning (Elective IV - 404185C) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 5 OR Question 6 (18 Marks Weightage) | Master Exam Notes**
*Course Outcome CO5: Discuss natural language processing architectures.*

---

## 📌 Unit 5 Complete Syllabus Mapping & Exam Blueprint
*Audited from SPPU Official Syllabus & University Examination Papers (2022 to 2026)*

| Syllabus Topic | Exam Status & Frequency | Probability Tier | Expected Marks | Key Focus in SPPU Exam |
| :--- | :---: | :---: | :---: | :--- |
| **1. Recurrent Neural Networks (RNN) & Vanishing Gradients** | **3x in Univ Papers** | `🔥 100% Guaranteed` | **8 to 10 M** | Architecture, Unfolded graph, Hidden state recurrence, Vanishing/Exploding gradient proof. |
| **2. BPTT (Backpropagation Through Time)** | **Univ Question Bank** | `⚡ High Priority (80%)` | **7 to 9 M** | Unrolled gradient chain rule, Mathematical derivation of $\frac{\partial L}{\partial W_{hh}}$, Truncated BPTT, Gradient clipping. |
| **3. Bidirectional RNNs (BiRNN)** | **1x in Univ Papers** | `📌 High Priority (70%)` | **7 M** | Forward and backward hidden states, Concatenation, Resolving polysemy in Named Entity Recognition (NER). |
| **4. Encoder-Decoder Seq2Seq Architectures** | **Univ Question Bank** | `⚡ High Priority (75%)` | **8 to 10 M** | Architecture, Context vector bottleneck, Teacher Forcing, Greedy vs Beam Search decoding, Attention intro. |
| **5. Long Short-Term Memory Networks (LSTM)** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **8 to 10 M** | Constant Error Carousel, Cell state $C_t$, Forget, Input, Candidate, Output gate equations, How memory is retained. |
| **6. Advanced RNN: LSTM vs. GRU** | **2x in Univ Papers** | `⚡ Very High (80%)` | **7 to 8 M** | Reset gate $r_t$, Update gate $z_t$, Candidate $\tilde{h}_t$, 8-point architectural comparison table. |
| **7. Introduction to Generative Adversarial Networks (GANs)** | **1x in Univ Papers** | `⚡ High Priority (75%)` | **8 to 10 M** | Generator $G$, Discriminator $D$, Two-player Minimax game loss function $\min_G \max_D V(D,G)$, Nash Equilibrium. |

---

## 🏆 SECTION 1 & 2: Recurrent Neural Networks (RNN) & BPTT Derivation
**Marks:** 8 to 10 Marks | **Frequency:** 3x in Univ Papers (100% Guaranteed)

### 1.1 Recurrent Neural Network (RNN) Formulation
Standard feedforward networks assume all inputs and outputs are independent. **RNNs** introduce cyclical feedback loops, maintaining an internal hidden state $h_t$ that acts as a sequential memory buffer.
* **Forward State Update Equation:**
  $$h_t = \tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$$
* **Output Prediction Equation:**
  $$\hat{y}_t = \text{softmax}(W_{hy} h_t + b_y)$$
* Where:
  * $x_t \in \mathbb{R}^d$: Input vector at time step $t$.
  * $h_t \in \mathbb{R}^h$: Hidden state vector at time step $t$.
  * $W_{xh}$: Input-to-hidden weight matrix.
  * $W_{hh}$: Hidden-to-hidden recurrence weight matrix.
  * $W_{hy}$: Hidden-to-output weight matrix.

### 2.1 Backpropagation Through Time (BPTT) Mathematical Derivation
During training, the recurrent network is unrolled across time steps $t = 1 \dots T$.
The total sequence loss is the sum of losses at all time steps:
$$\mathcal{L} = \sum_{t=1}^T \mathcal{L}_t$$
To calculate the gradient of loss $\mathcal{L}_t$ with respect to the recurrent weight matrix $W_{hh}$, we apply the multivariable chain rule through hidden states $h_t, h_{t-1}, \dots, h_1$:
$$\frac{\partial \mathcal{L}_t}{\partial W_{hh}} = \sum_{k=1}^t \frac{\partial \mathcal{L}_t}{\partial \hat{y}_t} \frac{\partial \hat{y}_t}{\partial h_t} \left( \frac{\partial h_t}{\partial h_k} \right) \frac{\partial h_k}{\partial W_{hh}}$$
The temporal Jacobian chain product term is:
$$\frac{\partial h_t}{\partial h_k} = \prod_{j=k+1}^t \frac{\partial h_j}{\partial h_{j-1}} = \prod_{j=k+1}^t \text{diag}(1 - h_j^2) \cdot W_{hh}^T$$

### 2.2 Why Vanishing and Exploding Gradients Occur in Simple RNNs
Notice the repeated matrix multiplication of recurrent weight transpose $W_{hh}^T$ over $t - k$ time steps:
1. **Vanishing Gradient ($\lambda_{\max}(W_{hh}) < 1$):**
   * If the largest eigenvalue of $W_{hh}$ is less than 1, or because $\tanh'(z) = 1 - h^2 \le 1$, raising a fraction to the $(t - k)^{\text{th}}$ power decays exponentially to zero ($0.5^{20} \approx 9.5 \times 10^{-7}$).
   * **Consequence:** Gradients from long-distance time steps vanish, meaning the network cannot learn long-term temporal dependencies (e.g., subject-verb agreement across 20 words).
2. **Exploding Gradient ($\lambda_{\max}(W_{hh}) > 1$):**
   * If eigenvalues exceed 1, gradients grow exponentially, causing numerical overflow (NaNs) and wild parameter oscillation.
   * **Mitigation for Exploding Gradient:** **Gradient Clipping**:
     $$\text{if } \|\mathbf{g}\| > \theta \implies \mathbf{g} \leftarrow \theta \frac{\mathbf{g}}{\|\mathbf{g}\|}$$

---

## 🏆 SECTION 3: Bidirectional RNNs (BiRNN) for Named Entity Recognition (NER)
**Marks:** 7 Marks | **Frequency:** 1x in Univ Papers (May 2024)

### 3.1 The Limitation of Unidirectional RNNs
A standard forward RNN reads sequential data in one direction ($x_1 \to x_t$). At time step $t$, the hidden state $h_t$ only contains past context ($x_1 \dots x_{t-1}$). However, in human language and NLP, understanding the true meaning of a word frequently depends on **future context** ($x_{t+1} \dots x_T$).

### 3.2 Bidirectional Architecture
A **Bidirectional RNN (Schuster & Paliwal, 1997)** processes the sequence with two separate hidden layers:
1. **Forward RNN:** Processes tokens from past to future ($t = 1 \to T$):
   $$\overrightarrow{h}_t = \tanh(W_{x\overrightarrow{h}} x_t + W_{\overrightarrow{h}\overrightarrow{h}} \overrightarrow{h}_{t-1} + b_{\overrightarrow{h}})$$
2. **Backward RNN:** Processes tokens in reverse from future to past ($t = T \to 1$):
   $$\overleftarrow{h}_t = \tanh(W_{x\overleftarrow{h}} x_t + W_{\overleftarrow{h}\overleftarrow{h}} \overleftarrow{h}_{t+1} + b_{\overleftarrow{h}})$$
3. **Combined Output Representation:** Concatenates both contextual states:
   $$h_t = \left[ \overrightarrow{h}_t \,;\, \overleftarrow{h}_t \right]$$

### 3.3 How Bidirectional RNN Solves Named Entity Recognition (NER)
Consider the polysemous token **"Apple"** in two distinct sentences:
* **Sentence A:** *"Apple announced its revolutionary quantum neural processor yesterday in California."*
* **Sentence B:** *"Apple tastes crisp and refreshing when eaten cold from the orchard."*

When a unidirectional RNN encounters the first token *"Apple"*, it has zero prior words ($h_0 = 0$). It cannot determine whether "Apple" is an **Organization (ORG)** or a **Fruit (FOOD)**.
* **How BiRNN Resolves This:** The backward RNN reads from right to left, processing words like *"processor / California"* (Sentence A) and *"eaten / orchard"* (Sentence B). When concatenated, the combined representation $h_t$ at token "Apple" provides rich bidirectional semantic clues, enabling the classification head to classify Sentence A as **B-ORG** and Sentence B as **O (Other/Fruit)**.

---

## 🏆 SECTION 4: Encoder-Decoder Sequence-to-Sequence (Seq2Seq) Architectures
**Marks:** 8 to 10 Marks | **Probability:** High Priority (75%)

### 4.1 Motivation & Applications
Standard RNNs require input and output sequences to have identical lengths. Many critical NLP tasks involve **variable-length input and output mappings**:
* Machine Translation (e.g., English to German).
* Text Summarization (Long paragraph to 1 sentence).
* Conversational AI & Chatbots (User query to bot response).

### 4.2 Architectural Components (Sutskever et al., 2014)
1. **The Encoder:**
   * An RNN/LSTM that reads the input token sequence $X = (x_1, x_2, \dots, x_{T_x})$.
   * Discards intermediate outputs and outputs the final hidden state as a fixed-dimensional **Context Vector** $C = h_{T_x}$, which acts as a compressed semantic summary of the entire source sentence.
2. **The Decoder:**
   * An RNN/LSTM initialized with hidden state $s_0 = C$.
   * Generates target tokens $Y = (y_1, y_2, \dots, y_{T_y})$ sequentially:
     $$s_t = f(s_{t-1}, y_{t-1}, C), \quad P(y_t \mid y_{<t}, X) = \text{softmax}(W_s s_t)$$
   * Continues generating words until an end-of-sequence token `<EOS>` is emitted.

### 4.3 Training & Inference Techniques
* **Teacher Forcing (Training):** During training, instead of feeding the decoder's own predicted token $\hat{y}_{t-1}$ to the next step, the ground-truth target token $y_{t-1}^*$ is supplied. This prevents early prediction errors from cascading and destabilizing gradient convergence.
* **Greedy Search vs. Beam Search (Inference):**
  * *Greedy Search:* Selects the single highest-probability token at each step. Fast but myopic; misses globally optimal sentences.
  * *Beam Search:* Maintains a beam of top-$B$ most probable candidate sequences at each step, pruning low-scoring branches to find the global optimum.
* **The Information Bottleneck & Attention:** For sentences longer than 20 words, compressing an entire paragraph into a single fixed vector $C$ causes severe information loss. This bottleneck led to Bahdanau's **Attention Mechanism**, which computes dynamic context vectors $c_t = \sum \alpha_{ti} h_i$.

---

## 🏆 SECTION 5: Long Short-Term Memory Networks (LSTM)
**Marks:** 8 to 10 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

### 5.1 The Constant Error Carousel (CEC) & Cell State
Hochreiter & Schmidhuber (1997) solved the vanishing gradient problem by introducing:
1. **The Cell State ($C_t$):** An internal highway conveyor belt that runs straight down the entire recurrent chain, undergoing only linear additive updates.
2. **Three Multiplicative Gating Mechanisms:** Regulated by sigmoid activations ($\sigma \in [0, 1]$) to conditionally add or remove information.

### 5.2 The 4 Full Mathematical LSTM Equations
Given input $x_t$ and previous hidden state $h_{t-1}$:

1. **Forget Gate ($f_t$):** Decides what information to discard from the previous cell state:
   $$f_t = \sigma\left( W_f \cdot [h_{t-1}, x_t] + b_f \right)$$
   * $\sigma = 0$: Completely forget this information.
   * $\sigma = 1$: Completely preserve this information.
2. **Input Gate ($i_t$) & Candidate State ($\tilde{C}_t$):** Decides what new information to store in cell state:
   $$i_t = \sigma\left( W_i \cdot [h_{t-1}, x_t] + b_i \right)$$
   $$\tilde{C}_t = \tanh\left( W_c \cdot [h_{t-1}, x_t] + b_c \right)$$
3. **Cell State Update ($C_t$):** Linearly combines old cell memory with new candidate memory:
   $$C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t$$
   *(The additive $\odot$ operation allows gradients to flow across hundreds of time steps without decaying!).*
4. **Output Gate ($o_t$) & Hidden State ($h_t$):** Decides what parts of cell state to reveal as output:
   $$o_t = \sigma\left( W_o \cdot [h_{t-1}, x_t] + b_o \right)$$
   $$h_t = o_t \odot \tanh(C_t)$$

---

## 🏆 SECTION 6: Advanced RNN: LSTM vs. Gated Recurrent Unit (GRU)
**Marks:** 7 to 8 Marks | **Frequency:** 2x in Univ Papers (May 2024, Nov 2023)

### 6.1 Gated Recurrent Unit (Cho et al., 2014)
The **GRU** simplifies the LSTM by merging the cell state and hidden state into a single state $h_t$, and reducing the gate count from 3 down to 2:
1. **Reset Gate ($r_t$):** Determines how much of past memory to forget:
   $$r_t = \sigma(W_r \cdot [h_{t-1}, x_t])$$
2. **Update Gate ($z_t$):** Simultaneously controls forgetting and accepting new input:
   $$z_t = \sigma(W_z \cdot [h_{t-1}, x_t])$$
3. **Candidate Hidden State ($\tilde{h}_t$):**
   $$\tilde{h}_t = \tanh(W \cdot [r_t \odot h_{t-1}, x_t])$$
4. **Final Hidden State Update:**
   $$h_t = (1 - z_t) \odot h_{t-1} + z_t \odot \tilde{h}_t$$

### 6.2 Comprehensive 8-Point Distinction: LSTM vs. GRU
| Comparison Parameter | Long Short-Term Memory (LSTM) | Gated Recurrent Unit (GRU) |
| :--- | :--- | :--- |
| **1. Number of Gates** | **3 Gates** (Forget, Input, Output) | **2 Gates** (Reset, Update) |
| **2. Internal States** | **2 States:** Separate Cell State $C_t$ & Hidden State $h_t$ | **1 State:** Only Hidden State $h_t$ |
| **3. Update Control** | Independent gates for forgetting ($f_t$) and input ($i_t$) | Coupled update gate: $(1 - z_t)$ forgets while $z_t$ inputs |
| **4. Parameter Count** | Higher: $4 \times (d_h^2 + d_h d_x + d_h)$ | **25% Fewer Parameters:** $3 \times (d_h^2 + d_h d_x + d_h)$ |
| **5. Computational Speed** | Slower per epoch due to more matrix multiplications | **Faster training & inference**; computationally efficient |
| **6. Memory Footprint** | Higher memory required to cache states | Lower memory required |
| **7. Dataset Suitability** | Excels on very large datasets and long sequences ($>100$ tokens) | Excels on smaller to medium datasets; resists overfitting |
| **8. Performance** | Marginally superior expressive power on complex tasks | Comparable performance with significantly less compute |

---

## 🏆 SECTION 7: Introduction to Generative Adversarial Networks (GANs)
**Marks:** 8 to 10 Marks | **Frequency:** 1x in Univ Papers (Nov 2023)

### 7.1 What are Generative Models?
* **Discriminative Models:** Model the conditional probability $P(Y \mid X)$ (e.g., given an image, predict if it's a cat or dog).
* **Generative Models:** Model the joint probability distribution $P(X)$ or $P(X, Y)$ to generate brand new synthetic data samples that resemble the true training distribution.

### 7.2 GAN Architecture (Ian Goodfellow et al., 2014)
A GAN consists of two competing sub-networks locked in a game-theoretic contest:
1. **Generator ($G$):**
   * Takes a random latent noise vector $z \sim p_z(z)$ (Gaussian or Uniform).
   * Maps it to data space $G(z)$ to synthesize realistic images/text that fool the discriminator.
2. **Discriminator ($D$):**
   * A binary classifier that receives either real data $x \sim p_{\text{data}}$ or fake data $G(z)$.
   * Outputs probability $D(x) \in [0, 1]$ indicating whether the sample is real ($1$) or fake ($0$).

### 7.3 The Two-Player Minimax Game Objective Function
$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{\text{data}}(x)}\left[ \log D(x) \right] + \mathbb{E}_{z \sim p_z(z)}\left[ \log (1 - D(G(z))) \right]$$
* **Discriminator's Goal ($\max_D$):** Wants $D(x) \to 1$ and $D(G(z)) \to 0$, maximizing $V(D,G)$.
* **Generator's Goal ($\min_G$):** Wants $D(G(z)) \to 1$ so that $\log(1 - D(G(z))) \to -\infty$, minimizing $V(D,G)$.
* **Nash Equilibrium:** The ideal equilibrium is reached when the generator reproduces the true data distribution $p_g = p_{\text{data}}$, and the discriminator outputs $D(x) = \frac{1}{2}$ for all inputs (pure random guess).
