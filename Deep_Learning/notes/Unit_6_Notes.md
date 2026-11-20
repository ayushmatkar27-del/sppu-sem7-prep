# 🔬 Unit 6: Deep Learning Case Studies & Applications
### Deep Learning (Elective IV - 404185C) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 7 OR Question 8 (18 Marks Weightage) | Master Exam Notes**
*Course Outcome CO6: Make use of various case studies and deep learning applications.*

---

## 📌 Unit 6 Complete Syllabus Mapping & Exam Blueprint
*Audited from SPPU Official Syllabus & University Examination Papers (2022 to 2026)*

| Syllabus Topic | Exam Status & Frequency | Probability Tier | Expected Marks | Key Focus in SPPU Exam |
| :--- | :---: | :---: | :---: | :--- |
| **1. Classical vs. Deep Learning Computer Vision** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **6 M** | 8-point comprehensive distinction table: manual SIFT/HOG vs automated hierarchical features. |
| **2. Image Classification & Transfer Learning** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **6 to 8 M** | End-to-end classification pipeline, Pre-trained CNN weights, Freezing layers vs Fine-tuning. |
| **3. ImageNet - Object Detection (R-CNN vs YOLO)** | **Univ Question Bank** | `⚡ Very High (80%)` | **8 to 10 M** | Classification vs Localization vs Detection, IoU metric, Two-Stage (Faster R-CNN) vs Single-Stage (YOLO). |
| **4. Deep Learning for Audio: WaveNet Architecture** | **1x in Univ Papers** | `⚡ High Priority (75%)` | **8 to 9 M** | Autoregressive raw waveform generation, Dilated Causal Convolutions ($2^L$ growth), Gated Activation Units. |
| **5. Sentiment Analysis Case Study** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **6 to 8 M** | End-to-end Twitter/X sentiment pipeline, Word Embeddings, BiLSTM / BERT classifier, Polarity scoring. |
| **6. Text Preprocessing Pipeline & Spam Mail Classifier** | **2x in Univ Papers** | `🔥 100% Guaranteed` | **7 to 8 M** | Tokenization, Lowercasing, Noise removal, Lemmatization, Stopwords, TF-IDF vectorizer, Spam classification. |
| **7. ChatBot Architecture & Case Study** | **Univ Question Bank** | `⚡ High Priority (75%)` | **7 to 8 M** | Rule-Based vs Retrieval vs Generative ChatBots, Pipeline: Intent Recognition, Entity Extraction, DST, NLG. |

---

## 🏆 SECTION 1: Classical vs. Deep Learning Computer Vision
**Marks:** 6 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

| Comparison Dimension | Classical Computer Vision (Traditional) | Deep Learning Computer Vision (Modern) |
| :--- | :--- | :--- |
| **1. Feature Extraction** | **Manual Hand-Crafted Feature Engineering** (SIFT, SURF, HOG, Haar Cascades, Sobel). | **Automated Feature Representation Learning** learned directly from raw pixel data via CNN backbones. |
| **2. Pipeline Structure** | Separated multi-stage pipeline: Preprocessing $\to$ Feature Extraction $\to$ Standalone Classifier (SVM / Random Forest). | **End-to-End Joint Learning**: Features and classification parameters are trained together via Backpropagation. |
| **3. Data Dependency** | Performs moderately well on small datasets; plateaus rapidly as data volume increases. | Requires large labeled datasets (e.g., ImageNet with 1.4M images) to prevent overfitting and achieve superhuman accuracy. |
| **4. Computational Demands** | Low computational footprint; runs easily on standard CPUs in real-time. | Extremely compute-heavy; requires specialized GPUs/TPUs with tensor cores for training and inference. |
| **5. Domain Specificity** | Handcrafted features are brittle; an algorithm designed for car detection fails completely on pedestrian detection. | Highly adaptable; features learned on ImageNet transfer seamlessly across medical scans, aerial imagery, and botany. |
| **6. Robustness to Variations** | Sensitive to complex real-world illumination shifts, scale, background clutter, and camera angles. | Exceptional robustness and spatial invariance due to convolutional weight sharing and pooling operations. |
| **7. Feature Hierarchy** | Shallow, flat representations (only edges, gradients, or corner points). | **Deep Hierarchical Abstraction**: Edges (Conv1) $\to$ Textures (Conv2) $\to$ Parts (Conv3) $\to$ Semantic Objects (Conv4/5). |
| **8. Performance Ceiling** | Performance saturates quickly regardless of additional data. | Continues scaling monotonically with increased model capacity and training data volume. |

---

## 🏆 SECTION 2: Image Classification & Transfer Learning
**Marks:** 6 to 8 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

### 2.1 The Image Classification Pipeline
$$\text{Raw Image } (224 \times 224 \times 3) \xrightarrow{\text{Augment / Norm}} \text{CNN Backbone} \xrightarrow{\text{Global Avg Pool}} \text{Dense Feature Vector} \xrightarrow{\text{Softmax Layer}} \hat{y} \in [0, 1]^K$$
1. **Loss Function:** Categorical Cross-Entropy across $K$ target classes:
   $$\mathcal{L} = -\sum_{k=1}^K y_k \log \hat{y}_k$$
2. **Evaluation Metrics:**
   * **Top-1 Accuracy:** The highest-probability predicted class matches the ground-truth label.
   * **Top-5 Accuracy:** The correct ground-truth label is among the model's top 5 highest probability predictions.

### 2.2 Transfer Learning Workflow (Fine-Tuning Pre-Trained Backbones)
Training a 50-layer CNN from scratch requires weeks on GPU clusters and millions of images. **Transfer Learning** leverages pre-trained network weights (e.g., ResNet-50 trained on 1.4M ImageNet images):
* **Step 1 (Base Model Selection):** Load pre-trained ResNet-50 or VGG-16 without the top 1000-class classification head.
* **Step 2 (Freezing Backbone Layers):** Freeze earlier convolutional layers ($\text{trainable} = \text{False}$) to preserve universal low-level visual features (edges, curves, textures).
* **Step 3 (Custom Classifier Head):** Attach a new Global Average Pooling layer, a Dropout layer (0.5), and a Dense Softmax layer matching the target problem (e.g., 2 classes for COVID vs. Normal chest X-rays).
* **Step 4 (Phase 1 Training):** Train only the top classifier head using a moderate learning rate ($\eta = 10^{-3}$) for 5–10 epochs.
* **Step 5 (Phase 2 Fine-Tuning):** Unfreeze the final convolutional block of the backbone and train the entire network end-to-end with an extremely small learning rate ($\eta = 10^{-5}$) to subtly adapt representations to the target domain without destroying pre-trained weights.

---

## 🏆 SECTION 3: ImageNet - Object Detection (R-CNN vs. YOLO)
**Marks:** 8 to 10 Marks | **Probability:** Very High (80%)

### 3.1 Classification vs. Localization vs. Detection
* **Image Classification:** "What is in the image?" Assigns a single class label to the entire image.
* **Object Localization:** "What is it and where is it?" Predicts 1 class label + 1 bounding box coordinates $[x, y, w, h]$ for a single predominant object.
* **Object Detection:** "What objects are present, where are they, and how many?" Detects multiple objects of various classes simultaneously, outputting class labels and bounding boxes for every instance.

### 3.2 Key Evaluation Metrics: IoU and mAP
1. **Intersection over Union (IoU):** Measures spatial overlap between the predicted bounding box $B_p$ and ground-truth box $B_{gt}$:
   $$\text{IoU} = \frac{\text{Area}(B_p \cap B_{gt})}{\text{Area}(B_p \cup B_{gt})}$$
   A prediction is considered a True Positive if $\text{IoU} \ge 0.50$.
2. **Mean Average Precision (mAP):** The mean of Average Precision (area under precision-recall curve) calculated across all object classes.

### 3.3 Two-Stage vs. Single-Stage Detectors
| Feature / Parameter | Two-Stage Detectors (e.g., Faster R-CNN) | Single-Stage Detectors (e.g., YOLO, SSD) |
| :--- | :--- | :--- |
| **Architectural Philosophy** | Stage 1 proposes candidate regions; Stage 2 classifies and refines boxes. | Treats detection as a **single end-to-end regression problem** directly from pixels to boxes. |
| **Region Proposal** | Uses a dedicated **Region Proposal Network (RPN)** generating ~300 candidate anchors. | Divides image into an $S \times S$ grid; each grid cell predicts bounding boxes directly. |
| **Inference Speed** | Slower (5 to 15 FPS); generally unsuitable for high-speed edge devices. | **Real-Time (45 to 140+ FPS)**; ideal for autonomous vehicles and drone surveillance. |
| **Localization Precision** | Slightly higher precision on tiny objects and dense crowds. | Exceptional speed with competitive mAP; early versions struggled on small grouped objects. |

---

## 🏆 SECTION 4: Deep Learning for Audio: WaveNet Architecture
**Marks:** 8 to 9 Marks | **Frequency:** 1x in Univ Papers (Nov 2023)

### 4.1 Why Audio Deep Learning is Difficult
* Traditional speech models convert 1D audio into 2D spectrograms (STFT), losing phase information.
* Standard CD-quality raw audio contains **16,000 to 44,100 samples per second**. An utterance of 2 seconds requires modeling 32,000 sequential data points. Standard RNNs fail completely across thousands of time steps due to vanishing gradients.

### 4.2 The WaveNet Model (Google DeepMind, 2016)
Developed by Aäron van den Oord et al., **WaveNet** models raw audio waveforms directly.
1. **Autoregressive Probabilistic Formulation:**
   The joint probability of a waveform $\mathbf{x} = \{x_1, x_2, \dots, x_T\}$ is factorized as a product of conditional probabilities:
   $$P(\mathbf{x}) = \prod_{t=1}^T P(x_t \mid x_1, x_2, \dots, x_{t-1})$$
   Each audio sample $x_t$ is conditioned on all previous audio samples.
2. **Dilated Causal Convolutions:**
   * **Causal:** The filter at time step $t$ accesses only inputs from time $t$ and earlier ($t, t-1, t-2, \dots$). No information leaks from the future.
   * **Dilated:** The filter skips input values with dilation factor $d \in \{1, 2, 4, 8, 16, \dots, 512\}$.
   * **Exponential Receptive Field Growth:** While standard convolutions grow linearly ($\mathcal{O}(L)$), doubling the dilation factor at each layer causes the receptive field to grow **exponentially**:
     $$\text{Receptive Field} = 2^L$$
     A 10-layer dilated convolutional stack covers a receptive field of $2^{10} = 1024$ audio samples with minimal parameter count.
3. **Gated Activation Units:**
   Mimicking LSTM gating, WaveNet replaces standard ReLU activations with a gated tanh/sigmoid pair:
   $$\mathbf{z} = \tanh(W_{f, k} * \mathbf{x}) \odot \sigma(W_{g, k} * \mathbf{x})$$
   where $*$ is the dilated convolution, $W_{f}$ is the filter weight, and $W_{g}$ is the gate weight.

---

## 🏆 SECTION 5: Sentiment Analysis Case Study
**Marks:** 6 to 8 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

### 5.1 End-to-End Deep Learning Sentiment Analysis Pipeline
```
[Raw User Tweets / Product Reviews]
               │
               ▼
   [Text Cleaning & Normalization]
   (Strip URLs, Mentions, Emojis, Punctuation)
               │
               ▼
[Tokenization & Lemmatization]
               │
               ▼
    [Word Embedding Layer]
    (Pretrained GloVe 300-d or Trainable Embedding)
               │
               ▼
  [Bidirectional LSTM / BERT Layer]
  (Captures contextual nuance, sarcasm, and negation)
               │
               ▼
   [Dense Layer + Dropout (0.5)]
               │
               ▼
    [Softmax / Sigmoid Output]
    • Positive (+1)  • Neutral (0)  • Negative (-1)
```

### 5.2 Critical Engineering Considerations in Sentiment Analysis
1. **Negation Handling:** A phrase like *"not great"* must be treated as negative. Unigram Bag-of-Words fails because "not" and "great" are parsed independently. BiLSTM and Transformers maintain sequence context, preserving the modifier relationship.
2. **Class Imbalance:** In real-world customer reviews, positive reviews frequently outnumber negative reviews 5:1. Mitigated using **Focal Loss** or weighted cross-entropy.

---

## 🏆 SECTION 6: Text Preprocessing Pipeline & Spam Mail Classifier
**Marks:** 7 to 8 Marks | **Frequency:** 2x in Univ Papers (100% Guaranteed)

### 6.1 The 6-Step NLP Preprocessing Pipeline
1. **Sentence Segmentation & Tokenization:** Splitting continuous raw text into discrete word/subword tokens.
2. **Case Normalization:** Converting all tokens to lowercase so that *"Deep"*, *"deep"*, and *"DEEP"* map to the identical vocabulary index.
3. **Noise & Punctuation Removal:** Stripping HTML tags, URLs, email headers, emojis, numbers, and special symbols via regex patterns (`r'[^a-zA-Z\s]'`).
4. **Stop-Word Removal:** Filtering out high-frequency words that carry little semantic discriminant power (e.g., *"the"*, *"is"*, *"at"*, *"which"*, *"on"*).
5. **Stemming vs. Lemmatization:**
   * *Stemming (Porter Stemmer):* Crude heuristic stripping of word suffixes (e.g., *"running"*, *"runner"* $\to$ *"run"*; *"studies"* $\to$ *"studi"*).
   * *Lemmatization (WordNet):* Uses morphological dictionary analysis and Part-of-Speech (POS) tags to reduce words to true grammatical base roots (e.g., *"better"* $\to$ *"good"*).
6. **Numerical Vectorization:** Converting text tokens into numerical vectors:
   * **TF-IDF:** Weights tokens by frequency in document penalized by general corpus frequency:
     $$\text{TF-IDF}(t, d, D) = \text{TF}(t, d) \times \log\left(\frac{N}{1 + |\text{docs containing } t|}\right)$$
   * **Dense Embeddings (Word2Vec / GloVe):** Maps words into continuous 300-dimensional semantic vector spaces where similar concepts cluster together ($\vec{v}_{\text{King}} - \vec{v}_{\text{Man}} + \vec{v}_{\text{Woman}} \approx \vec{v}_{\text{Queen}}$).

### 6.2 Deep Learning Spam Mail Classification System
* **Architecture:** Text Input $\to$ Preprocessing $\to$ Embedding Layer (vocab size 10,000, embedding dim 128) $\to$ Bidirectional LSTM (64 units) $\to$ Dense (32 units, ReLU) $\to$ Dropout (0.5) $\to$ Output Neuron (Sigmoid activation).
* **Evaluation Focus:** **Precision is prioritized over Recall** because falsely classifying a legitimate job offer or university admission email as Spam (False Positive) is far more damaging than letting an occasional spam ad leak into the inbox (False Negative).

---

## 🏆 SECTION 7: ChatBot Architecture & Case Study
**Marks:** 7 to 8 Marks | **Probability:** High Priority (75%)

### 7.1 The Three Generations of Conversational ChatBots
1. **Rule-Based Chatbots (ELIZA, AIML):** Rely on hardcoded if-else pattern matching trees and regular expressions. Incapable of handling typos, synonyms, or complex intent.
2. **Retrieval-Based Chatbots:** Use deep embeddings and intent classifiers to map user queries to pre-written response databases using cosine similarity. Grammatically safe and predictable; widely used in banking FAQ assistants.
3. **Generative Chatbots (Seq2Seq / Transformers):** Synthesize original responses token-by-token using deep neural language models. Highly versatile and human-like; requires guardrails to prevent hallucination.

### 7.2 Modern Deep Learning ChatBot Pipeline Architecture
```
[User Input Query]
        │
        ▼
[NLP Preprocessing] (Tokenize, Lowercase, Clean)
        │
        ├─────────────────────────────────────────────────┐
        ▼                                                 ▼
[Intent Classification]                           [Entity Extraction / Slot Filling]
(BiLSTM / CNN predicts intent,                     (BiLSTM-CRF extracts specific values,
 e.g., "book_flight")                               e.g., "destination: Pune", "date: Friday")
        │                                                 │
        └───────────────────────┬─────────────────────────┘
                                │
                                ▼
                 [Dialogue State Tracker (DST)]
                 (Maintains conversation memory across multi-turn dialog)
                                │
                                ▼
                 [Dialogue Policy Manager (DPM)]
                 (Queries flight database API, checks seat availability)
                                │
                                ▼
               [Response Generation (NLG / Seq2Seq)]
               (Synthesizes natural confirmation response back to user)
```
