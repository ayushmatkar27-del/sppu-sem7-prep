# 🧠 Unit 3: Deep Learning Architecture
### Deep Learning (Elective IV - 404185C) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 1 OR Question 2 (18 Marks Weightage) | Master Exam Notes**
*Course Outcome CO3: Identify the deep learning architectures with respect to the applications.*

---

## 📌 Unit 3 Complete Syllabus Mapping & Exam Blueprint
*Audited from SPPU Official Syllabus & University Examination Papers (2022 to 2026)*

| Syllabus Topic | Exam Status & Frequency | Probability Tier | Expected Marks | Key Focus in SPPU Exam |
| :--- | :---: | :---: | :---: | :--- |
| **1. Width and Depth of Neural Networks** | **Univ Question Bank** | `📌 High Priority (75%)` | **7 to 8 M** | Expressive power, Universal Approximation Theorem, Parameter efficiency, Depth vs Width trade-offs. |
| **2. Activation Functions & Gradient Anomalies** | **2x in Univ Papers** | `⚡ Very High (85%)` | **8 to 10 M** | Sigmoid, Tanh, ReLU, Leaky ReLU; Justification of Vanishing Gradient ($\sigma'(z) \le 0.25$) & Dying ReLU. |
| **3. Batch-Normalization** | **3x in Univ Papers** | `🔥 100% Guaranteed` | **7 to 8 M** | Internal Covariate Shift, 4-step mathematical algorithm, learnable parameters ($\gamma, \beta$), test-time inference. |
| **4. Overfitting and Generalization** | **2x in Univ Papers** | `📌 High Priority (75%)` | **8 to 10 M** | Bias-Variance tradeoff, Generalization gap, Real-world examples, 6 mitigation strategies. |
| **5. Dropout and Regularization** | **3x in Univ Papers** | `🔥 100% Guaranteed` | **7 to 9 M** | Inverted dropout formulation, co-adaptation intuition, L1 (Lasso) vs L2 (Ridge / Weight Decay). |
| **6. Unsupervised Training of Neural Networks** | **Univ Question Bank** | `⚡ High Priority (70%)` | **7 to 8 M** | Greedy layer-wise pre-training, Cold-start initialization, Representation learning hierarchy. |
| **7. Restricted Boltzmann Machines (RBM)** | **2x in Univ Papers** | `⚡ Very High (80%)` | **8 to 9 M** | Bipartite undirected graph, Energy function $E(v,h)$, Contrastive Divergence (CD-$k$), Stacking to form DBNs. |
| **8. Auto Encoders (AE)** | **2x in Univ Papers** | `⚡ Very High (80%)` | **8 to 9 M** | Encoder-Bottleneck-Decoder, Reconstruction loss, Undercomplete, Denoising, Sparse, Variational Autoencoders. |
| **9. Comparison: Autoencoders vs. RBM** | **2x in Univ Papers** | `⚡ Very High (80%)` | **8 M** | 10-point comprehensive distinction table. |
| **10. Deep Learning Applications** | **Univ Question Bank** | `Medium (65%)` | **6 M** | Computer vision, NLP, speech processing, bioinformatics, autonomous vehicles. |

---

## 🏆 SECTION 1: Width and Depth of Neural Networks
**Marks:** 7 to 8 Marks | **Probability:** High Priority (75%)

### 1.1 Definitions: Width vs. Depth
* **Network Depth:** The number of sequential hidden layers between the input and output layers. Depth represents the number of sequential non-linear transformations applied to the data.
* **Network Width:** The number of neurons (units) present in a single layer. Width represents the parallel capacity of a single representation layer.

### 1.2 The Universal Approximation Theorem (Hornik, 1989)
* **Theorem Statement:** A standard feed-forward neural network with a single hidden layer containing a finite number of neurons (arbitrary **width**) can approximate any continuous function on compact subsets of $\mathbb{R}^n$ to arbitrary accuracy, given non-linear activation functions.
* **The Catch:** While a wide shallow network can theoretically approximate any function, it may require an **exponentially large number of neurons** ($\mathcal{O}(2^n)$), making training computationally impossible and prone to severe overfitting.

### 1.3 Why Choose Depth Over Width? (Exponential Parameter Efficiency)
1. **Hierarchical Feature Abstraction:** Real-world data (images, speech, text) is inherently compositional. Deep networks learn features hierarchically:
   * *Layer 1 (Low-level):* Edges, color gradients, pixel transitions.
   * *Layer 2 (Mid-level):* Corners, textures, contours.
   * *Layer 3 (High-level):* Object parts (eyes, wheels, noses).
   * *Final Layer (Semantic):* Whole objects (faces, cars, animals).
2. **Exponential Parameter Efficiency:** Deep architectures can represent certain complex function families with $\mathcal{O}(k \cdot n)$ parameters, whereas shallow wide networks require $\mathcal{O}(2^n)$ parameters for the same expressiveness.
3. **Re-use of Features:** Deeper layers compose representations created by earlier layers, enabling modular learning and transfer learning across domains.

### 1.4 Trade-offs: Width vs. Depth
| Parameter | Wide Shallow Networks (High Width, Low Depth) | Deep Narrow Networks (High Depth, Moderate Width) |
| :--- | :--- | :--- |
| **Expressive Power** | Exponential parameter demand for complex non-linear functions | Polynomial / Linear parameter efficiency for compositional data |
| **Optimization Landscape** | Convex or simpler optimization; no vanishing gradients | Highly non-convex; prone to vanishing/exploding gradients |
| **Generalization Ability** | Memorizes training data easily (High Overfitting) | Learns generalizable hierarchical abstractions |
| **Hardware Parallelism** | Excellent GPU matrix multiplication parallelism | Sequential layer dependency limits temporal parallelism |
| **Modern Solutions** | Used in simple linear models or extreme ensemble voting | Stabilized by Residual Connections (ResNet), Batch Norm, and He Init |

---

## 🏆 SECTION 2: Different Activation Functions & Gradient Anomalies
**Marks:** 8 to 10 Marks | **Frequency:** 2x in Univ Papers (May 2024, Nov 2023)

### 2.1 Overview of Core Activation Functions
```
1. Sigmoid:     σ(z) = 1 / (1 + e^(-z))             Range: (0, 1)
2. Tanh:        tanh(z) = (e^z - e^(-z)) / (e^z + e^(-z))   Range: (-1, 1)
3. Threshold:   f(z) = 1 if z ≥ 0 else 0            Range: {0, 1}
4. ReLU:        f(z) = max(0, z)                    Range: [0, ∞)
5. Leaky ReLU:  f(z) = max(α·z, z)  (α = 0.01)      Range: (-∞, ∞)
6. Softmax:     P(y = i | z) = e^(z_i) / Σ e^(z_j)  Range: [0, 1], Σ = 1
```

### 2.2 Mathematical Justification: Vanishing Gradient in Sigmoid
* **Derivative Formula:**
  $$\sigma'(z) = \frac{d}{dz}\left(\frac{1}{1 + e^{-z}}\right) = \sigma(z) \cdot (1 - \sigma(z))$$
* **Maximum Value Proof:**
  * When $z = 0$, $\sigma(0) = 0.5$.
  * Thus, $\sigma'(0) = 0.5 \times (1 - 0.5) = 0.25$.
  * For any input $|z| > 0$, $\sigma'(z) < 0.25$.
* **Impact Across Deep Layers:**
  By the chain rule of backpropagation across $L$ layers:
  $$\frac{\partial \mathcal{L}}{\partial w_1} = \frac{\partial \mathcal{L}}{\partial a_L} \cdot \prod_{l=2}^L \left( \sigma'(z_l) \cdot W_l \right) \cdot \frac{\partial z_1}{\partial w_1}$$
  Since each term $\sigma'(z_l) \le 0.25$, multiplying $L$ small fractions causes the gradient to decay exponentially towards zero ($0.25^{10} \approx 9.5 \times 10^{-7}$). Early layer weights receive zero gradient updates, halting learning.

### 2.3 Mathematical Justification: Dying ReLU Problem
* **ReLU Formulation:** $f(z) = \max(0, z)$, and its derivative is:
  $$f'(z) = \begin{cases} 1 & \text{if } z > 0 \\ 0 & \text{if } z \le 0 \end{cases}$$
* **Why Neurons Die:** If a large negative gradient update pushes the neuron's bias and weights such that $z = \sum w_i x_i + b \le 0$ for all training samples, the activation is permanently $0$ and the local gradient $f'(z) = 0$.
* **Consequence:** The neuron enters an irreversible inactive state ("dies") and never fires or updates weights again. Up to 40% of neurons in a plain ReLU network can die during training.
* **The Solution (Leaky ReLU):**
  $$f(z) = \begin{cases} z & \text{if } z > 0 \\ \alpha z & \text{if } z \le 0 \quad (\alpha \approx 0.01) \end{cases}$$
  The small slope $\alpha$ ensures a non-zero gradient ($f'(z) = \alpha$) for negative inputs, keeping the neuron alive.

---

## 🏆 SECTION 3: Batch Normalization & Internal Covariate Shift
**Marks:** 7 to 8 Marks | **Frequency:** 3x in Univ Papers (100% Guaranteed)

### 3.1 What is Internal Covariate Shift?
During deep neural network training, as the parameters of earlier layers are updated by backpropagation, the distribution of inputs to subsequent downstream layers constantly shifts. This shifting distribution forces subsequent layers to continually re-adapt, requiring very low learning rates and slowing down training.

### 3.2 The 4-Step Mathematical Batch Normalization Algorithm (Ioffe & Szegedy, 2015)
Given a mini-batch $\mathcal{B} = \{x_1, x_2, \dots, x_m\}$ of size $m$:

1. **Mini-Batch Mean:**
   $$\mu_{\mathcal{B}} = \frac{1}{m} \sum_{i=1}^m x_i$$
2. **Mini-Batch Variance:**
   $$\sigma_{\mathcal{B}}^2 = \frac{1}{m} \sum_{i=1}^m (x_i - \mu_{\mathcal{B}})^2$$
3. **Normalize (Zero Mean, Unit Variance):**
   $$\hat{x}_i = \frac{x_i - \mu_{\mathcal{B}}}{\sqrt{\sigma_{\mathcal{B}}^2 + \epsilon}} \quad (\epsilon \approx 10^{-5} \text{ prevents division by zero})$$
4. **Scale and Shift (Learnable Parameters $\gamma$ and $\beta$):**
   $$y_i = \gamma \hat{x}_i + \beta$$
   * $\gamma$ (Scale parameter) restores the optimal variance.
   * $\beta$ (Shift parameter) restores the optimal mean.
   * If the network determines identity mapping is optimal, it sets $\gamma = \sqrt{\sigma^2 + \epsilon}$ and $\beta = \mu$.

### 3.3 Batch Normalization at Test Time (Inference)
During testing, single samples are evaluated. Mini-batch statistics cannot be calculated. Instead, **population running mean and variance** computed during training via Exponential Moving Average (EMA) are used:
$$\hat{\mu}_{\text{run}} \leftarrow (1 - \alpha) \hat{\mu}_{\text{run}} + \alpha \mu_{\mathcal{B}}, \quad \hat{\sigma}^2_{\text{run}} \leftarrow (1 - \alpha) \hat{\sigma}^2_{\text{run}} + \alpha \sigma^2_{\mathcal{B}}$$

---

## 🏆 SECTION 4: Overfitting and Generalization
**Marks:** 8 to 10 Marks | **Frequency:** 2x in Univ Papers

### 4.1 Overfitting vs. Underfitting Definitions
* **Underfitting (High Bias):** Model is too simple to capture the underlying pattern of data.
  * *Training Error:* High | *Testing Error:* High.
  * *Real-Time Example:* Trying to predict residential house prices using only a straight linear line based on number of rooms, ignoring location, age, and square footage.
* **Overfitting (High Variance):** Model is overly complex and memorizes noise/fluctuations in the training set instead of the underlying distribution.
  * *Training Error:* Extremely Low (Near 0) | *Testing Error:* Very High.
  * *Real-Time Example:* A medical diagnostic neural network that achieves 99.9% accuracy on hospital training data by memorizing watermark tags and scanner noise on X-ray images, failing completely when deployed on clean images at a different hospital.
* **Generalization Gap:** The difference between test error and training error:
  $$\text{Generalization Gap} = E_{\text{test}} - E_{\text{train}}$$

### 4.2 6 Practical Strategies to Mitigate Overfitting
1. **Data Augmentation:** Artificially expand dataset using random cropping, rotation, scaling, and color jitter.
2. **Dropout:** Randomly drop neurons with probability $p$ during training to prevent co-adaptation.
3. **L1 / L2 Regularization (Weight Decay):** Penalize large weights in the loss function to enforce simpler decision boundaries.
4. **Early Stopping:** Monitor validation loss during training and halt when validation loss starts increasing while training loss continues decreasing.
5. **Batch Normalization:** Adds slight stochastic mini-batch noise, acting as a regularizer.
6. **Network Pruning & Architecture Reduction:** Reduce layer depth/width or prune redundant near-zero weight connections.

---

## 🏆 SECTION 5: Dropout & Regularization Techniques
**Marks:** 7 to 9 Marks | **Frequency:** 3x in Univ Papers (100% Guaranteed)

### 5.1 Dropout Regularization (Srivastava et al., 2014)
* **Core Intuition:** At each training iteration, every hidden neuron is temporarily deactivated (set to zero) with probability $p$ (typically $p=0.5$).
* **Breaks Co-adaptation:** Neurons cannot rely on neighboring neurons to correct their mistakes; every unit learns robust, self-reliant features.
* **Ensemble Interpretation:** Training an $N$-neuron network with dropout is equivalent to sampling and training from an ensemble of $2^N$ shared-weight sub-networks.
* **Inverted Dropout Formulation (Modern Practice):**
  To avoid multiplying weights by $(1-p)$ during test time, the activations are scaled by $\frac{1}{1-p}$ during training:
  $$r \sim \text{Bernoulli}(1-p), \quad \tilde{a} = \frac{r \odot a}{1 - p}$$
  At test time, the network operates normally without dropout or scaling.

### 5.2 L1 (Lasso) vs. L2 (Ridge / Weight Decay) Regularization
$$\mathcal{L}_{\text{total}} = \mathcal{L}_0 + \lambda \cdot \Omega(W)$$
* **L1 Regularization (Lasso):** $\Omega(W) = \sum_{i} |w_i|$
  * Generates **sparse weights** by driving non-critical weights exactly to zero.
  * Acts as an embedded feature selection mechanism.
* **L2 Regularization (Ridge / Weight Decay):** $\Omega(W) = \frac{1}{2} \sum_{i} w_i^2$
  * Drives weights towards zero smoothly, preventing any single weight from dominating.
  * Weight update under gradient descent: $w \leftarrow w \cdot (1 - \eta \lambda) - \eta \frac{\partial \mathcal{L}_0}{\partial w}$. The factor $(1 - \eta \lambda)$ shrinks the weight at each step.

---

## 🏆 SECTION 6: Unsupervised Training of Neural Networks
**Marks:** 7 to 8 Marks | **Probability:** High Priority (70%)

### 6.1 Motivation for Unsupervised Pre-training
In the mid-2000s, training deep networks ($>3$ layers) with random weight initialization failed due to vanishing gradients and bad local optima.
* **Solution (Hinton, Bengio, Salakhutdinov):** **Greedy Layer-Wise Unsupervised Pre-training**.
* Use unlabeled data (which is abundant) to initialize layer weights near a favorable basin of attraction, followed by supervised fine-tuning.

### 6.2 The 2-Phase Training Workflow
1. **Phase 1: Unsupervised Feature Learning (Layer-by-Layer):**
   * Train Layer 1 as an Autoencoder or RBM on raw inputs $x$.
   * Freeze Layer 1 and pass its hidden representations $h_1$ as inputs to train Layer 2.
   * Repeat sequentially for all hidden layers $1 \dots L$.
2. **Phase 2: Supervised Fine-Tuning:**
   * Attach a supervised output layer (e.g., Softmax).
   * Unfreeze all layers and run standard backpropagation across the entire network with labeled data using a small learning rate.

---

## 🏆 SECTION 7 & 8: Restricted Boltzmann Machines & Autoencoders

### 7.1 Restricted Boltzmann Machines (RBM)
* **Architecture:** An undirected, energy-based bipartite probabilistic graphical model with two layers:
  * **Visible Units ($v \in \mathbb{R}^D$):** Observes raw data.
  * **Hidden Units ($h \in \mathbb{R}^F$):** Latent stochastic binary feature detectors.
* **The "Restricted" Property:** Strictly no connections exist between visible-visible or hidden-hidden neurons (bipartite graph). This ensures $P(h|v)$ and $P(v|h)$ factorize into independent conditional probabilities:
  $$P(h_j = 1 \mid v) = \sigma\left(b_j + \sum_i v_i W_{ij}\right), \quad P(v_i = 1 \mid h) = \sigma\left(a_i + \sum_j h_j W_{ij}\right)$$
* **Energy Function:**
  $$E(v, h) = -v^T W h - a^T v - b^T h = -\sum_i a_i v_i - \sum_j b_j h_j - \sum_i \sum_j v_i W_{ij} h_j$$
* **Training Algorithm:** **Contrastive Divergence (CD-$k$)** by Geoffrey Hinton:
  1. Positive Phase: Sample $h^{(0)} \sim P(h|v^{(0)})$.
  2. Negative Phase: Reconstruct data by Gibbs sampling $v^{(1)} \sim P(v|h^{(0)})$, then re-sample $h^{(1)} \sim P(h|v^{(1)})$.
  3. Weight Update: $\Delta W = \eta \left( \langle v^{(0)} h^{(0)T} \rangle_{\text{data}} - \langle v^{(1)} h^{(1)T} \rangle_{\text{model}} \right)$.

### 8.1 Autoencoders (AE)
* **Architecture:** Deterministic neural network trained to copy its input to its output:
  $$\text{Input } x \xrightarrow{\text{Encoder } f(x)} \text{Latent Code } z \xrightarrow{\text{Decoder } g(z)} \text{Reconstruction } \hat{x}$$
  * Encoder: $z = \sigma(W_e x + b_e)$
  * Decoder: $\hat{x} = \sigma(W_d z + b_d)$
  * Loss Function: $\mathcal{L}(x, \hat{x}) = \|x - \hat{x}\|^2$ (MSE) or $-\sum x_i \log \hat{x}_i$ (BCE).
* **Key Variations:**
  1. **Undercomplete Autoencoder:** Dimension of $z$ is less than input ($d < D$), forcing dimensionality reduction similar to non-linear PCA.
  2. **Denoising Autoencoder (DAE):** Input is intentionally corrupted $\tilde{x} = x + \epsilon$. The network must remove noise to recover original $x$.
  3. **Sparse Autoencoder:** Adds a penalty $\Omega(h) = \sum \text{KL}(\rho \| \hat{\rho}_j)$ to enforce that only a tiny fraction of hidden units fire.
  4. **Variational Autoencoder (VAE):** Encodes inputs into probabilistic distributions (mean $\mu$ and variance $\sigma^2$) allowing random sampling for generative modeling.

---

## 🏆 SECTION 9: 10-Point Comparison Table: Autoencoders vs. RBM
**Marks:** 8 Marks | **Frequency:** 2x in Univ Papers (Nov 2023, Prelims)

| Comparison Parameter | Autoencoder (AE) | Restricted Boltzmann Machine (RBM) |
| :--- | :--- | :--- |
| **1. Model Family** | **Deterministic Feedforward Network** | **Probabilistic Energy-Based Model** |
| **2. Graph Structure** | Directed multi-layer computational graph | **Undirected Bipartite Graph** (Visible & Hidden) |
| **3. Within-Layer Links** | No within-layer connections | Strictly no visible-visible or hidden-hidden links |
| **4. Nature of Latent Code** | Continuous real-valued deterministic vectors | Stochastic binary (or Gaussian) random variables |
| **5. Learning Objective** | Minimizes Reconstruction Error ($\|x - \hat{x}\|^2$) | Maximizes Log-Likelihood of data via Energy $E(v,h)$ |
| **6. Optimization Method** | Gradient Descent via Backpropagation | **Contrastive Divergence (CD-$k$)** Gibbs Sampling |
| **7. Weight Matrix** | Often separate $W_e$ and $W_d$ (or tied $W_d = W_e^T$) | Single symmetric weight matrix $W$ |
| **8. Generative Capability** | Standard AE is not generative (VAE is generative) | Inherently generative via Markov Chain Monte Carlo (MCMC) |
| **9. Deep Stacking** | Stacked Autoencoders (SAE) | **Deep Belief Networks (DBN)** / Deep Boltzmann Machines |
| **10. Inference Speed** | Very Fast: Single deterministic forward pass | Slower: Requires stochastic sampling steps |

---

## 🏆 SECTION 10: Deep Learning Applications (CO3 Mapping)
**Marks:** 6 Marks | **Probability:** Medium (65%)

1. **Computer Vision:**
   * Autonomous driving perception (Tesla / Waymo obstacle detection).
   * Medical imaging (Tumor segmentation in MRI/CT scans, diabetic retinopathy).
2. **Natural Language Processing (NLP):**
   * Machine translation (Google Translate, Seq2Seq, Transformers).
   * Conversational agents and large language models (ChatGPT, Gemini).
3. **Audio & Speech Processing:**
   * Speech-to-text (Whisper, Siri, Google Assistant).
   * Raw audio waveform generation (Google DeepMind WaveNet).
4. **Healthcare & Bioinformatics:**
   * Protein structure 3D prediction (DeepMind AlphaFold).
   * Accelerated molecular drug discovery and genomics analysis.
