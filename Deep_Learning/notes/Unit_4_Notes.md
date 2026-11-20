# 👁️ Unit 4: Computer Vision & Convolutional Neural Networks
### Deep Learning (Elective IV - 404185C) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 3 OR Question 4 (18 Marks Weightage) | Master Exam Notes**
*Course Outcome CO4: Demonstrate different architectures of Convolutional neural networks.*

---

## 📌 Unit 4 Complete Syllabus Mapping & Exam Blueprint
*Audited from SPPU Official Syllabus & University Examination Papers (2022 to 2026)*

| Syllabus Topic | Exam Status & Frequency | Probability Tier | Expected Marks | Key Focus in SPPU Exam |
| :--- | :---: | :---: | :---: | :--- |
| **1. Architectural Overview & Motivation** | **2x in Univ Papers** | `⚡ Very High (80%)` | **7 to 8 M** | Why CNN over MLP? Parameter explosion, spatial locality, translation invariance, Human visual cortex analogy. |
| **2. Layers, Filters & Parameter Sharing** | **Univ Question Bank** | `⚡ Very High (80%)` | **6 to 8 M** | 2D Convolution math, Kernel/Filter, Receptive Field, Weight Sharing, Spatial Output Dimension Formula. |
| **3. Pooling and its Variations** | **Univ Question Bank** | `📌 High Priority (75%)` | **6 to 7 M** | Max Pooling, Average Pooling, Global Average Pooling (GAP), L2 Pooling, Spatial Pyramid Pooling (SPP). |
| **4. VGGNet vs. AlexNet (Architecture & Math)** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **10 to 11 M** | Stacked $3\times 3$ filter factorization proof ($49C^2 \to 27C^2$), Why Speed & Accuracy of VGG > AlexNet. |
| **5. DenseNet Architecture & Dense Blocks** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **10 M** | Dense Connectivity, Growth Rate $k$, Concatenation $x_l = H_l([x_0, \dots, x_{l-1}])$, Transition Layer, Pros/Cons. |
| **6. ResNet (Deep Residual Learning)** | **Univ Question Bank** | `🔥 High Priority (85%)` | **8 to 10 M** | Degradation problem, Residual Block $F(x) + x$, Skip/Shortcut connection, Vanishing gradient resolution. |
| **7. PlacesNet Architecture vs ImageNet** | **Univ Question Bank** | `⚡ High Priority (75%)` | **7 to 8 M** | Scene recognition vs object recognition, Places database (2.5M images, 205 scene categories), Top-layer features. |
| **8. LeNet-5 Architecture** | **Univ Question Bank** | `📌 High Priority (70%)` | **6 to 8 M** | Yann LeCun (1998), MNIST digit recognition, 7 layers: Conv-Pool-Conv-Pool-FC-FC-Output. |
| **9. Training CNNs (Weights Init & Batch Norm)** | **2x in Univ Papers** | `⚡ Very High (80%)` | **7 to 8 M** | Xavier/Glorot vs He/Kaiming initialization formulas, Spatial Batch Normalization, Hyperparameter tuning. |
| **10. Popular CNN Architectures: Applications** | **Univ Question Bank** | `Medium (65%)` | **6 M** | Medical imaging, Autonomous vehicles, Facial recognition, Industrial defect inspection. |

---

## 🏆 SECTION 1: Architectural Overview & Motivation: Why CNNs over MLPs?
**Marks:** 7 to 8 Marks | **Probability:** Very High (80%)

### 1.1 The Failure of Fully Connected Multi-Layer Perceptrons (MLPs) on Images
1. **Catastrophic Parameter Explosion:**
   * Consider a modest color image of size $1000 \times 1000 \times 3 = 3,000,000$ input pixels.
   * If connected to a standard hidden layer with only $1,000$ neurons, the number of weights in this single layer equals:
     $$\text{Weights} = 3,000,000 \times 1,000 = 3 \times 10^9 \quad (3 \text{ Billion Parameters!})$$
   * Storing and computing 3 billion weights per layer requires gigabytes of RAM, causes immediate memory exhaustion, and leads to extreme overfitting.
2. **Destruction of 2D Spatial Locality:**
   * MLPs flatten a 2D image matrix into a 1D vector ($[1000 \times 1000] \to [1,000,000 \times 1]$).
   * Pixels that are vertically adjacent in physical 2D space are separated by thousands of indices in the 1D vector, destroying local correlation and spatial structure.
3. **Lack of Translation Invariance:**
   * If an object (e.g., a cat) moves 3 pixels to the right, a flattened MLP treats it as a completely new set of activated inputs and fails to recognize it unless explicitly trained on every pixel shift.

### 1.2 How CNNs Overcome MLP Limitations (3 Foundational Principles)
1. **Sparse Connectivity (Local Receptive Fields):** Each neuron connects only to a small localized region of input pixels ($3\times 3$ or $5\times 5$), mimicking biological vision.
2. **Parameter Sharing (Weight Sharing):** The same filter/kernel is slid across the entire image. A $3\times 3$ filter has only $9$ learnable parameters regardless of whether the image is $100\times 100$ or $4000\times 4000$.
3. **Translation Equivariance:** If an input pattern shifts, its feature representation in the output feature map shifts by the exact same amount:
   $$f(g(x)) = g(f(x))$$

### 1.3 CNN Analogy with the Human Visual Cortex (Hubel & Wiesel, 1959)
David Hubel and Torsten Wiesel discovered that the mammalian primary visual cortex processes visual scenes through a hierarchical cascade of specialized cells:
* **Simple Cells (V1 Layer):** Respond to basic oriented edges, bars, and color contrasts in localized receptive fields.
  * *CNN Equivalent:* First Convolutional Layer ($conv1$) learning Gabor-like edge detectors and color transitions.
* **Complex Cells (V2 Layer):** Exhibit spatial invariance; fire when an oriented edge appears anywhere within their receptive field.
  * *CNN Equivalent:* Max/Average Pooling Layers providing localized spatial shift invariance.
* **Hypercomplex / Associated Areas (V4 & Inferotemporal Cortex IT):** Respond to complex geometric shapes, object parts (eyes, wheels), and full semantic objects (faces, tools).
  * *CNN Equivalent:* Deep Convolutional layers and Fully Connected classification layers.

---

## 🏆 SECTION 2 & 3: Convolution Operation, Filters & Pooling Variations

### 2.1 2D Discrete Convolution Operation
Given an input feature map $I$ of shape $(H, W)$ and a learnable kernel/filter $K$ of shape $(k_h, k_w)$:
$$S(i, j) = (I * K)(i, j) = \sum_{m} \sum_{n} I(i - m, j - n) \cdot K(m, n)$$
*(In deep learning frameworks, cross-correlation with non-flipped kernels is computed).*

### 2.2 Spatial Output Dimension Formula (Vital for SPPU Numericals)
For an input of spatial dimension $W$, filter size $K$, zero-padding $P$, and stride $S$:
$$O = \left\lfloor \frac{W - K + 2P}{S} \right\rfloor + 1$$
* **Example:** Input $W = 224$, Kernel $K = 7$, Padding $P = 3$, Stride $S = 2$:
  $$O = \left\lfloor \frac{224 - 7 + 2(3)}{2} \right\rfloor + 1 = \left\lfloor \frac{223}{2} \right\rfloor + 1 = 111 + 1 = 112$$

### 3.1 Pooling and its Variations
Pooling performs non-linear downsampling to progressively reduce spatial dimensions, parameter count, and computational load while providing translation invariance.

| Pooling Technique | Operation & Mathematical Definition | Distinct Advantages & Exam Significance |
| :--- | :--- | :--- |
| **1. Max Pooling** | $y = \max_{p, q \in \mathcal{R}} x_{p,q}$ | Selects strongest edge/feature activation; discards noisy background; standard downsampling. |
| **2. Average Pooling** | $y = \frac{1}{|\mathcal{R}|} \sum_{p, q \in \mathcal{R}} x_{p,q}$ | Computes mean activation; provides smooth downsampling; used in early LeNet-5. |
| **3. Global Average Pooling (GAP)** | $y_c = \frac{1}{H \times W} \sum_{i=1}^H \sum_{j=1}^W x_{i,j,c}$ | Averages entire feature map to 1 scalar per channel; replaces parameter-heavy Fully Connected layers in ResNet/DenseNet; prevents overfitting. |
| **4. L2 Pooling** | $y = \sqrt{\sum_{p, q \in \mathcal{R}} x_{p,q}^2}$ | Computes energy norm; penalizes extreme outliers smoothly. |
| **5. Spatial Pyramid Pooling (SPP)** | Multi-scale pooling ($4\times 4, 2\times 2, 1\times 1$ bins) | Generates fixed-length representation from arbitrary input image resolutions without cropping or warping. |

---

## 🏆 SECTION 4: VGGNet vs. AlexNet (Architecture, Speed & Accuracy)
**Marks:** 10 to 11 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

### 4.1 Structural Architectural Comparison
* **AlexNet (Krizhevsky et al., 2012):**
  * 8 Learnable Layers (5 Convolutional + 3 Fully Connected).
  * Uses large filters: $11\times 11$ (stride 4) in Conv1, $5\times 5$ in Conv2, followed by $3\times 3$ in Conv3, 4, 5.
  * Parameters: ~60 Million.
* **VGGNet (Simonyan & Zisserman, 2014 - VGG-16 & VGG-19):**
  * 16 to 19 Layers (13 Conv + 3 FC in VGG-16).
  * **Strictly homogeneous architecture:** Every single convolutional layer uses small $3\times 3$ filters with stride 1 and padding 1, followed by $2\times 2$ max pooling (stride 2).
  * Parameters: ~138 Million.

### 4.2 Mathematical Proof: Why Stacked $3\times 3$ Filters Beat Large $5\times 5$ and $7\times 7$ Filters
Consider two stacked $3\times 3$ convolutional layers vs. one single $5\times 5$ convolutional layer:
1. **Effective Receptive Field Equivalence:**
   * Layer 1 ($3\times 3$) covers a $3\times 3$ receptive field.
   * Layer 2 ($3\times 3$) on top covers $(3-1) + 3 = 5\times 5$ receptive field of the original input.
2. **Parameter Count Comparison:**
   * For $C$ input and output channels:
     * One $5\times 5$ layer requires: $5 \times 5 \times C \times C = 25 C^2$ weights.
     * Two stacked $3\times 3$ layers require: $2 \times (3 \times 3 \times C \times C) = 18 C^2$ weights.
     * **Parameter Reduction:** $\frac{25 - 18}{25} = 28\%$ fewer parameters!
3. **Three Stacked $3\times 3$ Layers vs. One $7\times 7$ Layer:**
   * Effective Receptive field = $7\times 7$.
   * Single $7\times 7$ layer: $7 \times 7 \times C^2 = 49 C^2$ weights.
   * Three $3\times 3$ layers: $3 \times (3 \times 3 \times C^2) = 27 C^2$ weights.
   * **Parameter Reduction:** $\frac{49 - 27}{49} = \mathbf{44.9\%}$ parameter savings!

### 4.3 Why Speed and Accuracy of VGG is Superior to AlexNet
1. **Greater Discriminative Non-Linearity (Higher Accuracy):** By replacing one large convolution with three stacked $3\times 3$ convolutions, VGG incorporates **three non-linear ReLU activation functions** instead of one, allowing the network to learn far more intricate decision boundaries.
2. **Much Deeper Representations (Top-5 Error 7.3% vs 15.3%):** VGG’s 16 layers capture fine multi-scale feature hierarchies that AlexNet’s 8 layers cannot resolve.
3. **Hardware & Execution Speed:** While VGG has more total FLOPs, its regular $3\times 3$ convolution structure maps with extreme efficiency to GPU cuDNN Winograd fast convolution algorithms, achieving regular, cache-friendly memory access during inference.

---

## 🏆 SECTION 5: DenseNet Architecture & Dense Blocks (CVPR 2017)
**Marks:** 10 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

### 5.1 The Dense Connectivity Principle
In a standard CNN with $L$ layers, there are $L$ direct sequential connections.
In **DenseNet (Huang et al., 2017)**, each layer connects to **every other downstream layer** in a feedforward fashion:
$$\text{Total Direct Connections} = \frac{L(L + 1)}{2}$$

### 5.2 Mathematical Concatenation Formula
Instead of summing feature maps like ResNet ($x_l = H_l(x_{l-1}) + x_{l-1}$), DenseNet **concatenates** all preceding feature maps:
$$x_l = H_l\left( [x_0, x_1, x_2, \dots, x_{l-1}] \right)$$
where $[x_0, x_1, \dots, x_{l-1}]$ represents channel-wise concatenation, and $H_l(\cdot)$ is the Composite Function: **BN $\to$ ReLU $\to$ Conv($3\times 3$)**.

### 5.3 Dense Blocks, Growth Rate ($k$), and Transition Layers
1. **Growth Rate ($k$):** If each function $H_l$ produces $k$ feature maps, the $l^{\text{th}}$ layer has $k_0 + k \times (l - 1)$ input feature channels. Typical values are small ($k = 12$ or $k = 32$), preventing feature explosion.
2. **Transition Layers:** Since concatenation requires identical spatial dimensions ($H \times W$), the network is divided into multiple **Dense Blocks**. Between two consecutive Dense Blocks, a **Transition Layer** performs downsampling:
   * Architecture: **Batch Normalization $\to 1\times 1$ Conv (with compression factor $\theta = 0.5$) $\to 2\times 2$ Average Pooling**.

### 5.4 Advantages and Disadvantages of DenseNet
* **Advantages:**
  1. *Vanishing Gradient Resolution:* Gradients flow directly back to every layer through short direct paths.
  2. *Substantial Parameter Efficiency:* Reuses features repeatedly; does not need redundant layers to re-learn features.
  3. *Deep Supervision:* Early layers receive direct supervision feedback from final loss gradients.
* **Disadvantages:**
  1. *High GPU Memory Footprint:* Storing concatenated feature maps in cache requires substantial memory during backpropagation.

---

## 🏆 SECTION 6: ResNet (Deep Residual Learning) Architecture
**Marks:** 8 to 10 Marks | **Probability:** High Priority (85%)

### 6.1 The Degradation Problem
When training very deep plain networks (e.g., 56 layers vs. 20 layers), researchers observed that **training error** (not just testing error) becomes worse for deeper networks. This is not caused by overfitting, but by severe optimization breakdown and gradient dissipation.

### 6.2 The Residual Block & Skip Connection (Kaiming He et al., 2015)
* Instead of forcing stacked layers to fit an underlying mapping $\mathcal{H}(x)$, ResNet forces them to fit a **residual mapping**:
  $$\mathcal{F}(x) = \mathcal{H}(x) - x \implies \mathcal{H}(x) = \mathcal{F}(x) + x$$
* The operation $\mathcal{F}(x) + x$ is performed via a **shortcut / skip connection (Identity Mapping)**:
  $$y = \mathcal{F}(x, \{W_i\}) + x$$

### 6.3 Mathematical Proof of Why ResNet Solves Vanishing Gradients
By recursively unrolling residual blocks from layer $l$ to deeper layer $L$:
$$x_L = x_l + \sum_{i=l}^{L-1} \mathcal{F}(x_i, \mathcal{W}_i)$$
Differentiating with respect to activation $x_l$ using the chain rule:
$$\frac{\partial \mathcal{E}}{\partial x_l} = \frac{\partial \mathcal{E}}{\partial x_L} \frac{\partial x_L}{\partial x_l} = \frac{\partial \mathcal{E}}{\partial x_L} \left( \mathbf{1} + \frac{\partial}{\partial x_l} \sum_{i=l}^{L-1} \mathcal{F}(x_i, \mathcal{W}_i) \right)$$
* **The Critical Insight:** Notice the additive term **$\mathbf{1}$**! Even if the gradient of the residual path $\frac{\partial}{\partial x_l} \sum \mathcal{F}_i$ vanishes towards zero, the term $\mathbf{1}$ ensures that the gradient $\frac{\partial \mathcal{E}}{\partial x_L}$ flows directly back to earlier layer $x_l$ **completely unhindered**.

---

## 🏆 SECTION 7 & 8: PlacesNet & LeNet-5 Architectures

### 7.1 PlacesNet Architecture (Zhou et al., MIT, 2014)
* **Objective:** Specifically designed for **Scene Recognition and Visual Places Categorization** (e.g., living room, auditorium, mountain, highway) rather than isolated object recognition.
* **The Places Database:** Trained on 2.5 Million images across 205 scene categories.
* **Key Architecture & Findings:**
  * Uses AlexNet/VGG backbone, but trained on scenes.
  * **Spontaneous Emergence of Object Detectors:** Researchers discovered that top convolutional layers in PlacesNet spontaneously learn to detect objects (e.g., beds, sofas, lamps) without ever being given object bounding box annotations, because objects are the natural building blocks of scenes.
* **Comparison: ImageNet CNN vs. PlacesNet CNN:**
  * *ImageNet CNN:* Emphasizes object foreground geometry, isolated shapes, and central salient contours.
  * *PlacesNet CNN:* Emphasizes spatial layout, global textures, horizontal surfaces, and contextual spatial arrangements.

### 8.1 LeNet-5 Architecture (Yann LeCun, 1998)
* **Application:** Optical Character Recognition (OCR) and handwritten digit classification (MNIST database).
* **7-Layer Sequential Breakdown:**
  1. *Input:* $32 \times 32$ grayscale digit image.
  2. *Layer C1:* Convolution (6 filters of $5\times 5$, stride 1) $\to$ Output: $6 \times 28 \times 28$.
  3. *Layer S2:* Subsampling / Average Pooling ($2\times 2$, stride 2) $\to$ Output: $6 \times 14 \times 14$.
  4. *Layer C3:* Convolution (16 non-symmetrical filters of $5\times 5$) $\to$ Output: $16 \times 10 \times 10$.
  5. *Layer S4:* Average Pooling ($2\times 2$, stride 2) $\to$ Output: $16 \times 5 \times 5$.
  6. *Layer C5:* Convolutional layer acting as Fully Connected (120 filters of $5\times 5$) $\to$ Output: 120.
  7. *Layer F6:* Fully Connected layer (84 neurons).
  8. *Output Layer:* 10 Euclidean Radial Basis Function (RBF) units corresponding to digits $0 \dots 9$.

---

## 🏆 SECTION 9: Training CNNs: Weights Initialization, Batch Norm & Hyperparameter Tuning
**Marks:** 7 to 8 Marks | **Frequency:** 2x in Univ Papers

### 9.1 Weight Initialization Techniques
1. **Zero Initialization Failure:** Initializing all weights to $0$ causes all neurons in a layer to compute identical outputs and identical gradients ($\frac{\partial L}{\partial w_1} = \frac{\partial L}{\partial w_2}$), resulting in symmetric updates and complete failure to learn distinct features.
2. **Xavier / Glorot Initialization (for Tanh / Sigmoid):**
   Maintains constant activation variance across forward pass and gradient variance across backpropagation:
   $$W \sim \mathcal{N}\left(0, \frac{2}{n_{\text{in}} + n_{\text{out}}}\right) \quad \text{or} \quad \mathcal{U}\left(-\sqrt{\frac{6}{n_{\text{in}} + n_{\text{out}}}}, +\sqrt{\frac{6}{n_{\text{in}} + n_{\text{out}}}}\right)$$
3. **He / Kaiming Initialization (for ReLU / Leaky ReLU):**
   Accounts for the fact that ReLU zeroes out half the activations ($z \le 0$):
   $$W \sim \mathcal{N}\left(0, \frac{2}{n_{\text{in}}}\right)$$

### 9.2 Spatial Batch Normalization in CNNs
For 2D images with batch size $N$, channels $C$, height $H$, and width $W$:
Normalization is applied across mini-batch examples $N$ and spatial locations $H \times W$ jointly. For each channel $c \in \{1 \dots C\}$, the algorithm calculates **one single mean $\mu_c$ and variance $\sigma_c^2$** across $m = N \times H \times W$ pixels.

### 9.3 Hyperparameter Tuning in CNNs
* **Learning Rate ($\eta$):** Most critical hyperparameter; tuned using Learning Rate Range Tests (LR Finder) and Cosine Annealing schedules.
* **Optimizers:** Adam ($\beta_1=0.9, \beta_2=0.999$) for fast exploratory convergence, followed by SGD with Momentum ($0.9$) for final generalized accuracy.
* **Batch Size:** Powers of 2 ($32, 64, 128$) to maximize GPU tensor core utilization.

---

## 🏆 SECTION 10: Popular CNN Applications
* **Medical Imaging:** Automated tumor segmentation in Brain MRI, diabetic retinopathy grading from retinal fundus images using ResNet-50.
* **Autonomous Driving:** Real-time pedestrian and vehicle detection, lane boundary regression (YOLO/ResNet).
* **Biometric Security:** High-precision facial recognition and liveness detection.
