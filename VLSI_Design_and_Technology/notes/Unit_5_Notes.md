# ⚡ Unit 5: Physical Design, Stick Diagrams & Layout Rules
### VLSI Design and Technology (Course Code: 404182) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 5 OR Question 6 (17 Marks) | Simple Intuition + Exam-Ready Model Answers**

---

## 📌 Unit 5 Exam Frequency & Coverage Map
*Audited across 8 Official SPPU End-Sem Papers (Nov/Dec 2022 to May/Jun 2026) — 38 Questions Covered*

| Topic # | Exam Topic | Frequency | Priority Tier | Typical Marks |
| :---: | :--- | :---: | :---: | :---: |
| **1** | **Stick Diagrams, Euler's Path & CMOS Layouts** (Inverter, NAND, NOR, Half Adder) | **6+ times** | `🔥 100% CRITICAL` | **6 to 18 M** |
| **2** | **Layout Parasitics & Signal Integrity** (Antenna Effect, Electromigration, Crosstalk) | **10 times** | `🔥 100% CRITICAL` | **5 to 9 M** |
| **3** | **Lambda ($\lambda$) Based Design Rules** (Mead-Conway Rules & Scalability) | **6 times** | `🔥 100% CRITICAL` | **6 to 9 M** |
| **4** | **SPICE Simulation & CMOS Inverter Code** (AC, DC, Transient Analysis) | **6 times** | `⚡ HIGH IMP` | **6 to 8 M** |
| **5** | **Physical Verification Flow** (DRC, Circuit Extraction, ERC, LVS) | **5 times** | `📌 HIGH` | **6 to 8 M** |
| **6** | **ASIC Design Flow & Cell Design Specification** | **4 times** | `📌 HIGH` | **6 Marks** |
| **7** | **CMOS Transistor Fabrication Process** (9-Step N-Well Process) | **1–3 times** | `📌 STANDARD` | **8 to 12 M** |

---

## 🏆 Topic 1: Stick Diagrams, Euler's Path & CMOS Layouts
*Asked in: Nov 2022 (18M Half Adder), May 2023, Nov 2023, May 2024, Nov 2024, Nov 2025*

### 💡 In Simple Words (The Subway Map Analogy)
Think of a **Stick Diagram** like a **city Metro/Subway map**. A Metro map does not show the exact kilometer distance between stations or the exact width of the tunnels—it only uses **colored lines** to show *which lines cross each other* and *where the stations (contacts) are*. 
Similarly, a Stick Diagram is a simple colored-line sketch of a chip layout. **Golden Rule:** Wherever a **Red (Polysilicon)** line crosses a **Green (n-Diffusion)** or **Yellow (p-Diffusion)** line, a **MOSFET transistor is born!**

### 🎨 1.1 Standard Layer Color Coding & Exam Pen Conventions
*(Memorize this table—drawing this legend in the exam immediately impresses the examiner!)*

| Layer Name | Industry Color | Monochrome Exam Pen Style | Minimum $\lambda$ Rule |
| :--- | :---: | :--- | :---: |
| **Metal-1** ($V_{DD}$, $GND$, Signals) | **BLUE** | Thick solid line | **$3\lambda$** |
| **Polysilicon** (Gate Inputs) | **RED** | Thin solid line | **$2\lambda$** |
| **n-Diffusion** (NMOS Source/Drain) | **GREEN** | Double parallel / Solid line | **$2\lambda$** |
| **p-Diffusion** (PMOS Source/Drain) | **YELLOW / BROWN** | Dotted / Cross-hatched line | **$2\lambda$** |
| **Demarcation Line** (N-Well boundary) | **BROWN DASHED** | Long-dashed centerline | — |
| **Contact Cut (Via)** | **BLACK 'X'** | Cross ($\times$) inside a square | **$2\lambda \times 2\lambda$** |

---

### 🎯 1.2 Stick Diagram of CMOS Inverter ($Y = \overline{A}$)
*Asked in: May 2023, May 2024, Nov 2023, Nov 2025*

- **How it works:** 1 PMOS on top (pull-up) and 1 NMOS on bottom (pull-down) sharing one vertical Polysilicon gate line $A$.
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

---

### 🎯 1.3 Stick Diagram of 2-Input CMOS NAND Gate ($Y = \overline{A \cdot B}$)
*Asked in: May 2024, Nov 2023, Nov 2025*

- **Simple Rule:** For **NAND**, **PMOS** transistors are in **PARALLEL** (both connect to $V_{DD}$), and **NMOS** transistors are in **SERIES** (only one end connects to $GND$).
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
GND Rail (Blue Metal-1) ═════╪═════════════════════════════════╧══════
                             └──► Output Y (Joins PMOS Drain Y to NMOS Drain Y)
```

---

### 🎯 1.4 Stick Diagram of 2-Input CMOS NOR Gate ($Y = \overline{A + B}$)
*Asked in: May 2024, Nov 2023, Nov 2025*

- **Simple Rule:** **NOR** is the exact opposite of NAND. **PMOS** transistors are in **SERIES** (only one connects to $V_{DD}$), and **NMOS** transistors are in **PARALLEL** (both connect to $GND$).
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
                             │               └─► Output Y ◄────┘ (Joins PMOS Drain Y)
GND Rail (Blue Metal-1) ═════╧═════════════════════════════════╧══════
```

---

### 🎯 1.5 Euler's Path Method (Drawing Complex Gates Without Breaking Diffusion)
- **In Simple Words:** Imagine trying to draw a house **without lifting your pen**. In VLSI, lifting your pen means **breaking the diffusion strip** into separate islands and wasting chip space with extra wires. **Euler's Path** finds the exact left-to-right order of inputs ($A, B, C...$) so both PMOS and NMOS form **one continuous, unbroken strip**!
- **4-Step Exam Algorithm:**
  1. **Draw PMOS Graph:** Dots = nodes ($V_{DD}$, $Y$, internal), Lines = PMOS transistors ($A, B, C$).
  2. **Draw NMOS Graph:** Dots = nodes ($GND$, $Y$, internal), Lines = NMOS transistors ($A, B, C$).
  3. **Find Common Euler Sequence:** Trace every line **exactly once** in both graphs using the **exact same input order** (e.g., $A \to C \to B$ for $Y = \overline{(A+B)\cdot C}$).
  4. **Draw Stick Diagram:** Place vertical Polysilicon lines in that exact Euler order over one continuous p-diffusion strip (top) and one continuous n-diffusion strip (bottom).

---

### 🎯 1.6 Master 18-Mark Problem: CMOS Half Adder (Truth Table, Circuit, Euler's Path & Stick Diagram)
*Asked verbatim in Nov/Dec 2022 (18 Marks)*

1. **Truth Table & Equations:**
   | $A$ | $B$ | **Sum ($S = A \oplus B$)** | **Carry ($C = A \cdot B$)** |
   | :---: | :---: | :---: | :---: |
   | 0 | 0 | **0** | **0** |
   | 0 | 1 | **1** | **0** |
   | 1 | 0 | **1** | **0** |
   | 1 | 1 | **0** | **1** |
   $$\text{Carry} = A \cdot B = \overline{\overline{A \cdot B}}, \qquad \text{Sum} = A \oplus B = (A + B) \cdot \overline{A \cdot B}$$
2. **CMOS Transistor Implementation:**
   - **Carry:** 2-input NAND gate ($\overline{AB}$) followed by a CMOS Inverter ($AB$) = 6 transistors.
   - **Sum:** Static CMOS XOR/OAI network using $A, B$ and inverted $\bar{A}, \bar{B}$ (or $\overline{\text{Carry}}$).
3. **Euler's Path:** Common unbroken gate sequence for Carry = **$A - B$**; for Sum = **$A - B - \bar{A} - \bar{B}$**.
4. **Stick Diagram:** Draw top $V_{DD}$ rail, bottom $GND$ rail, continuous p-diffusion & n-diffusion strips, vertical Poly lines in Euler order, and tap outputs **Sum** and **Carry** via Metal-1 contacts.

---

## 🏆 Topic 2: Layout Parasitics & Signal Integrity (10x Repeated!)
*Asked in 7 out of 8 Papers (`May 2023–2026, Nov 2023–2025`)*

### 🎯 2.1 Antenna Effect (Plasma-Induced Gate Oxide Damage)
*Asked 6 times! (`May 2023, Nov 2023, May 2024, May 2025, Nov 2025, May 2026`)*

- **In Simple Words (Lightning Rod Analogy):**
  Think of a **long metal wire** on a chip as a **TV antenna or lightning rod**. During manufacturing, a process called **plasma etching** shoots charged ions onto the wafer to carve out wires.
  1. A long, floating metal wire acts like an **antenna** and collects static electric charge from the plasma.
  2. If that wire connects only to a transistor's **thin gate ($\text{SiO}_2$)** and has **no escape path to ground**, high voltage builds up ($V = Q/C$) and **punches a hole (burns)** through the gate oxide, permanently destroying the transistor.
- **Exam Diagram:**
  ```text
     Plasma Ions (+ + + + +)
            │   │   │   │
     ═══════╧═══╧═══╧═══════  Long Floating Metal Wire ("Antenna")
            │
       [Poly Gate]
       ═══SiO2═══  ◄── Gate Oxide Breaks Down! (Charge trapped)
       p-Substrate
  ```
- **Formula:**
  $$\text{Antenna Ratio} = \frac{\text{Area of Metal Interconnect}}{\text{Area of Connected Gate Oxide}} \le \text{Safe Limit (typically } 200\text{–}500\text{)}$$
- **2 Simple Ways to Prevent It:**
  1. **Metal Hopping (Jumper):** Break the long Metal-1 wire and jump up to Metal-2 right before the gate. *(When Metal-1 is being etched, the long upper wire doesn't exist yet, so no charge is collected!)*
  2. **Antenna Diode:** Connect a small reverse-biased $p\text{-}n$ diode to ground right beside the gate. *(If voltage rises too high during etching, the diode safely drains the charge to ground.)*

---

### 🎯 2.2 Electromigration (EM)
*Asked 3 times! (`May 2023, Nov 2023, May 2026`)*

- **In Simple Words (River & Pebbles Analogy):**
  Imagine a fast-flowing **river pushing sand and pebbles** downstream. Inside a chip's metal wire, high-speed flowing electrons act like a **"electron wind"** that physically bumps into metal atoms and pushes them forward over time.
- **Two Failure Modes:**
  1. **Voids (Upstream / Cathode):** Metal atoms get pushed away, leaving empty gaps that thin the wire until it snaps (**Open Circuit**).
  2. **Hillocks (Downstream / Anode):** Pushed metal atoms pile up into bumps that poke through insulation and touch nearby wires (**Short Circuit**).
- **Black's Equation for Mean Time to Failure (MTTF):**
  $$\text{MTTF} = \frac{A}{J^n} \exp\left(\frac{E_a}{kT}\right)$$
  - $A$ = Geometry constant, $J$ = Current density ($\text{A/cm}^2$), $n \approx 2$
  - $E_a$ = Activation energy ($0.6\text{ eV}$ for Al, $1.0\text{ eV}$ for Cu), $k$ = Boltzmann constant, $T$ = Temperature (K)
- **Prevention Techniques:**
  1. **Widen $V_{DD}$ and $GND$ rails** to reduce current density $J$.
  2. **Use Copper (Cu)** instead of Aluminum (Copper is heavier and resists electron wind much better).
  3. **Use multiple redundant vias** at high-current corners.

---

### 🎯 2.3 Interconnect Crosstalk
*Asked 2 times! (`Nov 2024, May 2025`)*

- **In Simple Words (Two Close Highway Lanes):**
  When two metal wires run side-by-side very closely, they act like the two plates of a tiny **parasitic capacitor ($C_c$)**. When a signal rapidly switches from $0 \to 1$ on one wire (**Aggressor Line**), it pushes a fake voltage spike onto the quiet neighbor wire (**Victim Line**)—just like a speeding truck shaking a small car in the next lane!
- **Victim Noise Voltage Formula:**
  $$\Delta V_{\text{victim}} = V_{\text{swing}} \cdot \left(\frac{C_c}{C_c + C_{\text{gnd}}}\right)$$
- **Effects:** Causes **Crosstalk Glitches** (false logic 1/0 switching) and **Crosstalk Delay/Jitter** (timing failures).
- **Prevention Techniques:**
  1. **Shielding:** Place a grounded ($GND$ or $V_{DD}$) shield wire between sensitive lines (like clock lines).
  2. **Increase Spacing:** Keep parallel wires farther apart ($\ge 2\times$ minimum spacing) to shrink $C_c$.
  3. **Orthogonal Routing:** Route Metal-1 horizontally and Metal-2 vertically so wires don't run parallel for long distances.

---

## 🏆 Topic 3: Lambda ($\lambda$) Based Layout Design Rules (Mead-Conway)
*Asked 6 times (`Nov 2022, May 2023, Nov 2023, May 2024, Nov 2024, May 2025`)*

### 💡 In Simple Words (The LEGO Brick Analogy)
Imagine building a castle out of **LEGO bricks**, where every wall is "2 studs wide" and "3 studs apart." If a new factory invents LEGO bricks that are half as big, you don't need to redesign your castle—it automatically shrinks to half the size!
In VLSI, **$\lambda$ (Lambda)** is that single "stud unit" (**half of the minimum transistor channel length**, $L_{\min} = 2\lambda$). Because all dimensions are written as $2\lambda, 3\lambda$, an entire chip layout scales effortlessly to smaller technologies just by changing the value of $\lambda$.

### 🎯 3.1 Lambda Rules vs. Micron Rules
| Feature | Lambda ($\lambda$) Rules (Mead-Conway) | Micron ($\mu\text{m}$ / $\text{nm}$) Rules |
| :--- | :--- | :--- |
| **Units Used** | Dimensionless integer multiples of $\lambda$. | Absolute physical sizes ($\mu\text{m}$ or $\text{nm}$). |
| **Scalability** | **Portable & Scalable** across new tech nodes. | **Not scalable**; locked to one foundry process. |
| **Area Efficiency** | Slightly conservative (10–15% extra area). | Maximum packing density (fully optimized). |

### 🎯 3.2 The 8 Essential Mead-Conway Rules (With Exam Sketches)
*Write any 6 to 8 rules with these simple dimension sketches:*

1. **Active Diffusion ($n^+$ / $p^+$):** Min width = **$2\lambda$**, Min spacing = **$3\lambda$** (prevents punch-through).
   ```text
   ┌──────┐   3λ    ┌──────┐
   │ Diff │◄───────►│ Diff │   (Width >= 2λ, Spacing >= 3λ)
   └──────┘         └──────┘
   ```
2. **Polysilicon (Gates):** Min width = **$2\lambda$** (channel length $L$), Min spacing = **$2\lambda$**.
3. **Transistor Overhang (Gate Extension):** Poly must extend **$2\lambda$** past diffusion edges (prevents source-drain short around gate tip). Non-gate Poly to Diffusion spacing = **$1\lambda$**.
   ```text
             2λ (Poly Overhang)
             ┌───┐
     ┌───────┼───┼───────┐
     │ Diff  │ P │ Diff  │   <-- Diff width >= 2λ
     └───────┼───┼───────┘
             └───┘
             2λ (Poly width)
   ```
4. **Contact Cut:** Exact window size = **$2\lambda \times 2\lambda$**, Min overlap (surround) by Metal/Poly/Diff = **$1\lambda$**.
   ```text
   ┌─────────────┐
   │  ┌───────┐  │  <-- 1λ Metal/Diff surround
   │  │ 2λx2λ │  │  <-- 2λ x 2λ Contact Cut
   │  └───────┘  │
   └─────────────┘
   ```
5. **Metal-1:** Min width = **$3\lambda$**, Min spacing = **$3\lambda$**.
6. **Metal-2:** Min width = **$3\lambda$**, Min spacing = **$4\lambda$**.
7. **Via (Metal-1 to Metal-2):** Cut size = **$2\lambda \times 2\lambda$**, Metal overlap = **$1\lambda$**.
8. **N-Well:** Min width = **$10\lambda$–$12\lambda$**, Spacing between N-Wells = **$9\lambda$**.

---

## 🏆 Topic 4: SPICE Simulation & CMOS Inverter Code (AC, DC, Transient)
*Asked 6 times (`Nov 2023, Nov 2024, May 2025, Nov 2025, May 2026`)*

### 💡 In Simple Words (Virtual Breadboard)
Manufacturing a real silicon microchip costs millions of dollars—you cannot afford mistakes! **SPICE** (*Simulation Program with Integrated Circuit Emphasis*) is a **virtual breadboard & oscilloscope** on a computer. You type a text file describing your transistors (**Netlist**), and SPICE simulates exact voltages, delays, and frequency curves *before* fabrication.

### 🎯 4.1 The 3 Essential SPICE Analyses
1. **DC Analysis (`.DC`):** Sweeps input voltage $V_{\text{in}}$ from $0\text{ V}$ to $V_{DD}$ while time is frozen.
   - **Finds:** Voltage Transfer Characteristic (**VTC**) curve, switching threshold ($V_M$), and Noise Margins ($NM_H, NM_L$).
   - *Command:* `.DC VIN 0 1.8 0.01`
2. **Transient Analysis (`.TRAN`):** Applies a time-varying pulse/square wave and measures voltages over **time**.
   - **Finds:** Rise time ($t_r$), Fall time ($t_f$), Propagation Delay ($t_{pLH}, t_{pHL}$), and Switching Power.
   - *Command:* `.TRAN 10p 10n`
3. **AC Analysis (`.AC`):** Sweeps input **frequency** ($f$) around a DC operating point using a small-signal AC sine wave.
   - **Finds:** **Bode Plot** (Gain in dB & Phase vs Frequency), 3-dB bandwidth, and unity-gain frequency ($f_T$).
   - *Command:* `.AC DEC 10 1K 10G`

### 🎯 4.2 Ready-to-Write SPICE Code: CMOS Inverter AC Analysis
*Asked verbatim 3 times! (`Nov 2023, Nov 2024, May 2025`)*

```spice
* SPICE Netlist for CMOS Inverter AC Analysis
* Nodes: 1=VDD, 2=Vin, 3=Vout, 0=GND

* 1. Supply & Input Bias + AC Signal
VDD  1  0  DC 1.8V
VIN  2  0  DC 0.9V  AC 1.0V        ; Biased at V_M (0.9V) + 1V AC sweep signal

* 2. Transistors (Mname Drain Gate Source Bulk Model W L)
M1   3  2  1  1  PMOS_MOD  W=2.0u  L=0.18u   ; PMOS Pull-Up
M2   3  2  0  0  NMOS_MOD  W=1.0u  L=0.18u   ; NMOS Pull-Down

* 3. Output Load Capacitance
CL   3  0  50fF                              ; 50 fF load at Vout

* 4. Device Models
.MODEL NMOS_MOD NMOS (LEVEL=1 VTO=0.4 KP=120u)
.MODEL PMOS_MOD PMOS (LEVEL=1 VTO=-0.4 KP=40u)

* 5. AC Sweep (Decade, 10 points/decade, 1 kHz to 10 GHz)
.AC DEC 10 1K 10G

* 6. Print & Plot Magnitude (dB) and Phase
.PRINT AC VDB(3) VP(3)
.PLOT  AC VDB(3)
.END
```
*(Exam Tip: For **DC Analysis**, write `.DC VIN 0 1.8 0.01`. For **Transient Analysis**, use `PULSE(0 1.8 0 0.1n 0.1n 2n 4n)` and `.TRAN 0.05n 10n`.)*

---

## 🏆 Topic 5: Physical Verification Flow (DRC, Extraction, ERC, LVS)
*Asked 5 times (`May 2024, Nov 2025, May 2026`)*

### 💡 In Simple Words (4 Final Quality Checks Before Printing)
Before sending your layout to the factory, it must pass 4 strict checks—just like publishing a book:
1. **DRC (Spellcheck):** Did you violate any $\lambda$ width or spacing rules?
2. **Circuit Extraction (Measuring Weight):** Measures real parasitic resistance ($R$) and capacitance ($C$) of your drawn wires.
3. **ERC (Safety Inspector):** Checks for electrical disasters like $V_{DD}$ shorted to $GND$ or floating inputs.
4. **LVS (Blueprint Match):** Compares the drawn layout against your original schematic to prove they are 100% identical!

```text
  [Layout (GDSII)] ──► 1. DRC (Geometry Width/Spacing Check)
         │
         ├──► 2. Circuit Extraction ──► [Extracted Netlist + R, C Parasitics]
         │                                       │
         ├──► 3. ERC (Electrical Shorts/Opens)   ├──► 4. LVS (Layout vs Schematic Match)
                                                 ▲
                             [Golden Schematic Netlist]
```

| Check | Full Name | Key Violations Caught |
| :--- | :--- | :--- |
| **DRC** | Design Rule Check | Minimum width/spacing errors, contact enclosure, antenna ratio violations. |
| **Extraction** | Parasitic Extraction | Extracts actual transistor $W/L$ and interconnect $R, C$ for timing simulation. |
| **ERC** | Electrical Rule Check | $V_{DD}$-to-$GND$ shorts, floating transistor gates, missing substrate/well taps. |
| **LVS** | Layout Versus Schematic | Missing/extra transistors, wrong $W/L$ sizes, swapped signal pins. |

---

## 🏆 Topic 6: ASIC Design Flow & Cell Design Specification
*Asked 4 times (`May 2023, Nov 2024, May 2025`)*

### 💡 In Simple Words (City Planning Analogy)
Designing an ASIC chip is like building a **smart city**: **Floorplanning** divides the land into districts; **Placement** puts houses in neat rows; **Clock Tree Synthesis (CTS)** synchronizes all traffic lights; and **Routing** lays down the roads connecting every house!

### 🎯 6.1 8-Step ASIC Design Flow
1. **Design Entry (RTL):** Write Verilog/VHDL code and verify logic functionally.
2. **Logic Synthesis:** Convert RTL into a Gate-Level Netlist using standard cells.
3. **Partitioning:** Split the chip into manageable functional blocks.
4. **Floorplanning & Power Planning:** Set chip size, I/O pads, macro blocks, and $V_{DD}/GND$ power rings.
5. **Placement:** Arrange standard cells in neat rows to minimize wirelength.
6. **Clock Tree Synthesis (CTS):** Build a balanced clock tree (H-tree) with buffers so the clock reaches all flip-flops simultaneously (**zero skew**).
7. **Routing (Global & Detailed):** Lay out actual DRC-clean metal tracks and vias.
8. **Physical Verification & Tape-Out:** Run DRC, ERC, LVS, Static Timing Analysis (STA), and export **GDSII** file to foundry.

### 🎯 6.2 Cell Design Specification (*Asked in Nov/Dec 2024*)
Rules followed when creating a Standard Cell library (e.g., NAND, Flip-Flop):
1. **Uniform Cell Height:** All cells share the exact same vertical height (e.g., 9 or 12 routing tracks) so they snap into neat rows; only width varies.
2. **Aligned Power Rails:** Top $V_{DD}$ and bottom $GND$ Metal-1 rails have fixed width and position so neighboring cells connect automatically.
3. **On-Grid Pins:** Input/output pins sit on exact routing grid intersections.
4. **Timing & Power Library (`.lib`):** Delay ($t_{pd}$), slew, input capacitance ($C_{\text{in}}$), and power are characterized for synthesis tools.

---

## 🏆 Topic 7: CMOS Transistor Fabrication Process (N-Well Steps)
*Asked in `Nov/Dec 2022` (12 Marks)*

### 🎯 The 9 Sequential Photolithography Steps
1. **Wafer & Oxidation:** Start with lightly doped $p$-type silicon wafer; grow thin protective $\text{SiO}_2$.
2. **N-Well Formation (Mask 1):** Pattern photoresist, etch oxide, implant **Phosphorus ($n$-type)** donors, and diffuse at $1100^\circ\text{C}$ to create the **N-Well** (for PMOS).
3. **Active Area & LOCOS Isolation (Mask 2):** Pattern $\text{Si}_3\text{N}_4$; grow thick **Field Oxide (FOX)** between transistors to isolate them.
4. **Gate Oxide & Polysilicon (Mask 3):** Grow ultra-thin pure gate oxide ($\text{SiO}_2$, $2\text{–}5\text{ nm}$), deposit Polysilicon via CVD, and etch to form **self-aligned gates**.
5. **$n^+$ Source/Drain Implant (Mask 4):** Mask PMOS; implant **Arsenic** to form NMOS source/drain and N-Well taps.
6. **$p^+$ Source/Drain Implant (Mask 5):** Mask NMOS; implant **Boron** to form PMOS source/drain and substrate taps.
7. **Inter-Layer Dielectric (ILD):** Deposit thick insulating $\text{SiO}_2$ / BPSG layer over the wafer.
8. **Contact Cut Etching (Mask 6):** Etch holes through ILD down to source, drain, and gate regions.
9. **Metallization & Passivation (Masks 7 & 8):** Deposit Aluminum/Copper interconnects (Mask 7) and seal the chip with protective **$\text{Si}_3\text{N}_4$ passivation glass** (Mask 8), leaving openings only for bonding pads.

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
