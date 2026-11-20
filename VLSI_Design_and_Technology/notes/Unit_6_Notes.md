# ⚡ Unit 6: Fault Modeling, DFT, BIST & JTAG Boundary Scan
### VLSI Design and Technology (Course Code: 404182) | SPPU 2019 Course Pattern
**End-Sem Examination: Question 7 OR Question 8 (17 Marks Weightage) | Exhaustive Question Bank**

---

## 📌 Unit 6 Exam Frequency & Coverage Map
*Audited from 13 SPPU University Papers (2022 to 2026)*

| Exam Topic | SPPU Frequency | Probability Tier | Typical Marks | Question Variants Asked |
| :--- | :---: | :---: | :---: | :--- |
| **1. DFT Needs, Controllability, Observability & SCOAP** | **14 times** | `🔥 100% Guaranteed` | **8 to 10 M** | Need for DFT, Controllability, Observability, SCOAP |
| **2. Built-In Self-Test (BIST) Architecture, LFSR, MISR & BILBO** | **12 times** | `🔥 100% Guaranteed` | **8 to 10 M** | BIST Block Diagram, LFSR Polynomial, BILBO Modes |
| **3. JTAG Boundary Scan (IEEE 1149.1) & 16-State TAP Controller** | **11 times** | `🔥 100% Guaranteed` | **8 to 10 M** | 5 Test Pins, BSC Cell, 16-State FSM, Instructions |
| **4. Fault Modeling: Stuck-at-0 / Stuck-at-1 & Path Sensitization** | **9 times** | `⚡ Very High (75%)` | **6 to 8 M** | Fault Models, 3-Step ATPG Sensitization |
| **5. Scan-Based Design & Multiplexed Scan Flip-Flop (Mux-DFF)** | **7 times** | `⚡ Very High (65%)` | **6 to 8 M** | Mux-DFF Schematic, Full vs Partial Scan |

---

## 🏆 Question 1: Design for Testability (DFT), Controllability, Observability & SCOAP
**Marks:** 8 to 10 Marks | **Frequency:** 14x across 12 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Explain need of Design for Testability in modern VLSI circuits. Explain Controllability, Observability and Predictability in testability."* (Dec 2022, May 2023, Dec 2023, May 2024, Nov 2024, May 2025, May 2026)
- *"Explain the following terms with respect to testability: i) Fault coverage ii) Fault Models iii) Observability iv) Controllability v) Physical Defects."* (Oct 2022, Sep 2023, Nov 2025)
- *"Explain SCOAP testability analysis metrics with a suitable gate example."* (Nov 2023, May 2025)

### 🎯 1.1 Why DFT is Mandatory in Deep Sub-Micron VLSI
1. **Physical Inaccessibility:** Billions of internal transistors are encapsulated inside plastic/ceramic packages with only a few hundred external I/O pins. Probing internal nodes mechanically is physically impossible.
2. **Testing Cost Exceeding Silicon Cost:** Manufacturing raw silicon wafers on automated tracks is cheap, but executing long test sequences on multi-million-dollar Automatic Test Equipment (ATE) can exceed 50% of total chip manufacturing cost ("Silicon is cheap, test time is expensive").
3. **Exponential Sequential State Space:** An un-designed sequential circuit with $N$ flip-flops has $2^N$ internal reachable states. Testing a 64-bit counter would require $2^{64} \approx 1.8 \times 10^{19}$ clock cycles (over 500 years at $1\text{ GHz}$!). Structured DFT (Scan Design) breaks sequential feedback loops, transforming intractable sequential ATPG into simple combinational ATPG.

---

### 🎯 1.2 Core Testability Metrics & Definitions
- **Controllability:** The degree of ease with which an internal circuit node can be forced into a desired logic state ('0' or '1') by applying stimulus test vectors at the Primary Inputs (PIs).
- **Observability:** The degree of ease with which the logic state of an internal circuit node can be determined by propagating its value to an observable Primary Output (PO).
- **Predictability:** The ability to initialize internal memory elements into a deterministic, known starting state without relying on uninitialized power-up states.
- **Fault Coverage:** Quantitative metric expressing the percentage of potential manufacturing defects detected by a test pattern set:
  $$\text{Fault Coverage} = \frac{\text{Number of Detected Faults}}{\text{Total Detectable Faults}} \times 100\%$$
- **Physical Defects vs. Fault Models:** A physical defect is an actual hardware imperfection (e.g., metal bridge, particulate contamination, open via). A fault model (e.g., Single Stuck-at Fault) is an abstract mathematical representation used by CAD tools to generate test vectors.

---

### 🎯 1.3 SCOAP Quantitative Testability Analysis
Sandia Controllability/Observability Analysis Program (SCOAP) assigns integer difficulty values to every node $n$:
- **Combinational Controllability 0 ($CC_0(n)$):** Minimum input assignments to force node $n = 0$.
- **Combinational Controllability 1 ($CC_1(n)$):** Minimum input assignments to force node $n = 1$.
- **Combinational Observability ($CO(n)$):** Minimum input assignments to propagate a fault at node $n$ to a primary output.

**SCOAP Rules for 2-Input AND Gate ($Y = A \cdot B$):**
- To set output $Y = 1$, BOTH inputs must be 1:
  $$CC_1(Y) = CC_1(A) + CC_1(B) + 1$$
- To set output $Y = 0$, EITHER input can be 0 (take the easiest path):
  $$CC_0(Y) = \min(CC_0(A), CC_0(B)) + 1$$
- To observe input $A$ at output $Y$, side input $B$ must be held at non-controlling 1:
  $$CO(A) = CO(Y) + CC_1(B) + 1$$

---

## 🏆 Question 2: Scan-Based Design & Multiplexed Scan Flip-Flop (Mux-DFF)
**Marks:** 6 to 8 Marks | **Frequency:** 7x across 6 papers (<span class="badge badge-high">65% Priority</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Explain Scan path testing. Draw schematic of multiplexed Scan Flip-Flop (Mux-DFF) and explain normal vs test mode."* (Dec 2022, May 2024, May 2026)
- *"Compare Full Scan vs Partial Scan testing."* (Nov 2023, Dec 2024)

### 🎯 Principles of Scan-Based Testing
- Every standard D-Flip-Flop in the circuit is replaced by a **Scan Flip-Flop (Mux-DFF)**.
- All flip-flops are chained together into a continuous serial shift register (Scan Chain) during test mode.
- **Three Operational Phases:**
  1. **Shift-In Phase ($\text{Scan Enable } SE = 1$):** Serial test vectors are clocked in via `Scan In (SI)` pin bit-by-bit until every flip-flop holds its intended test state.
  2. **Capture Phase ($SE = 0$):** Combinational logic executes for **one clock pulse**, capturing its functional response into the flip-flops.
  3. **Shift-Out Phase ($SE = 1$):** Captured test responses are shifted out via `Scan Out (SO)` to the ATE for comparison with golden expected vectors, while simultaneously shifting in the next test vector!

---

## 🏆 Question 3: Built-In Self-Test (BIST) Architecture, LFSR, MISR & BILBO
**Marks:** 8 to 10 Marks | **Frequency:** 12x across 10 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"What is the need of BIST? Explain typical BIST architecture with a neat block diagram."* (Dec 2022, May 2023, Dec 2023, Nov 2024, May 2025, May 2026)
- *"Explain PRPG (LFSR) and MISR in detail. State polynomial $x^4 + x^3 + 1$."* (May 2023, May 2025)
- *"What is BILBO? Explain its different operational modes with a truth table."* (Nov 2022, May 2024, Nov 2025)

### 🎯 3.1 Overall BIST Architecture Components
1. **BIST Controller:** Central finite state machine overseeing test activation, clock gating, cycle counting, and signature comparison strobing.
2. **Pseudo-Random Pattern Generator (PRPG / LFSR):** Generates millions of pseudo-random test vectors at full operating silicon clock speed.
3. **Circuit Under Test (CUT):** The functional combinational or sequential IP block being tested.
4. **Multiple Input Signature Register (MISR):** Compresses multi-bit parallel output responses from the CUT into a single compact $n$-bit **Signature**.
5. **ROM (Golden Signature):** On-chip non-volatile memory storing pre-computed fault-free signature obtained from golden software simulation.
6. **Signature Comparator:** Evaluates the MISR signature against the golden signature, asserting a 1-bit `PASS / FAIL` flag.

---

### 🎯 3.2 4-Bit LFSR with Primitive Polynomial $P(x) = x^4 + x^3 + 1$
- A Linear Feedback Shift Register uses selected output taps connected to XOR feedback gates.
- For primitive polynomial $P(x) = x^4 + x^3 + 1$, taps from $Q_3$ and $Q_2$ are XORed and fed back into $D_0$:
  $$D_0 = Q_3 \oplus Q_2$$
- **Maximal Length Sequence:** Produces $2^n - 1 = 2^4 - 1 = \mathbf{15 \text{ distinct states}}$ before repeating.
- **15-State Sequence Table (Initial Seed = 1000):**
  - Clock 0: `1000` | Clock 5: `1011` | Clock 10: `1110`
  - Clock 1: `0100` | Clock 6: `1101` | Clock 11: `0111`
  - Clock 2: `0010` | Clock 7: `1111` | Clock 12: `1010`
  - Clock 3: `0001` | Clock 8: `0110` | Clock 13: `0101`
  - Clock 4: `1001` | Clock 9: `0011` | Clock 14: `1011` &rarr; Repeats back to `1000`!

---

### 🎯 3.3 Built-In Logic Block Observer (BILBO) 4 Operational Modes
BILBO is a versatile multi-function register controlled by two mode bits ($C_1, C_2$):

| Mode | Control ($C_1, C_2$) | BILBO Operating Mode | Functional Description |
| :---: | :---: | :--- | :--- |
| **1** | **1 1** | **Normal System Mode** | Operates as standard parallel-in / parallel-out register for normal chip operation. |
| **2** | **0 0** | **Scan Shift Register** | Flip-flops configured as serial shift register for scan-in and scan-out testing. |
| **3** | **1 0** | **PRPG Mode** | Linear Feedback Shift Register generating pseudo-random test vectors. |
| **4** | **0 1** | **MISR Mode** | Multiple Input Signature Register compacting parallel CUT responses into a signature. |

---

## 🏆 Question 4: JTAG Boundary Scan Architecture (IEEE 1149.1) & TAP Controller
**Marks:** 8 to 10 Marks | **Frequency:** 11x across 9 papers (<span class="badge badge-critical">100% Guaranteed</span>)  
**Exact Exam Variations in SPPU Papers:**
- *"Explain JTAG Boundary Scan architecture. Explain all 5 pins involved."* (Dec 2022, May 2023, Dec 2023, May 2024, Nov 2024, May 2025, May 2026)
- *"Draw and explain the 16-state TAP controller state diagram in detail."* (May 2023, Nov 2023, Dec 2024, May 2026)
- *"Write short note on JTAG and Boundary Scan Instructions."* (Nov 2022, Oct 2022, Nov 2025)

### 🎯 4.1 The 5 Dedicated JTAG Test Access Port (TAP) Pins

| Pin Name | Pin Title | Direction | Function in Boundary Scan |
| :--- | :--- | :---: | :--- |
| **TCK** | Test Clock | Input | Dedicated clock synchronizing all TAP controller, instruction, and data register shifts. |
| **TMS** | Test Mode Select | Input | Serial control bit sampled on rising edge of TCK to navigate the 16-state TAP FSM. |
| **TDI** | Test Data In | Input | Serial test data and instructions shifted into TAP registers on rising edge of TCK. |
| **TDO** | Test Data Out | Output | Serial test data shifted out on falling edge of TCK (tri-stated when inactive). |
| **TRST\*** | Test Reset (Optional)| Input | Asynchronous active-low reset forcing TAP immediately into `Test-Logic-Reset`. |

---

### 🎯 4.2 TAP Controller 16-State Finite State Machine (FSM)
- The TAP Controller is a 16-state synchronous state machine controlled entirely by the single serial input `TMS`.
- It contains two completely symmetric 8-state columns:
  1. **Data Register (DR) Scan Column:**
     `Select-DR-Scan` &rarr; `Capture-DR` &rarr; `Shift-DR` &rarr; `Exit1-DR` &rarr; `Pause-DR` &rarr; `Exit2-DR` &rarr; `Update-DR`
  2. **Instruction Register (IR) Scan Column:**
     `Select-IR-Scan` &rarr; `Capture-IR` &rarr; `Shift-IR` &rarr; `Exit1-IR` &rarr; `Pause-IR` &rarr; `Exit2-IR` &rarr; `Update-IR`
- **Crucial Exam Rule:** Holding `TMS = 1` for **5 consecutive TCK clock cycles** guarantees that the TAP controller will return to `Test-Logic-Reset` from any state!

---

### 🎯 4.3 Mandatory IEEE 1149.1 Boundary Scan Instructions
1. **BYPASS (All 1s):** Short-circuits `TDI` directly to `TDO` through a 1-bit bypass register, allowing fast bypassing of untargeted chips on a PCB board.
2. **SAMPLE / PRELOAD:** Samples normal I/O pin values into Boundary Scan Cells without interrupting functional system operation; preloads test patterns.
3. **EXTEST (All 0s):** Drives test signals off-chip onto PCB board traces to detect solder opens, shorts, and board trace bridging defects between chips.
4. **INTEST:** Drives preloaded test vectors into the chip's internal core logic and captures internal functional responses.

---

## 🏆 Question 5: Fault Modeling & Path Sensitization (ATPG)
**Marks:** 6 to 8 Marks | **Frequency:** 9x across 7 papers (<span class="badge badge-high">75% Probability</span>)  

### 5.1 Fault Types in VLSI
- **Stuck-at-0 (SA0):** Node behaves as if permanently connected to ground ($0\text{ V}$).
- **Stuck-at-1 (SA1):** Node behaves as if permanently connected to power rail ($V_{DD}$).
- **Bridging Fault:** Unintended short circuit between adjacent signal lines (Wired-AND or Wired-OR behavior).
- **Delay Fault:** Gate or path operates correctly at DC, but fails to meet timing setup/hold requirements at operational clock frequencies.

### 5.2 3-Step Path Sensitization (D-Algorithm) Algorithm
To detect a target fault (e.g. Node $A$ is $SA0$):
1. **Fault Activation (Excitation):** Apply primary inputs to force line $A$ to the opposite logic value ($A = 1$). If the fault is present, error signal $D$ ($1/0$) is generated.
2. **Fault Propagation (Path Sensitization):** Set all side inputs of downstream gates along the path to **non-controlling values**:
   - For AND / NAND gates: Set side inputs to **1**.
   - For OR / NOR gates: Set side inputs to **0**.
   - This propagates error signal $D$ unhindered to a Primary Output.
3. **Line Justification:** Backtrack from internal gate inputs to Primary Inputs (PIs) to find a consistent input vector that satisfies all activation and propagation constraints without logical conflicts.
