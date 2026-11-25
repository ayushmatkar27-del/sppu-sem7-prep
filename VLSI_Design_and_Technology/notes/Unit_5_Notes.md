# ⚡ Unit 5: Physical Design, Stick Diagrams & Layout Rules
### VLSI Design and Technology (Course Code: 404182) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 5 OR Question 6 (17 Marks Weightage) | Complete Exam-Ready Model Answers**

---

## 📌 Unit 5 Exam Frequency & Coverage Map
*Audited across 8 Official SPPU End-Sem University Papers (Nov/Dec 2022 to May/Jun 2026) — 38 Questions Analyzed*

| Exam Topic | Frequency | Priority Tier | Typical Marks | Key Questions Covered |
| :--- | :---: | :---: | :---: | :--- |
| **1. Layout Parasitics: Antenna Effect, Crosstalk & Electromigration** | **10 times** | `🔥 CRITICAL (88%)` | **5 to 9 M** | Antenna Effect & mitigation, Electromigration (Black's Law), Crosstalk |
| **2. Stick Diagrams, Euler's Path & CMOS Layouts** | **6+ times** | `🔥 CRITICAL (75%)` | **6 to 18 M** | CMOS Inverter, 2-input NAND, 2-input NOR, Half Adder, $Y=\overline{A+B}$ |
| **3. Lambda ($\lambda$) Based Design Rules (Mead-Conway)** | **6 times** | `🔥 CRITICAL (75%)` | **6 to 9 M** | Minimum width/spacing rules with diagrams, Scalability vs Micron rules |
| **4. SPICE Simulation & CMOS Inverter Code (AC, DC, Transient)** | **6 times** | `⚡ HIGH IMP (63%)` | **6 to 8 M** | SPICE code for CMOS Inverter AC analysis, DC & Transient analysis |
| **5. Physical Verification Flow: DRC, ERC, LVS & Extraction** | **5 times** | `📌 HIGH (40%)` | **6 to 8 M** | DRC significance, ERC short note, LVS, Circuit Extraction |
| **6. ASIC Design Flow & Cell Design Specification** | **4 times** | `📌 HIGH (40%)` | **6 Marks** | ASIC Design Flow diagram & steps, Cell Design Specification |
| **7. CMOS Transistor Fabrication Process (N-Well Steps)** | **1 to 3 times** | `📌 STANDARD` | **8 to 12 M** | 9-step N-Well CMOS fabrication with cross-section diagrams |

---

## 🏆 Topic 1: Stick Diagrams, Euler's Path & CMOS Layouts
**Typical Marks:** 6 to 18 Marks | **Exam Frequency:** Asked in almost every paper (`May 2023, May 2024, Nov 2022, Nov 2023, Nov 2024, Nov 2025`)

### 🎯 1.1 What is a Stick Diagram? (2-Mark Definition)
A **Stick Diagram** is a simplified, dimensionless topological representation (cartoon) of an integrated circuit layout. It uses colored or patterned lines ("sticks") to represent physical layers (diffusion, polysilicon, metal) and their intersections, without specifying exact geometric widths or $\lambda$-coordinates.
- **Golden Rule:** Wherever **Polysilicon (Red)** crosses **n-Diffusion (Green)**, an **NMOS transistor** is formed. Wherever **Polysilicon (Red)** crosses **p-Diffusion (Yellow)**, a **PMOS transistor** is formed.

#### Standard Layer Color Coding & Exam Monochrome Conventions:
| Layer Name | Industry Color | Monochrome Exam Pen Pattern | Minimum $\lambda$ Rule |
| :--- | :---: | :--- | :---: |
| **Metal-1** ($V_{DD}$, $GND$, Signals) | **BLUE** | Thick solid line | **$3\lambda$** |
| **Polysilicon** (Gate Inputs) | **RED** | Thin solid line | **$2\lambda$** |
| **n-Diffusion** (NMOS Source/Drain) | **GREEN** | Double parallel line / Solid thin | **$2\lambda$** |
| **p-Diffusion** (PMOS Source/Drain) | **YELLOW / BROWN** | Dotted line / Cross-hatched | **$2\lambda$** |
| **Demarcation Line** (N-Well boundary) | **BROWN DASHED** | Long-dashed horizontal centerline | — |
| **Contact Cut (Via)** | **BLACK 'X'** | Cross mark ($\times$) inside a small square | **$2\lambda \times 2\lambda$** |

---

### 🎯 1.2 Stick Diagram of CMOS Inverter ($Y = \overline{A}$)
*Asked in: May 2023, May 2024, Nov 2023, Nov 2025*

1. **Circuit Logic:** 1 PMOS (Pull-Up, gate $A$) in series with 1 NMOS (Pull-Down, gate $A$).
2. **Stick Diagram Layout:**
```text
VDD Rail (Blue Metal-1) ═════════════════════════════════════════
                                  │ (Contact X)
p-Diffusion (Yellow) ───────[ Source ]───────[ Drain ]───────────
                                         │
Polysilicon (Red) ───────────────────────┼────────── Gate Input A
                                         │
Demarcation Line - - - - - - - - - - - - │ - - - - - - - - - - -
                                         │
n-Diffusion (Green) ────────[ Source ]───────[ Drain ]───────────
                                  │ (Contact X)     │ (Contact X)
                                  │                 └───► Output Y (Blue Metal-1)
GND Rail (Blue Metal-1) ══════════╧══════════════════════════════
```
*(Note: Connect PMOS Drain and NMOS Drain vertically using a Blue Metal-1 strap with Contact Cuts $\times$ at both ends to form Output $Y$.)*

---

### 🎯 1.3 Stick Diagram of 2-Input CMOS NAND Gate ($Y = \overline{A \cdot B}$)
*Asked in: May 2024, Nov 2023, Nov 2025*

- **Topology:** **PMOS** transistors ($A, B$) are in **PARALLEL**; **NMOS** transistors ($A, B$) are in **SERIES**.
```text
VDD Rail (Blue Metal-1) ══════════════════════════════════════════════
                             │ (Contact X)                 │ (Contact X)
p-Diffusion (Yellow) ────[ S_A ]─────────[ Drain Y ]───────[ S_B ]────
                             │               │                 │
Polysilicon (Red) ───────────┼───────────────┼─────────────────┼──────
                          Gate A             │              Gate B
                             │               │ (Metal-1 Y)     │
Demarcation Line - - - - - - │ - - - - - - - │ - - - - - - - - │ - - -
                             │               │                 │
n-Diffusion (Green) ─────[ Drain Y ]─────[ Mid Node ]──────[ S_B ]────
                             │ (Contact X)                     │ (Contact X)
                             │                                 │
GND Rail (Blue Metal-1) ═════╪═════════════════════════════════╧══════
                             └──► Output Y (Connects PMOS Drain Y to NMOS Drain Y)
```
*(In exam: clearly label Gate $A$, Gate $B$, $V_{DD}$, $GND$, Output $Y$, Contact cuts $\times$, and the Demarcation Line.)*

---

### 🎯 1.4 Stick Diagram of 2-Input CMOS NOR Gate ($Y = \overline{A + B}$)
*Asked in: May 2024, Nov 2023, Nov 2025*

- **Topology:** **PMOS** transistors ($A, B$) are in **SERIES**; **NMOS** transistors ($A, B$) are in **PARALLEL**.
```text
VDD Rail (Blue Metal-1) ══════════════════════════════════════════════
                             │ (Contact X)
p-Diffusion (Yellow) ────[ S_A ]─────────[ Mid Node ]──────[ Drain Y ]
                             │                                 │ (Contact X)
Polysilicon (Red) ───────────┼─────────────────────────────────┼──────
                          Gate A                            Gate B
                             │                                 │
Demarcation Line - - - - - - │ - - - - - - - - - - - - - - - - │ - - -
                             │                                 │
n-Diffusion (Green) ─────[ S_A (GND) ]───[ Drain Y ]───────[ S_B (GND) ]
                             │ (Contact X)   │ (Contact X)     │ (Contact X)
                             │               └─► Output Y ◄────┘ (Join to PMOS Drain Y)
GND Rail (Blue Metal-1) ═════╧═════════════════════════════════╧══════
```

---

### 🎯 1.5 Master 18-Mark Question: CMOS Half Adder (Truth Table, Circuit, Euler's Path & Stick Diagram)
*Asked verbatim in Nov/Dec 2022 (18 Marks!)*

#### Step 1: Block Diagram & Truth Table
| Input $A$ | Input $B$ | **Sum ($S = A \oplus B$)** | **Carry ($C = A \cdot B$)** |
| :---: | :---: | :---: | :---: |
| 0 | 0 | **0** | **0** |
| 0 | 1 | **1** | **0** |
| 1 | 0 | **1** | **0** |
| 1 | 1 | **0** | **1** |

- **Boolean Equations for CMOS Implementation:**
  $$\text{Carry} = A \cdot B = \overline{\overline{A \cdot B}} \quad (\text{2-input NAND + Inverter})$$
  $$\text{Sum} = A \oplus B = \bar{A}B + A\bar{B} = \overline{\overline{A}B + A\bar{B}} \text{ inverted, or } \text{Sum} = (A+B)\cdot \overline{A\cdot B}$$

#### Step 2: CMOS Transistor-Level Circuit
1. **Carry Circuit:** Standard 2-input CMOS NAND gate producing $\overline{AB}$, followed by a CMOS Inverter producing $C = AB$ (Total: 6 transistors).
2. **Sum Circuit (using $C_{\text{bar}} = \overline{AB}$):**
   - Since $\text{Sum} = \overline{\overline{(A+B)\cdot \overline{AB}}} = \overline{\overline{A+B} + AB}$, implement static CMOS AOI/OAI gate for $\overline{\text{Sum}} = \overline{A}\overline{B} + AB$ followed by an Inverter, OR directly draw the static CMOS XOR network:
   - **Pull-Up Network (PMOS):** $(\bar{A} \text{ in series with } \bar{B})$ in parallel with $(A \text{ in series with } B)$ to get $\overline{A \oplus B}$, or $(A \text{ in series with } \bar{B})$ in parallel with $(\bar{A} \text{ in series with } B)$ to get $A \oplus B$ directly (requires $\bar{A}, \bar{B}$ via inverters).

#### Step 3: Euler's Path Method for Unbroken Diffusion
- **Definition:** An **Euler's Path** is a continuous graph path that traverses every edge (transistor) **exactly once** without lifting the pen.
- **4-Step Algorithm:**
  1. Draw the **PMOS (PUN)** graph (Nodes = electrical junctions; Edges = PMOS transistors).
  2. Draw the **NMOS (PDN)** graph (Nodes = electrical junctions; Edges = NMOS transistors).
  3. Find an identical edge sequence in both graphs (e.g., for Carry NAND gate: $A \to B$; for Sum XOR gate: $A \to B \to \bar{A} \to \bar{B}$).
  4. Arrange the vertical Polysilicon gate lines in that exact Euler order so that p-diffusion and n-diffusion remain completely unbroken (saving silicon area and lowering parasitic capacitance).

#### Step 4: Stick Diagram Execution for Carry & Sum
- **Carry Stick Diagram:** Place 2-input NAND stick diagram ($A, B$) followed immediately to the right by an Inverter stick diagram (gate driven by NAND output $\overline{AB}$).
- **Sum Stick Diagram:** Place 4 vertical polysilicon tracks in Euler order ($A, B, \bar{A}, \bar{B}$). Run continuous p-diffusion across the top and continuous n-diffusion across the bottom, connecting drain nodes via Metal-1 straps to output **Sum**.

---

## 🏆 Topic 2: Layout Parasitics & Signal Integrity (10x Repeated!)
**Typical Marks:** 5 to 9 Marks | **Exam Frequency:** 10 times across 7/8 papers (`May 2023–2026, Nov 2023–2025`)

### 🎯 2.1 Antenna Effect (Plasma-Induced Gate Oxide Damage)
*Asked 6 times! (May 2023, May 2024, May 2025, May 2026, Nov 2023, Nov 2025)*

1. **Definition & Cause:** During Reactive Ion Etching (RIE) of metal layers, plasma bombards the wafer with charged ions. Long floating metal wires act like "antennas," collecting electrostatic charge.
2. **Damage Mechanism:** If this long metal wire is connected to a MOSFET polysilicon gate *before* it is connected to any source/drain diffusion, the accumulated charge has no discharge path to the substrate. Voltage builds up ($V = Q/C_{\text{ox}}$) and breaks down the ultra-thin gate oxide ($\text{SiO}_2$), permanently destroying the transistor.
3. **Antenna Ratio Rule:**
   $$\text{Antenna Ratio} = \frac{\text{Area of Metal Interconnect}}{\text{Area of Connected Gate Oxide}} \le \text{Max Allowed Ratio (typically } 200\text{–}500\text{)}$$
4. **Diagram (Write in Exam):**
   ```text
   Plasma Ions (+ + + +)
          │   │   │
   ═══════╧═══╧═══╧═══════  Long Floating Metal-1 Wire ("Antenna")
          │
     [Poly Gate]
     ═══SiO2═══  <-- Oxide Breakdown! (No discharge path)
     p-Substrate
   ```
5. **Mitigation / Prevention Techniques:**
   - **Metal Hopping (Layer Jumping):** Break the long Metal-1 wire and jump up to a higher metal layer (Metal-2/Metal-3) right before the gate. During Metal-1 etching, the long upper metal wire does not exist yet!
   - **Antenna Diode Insertion:** Connect a small reverse-biased $p\text{-}n$ junction diode to ground right next to the gate. During plasma etching, the diode breaks down harmlessly at low voltage, shunting charge safely into the substrate.

---

### 🎯 2.2 Electromigration (EM)
*Asked 3 times! (May 2023, Nov 2023, May 2026)*

1. **Definition:** Electromigration is the gradual physical displacement/transport of metal atoms in an interconnect caused by momentum transfer from high-density flowing electrons ("electron wind").
2. **Failure Modes:**
   - **Voids (Upstream / Cathode end):** Atoms are pushed away, thinning the metal line until it causes an **open circuit**.
   - **Hillocks / Whiskers (Downstream / Anode end):** Atoms pile up, bulging through the dielectric to short-circuit adjacent lines (**short circuit**).
3. **Black's Equation for Mean Time to Failure (MTTF):**
   $$\text{MTTF} = \frac{A}{J^n} \exp\left(\frac{E_a}{kT}\right)$$
   - $A$: Cross-sectional geometry constant
   - $J$: Current density ($\text{A/cm}^2$) — *most critical factor* ($n \approx 2$)
   - $E_a$: Activation energy ($0.6\text{ eV}$ for Al, $1.0\text{ eV}$ for Cu)
   - $k$: Boltzmann constant ($8.617 \times 10^{-5}\text{ eV/K}$), $T$: Temperature (K)
4. **Prevention Techniques:**
   - Widen $V_{DD}$ and $GND$ power buses to lower current density $J$.
   - Use **Copper (Cu)** interconnects instead of Aluminum (higher $E_a$, better EM resistance).
   - Use **redundant multiple vias** at high-current junctions.

---

### 🎯 2.3 Interconnect Crosstalk
*Asked 2 times! (Nov 2024, May 2025)*

1. **Definition:** Crosstalk is unwanted voltage coupling (noise) induced onto a quiet signal line (**Victim line**) due to rapid voltage transitions on an adjacent parallel signal line (**Aggressor line**) through mutual coupling capacitance ($C_c$) and mutual inductance ($M$).
2. **Induced Victim Noise Equation:**
   $$\Delta V_{\text{victim}} = V_{\text{swing}} \cdot \left(\frac{C_c}{C_c + C_{\text{gnd}}}\right)$$
3. **Harmful Effects:**
   - **Crosstalk Glitch:** False logic switching on a static victim line.
   - **Crosstalk Delay (Jitter):** Slows down or speeds up signal transitions (Miller effect), causing setup/hold timing violations.
4. **Prevention Techniques:**
   - **Shielding:** Route grounded ($GND$ or $V_{DD}$) shield wires between critical signals (e.g., clocks).
   - **Increase Spacing:** Keep parallel lines separated by $\ge 2\times$ minimum spacing ($S$).
   - **Orthogonal Routing:** Route Metal-1 horizontally and Metal-2 vertically to avoid long parallel overlap.
   - **Driver Sizing / Buffer Insertion:** Insert repeaters on long victim lines to hold the voltage steady.

---

## 🏆 Topic 3: Lambda ($\lambda$) Based Layout Design Rules (Mead-Conway)
**Typical Marks:** 6 to 9 Marks | **Exam Frequency:** 6 times across 6/8 papers (`Nov 2022, May 2023, Nov 2023, May 2024, Nov 2024, May 2025`)

### 🎯 3.1 Definition & Significance of $\lambda$ Rules
- **What is $\lambda$?** In the Mead-Conway scalable rule system, $\lambda$ is defined as **half the minimum feature size** ($L_{\min} = 2\lambda$) or the maximum allowable alignment tolerance between consecutive photolithographic masks.
- **Why $\lambda$ Rules are Used (Significance):**
  1. **Process Scalability:** Layouts designed in terms of $\lambda$ can be migrated directly to smaller technology nodes (e.g., from $180\text{ nm}$ to $90\text{ nm}$) simply by changing the scale factor $\lambda$ in software—no manual redrawing needed.
  2. **Foundry Portability:** Layouts remain compatible across different fabrication foundries.
  3. **Yield Protection:** Prevents manufacturing defects like open circuits, bridging shorts, and punch-through.

### 🎯 3.2 Lambda Rules vs. Micron Rules
| Feature | Lambda ($\lambda$) Rules | Micron ($\mu\text{m}$ / $\text{nm}$) Rules |
| :--- | :--- | :--- |
| **Units** | Dimensionless integer multiples of $\lambda$. | Absolute physical dimensions ($\mu\text{m}$ or $\text{nm}$). |
| **Scalability** | **Highly scalable** across technology generations. | **Not scalable**; tied to one specific process node. |
| **Silicon Density** | Slightly conservative (10–15% larger area). | Maximum packing density (fully optimized). |
| **Best Use Case** | Academic designs, IP blocks, portable standard cells. | High-volume commercial CPUs/GPUs (sub-28nm). |

---

### 🎯 3.3 The 8 Essential Mead-Conway $\lambda$ Rules (With Neat Exam Diagrams)
*Write any 6 to 8 rules with simple bracketed dimension sketches in the exam:*

1. **N-Well Rules:**
   - Minimum N-Well width: **$10\lambda$** or **$12\lambda$**.
   - Minimum spacing between two N-Wells (different potentials): **$9\lambda$**.
2. **Active Diffusion Rules ($n^+$ and $p^+$):**
   - Minimum width of diffusion: **$2\lambda$** (or $3\lambda$ in submicron).
   - Minimum spacing between two diffusion regions: **$3\lambda$**.
   ```text
   ┌──────┐   3λ    ┌──────┐
   │ Diff │◄───────►│ Diff │   (Width >= 2λ, Spacing >= 3λ)
   └──────┘         └──────┘
   ```
3. **Polysilicon Rules:**
   - Minimum Polysilicon width: **$2\lambda$** (defines transistor channel length $L$).
   - Minimum spacing between two Poly lines: **$2\lambda$**.
4. **Transistor (Poly-Diffusion Overlap) Rules:**
   - Poly overhang (extension beyond active diffusion): **$2\lambda$** (prevents source-drain short around gate tip).
   - Diffusion extension beyond Poly gate: **$2\lambda$** (space for source/drain).
   - Non-gate Poly to Diffusion spacing: **$1\lambda$**.
   ```text
             2λ (Poly Overhang)
             ┌───┐
     ┌───────┼───┼───────┐
     │ Diff  │ P │ Diff  │   <-- Diff width >= 2λ
     └───────┼───┼───────┘
             └───┘
             2λ (Poly width)
   ```
5. **Contact Cut Rules:**
   - Exact Contact Cut size: **$2\lambda \times 2\lambda$**.
   - Minimum spacing between two Contacts: **$2\lambda$**.
   - Metal / Diffusion / Poly surround (overlap) around Contact: **$1\lambda$** on all sides.
   ```text
   ┌─────────────┐
   │  ┌───────┐  │  <-- 1λ Metal/Diff overlap
   │  │  2λ   │  │  <-- 2λ x 2λ Contact Cut
   │  │  x 2λ │  │
   │  └───────┘  │
   └─────────────┘
   ```
6. **Metal-1 Rules:**
   - Minimum Metal-1 width: **$3\lambda$**.
   - Minimum Metal-1 spacing: **$3\lambda$**.
7. **Metal-2 Rules:**
   - Minimum Metal-2 width: **$3\lambda$**.
   - Minimum Metal-2 spacing: **$4\lambda$**.
8. **Via Rules (Metal-1 to Metal-2):**
   - Via cut size: **$2\lambda \times 2\lambda$**, minimum Metal overlap: **$1\lambda$**.

---

## 🏆 Topic 4: SPICE Simulation & CMOS Inverter Code (AC, DC, Transient)
**Typical Marks:** 6 to 8 Marks | **Exam Frequency:** 6 times across 5/8 papers (`Nov 2023, Nov 2024, May 2025, Nov 2025, May 2026`)

### 🎯 4.1 What is SPICE Simulation?
**SPICE** (*Simulation Program with Integrated Circuit Emphasis*) is a circuit-level simulator used in VLSI to verify analog/digital transistor behavior, timing delays, noise margins, and frequency response *before* fabrication.

### 🎯 4.2 The Three Primary SPICE Analyses
1. **DC Analysis (`.DC`):**
   - Sweeps a DC input voltage source ($V_{\text{in}}$ from $0\text{ V}$ to $V_{DD}$) while keeping time constant.
   - **Purpose:** Generates the **Voltage Transfer Characteristic (VTC)** curve ($V_{\text{out}}$ vs $V_{\text{in}}$) to determine switching threshold ($V_M$), $V_{IL}, V_{IH}$, and **Noise Margins** ($NM_H, NM_L$).
   - *Syntax:* `.DC VIN 0 1.8 0.01`
2. **Transient Analysis (`.TRAN`):**
   - Simulates circuit voltages and currents as a function of **time** with pulse/square-wave inputs.
   - **Purpose:** Measures **rise time ($t_r$), fall time ($t_f$), propagation delays ($t_{pLH}, t_{pHL}$)**, and dynamic switching power dissipation.
   - *Syntax:* `.TRAN 10p 10n` (step size $10\text{ ps}$, stop time $10\text{ ns}$).
3. **AC Analysis (`.AC`):**
   - Performs **small-signal linearized frequency domain analysis** around the DC operating point by sweeping frequency ($f$).
   - **Purpose:** Computes **Bode plots (Magnitude dB & Phase vs Frequency)**, 3-dB bandwidth, gain margin, and unity-gain frequency ($f_T$).
   - *Syntax:* `.AC DEC 10 1K 10G` (Decade sweep, 10 points/decade, $1\text{ kHz}$ to $10\text{ GHz}$).

---

### 🎯 4.3 SPPU Exam Code: SPICE Netlist for CMOS Inverter (AC Analysis)
*Asked verbatim 3 times! (`Nov 2023, Nov 2024, May 2025`)*

```spice
* SPICE Netlist for CMOS Inverter AC Analysis
* Node Connections: 1=VDD, 2=Vin, 3=Vout, 0=GND

* 1. Power Supply & Input Signal Sources
VDD  1  0  DC 1.8V
VIN  2  0  DC 0.9V  AC 1.0V        ; DC bias at V_M (0.9V) + AC 1V test signal

* 2. MOSFET Transistors (Syntax: Mname Drain Gate Source Bulk Model W L)
M1   3  2  1  1  PMOS_MOD  W=2.0u  L=0.18u   ; PMOS Pull-Up (Source & Bulk to VDD=1)
M2   3  2  0  0  NMOS_MOD  W=1.0u  L=0.18u   ; NMOS Pull-Down (Source & Bulk to GND=0)

* 3. Output Load Capacitance
CL   3  0  50fF                              ; 50 fF capacitive load at Vout

* 4. Transistor Device Models
.MODEL NMOS_MOD NMOS (LEVEL=1 VTO=0.4 KP=120u)
.MODEL PMOS_MOD PMOS (LEVEL=1 VTO=-0.4 KP=40u)

* 5. AC Analysis Command (Decade sweep: 10 pts/dec from 1kHz to 10GHz)
.AC DEC 10 1K 10G

* 6. Print / Plot Output
.PRINT AC VDB(3) VP(3)             ; Print Magnitude (dB) and Phase of Vout (Node 3)
.PLOT  AC VDB(3)
.END
```

> **Exam Tip:** If asked for **DC Analysis**, change `VIN` to `DC 0V` and use `.DC VIN 0 1.8 0.01`. If asked for **Transient Analysis**, use `VIN 2 0 PULSE(0 1.8 0 0.1n 0.1n 2n 4n)` and `.TRAN 0.05n 10n`.

---

## 🏆 Topic 5: Physical Verification Flow (DRC, ERC, LVS & Extraction)
**Typical Marks:** 6 to 8 Marks | **Exam Frequency:** 5 times (`May 2024, Nov 2025, May 2026`)

After physical layout is drawn (GDSII), it must pass 4 verification stages before tape-out:

```text
  [Layout (GDSII)] ──► 1. DRC (Geometry Check)
         │
         ├──► 2. Circuit Extraction ──► [Extracted Netlist + R, C Parasitics]
         │                                       │
         ├──► 3. ERC (Electrical Check)          ├──► 4. LVS (Compare vs Schematic)
                                                 ▲
                             [Golden Schematic Netlist]
```

| Verification Check | Full Name & Purpose | Specific Errors Detected |
| :--- | :--- | :--- |
| **1. DRC** | **Design Rule Check:** Verifies that all geometric polygons obey foundry $\lambda$/micron rules. | • Minimum width / spacing violations<br>• Contact enclosure/overlap errors<br>• Antenna ratio violations & metal density errors |
| **2. Circuit Extraction** | Reconstructs transistors and parasitic resistances ($R$) and capacitances ($C$) from geometric layout layers. | • Extracts exact transistor $W/L$, substrate connections, and interconnect $RC$ netlist for post-layout SPICE timing simulation. |
| **3. ERC** | **Electrical Rule Check:** Checks electrical validity of the extracted circuit topology. | • Direct $V_{DD}$-to-$GND$ shorts<br>• Floating transistor gates or open inputs<br>• Missing well/substrate taps (latch-up risk) |
| **4. LVS** | **Layout Versus Schematic:** Proves 1-to-1 topological equivalence between extracted layout netlist and original golden schematic. | • Missing or extra transistors<br>• Wrong $W/L$ sizing ratios<br>• Swapped nets, shorted pins, or mismatched ports |

---

## 🏆 Topic 6: ASIC Design Flow & Cell Design Specification
**Typical Marks:** 6 Marks | **Exam Frequency:** 4 times (`May 2023, Nov 2024, May 2025`)

### 🎯 6.1 ASIC Physical Design Flow (Step-by-Step)
1. **Design Entry (RTL Coding):** Functionality is described using HDL (Verilog / VHDL) and verified via functional simulation.
2. **Logic Synthesis:** RTL code is translated into a **Gate-Level Netlist** using a target Standard Cell Library, meeting timing/area/power constraints.
3. **System Partitioning:** Divides a large chip into smaller functional blocks/subsystems.
4. **Floorplanning & Power Planning:** Determines die size, core aspect ratio, I/O pad placement, macro positions, and designs $V_{DD}/GND$ power rings and stripes to minimize IR drop.
5. **Placement:** Arranges standard cells inside core rows to minimize total interconnect wirelength and routing congestion.
6. **Clock Tree Synthesis (CTS):** Builds a balanced clock distribution network (H-tree / mesh) using buffers to achieve near-zero **Clock Skew**.
7. **Routing (Global & Detailed):** Global routing plans wire channels; detailed routing lays out exact DRC-clean metal tracks and vias.
8. **Physical Verification & Tape-Out:** Performs **DRC, ERC, LVS**, Parasitic Extraction, and Static Timing Analysis (STA), culminating in **GDSII** file generation for mask making.

### 🎯 6.2 Cell Design Specification
*Asked in Nov/Dec 2024!*
When designing a **Standard Cell** (e.g., NAND, Flip-Flop) for a cell library, the specification defines:
1. **Cell Architecture & Height:** Fixed uniform cell height (track height, e.g., 9-track or 12-track) with variable width so cells align cleanly in rows.
2. **Power Rails:** Fixed width and vertical pitch for horizontal $V_{DD}$ (top) and $GND$ (bottom) Metal-1 rails so rails abut seamlessly.
3. **Pin Placement:** Input/output pins placed strictly on routing grid intersections for automated router access.
4. **Characterization Metrics:** Propagation delay ($t_{pd}$), rise/fall slew rates, input pin capacitance ($C_{\text{in}}$), and leakage/switching power stored in Liberty (`.lib`) format.

---

## 🏆 Topic 7: CMOS Transistor Fabrication Process (N-Well Process Steps)
**Typical Marks:** 8 to 12 Marks | **Exam Frequency:** Asked in `Nov/Dec 2022` (and standard foundation topic)

### 🎯 The 9 Sequential Photolithography Steps (N-Well Process)
1. **Substrate Preparation & Oxidation:** Start with a lightly doped $p$-type silicon wafer. Grow a thin protective $\text{SiO}_2$ layer thermally.
2. **N-Well Formation (Mask 1):** Coat with photoresist, expose through N-Well mask, etch oxide, and implant **Phosphorus ($n$-type)** donors. Drive in at $1100^\circ\text{C}$ to create the N-Well (body for PMOS).
3. **Active Area & Field Oxide Isolation (Mask 2):** Pattern Silicon Nitride ($\text{Si}_3\text{N}_4$) over active transistor zones. Grow thick **Field Oxide (FOX)** via **LOCOS** (or STI) to electrically isolate transistors.
4. **Gate Oxide & Polysilicon Deposition (Mask 3):** Grow ultra-thin pure gate oxide ($\text{SiO}_2$, $2\text{–}5\text{ nm}$). Deposit Polysilicon via CVD, dope heavily, and pattern with Mask 3 to form **self-aligned gates**.
5. **$n^+$ Source/Drain Implantation (Mask 4):** Mask off PMOS regions; implant **Arsenic** into $p$-substrate to form NMOS source/drain and N-Well bias taps.
6. **$p^+$ Source/Drain Implantation (Mask 5):** Mask off NMOS regions; implant **Boron** into N-Well to form PMOS source/drain and $p$-substrate bias taps.
7. **Inter-Layer Dielectric (ILD) Deposition:** Deposit a thick insulating $\text{SiO}_2$ / BPSG layer across the entire wafer to isolate gates from metal wires.
8. **Contact Cut Etching (Mask 6):** Etch vertical contact windows through ILD down to source, drain, and poly gate terminals.
9. **Metallization & Passivation (Masks 7 & 8):** Sputter Aluminum/Copper and pattern interconnects (Mask 7). Deposit final protective **$\text{Si}_3\text{N}_4$ passivation glass** (Mask 8), leaving openings only for external bonding pads.

```text
        Metal-1        Metal-1        Metal-1
      ┌─────────┐    ┌─────────┐    ┌─────────┐
══════╪═════════╪════╪═════════╪════╪═════════╪══════  ILD (SiO2)
      │ Contact │    │  Poly   │    │ Contact │
   ┌──┴──┐   ┌──┴──┐ └─┬─────┬─┘ ┌──┴──┐   ┌──┴──┐
   │ n+  │   │ n+  │   │SiO2 │   │ p+  │   │ p+  │
═══╧═════╧═══╧═════╧═══╧═════╧═══╧═════╧═══╧═════╧═══
      NMOS (p-Substrate)    │      PMOS (N-Well)
────────────────────────────┴────────────────────────
```
