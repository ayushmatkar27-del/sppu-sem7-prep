# ⚡ Unit 5: Physical Design, Stick Diagrams & Layout Rules
### VLSI Design and Technology (Course Code: 404182) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 5 OR Question 6 (17 Marks Weightage) | Exhaustive Question Bank**

---

## 📌 Unit 5 Exam Frequency & Coverage Map
*Audited from 13 SPPU University Papers (2022 to 2026)*

| Exam Topic | SPPU Frequency | Probability Tier | Typical Marks | Question Variants Asked |
| :--- | :---: | :---: | :---: | :--- |
| **1. Stick Diagrams, Euler's Path & CMOS Layouts (NAND, NOR, Half Adder)** | **14 times** | `🔥 100% Guaranteed` | **8 to 18 M** | Stick Diagram of Inverter, NAND, NOR, Half Adder, Euler |
| **2. Lambda (λ) Based Design Rules (Mead-Conway Scalable Rules)** | **12 times** | `🔥 100% Guaranteed` | **6 to 8 M** | 10 Rules, Scalability, Micron vs Lambda |
| **3. Layout Parasitics: Antenna Effect, Crosstalk & Electromigration** | **10 times** | `⚡ Very High (80%)` | **6 to 8 M** | Antenna Ratio, Black's Law, MTTF, Diodes |
| **4. Physical Verification Flow: DRC, ERC, and LVS Techniques** | **6 times** | `📌 High Priority (50%)` | **6 to 8 M** | Verification Checks, Netlist Comparison |
| **5. ASIC Physical Design Backend Flow (Floorplan, Placement, Routing)** | **5 times** | `📌 High Priority (40%)` | **6 to 8 M** | Full-Custom vs Semi-Custom, CTS, GDSII |
| **6. CMOS Transistor Fabrication Process (N-Well Process Steps)** | **3 times** | `📌 High Priority (40%)` | **8 to 10 M** | 9-Step Sequence, Photolithography, LOCOS |

---

## 🏆 Question 1: Stick Diagrams, Euler's Path & CMOS Layouts
**Marks:** 8 to 18 Marks | **Frequency:** 14x across 11 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Draw stick diagram for CMOS Inverter, 2-input NAND and NOR gate."* (Dec 2022, May 2023, Dec 2023, May 2024, Nov 2024, May 2025, May 2026)
- *"Draw block diagram of half adder and its truth table. Draw its CMOS transistor level circuit. Draw Euler's Path for both networks. Draw stick diagram for Sum and Carry."* (Nov/Dec 2022 - 18 Marks!)
- *"Find Euler's path and draw stick diagram for CMOS Boolean Equation $Y = \overline{(A+B)\cdot C}$."* (Oct 2022, Sep 2023, Nov 2025)

### 🎯 1.1 Standard Layer Color Coding & Monochrome Conventions

| Layer Name | Standard Industry Color | Monochrome Exam Pattern | Minimum Dimension |
| :--- | :---: | :--- | :---: |
| **n-Diffusion (NMOS Source/Drain)** | **GREEN** | Solid thin line / Double horizontal hash | **$2\lambda$** |
| **p-Diffusion (PMOS Source/Drain)** | **YELLOW / AMBER** | Dotted line / 45° diagonal hatching | **$2\lambda$** |
| **Polysilicon (Gate Input)** | **RED** | Solid bold line | **$2\lambda$** |
| **Metal-1 (Power Rails & Signals)** | **BLUE** | Thick bold line | **$3\lambda$** |
| **Metal-2 (Orthogonal Interconnect)** | **MAGENTA / PURPLE** | Dashed bold line | **$3\lambda$** |
| **Contact Cut (Via)** | **BLACK 'X'** | Cross mark ($\times$) inside square | **$2\lambda \times 2\lambda$** |
| **Demarcation Line** | **BROWN DASHED** | Centerline separating PMOS and NMOS | - |

---

### 🎯 1.2 The Euler Path Methodology for Zero Diffusion Breaks
- **Problem:** If transistors are placed randomly, isolation diffusion breaks (empty gaps between source/drain regions) must be inserted. Diffusion breaks increase parasitic junction capacitance ($C_j$) by 35% and waste silicon area.
- **Goal:** Realize all PMOS transistors in one continuous strip of p-diffusion, and all NMOS transistors in one continuous strip of n-diffusion.
- **The 4-Step Algorithm:**
  1. Construct the **PUN Graph** (Vertices = electrical nodes $V_{DD}, Y$, internal nodes; Edges = PMOS transistors labeled by gate names).
  2. Construct the **PDN Graph** (Vertices = electrical nodes $GND, Y$, internal nodes; Edges = NMOS transistors labeled by gate names).
  3. Find a **Common Euler Sequence**: A path that visits **every single edge (transistor) exactly once** in BOTH graphs in the exact same order (e.g. $C - A - B$).
  4. Lay out the horizontal diffusion stripes and run vertical Polysilicon gate tracks in that exact Euler order.

---

### 🎯 1.3 18-Mark Master University Problem: CMOS Half Adder Complete Design
1. **Half Adder Truth Table & Boolean Logic:**
   - $\text{Sum} = A \oplus B = \bar{A}B + A\bar{B}$
   - $\text{Carry} = A \cdot B$
2. **CMOS Transistor Implementation:**
   - $\text{Carry} = \overline{\overline{A \cdot B}}$ (2-input NAND followed by CMOS Inverter = 6 transistors).
   - $\text{Sum} = (A + B) \cdot \overline{A \cdot B} = (A + B) \cdot \overline{\text{Carry}}$ (Transmission gate or static XOR complex gate = 8 to 10 transistors).
3. **Euler's Path for Half Adder:** Common sequence across networks is $A - B$.
4. **Stick Diagram Execution:**
   - Top rail: Blue $V_{DD}$.
   - Bottom rail: Blue $GND$.
   - Continuous Yellow p-diffusion strip at top.
   - Continuous Green n-diffusion strip at bottom.
   - Red vertical Polysilicon tracks for inputs $A, B$ crossing both stripes.
   - Black 'X' contact cuts connecting inputs, intermediate nodes, and Sum/Carry outputs.

---

## 🏆 Question 2: Lambda (λ) Based Layout Design Rules (Mead-Conway)
**Marks:** 6 to 8 Marks | **Frequency:** 12x across 9 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Explain Lambda (λ) based design rules for CMOS fabrication. Give rules for active diffusion, polysilicon, metal-1, and contact cuts with neat sketches."* (May 2023, Dec 2023, May 2024, Nov 2024, May 2025, May 2026)
- *"Why are Lambda-based design rules scalable? Compare Lambda rules with Micron rules."* (Nov 2022, Oct 2022, Nov 2025)

### 🎯 2.1 Why Lambda Rules are Scalable
- **Definition of $\lambda$:** $\lambda$ represents the **photolithographic resolution half-pitch**—the maximum probable alignment error between consecutive photolithographic mask steps.
- **Scalability Principle:** In $\lambda$-based design (Mead & Conway), all physical layout widths, clearances, overlaps, and extensions are specified as linear integer multiples of $\lambda$. When migrating an existing layout from $0.5\,\mu\text{m}$ ($\lambda = 0.25\,\mu\text{m}$) to $0.25\,\mu\text{m}$ ($\lambda = 0.125\,\mu\text{m}$), the entire chip layout scales down linearly simply by altering the software grid parameter $\lambda$. No manual redesign is required!
- **Lambda Rules vs. Micron Rules:**
  - *Lambda Rules:* Portable across foundries; conservative design rules trade off 10–15% silicon density for design longevity.
  - *Micron Rules:* Absolute nanometer/micron dimensions tailored to a specific foundry process to extract 100% maximum transistor packing density.

### 💡 Master 10 Mead-Conway Design Rules Table

| Layer | Feature Checked | Minimum Dimension | SPPU Exam Sketch Annotation |
| :--- | :--- | :---: | :--- |
| **Polysilicon** | Minimum Gate Width ($W_{\text{poly}}$) | **$2\lambda$** | Defines transistor channel length ($L = 2\lambda$). |
| | Minimum Gate Spacing ($S_{\text{poly}}$) | **$2\lambda$** | Prevents bridging shorts between gate lines. |
| | Gate Overlap of Diffusion (Extension) | **$2\lambda$** | Prevents source-drain bridging around gate edges. |
| **Active Diffusion** | Minimum Active Width ($W_{\text{diff}}$) | **$2\lambda$** | Defines minimum transistor width ($W = 2\lambda$). |
| | Spacing between Active Regions | **$3\lambda$** | Prevents punch-through between adjacent diffusions. |
| | Diffusion to Polysilicon Clearance | **$1\lambda$** | Spacing between non-gated poly and diffusion. |
| **Metal-1** | Minimum Metal-1 Width ($W_{\text{metal1}}$) | **$3\lambda$** | Minimizes series interconnect resistance. |
| | Minimum Metal-1 Spacing ($S_{\text{metal1}}$) | **$3\lambda$** | Prevents capacitive crosstalk coupling. |
| **Contact Cut** | Contact Cut Window Size | **$2\lambda \times 2\lambda$** | Standard square contact hole size. |
| | Surrounding Metal Overlap of Contact | **$1\lambda$** | Prevents etching misregistration open circuits. |

---

## 🏆 Question 3: Layout Parasitics & Signal Integrity
**Marks:** 6 to 8 Marks | **Frequency:** 10x across 8 papers (<span class="badge badge-critical">80% Guaranteed</span>)  

### 3.1 Antenna Effect (Plasma-Induced Gate Oxide Breakdown)
- **Cause:** During reactive ion etching (RIE) of backend metal layers, plasma bombards the wafer with energetic charged ions ($Ar^+$). Long floating metal interconnects act as collector antennas, accumulating massive static charge.
- **The Catastrophic Failure:** If a long metal wire connects to a thin MOSFET gate oxide without any diffusion junction to shunt the current, electrostatic voltage ($V = Q/C$) exceeds the dielectric breakdown strength ($10\text{ MV/cm}$), puncturing the ultra-thin $\text{SiO}_2$ gate insulation and permanently destroying the transistor.
- **Antenna Ratio Design Rule:**
  $$\text{Antenna Ratio} = \frac{\text{Area of Metal Interconnect Wire}}{\text{Area of Connected Gate Oxide}} \le 200 \text{ to } 500$$
- **Two Standard Mitigations:**
  1. **Antenna Diodes:** Insert a small reverse-biased $p\text{-}n$ junction diode connected to ground right beside the gate. During etching, the diode safely breaks down at low voltage, shunting accumulated charge into the substrate.
  2. **Metal Layer Hopping (Jumpers):** Route the long run on an upper metal layer (e.g. Metal-2) and drop down to Metal-1 immediately before the gate. When Metal-1 is being etched, the long wire does not yet exist!

---

### 3.2 Electromigration & Black's Empirical Equation
- **Mechanism:** Under high DC current densities ($J > 1\text{ to }2\text{ MA/cm}^2$), the momentum of moving electrons transfers kinetic energy to metal lattice atoms via collisions ("electron wind"). Metal atoms physically drift downstream.
- **Failure Modes:** Upstream voids cause open-circuit failures; downstream hillocks puncture dielectric layers causing short circuits.
- **Black's Equation for Mean Time to Failure (MTTF):**
  $$\text{MTTF} = \frac{A}{J^n} \exp\left(\frac{E_a}{k T}\right)$$
  - $A$ = Constant based on metal geometry.
  - $J$ = Current density ($\text{A/cm}^2$).
  - $n \approx 2$ (Empirical exponent).
  - $E_a$ = Activation energy ($0.6\text{ eV}$ for Al, $1.0\text{ eV}$ for Cu).
  - $k$ = Boltzmann constant ($8.617 \times 10^{-5}\text{ eV/K}$).
  - $T$ = Temperature in Kelvin.
- **Layout Fixes:** Widen $V_{DD}$ and $GND$ power rails, use Copper instead of Aluminum, and use redundant parallel vias.

---

### 3.3 Interconnect Crosstalk Coupling
- **Mechanism:** Deep submicron interconnects are tall and narrow. Coupling capacitance ($C_c$) between adjacent parallel lines dominates over capacitance to ground ($C_{\text{gnd}}$).
- **Victim Noise Voltage:**
  $$\Delta V_{\text{victim}} = V_{\text{swing}} \cdot \left(\frac{C_c}{C_c + C_{\text{gnd}}}\right)$$
- **Prevention:** Insert grounded shielding tracks ($V_{DD}/GND$) between sensitive bus lines, increase line spacing, and route adjacent metal layers orthogonally (Metal-1 horizontal, Metal-2 vertical).

---

## 🏆 Question 4: Physical Verification Flow (DRC, ERC, LVS)
**Marks:** 6 to 8 Marks | **Frequency:** 6x across 5 papers (<span class="badge badge-high">50% Priority</span>)  

| Verification Pillar | Focus & Target Checked | Key Violations Caught | Industry EDA Tools |
| :--- | :--- | :--- | :--- |
| **Design Rule Check (DRC)** | Geometric layout design rules. | Width violations, clearance shorts, antenna ratios, density rules. | Siemens Calibre DRC, Synopsys IC Validator |
| **Electrical Rule Check (ERC)** | Electrical circuit integrity. | Direct $V_{DD}$-to-$GND$ shorts, floating gates, missing well taps, substrate noise. | Calibre ERC, Cadence Pegasus |
| **Layout Versus Schematic (LVS)**| 1-to-1 functional and topological equivalence. | Device count mismatches, aspect ratio ($W/L$) errors, netlist miswiring. | Siemens Calibre LVS, Cadence PVS |

---

## 🏆 Question 5: ASIC Physical Design Backend Flow
**Marks:** 6 to 8 Marks | **Frequency:** 5x across 4 papers (<span class="badge badge-high">40% Priority</span>)  

1. **Floorplanning & Power Planning:** Establishes die size, core aspect ratio, I/O pad ring, macro block placement, and low-IR-drop $V_{DD}/GND$ power rings and stripes.
2. **Placement & Legalization:** Organizes standard library cells into regular rows with minimal total wirelength and zero congestion.
3. **Clock Tree Synthesis (CTS):** Synthesizes balanced clock distribution networks (H-tree or mesh) with clock inverter buffers to achieve near-zero **Clock Skew** ($T_{\text{skew}} \to 0$).
4. **Routing (Global & Detailed):** Global routing assigns channel paths; detailed routing draws exact mask metal wires and vias adhering to DRC rules.
5. **Physical Verification & Signoff:** DRC, ERC, LVS, parasitic extraction (RC extraction), Static Timing Analysis (STA), and **GDSII / OASIS** stream generation for foundry mask fabrication.

---

## 🏆 Question 6: CMOS Transistor Fabrication Process (N-Well Process Steps)
**Marks:** 8 to 10 Marks | **Frequency:** 3x across 3 papers (<span class="badge badge-high">40% Priority</span>)  

### 🎯 The 9 Sequential Steps of N-Well CMOS Fabrication:
1. **Substrate Preparation & Oxidation:** Lightly doped p-type silicon wafer is cleaned, and a thin protective $\text{SiO}_2$ layer is thermally grown.
2. **N-Well Photolithography & Implantation:** Photoresist is deposited, exposed through Mask 1, and developed. Phosphorus donor ions are implanted and driven in at $1100^\circ\text{C}$ to form the **N-Well** (the body for PMOS transistors).
3. **Active Area Definition & Isolation:** Silicon nitride ($\text{Si}_3\text{N}_4$) is patterned (Mask 2). Thick Field Oxide (FOX) is grown via LOCOS (Local Oxidation of Silicon) or Shallow Trench Isolation (STI) to electrically isolate adjacent transistors.
4. **Gate Oxide & Polysilicon Deposition:** Thin high-purity gate oxide ($\text{SiO}_2$, $2\text{ to }5\text{ nm}$) is grown. Polysilicon is deposited by chemical vapor deposition (CVD), doped heavily with phosphorus, and etched (Mask 3) to form the self-aligned gates.
5. **N-Diffusion ($n^+$ Implantation for NMOS):** Arsenic ions are implanted using Mask 4 to form self-aligned NMOS source, drain, and N-Well bias taps ($n^+$ contacts).
6. **P-Diffusion ($p^+$ Implantation for PMOS):** Boron ions are implanted using Mask 5 to form PMOS source, drain, and p-substrate bias taps ($p^+$ contacts).
7. **Inter-Layer Dielectric (ILD) Deposition:** A thick layer of insulating dielectric ($\text{SiO}_2$ / BPSG) is deposited across the entire wafer surface.
8. **Contact Cut Etching:** Windows are etched through the ILD (Mask 6) down to source, drain, and gate regions using reactive ion etching.
9. **Metallization & Passivation:** Aluminum or Copper is sputtered across the wafer, patterned with Mask 7 to create circuit interconnects and power rails. A final glass passivation layer ($\text{Si}_3\text{N}_4$) is deposited (Mask 8) to seal the chip, leaving openings only for external bonding pads.
