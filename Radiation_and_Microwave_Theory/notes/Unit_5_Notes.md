# 📡 Unit 5: Solid-State Microwave Devices & Measurements
### Radiation and Microwave Theory (Course Code: 404181) | SPPU 2019 Course Pattern
**Based on Prof. Barapate's Lecture Series (Videos 21, 22, 23, 24, 25, 26, 32, 33) & 13 University Question Papers**

---

## 📌 Syllabus & Lecture Map
| Lecture # | Topic Taught by Prof. Barapate | SPPU Exam Focus | Weightage |
| :---: | :--- | :--- | :---: |
| **Video 21** | Microwave Transistors & Varactor Diode | BJT/MESFET, variable capacitance $C(V)$ & figure of merit | 6 Marks |
| **Video 22** | Parametric Amplifiers & PIN Diode | Manley-Rowe power formulas, PIN RF switch & limiter | 6 Marks |
| **Video 23** | Schottky Barrier Diode | Metal-semiconductor junction, majority carriers vs PN junction | 6 Marks |
| **Video 24** | Tunnel Diode | Quantum mechanical tunneling, energy band diagrams under forward bias | 6 Marks |
| **Video 25** | Gunn Diode | RWH two-valley theory (GaAs), Negative Differential Resistance (NDR) | 6-8 Marks |
| **Video 26** | IMPATT and TRAPATT Diodes | Read diode, avalanche impact ionization + transit time delay | 6-8 Marks |
| **Video 33** | Microwave Measurement Techniques | Slotted line, Low VSWR vs Double Minimum high VSWR, Bolometer power | 6-8 Marks |
| **Video 32** | Quick Revision (Solid-State Devices) | Complete diode comparison tables, formulas & exam keywords | High Yield |

---

## 🎯 Question 1: Gunn Diode: Two-Valley RWH Theory & Transferred Electron Effect
> **Exam Repetition:** 8 times in SPPU Papers | **Marks:** 6 to 8 Marks (100% Repetitive!)

Unlike ordinary diodes, the Gunn diode is a bulk semiconductor device fabricated from compound semiconductors like **Gallium Arsenide (GaAs)** or **Indium Phosphide (InP)**. It has **no PN junction** and relies entirely on bulk negative differential resistance.

### 1. Two-Valley Model (Ridley-Watkins-Hilsum / RWH Theory)
Prof. Barapate explains that the conduction band of GaAs possesses two distinct energy sub-bands (valleys) separated by an energy gap $\Delta E = 0.36\text{ eV}$:

| Parameter | Lower Valley (Central / $\Gamma$) | Upper Valley (Satellite / $L$) |
| :--- | :--- | :--- |
| **Energy Level** | Lower energy ground state. | Higher by $\Delta E = 0.36\text{ eV}$. |
| **Effective Mass ($m^*$)** | Small ($m_1^* = 0.068 m_0$). | Large ($m_2^* = 1.2 m_0$). |
| **Electron Mobility ($\mu$)** | **Very High** ($\mu_1 \approx 8000\text{ cm}^2/\text{V}\cdot\text{s}$). | **Very Low** ($\mu_2 \approx 180\text{ cm}^2/\text{V}\cdot\text{s}$). |

### 2. Negative Differential Resistance (NDR) Mechanism
1. **Low Electric Field ($E < E_{\text{th}} \approx 3.2\text{ kV/cm}$):**
   - Thermal energy of electrons is low; virtually all electrons reside in the lower central valley.
   - High mobility causes electron drift velocity to increase linearly with applied field: $v = \mu_1 E$ (Ohmic behavior).
2. **Threshold Electric Field ($E = E_{\text{th}}$):**
   - Electrons attain high kinetic energy and reach peak drift velocity ($v_{\text{peak}} \approx 2.2 \times 10^7\text{ cm/s}$).
3. **High Electric Field ($E > E_{\text{th}}$):**
   - Energetic electrons are scattered from the high-mobility lower valley into the low-mobility upper satellite valley (**Transferred Electron Effect**).
   - Because upper valley electrons are much heavier and move sluggishly, the overall average drift velocity **DROPS** as electric field increases!
   - This produces **Negative Differential Mobility and Resistance (NDR)**:
     $$\boxed{\frac{dv}{dE} < 0 \implies R_d = \frac{dV}{dI} < 0}$$

```text
    Electron Drift
    Velocity (v)
         ▲
         │        Peak Velocity (2.2 x 10^7 cm/s)
         │           ╭────╮
         │          ╱      ╲  Negative Differential
         │         ╱        ╲  Resistance (NDR) dv/dE < 0
         │        ╱          ╰──────────────────────
         │       ╱             Saturation Velocity (~10^7 cm/s)
         │      ╱
         └─────┴─────────────────────────► Electric Field (E)
             Eth = 3.2 kV/cm
```

### 3. Gunn Domain Formation & Modes of Operation
- High-field dipole domains form at the cathode, drift along the length $L$ at saturation velocity $v_{\text{sat}} \approx 10^7\text{ cm/s}$, and disappear at the anode, generating continuous microwave current pulses:
  $$f_{\text{Gunn}} = \frac{v_{\text{sat}}}{L}$$
- **Modes:** (1) Transit-time domain mode, (2) Delayed domain mode, (3) Quenched domain mode, (4) LSA (Limited Space-Charge Accumulation) mode for high power and frequencies up to $100\text{ GHz}$.

---

## 🎯 Question 2: IMPATT Diode (Impact Avalanche Transit Time)
> **Exam Repetition:** 10 times in SPPU Papers | **Marks:** 6 Marks

The IMPATT diode is a reverse-biased PN junction semiconductor oscillator that generates negative resistance through two sequential physical mechanisms: **Avalanche Multiplication** and **Transit-Time Delay**.

### 1. The $180^\circ$ Phase Lag Mechanism
To produce dynamic negative resistance ($P_{\text{RF}} = V_{\text{RF}} I_{\text{RF}} \cos\theta < 0$), the AC RF current must lag the AC RF voltage by a total phase angle of **$\mathbf{180^\circ}$ ($\pi$ radians)**:
1. **$90^\circ$ Phase Lag via Avalanche Multiplication:**
   - Under heavy reverse bias near breakdown ($E > 400\text{ kV/cm}$), impact ionization generates electron-hole pairs.
   - The rate of carrier generation is proportional to the number of existing carriers. Consequently, peak hole-electron concentration lags the peak RF voltage by exactly **$90^\circ$**.
2. **$90^\circ$ Phase Lag via Drift Transit-Time:**
   - The generated bunches of electrons/holes drift across the high-field depletion region $W$ at constant saturation velocity $v_s$.
   - By engineering the depletion width $W$ such that transit time $\tau = \frac{W}{v_s} = \frac{T}{2}$, the current pulse emerges at the external terminals after an additional phase delay of **$90^\circ$**.
3. **Total Phase Shift:**
   $$\boxed{\theta_{\text{total}} = 90^\circ (\text{Avalanche}) + 90^\circ (\text{Transit Delay}) = \mathbf{180^\circ}}$$
   $$\text{Dynamic Resistance: } R_d = \frac{V_{\text{RF}}}{I_{\text{RF}} \angle 180^\circ} = \mathbf{-|R_d|}$$

---

## 🎯 Question 3: PIN Diode Construction, Operation & Applications
> **Exam Repetition:** 10 times in SPPU Papers | **Marks:** 6 Marks

A PIN diode consists of an undoped, high-resistivity **Intrinsic ($I$) layer** sandwiched between heavily doped $P^+$ and $N^+$ semiconductor regions.

```text
       P+ Region           Intrinsic (I) Region           N+ Region
    [ Heavily Doped ]   [ High Resistivity Silicon ]   [ Heavily Doped ]
         Anode ──►                 (W)                  ◄── Cathode
```

### 1. Working Principles
1. **Under Forward Bias (Low RF Resistance):**
   - DC forward current injects holes from $P^+$ and electrons from $N^+$ into the intrinsic layer.
   - High carrier concentration floods the $I$-layer, dropping its RF resistance to less than **$1\Omega$**. The diode acts as a **closed switch (short circuit)**.
2. **Under Reverse Bias (High RF Impedance):**
   - Intrinsic layer is completely swept free of mobile charge carriers.
   - The thick depletion width $W$ creates a tiny parasitic capacitance ($C_j \approx 0.1\text{ pF}$) and huge parallel resistance ($R_p > 10\text{ k}\Omega$). The diode acts as an **open switch**.

### 2. Primary University Applications
- **Microwave Single-Pole Double-Throw (SPDT) Switches:** High switching speed ($< 10\text{ ns}$).
- **Voltage-Controlled Attenuator:** Varying DC bias continuously modulates the RF resistance of the $I$-layer.
- **Microwave Receiver Limiter / TR Switch:** Protects sensitive radar mixers from high-power transmitted pulses.

---

## 🎯 Question 4: VSWR Measurement: Low VSWR vs Double Minimum Method
> **Exam Repetition:** 12 times in SPPU Papers | **Marks:** 6 to 8 Marks (100% Guaranteed!)

A slotted section of rectangular waveguide equipped with a movable carriage and tunable crystal detector probe is used to measure standing wave patterns.

### 1. Measurement of Low VSWR ($S < 10$)
1. Terminate the slotted line with the unknown load.
2. Move the carriage probe along the longitudinal slot until the crystal detector reads maximum deflection ($V_{\max}$).
3. Move the probe to an adjacent voltage minimum ($V_{\min}$).
4. Calculate Voltage Standing Wave Ratio:
   $$\boxed{S = \frac{V_{\max}}{V_{\min}}}$$
5. Calculate magnitude of reflection coefficient:
   $$|\Gamma| = \frac{S - 1}{S + 1}$$

### 2. Measurement of High VSWR ($S > 10$): Double Minimum Method
- **Problem with Direct Method:** For high VSWR, $V_{\min}$ is extremely small (near noise floor), and probe square-law detector response introduces severe non-linear measurement errors.
- **Double Minimum Procedure:**
  1. Locate the exact position of minimum voltage $V_{\min}$ at distance $d_0$ and record the power level.
  2. Move probe to the right of $d_0$ until the power reading **doubles (3 dB above minimum, $V = 2V_{\min}$)**. Record position as $d_1$.
  3. Move probe to the left of $d_0$ until power reading doubles again. Record position as $d_2$.
  4. Measure the distance between double-minimum points: $\Delta d = |d_1 - d_2|$.
  5. Prof. Barapate derives the High VSWR formula:
     $$\boxed{S = \frac{\lambda_g}{\pi \cdot \Delta d} = \frac{\lambda_g}{\pi |d_1 - d_2|}}$$
     Where $\lambda_g = 2 \times (\text{distance between consecutive minima})$.

---

## 🎯 Question 5: Microwave Power Measurement: Bolometer Technique
> **Exam Repetition:** 6 times in SPPU Papers | **Marks:** 6 Marks

### 1. Bolometer Elements
A temperature-sensitive resistance element that absorbs microwave RF power and changes its electrical resistance:
- **Barretter:** Thin platinum wire with **Positive Temperature Coefficient (PTC)** ($R$ increases with $T$).
- **Thermistor:** Semiconductor bead of metal oxides with **Negative Temperature Coefficient (NTC)** ($R$ decreases with $T$). Highly rugged and widely used.

### 2. Balanced Wheatstone Bridge Operation
1. The bolometer element is mounted inside a waveguide mount and forms one active arm of a self-balancing Wheatstone bridge.
2. The bridge is initially energized with low-frequency audio/DC power until balanced ($R_{\text{bolo}} = R$). Initial DC power is $P_{\text{DC1}}$.
3. When microwave RF power ($P_{\text{RF}}$) enters the mount, it is absorbed by the thermistor, heating it and unbalancing the bridge.
4. The audio bias supply automatically decreases its power until balance is restored ($P_{\text{DC2}}$).
5. The unknown microwave RF power is equal to the substituted DC bias power:
   $$\boxed{P_{\text{RF}} = P_{\text{DC1}} - P_{\text{DC2}}}$$
