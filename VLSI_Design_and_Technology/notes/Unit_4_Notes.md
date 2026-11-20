# ⚡ Unit 4: Static & Dynamic CMOS Logic, Scaling & Non-Idealities
### VLSI Design and Technology (Course Code: 404182) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 3 OR Question 4 (18 Marks Weightage) | Exhaustive Question Bank**

---

## 📌 Unit 4 Exam Frequency & Coverage Map
*Audited from 13 SPPU University Papers (2022 to 2026)*

| Exam Topic | SPPU Frequency | Probability Tier | Typical Marks | Question Variants Asked |
| :--- | :---: | :---: | :---: | :--- |
| **1. CMOS Logic Implementation & (W/L) Sizing Calculations** | **13 times** | `🔥 100% Guaranteed` | **8 to 10 M** | $Y = AB+CD$, $Y=AB+C(D+E)$, Sizing, Area |
| **2. Short-Channel Non-Ideal Effects (Hot Electron, DIBL, CLM)** | **11 times** | `🔥 100% Guaranteed` | **6 to 8 M** | Velocity Saturation, DIBL, Body Effect, CLM |
| **3. CMOS Inverter Voltage Transfer Characteristics (VTC) & Noise Margins** | **8 times** | `⚡ Very High (75%)` | **8 to 10 M** | 5 Regions, Operating States, $NM_H, NM_L$ |
| **4. CMOS Inverter SPICE Code for AC Analysis** | **4 times** | `⚡ Very High (65%)` | **6 to 8 M** | Complete SPICE Netlist, Model Cards, `.ac` |
| **5. CMOS Power Dissipation & University Numerical Problem** | **4 times** | `📌 High Priority (50%)` | **6 to 8 M** | Dynamic, Static, Short-Circuit, PDP, Numerical |
| **6. Technology Scaling (Constant Field vs Constant Voltage)** | **3 times** | `📌 High Priority (40%)` | **6 to 8 M** | 8-Parameter Scaling Table, Electric Field |
| **7. Transmission Gate (TG) Working & 2:1/4:1 MUX Transistor Savings** | **3 times** | `📌 High Priority (40%)` | **6 to 8 M** | TG Schematic, 2:1 Mux, 50% Transistor Savings |
| **8. Latch-Up Effect & SCR Prevention in CMOS** | **3 times** | `📌 High Priority (40%)` | **6 to 8 M** | Parasitic BJTs, SCR Model, Guard Rings |

---

## 🏆 Question 1: Static CMOS Logic & Transistor Aspect Ratio (W/L) Sizing
**Marks:** 8 to 10 Marks | **Frequency:** 13x across 10 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Design CMOS logic for $Y = AB + CD$. Calculate W/L ratio for NMOS and PMOS area needed on chip. Find the total area."* (Dec 2022, Nov 2024, May 2026)
- *"Draw CMOS logic for $Y = AB + C(D+E)$. Calculate W/L ratio for NMOS and PMOS as well as area needed on chip."* (May 2023, May 2024, May 2025)
- *"Draw NAND, NOR, AND, OR gates using CMOS."* (Oct 2022, Sept 2024)

### 🎯 SPPU 10-Mark Master Scoring Blueprint:
- **Pull-Down Network (PDN - NMOS) Schematic:** 2 Marks
- **Pull-Up Network (PUN - PMOS) Dual Schematic:** 2 Marks
- **Step-by-Step Aspect Ratio $(W/L)$ Sizing Derivations:** 4 Marks
- **Total Transistor Silicon Area Calculation:** 2 Marks

---

### 1.1 Complete Solved Problem: Design & Sizing for $F = AB + C(D+E)$
#### Step 1: Inverted Expression for Direct CMOS Implementation
CMOS naturally inverts logic at the output stage. To realize $F$, we first implement $\bar{F}$:
$$Y = \bar{F} = \overline{AB + C(D+E)}$$
(An inverter is appended at the output if the non-inverted function $F$ is desired).

#### Step 2: Construct Pull-Down Network (PDN - NMOS)
- Logic AND ($\cdot$) corresponds to **Series** NMOS connections.
- Logic OR ($+$) corresponds to **Parallel** NMOS connections.
- For $AB + C(D+E)$:
  - Transistors $D$ and $E$ are in **Parallel** ($D \parallel E$).
  - Transistor $C$ is in **Series** with the $(D \parallel E)$ parallel pair.
  - Transistors $A$ and $B$ are in **Series** ($A - B$).
  - The branch $[A - B]$ is in **Parallel** with the branch $[C - (D \parallel E)]$.

#### Step 3: Construct Pull-Up Network (PUN - PMOS) using Dual Principle
- Replace series connections with parallel, and parallel connections with series:
  - Transistors $D_p$ and $E_p$ are in **Series** ($D_p - E_p$).
  - Transistor $C_p$ is in **Parallel** with $(D_p - E_p)$.
  - Transistors $A_p$ and $B_p$ are in **Parallel** ($A_p \parallel B_p$).
  - The block $[A_p \parallel B_p]$ is in **Series** with the block $[C_p \parallel (D_p - E_p)]$.

#### Step 4: Transistor Aspect Ratio $(W/L)$ Sizing Rules
To achieve symmetrical rise time ($t_r$) and fall time ($t_f$), the effective equivalent on-resistance of the PUN and PDN must match the reference inverter ($R_{\text{eqn}} = R_n$, $R_{\text{eqp}} = R_p$).
Because electron mobility is $\approx 2.5\times$ higher than hole mobility ($\mu_n \approx 2.5 \mu_p$), the reference PMOS must be $2.5\times$ wider than NMOS:
- Base reference inverter: $(W/L)_n = 1$, $(W/L)_p = 2.5$.
- **Series Rule:** If $k$ transistors are in series, their $(W/L)$ must be multiplied by $k$ to keep equivalent resistance $R = k \times (R_0/k) = R_0$.
- **Parallel Rule:** Parallel branches must each independently be sized for the worst-case single active path.

**Sizing the NMOS Pull-Down Network (PDN):**
- Branch 1 ($A$ in series with $B$): 2 transistors in series $\implies (W/L)_{nA} = (W/L)_{nB} = 2 \times 1 = \mathbf{2}$.
- Branch 2 ($C$ in series with parallel pair $D \parallel E$):
  - In worst case, only one of $D$ or $E$ conducts $\implies C$ is in series with 1 transistor $\implies 2$ transistors in series.
  - Sizing: $(W/L)_{nC} = 2 \times 1 = \mathbf{2}$, $(W/L)_{nD} = (W/L)_{nE} = 2 \times 1 = \mathbf{2}$.

**Sizing the PMOS Pull-Up Network (PUN):**
- Worst-case conducting path: Through $[A_p \text{ or } B_p]$ (1 transistor) in series with $[D_p \text{ and } E_p]$ (2 transistors in series).
- Total series PMOS count in worst-case path = $1 + 2 = 3$ transistors in series!
- Sizing for each PMOS in this path: $(W/L)_p = 3 \times 2.5 = \mathbf{7.5}$.
  - $(W/L)_{pA} = (W/L)_{pB} = \mathbf{7.5}$.
  - $(W/L)_{pD} = (W/L)_{pE} = \mathbf{7.5}$.
- For transistor $C_p$: Path through $C_p$ only has 2 transistors in series ($A_p/B_p$ in series with $C_p$).
  - Sizing for $C_p$: $(W/L)_{pC} = 2 \times 2.5 = \mathbf{5.0}$.

#### Step 5: Total Transistor Silicon Area Calculation
Assuming minimum feature channel length $L = 2\lambda$:
$$\text{Area} = \sum (W \times L) = L^2 \sum \left(\frac{W}{L}\right)$$
- $\sum (W/L)_n = 2 + 2 + 2 + 2 + 2 = 10$.
- $\sum (W/L)_p = 7.5 + 7.5 + 5.0 + 7.5 + 7.5 = 35$.
- Total $(W/L) = 10 + 35 = 45$.
- $\text{Total Active Gate Area} = 45 \times (2\lambda \times 2\lambda) = \mathbf{180 \lambda^2}$.

---

## 🏆 Question 2: CMOS Inverter Voltage Transfer Characteristics (VTC) & Noise Margins
**Marks:** 8 to 10 Marks | **Frequency:** 8x across 7 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Draw and explain CMOS Inverter voltage transfer characteristics with all regions in detail."* (May 2023, Dec 2023, May 2025)
- *"Explain the working of CMOS inverter with the help of Voltage Transfer curve. Define Noise Margins."* (Nov 2022, May 2024, May 2026)

### 🎯 2.1 The 5 Operating Regions of CMOS Inverter

| Region | Input Voltage Range ($V_{\text{in}}$) | NMOS State | PMOS State | Output Voltage ($V_{\text{out}}$) |
| :---: | :--- | :---: | :---: | :---: |
| **Region A** | $0 \le V_{\text{in}} < V_{thn}$ | **Cutoff** ($I_{Dn} = 0$) | **Linear** ($V_{DS} \approx 0$) | $V_{\text{out}} = V_{DD}$ (High logic '1') |
| **Region B** | $V_{thn} \le V_{\text{in}} < V_{\text{th}}$ | **Saturation** ($V_{DSn} > V_{GSn}-V_{thn}$) | **Linear** ($|V_{DSp}| < |V_{GSp}|-|V_{thp}|$) | High, dropping with slope $< -1$ |
| **Region C** | $V_{\text{in}} = V_{\text{th}}$ (Switching Threshold) | **Saturation** | **Saturation** | Very steep drop; slope $dV_{\text{out}}/dV_{\text{in}} \to -\infty$ |
| **Region D** | $V_{\text{th}} < V_{\text{in}} \le V_{DD} - |V_{thp}|$ | **Linear** | **Saturation** | Low, approaching $V_{OL}$ with slope $> -1$ |
| **Region E** | $V_{\text{in}} > V_{DD} - |V_{thp}|$ | **Linear** ($V_{DSn} \approx 0$) | **Cutoff** ($I_{Dp} = 0$) | $V_{\text{out}} = 0\text{ V}$ (Low logic '0') |

---

### 🎯 2.2 Critical Voltage Points & Noise Margin Formulas
- **$V_{OH}$ (Output High Voltage):** Maximum output voltage when output is logic 1 ($V_{OH} = V_{DD}$).
- **$V_{OL}$ (Output Low Voltage):** Minimum output voltage when output is logic 0 ($V_{OL} = 0\text{ V}$).
- **$V_{IL}$ (Input Low Voltage):** Maximum input voltage recognized as logic 0 (Point on VTC where slope $\frac{dV_{\text{out}}}{dV_{\text{in}}} = -1$ in Region B).
- **$V_{IH}$ (Input High Voltage):** Minimum input voltage recognized as logic 1 (Point on VTC where slope $\frac{dV_{\text{out}}}{dV_{\text{in}}} = -1$ in Region D).
- **Noise Margin High ($NM_H$):**
  $$NM_H = V_{OH} - V_{IH} = V_{DD} - V_{IH}$$
- **Noise Margin Low ($NM_L$):**
  $$NM_L = V_{IL} - V_{OL} = V_{IL} - 0 = V_{IL}$$

---

## 🏆 Question 3: SPICE Code for CMOS Inverter AC Analysis
**Marks:** 6 to 8 Marks | **Frequency:** 4x across 3 papers (<span class="badge badge-high">65% Priority</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Write SPICE code for CMOS inverter for AC analysis."* (May 2023, Dec 2024, May 2026)

### 💡 Complete, Syntactically Valid SPICE Program

```spice
* SPICE AC Analysis of CMOS Inverter
* Course: VLSI Design & Technology (404182)

* --- Power Supplies ---
Vdd 1 0 DC 3.3V
Vin 2 0 DC 1.65V AC 1.0V

* --- MOSFET Instantiations: Mname Drain Gate Source Substrate Model W L ---
* PMOS Transistor (Drain=3, Gate=2, Source=1, Substrate=1)
Mp 3 2 1 1 PMOS_MODEL W=5u L=0.5u

* NMOS Transistor (Drain=3, Gate=2, Source=0, Substrate=0)
Mn 3 2 0 0 NMOS_MODEL W=2u L=0.5u

* --- Load Capacitance ---
Cload 3 0 50fF

* --- Transistor Model Cards ---
.MODEL NMOS_MODEL NMOS (LEVEL=1 VTO=0.7 KP=100u GAMMA=0.4 LAMBDA=0.02)
.MODEL PMOS_MODEL PMOS (LEVEL=1 VTO=-0.7 KP=40u GAMMA=0.4 LAMBDA=0.02)

* --- AC Analysis Command: Decade variation, 10 pts/dec, 1kHz to 100MHz ---
.AC DEC 10 1K 100MEG

* --- Print and Plot AC Output Voltage Gain & Phase ---
.PRINT AC V(3) VP(3)
.PLOT AC V(3) VP(3)

.END
```

---

## 🏆 Question 4: Short-Channel Non-Ideal Effects in Deep Submicron CMOS
**Marks:** 6 to 8 Marks | **Frequency:** 11x across 9 papers (<span class="badge badge-critical">100% Guaranteed</span>)  

### 4.1 Velocity Saturation
- **Mechanism:** In long-channel MOSFETs, electron drift velocity increases linearly with electric field ($v = \mu \mathcal{E}$). In short-channel MOSFETs ($L < 0.25\,\mu\text{m}$), the lateral electric field $\mathcal{E} \approx V_{DS}/L$ reaches high values ($> 10^4\text{ V/cm}$), causing carriers to collide frequently with optical phonons.
- Velocity clamps at a maximum limit: $v_{\text{sat}} \approx 10^7\text{ cm/s}$.
- **Consequence:** Drain saturation current collapses from a quadratic dependence on $(V_{GS}-V_{th})^2$ to a **linear dependence**:
  $$I_{D,\text{sat}} = W C_{ox} v_{\text{sat}} (V_{GS} - V_{th})$$
- Transconductance ($g_m = \partial I_D/\partial V_{GS}$) saturates to a constant value independent of channel length.

### 4.2 Hot Electron / Hot Carrier Injection (HCI)
- **Mechanism:** Near the drain pinch-off region, intense electric fields accelerate electrons to extremely high kinetic energies ("hot electrons").
- **Consequence:** These hot carriers collide with the silicon lattice (impact ionization), creating electron-hole pairs. High-energy electrons overcome the $3.1\text{ eV}$ $\text{Si-SiO}_2$ potential barrier and inject into the thin gate dielectric, becoming permanently trapped.
- Trapped negative charges cause permanent **threshold voltage drift ($\Delta V_{th} > 0$)**, transconductance degradation, and eventual circuit failure over time.

### 4.3 Drain-Induced Barrier Lowering (DIBL)
- **Mechanism:** In short channels, the depletion region around the drain extends significantly toward the source, electrostatically lowering the potential energy barrier between source and channel.
- **Consequence:** The drain assumes control over channel inversion instead of the gate alone:
  $$\Delta V_{th} = -\eta V_{DS}$$
- Causes severe **subthreshold leakage current** ($I_{\text{sub}} \propto 10^{\frac{V_{GS}-V_{th}}{S}}$) even when $V_{GS} = 0\text{ V}$, drastically increasing standby power consumption.

### 4.4 Channel Length Modulation (CLM)
- **Mechanism:** When $V_{DS} > V_{DS,\text{sat}}$, the channel pinches off before reaching the drain. The effective electrical channel length shortens to $L' = L - \Delta L$.
- **Consequence:** Current increases slightly with $V_{DS}$ in the saturation region:
  $$I_D = I_{D0} (1 + \lambda V_{DS})$$
- Generates a finite output resistance $r_o = \frac{1}{\lambda I_D}$, limiting the maximum voltage gain of CMOS analog amplifiers.

### 4.5 Body Effect (Substrate Bias Effect)
- **Mechanism:** When source-to-substrate reverse voltage $V_{SB} > 0$, the depletion layer under the channel widens, requiring more gate charge to invert the channel.
- **Formula:**
  $$V_{th} = V_{th0} + \gamma \left(\sqrt{2\phi_F + V_{SB}} - \sqrt{2\phi_F}\right)$$
  - $\gamma$ = Body effect coefficient ($0.4 \text{ to } 0.6 \text{ V}^{1/2}$).
  - $2\phi_F$ = Surface inversion potential ($\approx 0.6\text{ V}$).

---

## 🏆 Question 5: CMOS Power Dissipation & University Numerical Problem
**Marks:** 6 to 8 Marks | **Frequency:** 4x across 3 papers (<span class="badge badge-high">50% Priority</span>)  

### 5.1 Three Components of Power Dissipation:
1. **Dynamic Switching Power ($P_{\text{dynamic}}$):** Dominant component caused by charging and discharging load capacitances:
   $$P_{\text{dynamic}} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$$
   - $\alpha$ = Switching activity factor ($0 \le \alpha \le 1$).
   - $C_L$ = Total load capacitance.
   - $f$ = Operating clock frequency.
2. **Short-Circuit Power ($P_{\text{sc}}$):** Direct current from $V_{DD}$ to $GND$ during signal transitions when both PMOS and NMOS are momentarily on simultaneously:
   $$P_{\text{sc}} = I_{\text{peak}} \cdot t_{\text{sc}} \cdot V_{DD} \cdot f$$
3. **Static / Leakage Power ($P_{\text{static}}$):** Subthreshold leakage, gate dielectric tunneling, and reverse-biased junction leakage:
   $$P_{\text{static}} = I_{\text{leak}} \cdot V_{DD}$$

---

### 5.2 Full Solved Numerical Problem from SPPU Exam Paper
**Problem Statement:**
> *"A CMOS logic circuit operates at $10\text{ MHz}$ and $3\text{ V}$ with a load of $100\text{ pF}$. The static power dissipation is $100\,\mu\text{W}$. Calculate the total power dissipation if the operating frequency is increased to $100\text{ MHz}$."*

**Solution:**
- **Given Parameters:**
  - $V_{DD} = 3\text{ V}$
  - $C_L = 100\text{ pF} = 100 \times 10^{-12}\text{ F}$
  - $P_{\text{static}} = 100\,\mu\text{W} = 0.1\text{ mW}$ (constant, independent of frequency)
  - Switching activity $\alpha = 1$ (standard assumption unless specified)

- **Case 1: At $f_1 = 10\text{ MHz}$ ($10 \times 10^6\text{ Hz}$):**
  $$P_{\text{dyn1}} = C_L \cdot V_{DD}^2 \cdot f_1 = (100 \times 10^{-12}) \times (3)^2 \times (10 \times 10^6) = 100 \times 10^{-12} \times 9 \times 10^7 = 9\text{ mW}$$
  $$P_{\text{total1}} = P_{\text{dyn1}} + P_{\text{static}} = 9\text{ mW} + 0.1\text{ mW} = \mathbf{9.1\text{ mW}}$$

- **Case 2: At $f_2 = 100\text{ MHz}$ ($100 \times 10^6\text{ Hz}$):**
  $$P_{\text{dyn2}} = C_L \cdot V_{DD}^2 \cdot f_2 = (100 \times 10^{-12}) \times (3)^2 \times (100 \times 10^6) = 100 \times 10^{-12} \times 9 \times 10^8 = 90\text{ mW}$$
  $$P_{\text{total2}} = P_{\text{dyn2}} + P_{\text{static}} = 90\text{ mW} + 0.1\text{ mW} = \mathbf{90.1\text{ mW}}$$

**Final Exam Answer:**
When frequency increases 10-fold to $100\text{ MHz}$, dynamic power scales linearly by $10\times$ (from $9\text{ mW}$ to $90\text{ mW}$), resulting in a **Total Power Dissipation of $90.1\text{ mW}$**.

---

## 🏆 Question 6: Technology Scaling (Constant Field vs Constant Voltage)
**Marks:** 6 Marks | **Frequency:** 3x across 3 papers (<span class="badge badge-high">40% Priority</span>)  

| Device Parameter | Scaling Factor Symbol | Full / Constant Field Scaling ($\kappa > 1$) | Constant Voltage Scaling ($\kappa > 1$) |
| :--- | :---: | :---: | :---: |
| **Channel Length ($L$), Width ($W$)** | $1/\kappa$ | $1/\kappa$ | $1/\kappa$ |
| **Gate Oxide Thickness ($t_{ox}$)** | $1/\kappa$ | $1/\kappa$ | $1/\kappa$ |
| **Supply Voltage ($V_{DD}$)** | $V$ | **$1/\kappa$** (Decreased) | **$1$** (Unchanged) |
| **Substrate Doping ($N_A$)** | $N_A$ | $\kappa$ | $\kappa^2$ |
| **Gate Capacitance ($C_g = W L C_{ox}$)** | $C_g$ | $1/\kappa$ | $1/\kappa$ |
| **Drain Current ($I_D$)** | $I_D$ | $1/\kappa$ | $\kappa$ |
| **Gate Propagation Delay ($\tau = C V / I$)** | $\tau$ | **$1/\kappa$** ($30\%$ faster per gen) | **$1/\kappa^2$** |
| **Power Dissipation per Gate ($P = I V$)** | $P$ | **$1/\kappa^2$** | **$\kappa$** (Power increases!) |
| **Power Density ($P / A$)** | $P/A$ | **$1$** (Safe constant density) | **$\kappa^3$** (Catastrophic thermal runaway!) |

---

## 🏆 Question 7: Transmission Gate (TG) Working & 2:1 MUX Transistor Savings
**Marks:** 6 to 8 Marks | **Frequency:** 3x across 3 papers (<span class="badge badge-high">40% Priority</span>)  

### 7.1 Transmission Gate Working Principle
- Consists of an NMOS and PMOS transistor connected in parallel with complementary control signals ($S$ and $\bar{S}$).
- **Overcoming Single Transistor Limitations:**
  - NMOS passes a **Strong '0'** ($0\text{ V}$) but a **Weak '1'** ($V_{DD} - V_{thn}$).
  - PMOS passes a **Strong '1'** ($V_{DD}$) but a **Weak '0'** ($|V_{thp}|$).
  - In parallel, they pass **Rail-to-Rail Strong '0' and Strong '1'** with near-constant on-resistance across all input levels.

### 7.2 2:1 Multiplexer: Transmission Gate vs. Static CMOS
- **Transmission Gate 2:1 MUX:** Requires only **2 Transmission Gates (4 transistors) + 1 Inverter for $\bar{S}$ (2 transistors)** = **6 Transistors Total**.
- **Static CMOS 2:1 MUX:** Requires 2 AND gates, 1 OR gate, and 1 inverter = **12 to 14 Transistors Total**.
- **Transistor Savings Calculation:**
  $$\text{Savings} = \frac{14 - 6}{14} \times 100\% = \mathbf{57.1\% \text{ Transistor Reduction!}}$$

---

## 🏆 Question 8: Latch-Up Effect in CMOS & Prevention
**Marks:** 6 to 8 Marks | **Frequency:** 3x across 3 papers (<span class="badge badge-high">40% Priority</span>)  

- **Physical Mechanism:** In bulk CMOS fabrication, the proximity of n-well and p-substrate creates parasitic bipolar transistors: a vertical $p\text{-}n\text{-}p$ BJT (PMOS source - n-well - p-substrate) and a lateral $n\text{-}p\text{-}n$ BJT (NMOS source - p-substrate - n-well).
- These form a cross-coupled **Silicon Controlled Rectifier (SCR)** ($p\text{-}n\text{-}p\text{-}n$) structure.
- **Regenerative Trigger Condition:** If current spikes induce a voltage drop across parasitic substrate/well resistances ($I \cdot R > 0.7\text{ V}$), the loop gain exceeds unity:
  $$\beta_1 \times \beta_2 \ge 1$$
- The SCR triggers into a permanent short circuit between $V_{DD}$ and $GND$, causing high currents that melt silicon metallization.
- **SPPU Layout Prevention Rules:**
  1. **Guard Rings:** Surround n-wells with $p^+$ guard rings connected to $GND$, and NMOS with $n^+$ guard rings connected to $V_{DD}$.
  2. **Frequent Well Taps:** Place $V_{DD}$ and $GND$ substrate taps every $20\,\mu\text{m}$ to keep parasitic resistances $R_{\text{well}}$ and $R_{\text{sub}}$ extremely low.
  3. **Epitaxial Substrates:** Fabricate circuits on thin, low-resistance epitaxial layers grown on heavily doped substrates.
