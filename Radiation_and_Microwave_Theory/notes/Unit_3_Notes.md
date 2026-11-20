# 📡 Unit 3: Waveguide Components & Ferrite Devices
### Radiation and Microwave Theory (Course Code: 404181) | SPPU 2019 Course Pattern
**Based on Prof. Barapate's Lecture Series (Videos 12, 13, 14, 15, 16, 30) & 13 University Question Papers**

---

## 📌 Syllabus & Lecture Map
| Lecture # | Topic Taught by Prof. Barapate | SPPU Exam Focus | Weightage |
| :---: | :--- | :--- | :---: |
| **Video 12** | E & H Plane Tee | Construction, field orientations, and $[S]$-matrix derivations | 6 Marks |
| **Video 13** | Magic Tee (Hybrid Tee) | 4-port properties, balanced mixer, impedance bridge applications | 6-8 Marks |
| **Video 14** | Circulators | Faraday rotation non-reciprocal working, 3-port & 4-port $[S]$-matrix | 6 Marks |
| **Video 15** | Directional Couplers | Two-hole Bethe hole coupler, coupling, directivity, isolation equations | 6 Marks |
| **Video 16** | Microwave Attenuators, Gyrators & Isolators | Card/vane attenuators, non-reciprocal gyrator & isolator | 6 Marks |
| **Video 30** | Quick Revision (Passive Components) Unit-3 | Formula bank, $[S]$-matrices summary & numerical shortcuts | High Yield |

---

## 🎯 Question 1: Explain E-Plane Tee and H-Plane Tee & Derive Their [S]-Matrices
> **Exam Repetition:** 8 times in SPPU Papers | **Marks:** 6 Marks

A Waveguide Tee junction is a 3-port waveguide device formed by intersecting a rectangular waveguide with another side waveguide arm.

### 1. H-Plane Tee (Shunt Tee)
- **Construction:** The axis of side arm (Port 3) is **parallel to the magnetic field ($\vec{H}$)** of the main collinear waveguide (Ports 1 and 2).
- **Physical Operation:** 
  - When power is fed into Port 3, the electric fields split into collinear Ports 1 and 2 with **equal magnitude and IN-PHASE**:
    $$S_{13} = S_{23}$$
- **Scattering Matrix $[S]$ Derivation:**
  1. From symmetry: $S_{13} = S_{23}$ and $S_{31} = S_{32}$.
  2. If Port 3 is matched to the junction ($S_{33} = 0$):
     $$[S] = \begin{bmatrix} S_{11} & S_{12} & S_{13} \\ S_{21} & S_{22} & S_{13} \\ S_{13} & S_{13} & 0 \end{bmatrix}$$
  3. Applying Unitary Property ($[S][S]^* = [I]$):
     $$\text{Row 3} \cdot \text{Row 3}^*: |S_{13}|^2 + |S_{13}|^2 + 0 = 1 \implies 2|S_{13}|^2 = 1 \implies \mathbf{S_{13} = \frac{1}{\sqrt{2}}}$$
  4. With Ports 1 and 2 symmetrically loaded, the final $[S]$-matrix is:
     $$\boxed{[S_{\text{H-Tee}}] = \begin{bmatrix} \frac{1}{2} & -\frac{1}{2} & \frac{1}{\sqrt{2}} \\ -\frac{1}{2} & \frac{1}{2} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \end{bmatrix}}$$

---

### 2. E-Plane Tee (Series Tee)
- **Construction:** The axis of side arm (Port 3) is **parallel to the electric field ($\vec{E}$)** of the main collinear waveguide.
- **Physical Operation:**
  - When power is fed into Port 3, the electric field lines couple with **opposite polarity (180° OUT-OF-PHASE)** into collinear Ports 1 and 2:
    $$S_{13} = -S_{23}$$
- **Scattering Matrix $[S]$ Derivation:**
  1. From anti-symmetry: $S_{13} = -S_{23}$ and $S_{31} = -S_{32}$.
  2. If Port 3 is matched ($S_{33} = 0$):
     $$2|S_{13}|^2 = 1 \implies \mathbf{S_{13} = \frac{1}{\sqrt{2}}} \implies \mathbf{S_{23} = -\frac{1}{\sqrt{2}}}$$
  3. The final $[S]$-matrix for an E-Plane Tee is:
     $$\boxed{[S_{\text{E-Tee}}] = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} & \frac{1}{\sqrt{2}} \\ \frac{1}{2} & \frac{1}{2} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 \end{bmatrix}}$$

---

## 🎯 Question 2: Magic Tee (Hybrid Tee) Properties & Applications
> **Exam Repetition:** 14 times across all 8 End-Sem Papers | **Marks:** 6 to 8 Marks (100% Guaranteed!)

A Magic Tee is a 4-port waveguide junction created by integrating both an E-Plane Tee and an H-Plane Tee onto the same section of a collinear rectangular waveguide.

```text
               Port 3 (H-Plane Arm - Sum Σ)
                      │  ▲
                      │  │
   Port 1 ────────────┴──┴──────────── Port 2
  (Collinear)        Junction         (Collinear)
                      │  │
                      │  ▼
               Port 4 (E-Plane Arm - Difference Δ)
```

### 1. Key Operational Characteristics
1. **Port 1 & Port 2:** Collinear arms.
2. **Port 3 (H-Plane / Sum Arm $\Sigma$):** Power entering Port 3 divides equally and in-phase between Port 1 and Port 2 ($S_{13} = S_{23} = \frac{1}{\sqrt{2}}$). No power enters Port 4 ($S_{43} = 0$).
3. **Port 4 (E-Plane / Difference Arm $\Delta$):** Power entering Port 4 divides equally and 180° out-of-phase between Port 1 and Port 2 ($S_{14} = -S_{24} = \frac{1}{\sqrt{2}}$). No power enters Port 3 ($S_{34} = 0$).
4. **Cross-Isolation:** Port 3 and Port 4 are completely isolated from each other ($S_{34} = S_{43} = 0$). Likewise, when matched, Port 1 and Port 2 are isolated ($S_{12} = S_{21} = 0$).

### 2. The Ideal [S]-Matrix of a Magic Tee
$$\boxed{[S] = \frac{1}{\sqrt{2}} \begin{bmatrix} 
0 & 0 & 1 & 1 \\ 
0 & 0 & 1 & -1 \\ 
1 & 1 & 0 & 0 \\ 
1 & -1 & 0 & 0 
\end{bmatrix}}$$

### 3. Practical University Applications of Magic Tee
1. **Balanced Microwave Mixer:**
   - RF received signal fed into Port 1; Local Oscillator (LO) signal fed into Port 2.
   - Mixer diodes placed at Port 3 and Port 4 receive equal power with LO noise cancelled at output.
2. **Measurement of Unknown Impedance (Microwave Bridge):**
   - Signal generator connected to Port 3; matched detector at Port 4.
   - Standard known termination at Port 1; unknown load $Z_L$ at Port 2.
   - When bridge balances, zero power reaches Port 4 ($P_4 = 0$). Unknown impedance $Z_L$ is directly deduced from standard load.

---

## 🎯 Question 3: Directional Couplers (Two-Hole Directional Coupler)
> **Exam Repetition:** 10 times in SPPU Papers | **Marks:** 6 Marks

A 4-port passive component used to sample a fraction of microwave power traveling along a transmission line without disturbing the main signal flow.

### 1. Two-Hole Coupler Construction & Principle of Operation
- Two rectangular waveguides share a common broad wall with two small aperture holes spaced **quarter-guide wavelength apart ($\Delta x = \lambda_g / 4$)**.
- Power fed into **Port 1 (Input)** propagates toward **Port 2 (Direct/Through Port)**.
- At Hole 1 and Hole 2, small fractions of energy couple into the secondary auxiliary waveguide:
  - **In the Forward Direction (toward Port 4 - Coupled Port):**
    - Path via Hole 1: travels $\lambda_g/4$ in main guide $+ \lambda_g/4$ in auxiliary guide = path length $\lambda_g/2$.
    - Path via Hole 2: travels $\lambda_g/4$ in main guide $+ \lambda_g/4$ in auxiliary guide = identical path length.
    - The two coupled waves are **IN-PHASE and add constructively at Port 4**.
  - **In the Reverse Direction (toward Port 3 - Isolated Port):**
    - The wave passing through Hole 2 and traveling back to Port 3 travels an extra round-trip distance of $2 \times (\lambda_g/4) = \lambda_g/2$ ($180^\circ$ phase shift).
    - Waves arriving from Hole 1 and Hole 2 are **180° OUT-OF-PHASE and cancel destructively at Port 3 ($P_3 = 0$)**.

### 2. Fundamental Performance Metrics (Must Write in Exam)
1. **Coupling Factor ($C$):** Ratio of input power to forward coupled power.
   $$\boxed{C = 10 \log_{10}\left(\frac{P_1}{P_4}\right) \text{ dB}}$$
2. **Directivity ($D$):** Ability of the coupler to discriminate between forward and backward waves.
   $$\boxed{D = 10 \log_{10}\left(\frac{P_4}{P_3}\right) \text{ dB}}$$
3. **Isolation ($I$):** Ratio of input power to power exiting isolated port.
   $$\boxed{I = 10 \log_{10}\left(\frac{P_1}{P_3}\right) \text{ dB} = C + D}$$

---

## 🎯 Question 4: Ferrite Non-Reciprocal Devices (Isolator, Circulator & Gyrator)
> **Exam Repetition:** 12 times in SPPU Papers | **Marks:** 6 Marks

Ferrites are non-metallic ceramic materials with high resistivity and high magnetic permeability. In the presence of a steady DC magnetic field, they exhibit **Faraday Rotation**—the plane of polarization of an EM wave rotates non-reciprocally.

### 1. Faraday Rotation Isolator
- **Function:** A 2-port non-reciprocal device that allows RF energy to pass in the forward direction ($1 \to 2$) with minimal loss ($< 0.5\text{ dB}$), while completely absorbing reflected waves in the reverse direction ($2 \to 1$) ($> 30\text{ dB}$ isolation).
- **Construction:**
  - Rectangular waveguide with an internal central ferrite rod subjected to axial DC magnetic field adjusted to produce a precise **45° clockwise rotation**.
  - A resistive resistance card is placed at the input port in the horizontal plane. An output card is oriented at 45°.
- **Operation:**
  - **Forward ($1 \to 2$):** Vertical wave enters Port 1, passes unattenuated by horizontal resistive card, rotates 45° in ferrite, matches output waveguide angle, and exits with near-zero attenuation.
  - **Reverse ($2 \to 1$):** Reflected wave entering Port 2 rotates another 45° clockwise, arriving at Port 1 in the horizontal plane—exactly parallel to the input resistance card, where it is **100% absorbed as heat**. Protects expensive microwave tubes/oscillators from load reflections!

### 2. Microwave Circulator
- A multi-port junction in which power entering port $n$ emerges exclusively from port $n+1$:
  $$1 \to 2, \quad 2 \to 3, \quad 3 \to 1$$
- **Ideal $[S]$-Matrix for 3-Port Circulator:**
  $$\boxed{[S_{\text{Circulator}}] = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}}$$
- **Application as Duplexer in Radar:**
  - Port 1 connected to Transmitter, Port 2 connected to Antenna, Port 3 connected to Receiver.
  - Transmitted pulses go straight to Antenna ($1 \to 2$); received target echoes go directly to Receiver ($2 \to 3$) with zero transmitter power leaking into sensitive receiver!
