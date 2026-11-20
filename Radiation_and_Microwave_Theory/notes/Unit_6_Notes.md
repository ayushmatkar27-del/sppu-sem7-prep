# 📡 Unit 6: RADAR Systems, Microwave Applications & Radiation Hazards
### Radiation and Microwave Theory (Course Code: 404181) | SPPU 2019 Course Pattern
**Based on Prof. Barapate's Lecture Series (Videos 27, 28, 29, 34) & 13 University Question Papers**

---

## 📌 Syllabus & Lecture Map
| Lecture # | Topic Taught by Prof. Barapate | SPPU Exam Focus | Weightage |
| :---: | :--- | :--- | :---: |
| **Video 27** | Terrestrial & Satellite Communication Systems | LOS towers, transponders, satellite vs terrestrial comparison | 6 Marks |
| **Video 28** | Fundamentals of RADAR | Block diagram, Radar Range Equation derivation & solved numericals | 6-8 Marks |
| **Video 28B**| MTI Radar & Delay Line Canceller | Doppler effect, delay line subtractor, blind speeds derivation | 6 Marks |
| **Video 29** | Microwave Applications & Radiation Hazards | Industrial heating, diathermy, biological thermal effects & SAR | 6 Marks |
| **Video 34** | Quick Revision (Microwave Systems & Hazards) | Key equations, radar displays (PPI), standards & summary | High Yield |

---

## 🎯 Question 1: Derive the Fundamental Radar Range Equation
> **Exam Repetition:** 7 times in SPPU Papers | **Marks:** 6 to 8 Marks (100% Guaranteed Derivation!)

RADAR (**RA**dio **D**etection **A**nd **R**anging) transmits high-power RF electromagnetic pulses and captures weak echoes reflected by distant targets to calculate target range ($R = \frac{c \cdot \Delta t}{2}$) and radial velocity.

### Step-by-Step Derivation (Prof. Barapate's Exam Template)
Consider a radar transmitter with peak power $P_t$ and antenna directive gain $G$, radiating into free space toward a target at distance $R$ having Radar Cross Section $\sigma$ ($\text{m}^2$).

1. **Power Density from an Isotropic Radiator at Distance $R$:**
   $$S_{\text{iso}} = \frac{P_t}{4\pi R^2} \quad (\text{W/m}^2)$$

2. **Power Density Incident on the Target with Directive Antenna (Gain $G$):**
   $$S_{\text{target}} = \frac{P_t G}{4\pi R^2}$$

3. **Power Reradiated / Scattered by Target with Radar Cross Section $\sigma$:**
   $$P_{\text{scattered}} = S_{\text{target}} \cdot \sigma = \frac{P_t G \sigma}{4\pi R^2} \quad (\text{Watts})$$

4. **Power Density of Target Echo Returning Back to Radar Antenna:**
   $$S_{\text{echo}} = \frac{P_{\text{scattered}}}{4\pi R^2} = \frac{P_t G \sigma}{(4\pi R^2)^2} = \frac{P_t G \sigma}{(4\pi)^2 R^4}$$

5. **Echo Power Captured by Radar Receiver (Aperture $A_e$):**
   $$P_r = S_{\text{echo}} \cdot A_e = \frac{P_t G A_e \sigma}{(4\pi)^2 R^4}$$

6. **Maximum Radar Range ($R_{\max}$):**
   - The maximum range is reached when the received echo power attenuates to the **Minimum Detectable Signal ($S_{\min}$)** of the radar receiver ($P_r = S_{\min}$):
   $$S_{\min} = \frac{P_t G A_e \sigma}{(4\pi)^2 R_{\max}^4}$$
   $$\boxed{R_{\max} = \left[\frac{P_t \cdot G \cdot A_e \cdot \sigma}{(4\pi)^2 \cdot S_{\min}}\right]^{1/4}}$$

7. **Alternative Form (Using $A_e = \frac{G \lambda^2}{4\pi}$ for identical antennas):**
   $$\boxed{R_{\max} = \left[\frac{P_t \cdot G^2 \cdot \lambda^2 \cdot \sigma}{(4\pi)^3 \cdot S_{\min}}\right]^{1/4}}$$

---

## 🎯 Solved SPPU University Numericals

### Numerical 1: Maximum Radar Range Calculation (SPPU May-Jun 2024 / May-Jun 2025 - 6 Marks)
**Problem:** Calculate the maximum range of a marine radar operating at $\lambda = 3\text{ cm}$ with a peak pulse power of $P_t = 600\text{ kW}$. The effective antenna aperture is $A_e = 5\text{ m}^2$, target cross-section is $\sigma = 20\text{ m}^2$, and receiver sensitivity is $S_{\min} = 10^{-12}\text{ W}$.

**Step-by-Step Solution:**
1. **Given Data:**
   - $P_t = 600\text{ kW} = 600 \times 10^3\text{ W} = 6 \times 10^5\text{ W}$
   - $\lambda = 3\text{ cm} = 0.03\text{ m}$
   - $A_e = 5\text{ m}^2$
   - $\sigma = 20\text{ m}^2$
   - $S_{\min} = 10^{-12}\text{ W}$

2. **Antenna Gain ($G$):**
   $$G = \frac{4\pi A_e}{\lambda^2} = \frac{4\pi \times 5}{(0.03)^2} = \frac{62.8318}{0.0009} = \mathbf{69,813.17}$$

3. **Numerator ($P_t \cdot G \cdot A_e \cdot \sigma$):**
   $$\text{Num} = (6 \times 10^5) \times (69,813.17) \times 5 \times 20 = \mathbf{4.1888 \times 10^{12}}$$

4. **Denominator ($(4\pi)^2 \cdot S_{\min}$):**
   $$\text{Den} = 16\pi^2 \times 10^{-12} = 157.9137 \times 10^{-12} = \mathbf{1.5791 \times 10^{-10}}$$

5. **Solve for $R_{\max}^4$ and $R_{\max}$:**
   $$R_{\max}^4 = \frac{4.1888 \times 10^{12}}{1.5791 \times 10^{-10}} = 2.6526 \times 10^{22}\text{ m}^4$$
   $$R_{\max} = \left(2.6526 \times 10^{22}\right)^{0.25} = \mathbf{127,585.6\text{ meters}}$$
   $$\boxed{R_{\max} = \mathbf{127.59\text{ km}}}$$

---

## 🎯 Question 2: MTI Radar & Delay Line Canceller (Blind Speeds)
> **Exam Repetition:** 6 times in SPPU Papers | **Marks:** 6 Marks

### 1. Moving Target Indicator (MTI) Principle
- Primary goal: Distinguish weak echoes reflected from moving aircraft from massive stationary clutter echoes (mountains, buildings, rain clouds).
- Moving targets introduce a **Doppler Frequency Shift**:
  $$f_d = \frac{2 v_r}{\lambda} = \frac{2 v_r f_0}{c}$$
  Where $v_r = v \cos\theta$ is the radial target velocity.

### 2. Single Delay Line Canceller
The returned video signal from a phase detector is split into two channels:
- Channel 1: Transmits current pulse echo $V(t)$ directly to a subtractor.
- Channel 2: Passes through a delay element providing a time delay equal to the **Pulse Repetition Interval ($T = 1/\text{PRF}$)**.
- **Output:**
  $$V_{\text{out}}(t) = V(t) - V(t - T)$$
- **For Stationary Clutter ($v_r = 0 \to f_d = 0$):**
  $$V(t) = V(t - T) \implies V_{\text{out}} = 0 \quad (\text{Clutter 100\% Cancelled!})$$
- **For Moving Target ($f_d \neq 0$):**
  $$V_{\text{out}}(t) = 2 V_0 \sin(\pi f_d T) \cos\left(2\pi f_d t - \pi f_d T\right) \neq 0$$

### 3. Blind Speeds Derivation
When target Doppler frequency is an exact multiple of the radar Pulse Repetition Frequency ($\text{PRF} = f_r = 1/T$):
$$f_d = n \cdot \text{PRF} = n \cdot f_r = \frac{n}{T} \quad (n = 1, 2, 3, \dots)$$
$$\sin(\pi f_d T) = \sin(\pi n) = 0 \implies V_{\text{out}} = 0$$
The radar output becomes zero—the moving aircraft appears completely invisible to the radar!
$$\frac{2 v_{\text{blind}}}{\lambda} = n f_r \implies \boxed{v_{\text{blind}} = \frac{n \cdot \lambda \cdot \text{PRF}}{2} = \frac{n \cdot \lambda}{2T}}$$
- **Elimination of Blind Speeds:** Solved in modern radars by using **Staggered PRF** (transmitting pulses with alternating, non-uniform time intervals $T_1, T_2, T_3$).

---

## 🎯 Question 3: Biological Effects of Microwave Radiation & Safety Standards
> **Exam Repetition:** 12 times in SPPU Papers | **Marks:** 6 Marks (100% Repetitive!)

High-frequency microwave electromagnetic fields penetrate human tissue and interact with water molecules and ions.

### 1. Thermal Effects vs Non-Thermal Effects
1. **Thermal Effects (Primary Hazard):**
   - Microwave energy causes polar water molecules to oscillate billions of times per second, generating internal frictional heat (**dielectric heating**).
   - **Vulnerable Organs (Poor Blood Circulation):**
     - **The Human Eye (Lens):** The eye has almost zero vascular blood circulation to dissipate localized heat. Exposure to microwave power densities above $100\text{ mW/cm}^2$ causes coagulative protein denaturation in the lens, resulting in **Cataracts and permanent blindness**.
     - **Testes:** Highly temperature-sensitive; thermal elevation leads to temporary or permanent sterility.
2. **Non-Thermal Effects:**
   - Alteration of cell membrane permeability, calcium ion efflux, and nervous system headaches/fatigue at power densities too low to cause measurable thermal rise.

### 2. Specific Absorption Rate (SAR)
The fundamental metric used to quantify the rate at which radio frequency (RF) energy is absorbed per unit mass of human biological tissue:
$$\boxed{\text{SAR} = \frac{\sigma \cdot E^2}{\rho} = c_t \frac{\Delta T}{\Delta t} \quad (\text{W/kg})}$$
Where:
- $\sigma = \text{tissue electrical conductivity (S/m)}$
- $E = \text{internal electric field (V/m)}$
- $\rho = \text{tissue mass density (kg/m}^3\text{)}$
- $c_t = \text{specific heat capacity of tissue}$

### 3. International Safety Standards & Radiation Limits
- **ICNIRP & IEEE C95.1 Standards:**
  - **Occupational (Controlled Environment):** Maximum permissible exposure $= \mathbf{5\text{ mW/cm}^2}$ averaged over 6 minutes.
  - **General Public (Uncontrolled Environment):** Maximum permissible exposure $= \mathbf{1\text{ mW/cm}^2}$ (or $0.2\text{ mW/cm}^2$ in stringent zones).
  - **Mobile Phone Handsets:** Maximum SAR limit $= \mathbf{1.6\text{ W/kg}}$ averaged over $1\text{ gram}$ of head tissue (FCC standard) or $2.0\text{ W/kg}$ over $10\text{ grams}$ (ICNIRP standard).
