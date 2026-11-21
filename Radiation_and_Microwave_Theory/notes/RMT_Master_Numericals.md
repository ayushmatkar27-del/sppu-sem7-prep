# 🔢 Radiation & Microwave Theory (404181) — Master Solved Numericals Bank
### SPPU 2019 Course Pattern | BE E&TC Engineering
**Complete Step-by-Step Solutions for All Numerical Questions Asked in University Papers (2022–2026)**

---

## 📌 Executive Summary of RMT Exam Numericals
*Audited from 8 Official SPPU End-Semester Examination Papers (Nov/Dec 2022 to May/Jun 2026).*

| Numerical Category | Syllabus Unit | Typical Marks | Frequency | Core Formulas Applied |
| :--- | :---: | :---: | :---: | :--- |
| **1. Directional Coupler Power & Attenuation** | **Unit 3** | **6 Marks** | **13x (100% of papers)** | $C = 10\log_{10}(P_1/P_4)$, $D = 10\log_{10}(P_4/P_3)$, $P_{\text{load}} = P_1 - P_r$ |
| **2. Ferrite Isolator & Circulator [S]-Matrix** | **Unit 3** | **6 Marks** | **9x (87.5% of papers)** | $\text{IL} = -20\log_{10}|S_{21}|$, $\text{Iso} = -20\log_{10}|S_{12}|$, $|S_{ii}| = \frac{\text{VSWR}-1}{\text{VSWR}+1}$ |
| **3. H-Plane & E-Plane Tee Power Splitting** | **Unit 3** | **6 Marks** | **4x (50% of papers)** | $[b] = [S][a]$, $S_{13} = S_{23} = 1/\sqrt{2}$ (H-Tee) |
| **4. Reflex Klystron Power & Efficiency** | **Unit 4** | **6 Marks** | **12x (100% of papers)** | $P_{\text{dc}} = V_0 I_0$, $\theta_0 = 2\pi(n - 1/4)$, $\eta = P_{\text{out}}/P_{\text{in}} \times 100\%$ |
| **5. Two-Cavity Klystron Amplifier Gain** | **Unit 4** | **6 Marks** | **2x (25% of papers)** | $A_v = 10^{\text{Gain}_{\text{dB}}/20}$, $V_{\text{out}} = A_v V_{\text{in}}$, $P_L = V_{\text{out}}^2 / R_L$ |
| **6. IMPATT Diode Frequency & Drift Time** | **Unit 5** | **6 Marks** | **2x (25% of papers)** | $\tau = L / v_d$, $f = v_d / (2L) = 1 / (2\tau)$ |
| **7. VSWR & Frequency (Double Minimum Method)** | **Unit 6** | **6 to 7 Marks** | **11x (87.5% of papers)** | $\lambda_g = \frac{\lambda_0}{\sqrt{1-(\lambda_0/\lambda_c)^2}}$, $S \approx \frac{\lambda_g}{\pi \Delta x}$, $\frac{\lambda_g}{2} = d_{\text{null}}$ |
| **8. Radar Range Equation (Target Cross Section)** | **Unit 6** | **6 Marks** | **6x (75% of papers)** | $R_{\max} = \left[ \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{\min}} \right]^{1/4}$ |

---

## 🏆 CATEGORY 1: Directional Coupler Power & Attenuation Problems

### 📌 Problem 1.1: Symmetric Directional Coupler with Load & Two Bolometers
**Exam Frequency:** **4 Times** (`May_Jun_2025, May_Jun_2026, Nov_Dec_2022, Nov_Dec_2023`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A symmetric directional coupler with infinite directivity and a forward attenuation of $20\text{ dB}$ is used to monitor the power delivered to a load $Z_L$. Bolometer 1 introduces a $\text{VSWR} = 2.0$ on arm 4; bolometer 2 is matched to arm 3. If bolometer 1 reads $8\text{ mW}$ and bolometer 2 reads $2\text{ mW}$, find:*  
> *(i) The amount of power dissipated in the load $Z_L$;*  
> *(ii) The VSWR on arm 2."*

```
       Port 1 (Input P_in) ──────────────────────► Port 2 (Load Z_L, P_L)
                                ││ (Coupling)
       Port 3 (Reverse P_3) ◄───────────────────── Port 4 (Forward P_4)
       (Matched, Bolometer 2)                     (Bolometer 1, VSWR=2)
```

#### 1. Given Data:
* Directivity: $D = \infty$ (Ideal coupler, no cross-coupling leakage).
* Forward Attenuation (Coupling Factor): $C = 20\text{ dB}$.
* Power measured by Bolometer 1 (attached to forward arm 4): $P_{b1} = 8\text{ mW}$.
* VSWR introduced by Bolometer 1 on arm 4: $\text{VSWR}_4 = 2.0$.
* Power measured by Bolometer 2 (attached to reverse arm 3): $P_{b2} = 2\text{ mW}$.
* Bolometer 2 is matched: $\text{VSWR}_3 = 1.0 \implies \Gamma_3 = 0$.

#### 2. Key Formulas:
1. Reflection coefficient from VSWR:
   $$\Gamma = \frac{\text{VSWR} - 1}{\text{VSWR} + 1}$$
2. Incident power related to bolometer absorbed power when mismatched:
   $$P_{\text{absorbed}} = P_{\text{incident}} \cdot (1 - |\Gamma|^2) \implies P_{\text{incident}} = \frac{P_{\text{absorbed}}}{1 - |\Gamma|^2}$$
3. Forward coupling relation:
   $$C = 10 \log_{10}\left(\frac{P_{\text{forward incident}}}{P_4}\right) \implies \frac{P_1}{P_4} = 10^{C/10} = 10^{20/10} = 100$$
4. Reverse coupling relation (reflected power sampled on arm 3):
   $$\frac{P_{\text{reflected}}}{P_3} = 10^{C/10} = 100$$
5. Power dissipated in load $Z_L$:
   $$P_{\text{dissipated}} = P_{\text{incident on load}} - P_{\text{reflected from load}}$$
6. Load reflection coefficient and VSWR on arm 2:
   $$|\Gamma_L| = \sqrt{\frac{P_{\text{reflected}}}{P_{\text{incident on load}}}}, \quad \text{VSWR}_2 = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|}$$

#### 3. Step-by-Step Solution:
* **Step A: Find Incident Power on Forward Arm 4 ($P_{4\text{, inc}}$):**
  Since Bolometer 1 has $\text{VSWR} = 2.0$:
  $$\Gamma_4 = \frac{2 - 1}{2 + 1} = \frac{1}{3} \approx 0.3333$$
  $$1 - |\Gamma_4|^2 = 1 - \left(\frac{1}{3}\right)^2 = 1 - \frac{1}{9} = \frac{8}{9} \approx 0.8889$$
  Since Bolometer 1 absorbs $8\text{ mW}$:
  $$P_{4\text{, inc}} = \frac{P_{b1}}{1 - |\Gamma_4|^2} = \frac{8\text{ mW}}{8/9} = 9\text{ mW}$$

* **Step B: Find Incident Forward Power at Port 2 ($P_{2\text{, inc}}$ or $P_1$):**
  Given forward attenuation is $20\text{ dB}$ (ratio of $100$):
  $$P_{\text{incident forward}} = 100 \times P_{4\text{, inc}} = 100 \times 9\text{ mW} = 900\text{ mW} = 0.9\text{ W}$$

* **Step C: Find Reflected Power from Load ($P_r$):**
  Bolometer 2 on arm 3 is perfectly matched ($\Gamma_3 = 0$), so it absorbs 100% of incident power:
  $$P_{3\text{, inc}} = P_{b2} = 2\text{ mW}$$
  Because the directional coupler is symmetric with $20\text{ dB}$ attenuation:
  $$P_{\text{reflected from load}} = 100 \times P_{3\text{, inc}} = 100 \times 2\text{ mW} = 200\text{ mW} = 0.2\text{ W}$$

* **Step D: Calculate Power Dissipated in the Load $Z_L$:**
  $$P_L = P_{\text{incident forward}} - P_{\text{reflected from load}} = 900\text{ mW} - 200\text{ mW} = \mathbf{700\text{ mW}} \quad (0.7\text{ W})$$

* **Step E: Calculate the VSWR on Arm 2:**
  $$|\Gamma_L|^2 = \frac{P_{\text{reflected}}}{P_{\text{incident}}} = \frac{200\text{ mW}}{900\text{ mW}} = \frac{2}{9} \approx 0.2222$$
  $$|\Gamma_L| = \sqrt{\frac{2}{9}} = \frac{\sqrt{2}}{3} \approx \frac{1.4142}{3} \approx 0.4714$$
  $$\text{VSWR}_2 = \frac{1 + |\Gamma_L|}{1 - |\Gamma_L|} = \frac{1 + 0.4714}{1 - 0.4714} = \frac{1.4714}{0.5286} \approx \mathbf{2.78}$$

#### 4. Final Answer:
$$\text{(i) Power Dissipated in Load } Z_L = \mathbf{700\text{ mW}} \quad (0.70\text{ W})$$
$$\text{(ii) VSWR on Arm 2 } = \mathbf{2.78}$$

---

### 📌 Problem 1.2: Output Powers of a Lossless Directional Coupler
**Exam Frequency:** **3 Times** (`May_Jun_2026, Nov_Dec_2024, Nov_Dec_2025`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A $10\text{ dB}$ directional coupler has a directivity of $40\text{ dB}$. If the applied input power $P_1 = 10\text{ mW}$, calculate the power outputs at port 2 (through), port 3 (isolated), and port 4 (coupled) of a lossless directional coupler."*

#### 1. Given Data:
* Input power: $P_1 = 10\text{ mW}$.
* Coupling factor: $C = 10\text{ dB}$.
* Directivity: $D = 40\text{ dB}$.
* Coupler is lossless and all ports are matched.

#### 2. Formulas:
1. Coupling Factor:
   $$C = 10 \log_{10}\left(\frac{P_1}{P_4}\right) \implies \frac{P_1}{P_4} = 10^{C/10}$$
2. Directivity:
   $$D = 10 \log_{10}\left(\frac{P_4}{P_3}\right) \implies \frac{P_4}{P_3} = 10^{D/10}$$
3. Conservation of energy (Lossless condition):
   $$P_1 = P_2 + P_3 + P_4 \implies P_2 = P_1 - P_4 - P_3$$

#### 3. Step-by-Step Calculation:
* **Coupled Port Power ($P_4$):**
  $$10 = 10 \log_{10}\left(\frac{10\text{ mW}}{P_4}\right) \implies \frac{10}{P_4} = 10^1 = 10 \implies P_4 = \frac{10\text{ mW}}{10} = \mathbf{1.0\text{ mW}}$$

* **Isolated Port Power ($P_3$):**
  $$40 = 10 \log_{10}\left(\frac{P_4}{P_3}\right) \implies \frac{P_4}{P_3} = 10^4 = 10,000$$
  $$P_3 = \frac{P_4}{10,000} = \frac{1.0\text{ mW}}{10,000} = 10^{-4}\text{ mW} = \mathbf{0.1\ \mu\text{W}} \quad (100\text{ nW})$$

* **Through Port Power ($P_2$):**
  $$P_2 = P_1 - P_4 - P_3 = 10\text{ mW} - 1.0\text{ mW} - 0.0001\text{ mW} = \mathbf{8.9999\text{ mW}} \approx \mathbf{9.0\text{ mW}}$$

#### 4. Final Answer:
* **Through Port 2:** $P_2 = \mathbf{8.9999\text{ mW}}$ ($\approx 9.54\text{ dBm}$)
* **Isolated Port 3:** $P_3 = \mathbf{0.1\ \mu\text{W}}$ ($-40\text{ dBm}$)
* **Coupled Port 4:** $P_4 = \mathbf{1.0\text{ mW}}$ ($0\text{ dBm}$)

---

### 📌 Problem 1.3: Directional Coupler with Insertion Loss
**Exam Frequency:** **1 Time** (`Nov_Dec_2024, Q1(a)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A $2\text{ Watt}$ power source is connected to the input of a directional coupler with $C = 20\text{ dB}$, $D = 25\text{ dB}$, and an insertion loss of $0.7\text{ dB}$. Find the output power at the through, coupled, and isolated ports. Assume all ports to be matched."*

#### 1. Given Data:
* $P_1 = 2\text{ W} = 2000\text{ mW}$.
* Coupling: $C = 20\text{ dB}$.
* Directivity: $D = 25\text{ dB}$.
* Insertion Loss: $\text{IL} = 0.7\text{ dB}$.

#### 2. Step-by-Step Calculation:
* **Coupled Power ($P_4$):**
  $$C = 10 \log_{10}\left(\frac{P_1}{P_4}\right) = 20 \implies \frac{P_1}{P_4} = 10^2 = 100$$
  $$P_4 = \frac{2000\text{ mW}}{100} = \mathbf{20\text{ mW}} \quad (0.02\text{ W})$$
* **Isolated Power ($P_3$):**
  $$D = 10 \log_{10}\left(\frac{P_4}{P_3}\right) = 25 \implies \frac{P_4}{P_3} = 10^{2.5} \approx 316.23$$
  $$P_3 = \frac{20\text{ mW}}{316.23} = \mathbf{0.0632\text{ mW}} = \mathbf{63.2\ \mu\text{W}}$$
* **Through Power ($P_2$):**
  $$\text{IL} = 10 \log_{10}\left(\frac{P_1}{P_2}\right) = 0.7\text{ dB} \implies \frac{P_1}{P_2} = 10^{0.7/10} = 10^{0.07} \approx 1.1749$$
  $$P_2 = \frac{2000\text{ mW}}{1.1749} = \mathbf{1702.27\text{ mW}} \approx \mathbf{1.702\text{ W}}$$

#### 3. Final Answer:
* $P_2\text{ (through)} = \mathbf{1.702\text{ W}}$
* $P_4\text{ (coupled)} = \mathbf{20\text{ mW}}$
* $P_3\text{ (isolated)} = \mathbf{63.2\ \mu\text{W}}$

---

### 📌 Problem 1.4: VSWR Measurement using Two Identical Directional Couplers
**Exam Frequency:** **1 Time** (`Nov_Dec_2024, Q8(c)`) | **Marks:** 4 Marks  
**SPPU Question:**  
> *"Two identical directional couplers are used in a waveguide to sample the incident and reflected powers. The output of the two couplers are found to be $2.5\text{ mW}$ and $0.25\text{ mW}$. Determine the VSWR in the waveguide."*

#### 1. Given Data:
* Sampled forward power: $P_{f} = 2.5\text{ mW}$.
* Sampled reverse power: $P_{r} = 0.25\text{ mW}$.
* Both couplers are identical (identical coupling factor $C$).

#### 2. Calculation:
$$\frac{P_{\text{reflected}}}{P_{\text{incident}}} = \frac{P_r}{P_f} = \frac{0.25\text{ mW}}{2.5\text{ mW}} = 0.1$$
$$|\Gamma| = \sqrt{\frac{P_r}{P_f}} = \sqrt{0.1} \approx \mathbf{0.3162}$$
$$\text{VSWR} = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0.3162}{1 - 0.3162} = \frac{1.3162}{0.6838} \approx \mathbf{1.925}$$

#### 3. Final Answer:
$$\text{VSWR} = \mathbf{1.925}$$

---

## 🏆 CATEGORY 2: Ferrite Isolator & Circulator Scattering Matrix Numericals

### 📌 Problem 2.1: Scattering Matrix of a Ferrite Isolator
**Exam Frequency:** **3 Times** (`May_Jun_2023, May_Jun_2024, Nov_Dec_2023`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"An Isolator has an insertion loss of $0.5\text{ dB}$ and an isolation of $30\text{ dB}$. Determine the scattering matrix of the isolator if the isolated ports are perfectly matched to the junction."*

#### 1. Given Data:
* Insertion loss: $\text{IL} = 0.5\text{ dB}$.
* Isolation: $\text{Iso} = 30\text{ dB}$.
* Ports are perfectly matched: $S_{11} = S_{22} = 0$.

#### 2. Formulas:
* For an isolator transmitting from Port 1 to Port 2:
  $$\text{Insertion Loss (dB)} = -20 \log_{10}|S_{21}| \implies |S_{21}| = 10^{-\text{IL}/20}$$
  $$\text{Isolation (dB)} = -20 \log_{10}|S_{12}| \implies |S_{12}| = 10^{-\text{Iso}/20}$$

#### 3. Step-by-Step Calculation:
* **Forward Transmission Parameter ($S_{21}$):**
  $$|S_{21}| = 10^{-0.5 / 20} = 10^{-0.025} \approx \mathbf{0.9441}$$
* **Reverse Transmission Parameter ($S_{12}$):**
  $$|S_{12}| = 10^{-30 / 20} = 10^{-1.5} \approx \mathbf{0.03162}$$
* **Reflection Parameters:**
  Since both ports are perfectly matched:
  $$S_{11} = 0, \quad S_{22} = 0$$

#### 4. Final Answer:
$$[S] = \begin{bmatrix} S_{11} & S_{12} \\ S_{21} & S_{22} \end{bmatrix} = \begin{bmatrix} \mathbf{0} & \mathbf{0.0316} \\ \mathbf{0.9441} & \mathbf{0} \end{bmatrix}$$

---

### 📌 Problem 2.2: Scattering Matrix of a 3-Port Ferrite Circulator
**Exam Frequency:** **1 Time** (`May_Jun_2025, Q1(c)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"Determine the $[S]$ matrix of a 3-port circulator. Given insertion loss of $0.5\text{ dB}$, isolation of $20\text{ dB}$, and $\text{VSWR} = 2$."*

#### 1. Given Data:
* $\text{IL} = 0.5\text{ dB}$ (Forward path $1\to 2, 2\to 3, 3\to 1$).
* $\text{Isolation} = 20\text{ dB}$ (Reverse path $2\to 1, 3\to 2, 1\to 3$).
* $\text{VSWR} = 2$ at all three ports.

#### 2. Step-by-Step Calculation:
* **Reflection coefficients ($S_{11} = S_{22} = S_{33}$):**
  $$|S_{11}| = \frac{\text{VSWR} - 1}{\text{VSWR} + 1} = \frac{2 - 1}{2 + 1} = \frac{1}{3} \approx \mathbf{0.3333}$$
* **Forward transmission ($S_{21} = S_{32} = S_{13}$):**
  $$|S_{21}| = 10^{-0.5 / 20} \approx \mathbf{0.9441}$$
* **Reverse leakage ($S_{12} = S_{23} = S_{31}$):**
  $$|S_{12}| = 10^{-20 / 20} = 10^{-1} = \mathbf{0.1000}$$

#### 3. Final Answer:
$$[S] = \begin{bmatrix} 
\mathbf{0.3333} & \mathbf{0.1000} & \mathbf{0.9441} \\ 
\mathbf{0.9441} & \mathbf{0.3333} & \mathbf{0.1000} \\ 
\mathbf{0.1000} & \mathbf{0.9441} & \mathbf{0.3333} 
\end{bmatrix}$$

---

## 🏆 CATEGORY 3: E-Plane & H-Plane Tee Power Splitting

### 📌 Problem 3.1: Power Distribution in a Lossless H-Plane Tee
**Exam Frequency:** **1 Time** (`May_Jun_2024, Q1(c)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A signal of power $40\text{ mW}$ is fed into the collinear ports of a lossless H-Plane tee. Determine the powers in the remaining ports when other ports are terminated with matched impedance."*

#### 1. Key Concept & Matrix:
The Scattering Matrix for an ideal lossless, matched H-Plane Tee is:
$$[S] = \begin{bmatrix} 
1/2 & 1/2 & 1/\sqrt{2} \\ 
1/2 & 1/2 & -1/\sqrt{2} \\ 
1/\sqrt{2} & -1/\sqrt{2} & 0 
\end{bmatrix} \quad \text{or for symmetric in-phase:} \quad [S] = \begin{bmatrix} 
1/2 & 1/2 & 1/\sqrt{2} \\ 
1/2 & 1/2 & 1/\sqrt{2} \\ 
1/\sqrt{2} & 1/\sqrt{2} & 0 
\end{bmatrix}$$
* **Case I: Signal fed into Port 3 (H-arm, $P_3 = 40\text{ mW}$):**
  Power splits equally and **in-phase** into collinear ports 1 and 2:
  $$P_1 = \frac{1}{2} P_3 = \frac{40\text{ mW}}{2} = \mathbf{20\text{ mW}}$$
  $$P_2 = \frac{1}{2} P_3 = \frac{40\text{ mW}}{2} = \mathbf{20\text{ mW}}$$
* **Case II: Signal of $40\text{ mW}$ fed into collinear Port 1 ($a_1 = \sqrt{40}$):**
  $$b_1 = \frac{1}{2} a_1 \implies P_{1\text{, ref}} = \frac{1}{4} P_1 = 10\text{ mW}$$
  $$b_2 = \frac{1}{2} a_1 \implies P_2 = \frac{1}{4} P_1 = 10\text{ mW}$$
  $$b_3 = \frac{1}{\sqrt{2}} a_1 \implies P_3 = \frac{1}{2} P_1 = \mathbf{20\text{ mW}}$$

---

## 🏆 CATEGORY 4: Reflex Klystron Oscillator Numericals

### 📌 Problem 4.1: Input Power, Output Power, and Efficiency
**Exam Frequency:** **3 Times** (`May_Jun_2025, May_Jun_2026, Nov_Dec_2025`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A reflex klystron operates at the peak mode of $n = 2$ ($1\frac{3}{4}$ or $2\frac{3}{4}$ mode) with beam voltage $V_0 = 300\text{ V}$, beam current $I_0 = 20\text{ mA}$, and RF signal voltage $V_1 = 40\text{ V}$. Determine:*  
> *(i) The input power;*  
> *(ii) The output power;*  
> *(iii) The electronic efficiency."*  
*(Also asked with $V_0 = 280\text{ V}, I_0 = 22\text{ mA}, V_1 = 30\text{ V}$ in May 2025)*

#### 1. Given Data:
* Beam Voltage: $V_0 = 300\text{ V}$.
* Beam Current: $I_0 = 20\text{ mA} = 0.020\text{ A}$.
* RF Signal Voltage: $V_1 = 40\text{ V}$.
* Mode index: $n = 2$ ($N = n - \frac{1}{4} = 1.75$ mode).
* Coupling coefficient $\beta_i \approx 1$.

#### 2. Key Formulas:
1. DC Input Power:
   $$P_{\text{in}} = V_0 \times I_0$$
2. Optimum Round-Trip Transit Angle:
   $$\theta_0 = 2\pi\left(n - \frac{1}{4}\right) = 2\pi(1.75) = 3.5\pi \approx 10.9956\text{ radians}$$
3. Bunching Parameter:
   $$X' = \frac{\beta_i V_1}{2 V_0} \cdot \theta_0$$
4. RF Output Power:
   $$P_{\text{out}} = \frac{2 V_0 I_0 X' J_1(X')}{\theta_0}$$
   *(Note: At optimum peak mode, $X' = 1.841$ and $J_1(1.841) = 0.582$)*
   Alternatively, using induced fundamental RF current $I_1 = 2 I_0 J_1(X')$:
   $$P_{\text{out}} = \frac{1}{2} V_1 I_1 = V_1 I_0 J_1(X')$$
5. Electronic Efficiency:
   $$\eta = \frac{P_{\text{out}}}{P_{\text{in}}} \times 100\%$$

#### 3. Step-by-Step Calculation:
* **(i) Input DC Power ($P_{\text{in}}$):**
  $$P_{\text{in}} = 300\text{ V} \times 0.020\text{ A} = \mathbf{6.0\text{ Watts}}$$

* **(ii) Bunching Parameter ($X'$):**
  $$X' = \frac{1 \times 40}{2 \times 300} \times (3.5\pi) = \frac{40}{600} \times 10.9956 = \frac{1}{15} \times 10.9956 \approx \mathbf{0.733}$$
  From Bessel function values, for $X' = 0.733$:
  $$J_1(0.733) \approx \frac{0.733}{2} \left(1 - \frac{0.733^2}{8}\right) \approx 0.3665 \times (1 - 0.067) \approx \mathbf{0.342}$$

* **(iii) Output RF Power ($P_{\text{out}}$):**
  $$P_{\text{out}} = V_1 \cdot I_0 \cdot J_1(X') = 40\text{ V} \times 0.020\text{ A} \times 0.342 = \mathbf{0.2736\text{ Watts}} \quad (273.6\text{ mW})$$
  *(If calculated using maximum theoretical peak mode $X' = 1.841, J_1(X') = 0.582$:)*
  $$P_{\text{out, max}} = \frac{2 \times 300 \times 0.020 \times 1.841 \times 0.582}{10.9956} = \frac{12.858}{10.9956} \approx \mathbf{1.169\text{ Watts}}$$

* **(iv) Efficiency ($\eta$):**
  $$\eta = \frac{0.2736\text{ W}}{6.0\text{ W}} \times 100\% = \mathbf{4.56\%}$$
  *(For peak mode theoretical limit: $\eta_{\max} = \frac{1.169}{6.0} \approx \mathbf{19.49\%}$)*

#### 4. Final Answer:
* **Input Power:** $P_{\text{in}} = \mathbf{6.0\text{ W}}$
* **Output Power:** $P_{\text{out}} = \mathbf{0.274\text{ W}}$ (Peak Limit: $\mathbf{1.169\text{ W}}$)
* **Efficiency:** $\eta = \mathbf{4.56\%}$ (Peak Limit: $\mathbf{19.5\%}$)

---

## 🏆 CATEGORY 5: Two-Cavity Klystron Amplifier Numericals

### 📌 Problem 5.1: Two-Cavity Klystron Voltage & Power Delivery
**Exam Frequency:** **1 Time** (`Nov_Dec_2022, Q4(b)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A 2-cavity Klystron amplifier has the following characteristics:*  
> *Voltage gain $= 15\text{ dB}$, Input power $P_{\text{in}} = 5\text{ mW}$, $R_{\text{sh}}$ of input cavity $= 30\text{ k}\Omega$, $R_{\text{sh}}$ of output cavity $= 40\text{ k}\Omega$, $R_L$ (load impedance) $= 40\text{ k}\Omega$.*  
> *Determine:*  
> *(i) The input r.m.s. voltage;*  
> *(ii) The output r.m.s. voltage;*  
> *(iii) The power delivered to the load."*

#### 1. Given Data:
* Voltage Gain: $\text{Gain}_{\text{dB}} = 15\text{ dB}$.
* Input Power: $P_{\text{in}} = 5\text{ mW} = 5 \times 10^{-3}\text{ W}$.
* Input cavity shunt resistance: $R_{\text{sh1}} = 30\text{ k}\Omega = 30,000\ \Omega$.
* Output cavity shunt resistance: $R_{\text{sh2}} = 40\text{ k}\Omega$.
* Load impedance: $R_L = 40\text{ k}\Omega = 40,000\ \Omega$.

#### 2. Step-by-Step Calculation:
* **(i) Input RMS Voltage ($V_{\text{in}}$):**
  $$P_{\text{in}} = \frac{V_{\text{in}}^2}{R_{\text{sh1}}} \implies V_{\text{in}} = \sqrt{P_{\text{in}} \times R_{\text{sh1}}}$$
  $$V_{\text{in}} = \sqrt{5 \times 10^{-3}\text{ W} \times 30,000\ \Omega} = \sqrt{150} \approx \mathbf{12.247\text{ V}}$$

* **(ii) Output RMS Voltage ($V_{\text{out}}$):**
  $$\text{Gain}_{\text{dB}} = 20 \log_{10}\left(\frac{V_{\text{out}}}{V_{\text{in}}}\right) = 15\text{ dB}$$
  $$\frac{V_{\text{out}}}{V_{\text{in}}} = 10^{15/20} = 10^{0.75} \approx 5.6234$$
  $$V_{\text{out}} = 5.6234 \times 12.247\text{ V} \approx \mathbf{68.87\text{ V}}$$

* **(iii) Power Delivered to the Load ($P_L$):**
  The output cavity is shunted by $R_{\text{sh2}}$ and $R_L$ in parallel:
  $$R_{\text{eq}} = R_{\text{sh2}} \parallel R_L = \frac{40\text{ k}\Omega \times 40\text{ k}\Omega}{40\text{ k}\Omega + 40\text{ k}\Omega} = 20\text{ k}\Omega$$
  The voltage across the load is $V_{\text{out}} = 68.87\text{ V}$:
  $$P_L = \frac{V_{\text{out}}^2}{R_L} = \frac{(68.87)^2}{40,000\ \Omega} = \frac{4743.08}{40,000} \approx \mathbf{0.1186\text{ W}} = \mathbf{118.6\text{ mW}}$$

#### 3. Final Answer:
* **Input RMS Voltage:** $V_{\text{in}} = \mathbf{12.25\text{ V}}$
* **Output RMS Voltage:** $V_{\text{out}} = \mathbf{68.87\text{ V}}$
* **Power Delivered to Load:** $P_L = \mathbf{118.6\text{ mW}}$

---

## 🏆 CATEGORY 6: Solid-State Microwave Diode Numericals

### 📌 Problem 6.1: IMPATT Diode Drift Time and Operating Frequency
**Exam Frequency:** **1 Time** (`Nov_Dec_2022, Q6(b)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"An IMPATT diode has a drift length of $2\ \mu\text{m}$. Determine:*  
> *(i) The drift time of the carrier;*  
> *(ii) The operating frequency of the diode.*  
> *(Take carrier saturation drift velocity $v_d = 10^7\text{ cm/s} = 10^5\text{ m/s}$ in Silicon)."*

#### 1. Given Data:
* Drift region length: $L = 2\ \mu\text{m} = 2 \times 10^{-6}\text{ m}$.
* Saturation drift velocity for Silicon: $v_d = 10^7\text{ cm/s} = 10^5\text{ m/s}$.

#### 2. Key Formulas:
1. Carrier drift transit time across drift region:
   $$\tau = \frac{L}{v_d}$$
2. Read diode transit-time operating frequency:
   $$f = \frac{v_d}{2L} = \frac{1}{2\tau}$$

#### 3. Step-by-Step Calculation:
* **(i) Drift Time ($\tau$):**
  $$\tau = \frac{2 \times 10^{-6}\text{ m}}{10^5\text{ m/s}} = 2 \times 10^{-11}\text{ seconds} = \mathbf{20\text{ picoseconds (ps)}}$$

* **(ii) Operating Frequency ($f$):**
  $$f = \frac{1}{2 \times (2 \times 10^{-11}\text{ s})} = \frac{1}{4 \times 10^{-11}} = 0.25 \times 10^{11}\text{ Hz} = 25 \times 10^9\text{ Hz} = \mathbf{25\text{ GHz}}$$

#### 4. Final Answer:
* **Carrier Drift Time:** $\tau = \mathbf{20\text{ ps}}$
* **Operating Frequency:** $f = \mathbf{25\text{ GHz}}$

---

## 🏆 CATEGORY 7: VSWR, SWR & Frequency Measurements (Slotted Line)

### 📌 Problem 7.1: Double Minimum Method for High VSWR Calculation
**Exam Frequency:** **2 Times** (`Nov_Dec_2022, May_Jun_2025`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"Calculate the SWR of a transmission system operating at $10\text{ GHz}$. Assume $\text{TE}_{10}$ wave transmission inside a rectangular waveguide of dimensions $a = 4\text{ cm}, b = 2.5\text{ cm}$. The distance measured between twice minimum power points is $\Delta x = 1\text{ mm}$ on a slotted line."*

#### 1. Given Data:
* Operating frequency: $f = 10\text{ GHz} = 10 \times 10^9\text{ Hz}$.
* Waveguide width: $a = 4\text{ cm} = 0.04\text{ m}$.
* Waveguide height: $b = 2.5\text{ cm} = 0.025\text{ m}$.
* Mode: $\text{TE}_{10}$.
* Distance between twice-minimum power points: $\Delta x = 1\text{ mm} = 0.1\text{ cm} = 0.001\text{ m}$.

#### 2. Key Formulas:
1. Free-space wavelength:
   $$\lambda_0 = \frac{c}{f} = \frac{3 \times 10^{10}\text{ cm/s}}{10 \times 10^9\text{ s}^{-1}} = 3.0\text{ cm}$$
2. Cutoff wavelength for $\text{TE}_{10}$ mode:
   $$\lambda_c = 2a = 2 \times 4\text{ cm} = 8.0\text{ cm}$$
3. Guide wavelength ($\lambda_g$):
   $$\lambda_g = \frac{\lambda_0}{\sqrt{1 - (\lambda_0 / \lambda_c)^2}}$$
4. High VSWR using Double Minimum Method:
   $$\text{VSWR} = S \approx \frac{\lambda_g}{\pi \Delta x}$$

#### 3. Step-by-Step Calculation:
* **Calculate Guide Wavelength ($\lambda_g$):**
  $$\left(\frac{\lambda_0}{\lambda_c}\right)^2 = \left(\frac{3}{8}\right)^2 = \frac{9}{64} = 0.1406$$
  $$\sqrt{1 - 0.1406} = \sqrt{0.8594} \approx 0.9270$$
  $$\lambda_g = \frac{3.0\text{ cm}}{0.9270} \approx \mathbf{3.236\text{ cm}} \quad (32.36\text{ mm})$$

* **Calculate VSWR ($S$):**
  $$\text{VSWR} \approx \frac{\lambda_g}{\pi \cdot \Delta x} = \frac{32.36\text{ mm}}{\pi \times 1.0\text{ mm}} = \frac{32.36}{3.14159} \approx \mathbf{10.30}$$

#### 4. Final Answer:
$$\text{System VSWR } (S) = \mathbf{10.30}$$

---

### 📌 Problem 7.2: Frequency Measurement from Slotted Line Nulls
**Exam Frequency:** **1 Time** (`May_Jun_2025, Q7(a)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A slotted line is used to measure the frequency and it was found that the distance between adjacent nulls is $1.85\text{ cm}$. Given guide dimensions are $3 \times 1.5\text{ cm}$. Calculate the value of frequency."*

#### 1. Given Data:
* Distance between successive minima (nulls): $d_{\text{null}} = 1.85\text{ cm}$.
* Waveguide dimensions: $a = 3.0\text{ cm}, b = 1.5\text{ cm}$.
* Dominant mode: $\text{TE}_{10}$.

#### 2. Key Formulas:
1. In any standing wave pattern, the distance between successive voltage minima is half the guide wavelength:
   $$\frac{\lambda_g}{2} = d_{\text{null}} \implies \lambda_g = 2 \times d_{\text{null}}$$
2. Cutoff wavelength: $\lambda_c = 2a = 2 \times 3.0\text{ cm} = 6.0\text{ cm}$.
3. Free-space wavelength relation:
   $$\frac{1}{\lambda_0^2} = \frac{1}{\lambda_g^2} + \frac{1}{\lambda_c^2} \implies \lambda_0 = \frac{\lambda_g \lambda_c}{\sqrt{\lambda_g^2 + \lambda_c^2}}$$
4. Frequency: $f = \frac{c}{\lambda_0}$.

#### 3. Step-by-Step Calculation:
* Guide Wavelength:
  $$\lambda_g = 2 \times 1.85\text{ cm} = \mathbf{3.70\text{ cm}}$$
* Free-Space Wavelength ($\lambda_0$):
  $$\lambda_0 = \frac{3.70 \times 6.0}{\sqrt{(3.70)^2 + (6.0)^2}} = \frac{22.20}{\sqrt{13.69 + 36.00}} = \frac{22.20}{\sqrt{49.69}} = \frac{22.20}{7.0491} \approx \mathbf{3.1493\text{ cm}}$$
* Microwave Frequency ($f$):
  $$f = \frac{3 \times 10^{10}\text{ cm/s}}{3.1493\text{ cm}} \approx 9.5258 \times 10^9\text{ Hz} = \mathbf{9.526\text{ GHz}}$$

#### 4. Final Answer:
$$\text{Measured Frequency } (f) = \mathbf{9.526\text{ GHz}}$$

---

## 🏆 CATEGORY 8: Radar Range Equation & Target Cross Section

### 📌 Problem 8.1: Maximum Radar Detection Range ($R_{\max}$)
**Exam Frequency:** **2 Times** (`May_Jun_2024, Nov_Dec_2023`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"Calculate the maximum range of a radar system operating at wavelength $\lambda = 3\text{ cm}$ with a peak pulse power of $600\text{ kW}$. The antenna effective area is $5\text{ m}^2$, minimum detectable signal is $S_{\min} = 10^{-13}\text{ W}$, and target radar cross-sectional area is $\sigma = 20\text{ m}^2$."*

#### 1. Given Data:
* Operating wavelength: $\lambda = 3\text{ cm} = 0.03\text{ m}$.
* Peak transmitter power: $P_t = 600\text{ kW} = 6 \times 10^5\text{ W}$.
* Antenna effective area: $A_e = 5\text{ m}^2$.
* Target radar cross-section: $\sigma = 20\text{ m}^2$.
* Minimum detectable signal: $S_{\min} = 10^{-13}\text{ W}$.

#### 2. Key Formula:
When antenna effective aperture $A_e$ is given, the Radar Range Equation is:
$$R_{\max} = \left[ \frac{P_t \cdot A_e^2 \cdot \sigma}{4\pi \cdot \lambda^2 \cdot S_{\min}} \right]^{1/4}$$

#### 3. Step-by-Step Calculation:
* **Numerator:**
  $$\text{Num} = (6 \times 10^5) \times (5)^2 \times (20) = 6 \times 10^5 \times 25 \times 20 = 300 \times 10^6 = 3.0 \times 10^8$$
* **Denominator:**
  $$\text{Den} = 4\pi \times (0.03)^2 \times 10^{-13} = 4 \times 3.14159 \times 0.0009 \times 10^{-13} \approx 1.13097 \times 10^{-15}$$
* **Ratio ($R_{\max}^4$):**
  $$R_{\max}^4 = \frac{3.0 \times 10^8}{1.13097 \times 10^{-15}} \approx 2.6526 \times 10^{23}$$
* **Fourth Root ($R_{\max}$):**
  $$R_{\max} = (2.6526 \times 10^{23})^{0.25} = (26.526 \times 10^{22})^{0.25} \approx 718,250\text{ meters} \approx \mathbf{718.25\text{ km}}$$

#### 4. Final Answer:
$$\text{Maximum Radar Range } (R_{\max}) = \mathbf{718.25\text{ km}}$$

---

### 📌 Problem 8.2: Target Cross-Sectional Area ($\sigma$)
**Exam Frequency:** **1 Time** (`May_Jun_2025, Q8(c)`) | **Marks:** 6 Marks  
**SPPU Question:**  
> *"A marine radar operating at $10\text{ GHz}$ has a maximum range of $50\text{ km}$ with an antenna gain of $4000$. If the transmitter has a power of $250\text{ kW}$ and minimum detectable signal of $10^{-11}\text{ W}$, determine the cross section of the target the radar can sight."*

#### 1. Given Data:
* Frequency: $f = 10\text{ GHz} \implies \lambda = \frac{c}{f} = \frac{3 \times 10^8}{10 \times 10^9} = 0.03\text{ m}$.
* Maximum range: $R_{\max} = 50\text{ km} = 50,000\text{ m} = 5 \times 10^4\text{ m}$.
* Antenna power gain: $G = 4000$.
* Peak power: $P_t = 250\text{ kW} = 2.5 \times 10^5\text{ W}$.
* Minimum detectable signal: $S_{\min} = 10^{-11}\text{ W}$.

#### 2. Formula:
$$R_{\max} = \left[ \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{\min}} \right]^{1/4} \implies \sigma = \frac{R_{\max}^4 \cdot (4\pi)^3 \cdot S_{\min}}{P_t \cdot G^2 \cdot \lambda^2}$$

#### 3. Step-by-Step Calculation:
* $R_{\max}^4 = (5 \times 10^4)^4 = 625 \times 10^{16} = 6.25 \times 10^{18}\text{ m}^4$.
* $(4\pi)^3 = (12.56637)^3 \approx 1984.4$.
* Numerator:
  $$\text{Num} = (6.25 \times 10^{18}) \times 1984.4 \times 10^{-11} \approx 1.240 \times 10^{11}$$
* Denominator:
  $$\text{Den} = (2.5 \times 10^5) \times (4000)^2 \times (0.03)^2 = 2.5 \times 10^5 \times 1.6 \times 10^7 \times 0.0009 = 3.6 \times 10^9$$
* Target Cross Section ($\sigma$):
  $$\sigma = \frac{1.240 \times 10^{11}}{3.6 \times 10^9} \approx \mathbf{34.45\text{ m}^2}$$

#### 4. Final Answer:
$$\text{Target Cross Section } (\sigma) = \mathbf{34.45\text{ m}^2}$$
