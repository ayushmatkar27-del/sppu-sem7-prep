// SPPU AI Answer Assistant & Scoring Blueprint Engine
window.SPPU_AI_HINTS = {
  "Magic Tee": {
    "summary": "4-port hybrid waveguide junction combining E-plane and H-plane Tees.",
    "blueprint": "1. 3D construction diagram (2M), 2. Working properties of Ports 1, 2, 3(\u03a3), 4(\u0394) (2M), 3. Ideal S-matrix derivation with 1/\u221a2 factor (2M).",
    "mnemonic": "E-arm = Out-of-phase (Difference \u0394), H-arm = In-phase (Sum \u03a3).",
    "pitfall": "Do not forget the negative sign on S24 (-1) due to the 180\u00b0 antisymmetric E-field split!"
  },
  "Directional Coupler": {
    "summary": "4-port passive device to sample forward/backward microwave power without disturbing main transmission.",
    "blueprint": "1. Two-hole waveguide diagram with distance d = \u03bbg/4 (2M), 2. Phase addition & cancellation proof (2M), 3. Formulas for Coupling Factor (C), Directivity (D), Isolation (I) (2M).",
    "mnemonic": "CID Formula: Isolation (I) = Coupling (C) + Directivity (D) in dB.",
    "pitfall": "Writing d = \u03bb/4 instead of guide wavelength \u03bbg/4."
  },
  "Cavity Magnetron": {
    "summary": "High-power crossed-field (E \u27c2 B) microwave oscillator with resonant copper cavities.",
    "blueprint": "1. Cross-sectional diagram showing cathode, anode cavities, and electron spokes (2M), 2. Hull Cut-Off & Hartree voltage equations (2M), 3. Strapping (prevents mode jumping) & Phase Focusing (2M).",
    "mnemonic": "Crossed-Field = Electrons rotate in wheel spokes, transferring DC energy to RF.",
    "pitfall": "Confusing Hull cut-off (grazing condition) with Hartree line (synchronism voltage)."
  },
  "Traveling Wave Tube": {
    "summary": "Broadband microwave amplifier tube using a non-resonant helical slow-wave structure.",
    "blueprint": "1. Helical tube schematic (2M), 2. Axial velocity reduction formula vp = c * (p / \u03c0d) (2M), 3. Comparison table vs Klystron (Bandwidth: Broadband vs Narrowband) (2M).",
    "mnemonic": "TWT = Continuous traveling interaction (Broadband); Klystron = Discrete cavity gaps (Narrowband).",
    "pitfall": "Stating TWT uses resonant cavities\u2014it does NOT; it uses a non-resonant helix."
  },
  "Gunn Diode": {
    "summary": "Bulk transferred-electron negative-resistance semiconductor device (GaAs/InP) with no p-n junction.",
    "blueprint": "1. RWH 2-valley conduction band diagram (Lower \u0393-valley vs Upper L-valley) (2M), 2. Negative differential resistance (NDR) mechanism (2M), 3. Domain formation & drift frequency f = vs / L (2M).",
    "mnemonic": "High field scatters light fast electrons into heavy slow valley -> Current drops -> Negative Resistance!",
    "pitfall": "Drawing a p-n junction diode symbol\u2014Gunn diode is a bulk semiconductor slice without a junction."
  },
  "IMPATT Diode": {
    "summary": "Impact Avalanche Transit Time reverse-biased diode producing 180\u00b0 total RF phase delay.",
    "blueprint": "1. Read diode structure (p+-n-i-n+) (2M), 2. Total 180\u00b0 phase delay: 90\u00b0 avalanche buildup + 90\u00b0 drift transit time (2M), 3. Comparison table vs TRAPATT (Efficiency: TRAPATT 75% vs IMPATT 15%) (2M).",
    "mnemonic": "90\u00b0 Avalanche + 90\u00b0 Drift = 180\u00b0 Out-of-Phase -> Dynamic Negative Resistance (-R).",
    "pitfall": "Forgetting that avalanche multiplication introduces the first 90\u00b0 delay."
  },
  "TE10 Dominant Mode": {
    "summary": "The mode with lowest cut-off frequency in rectangular waveguides (lambda_c = 2a), where E-field is purely transverse.",
    "blueprint": "1. Waveguide geometry (a > b) and cut-off wavelength formula lambda_c = 2ab / sqrt(m^2*b^2 + n^2*a^2) (2M), 2. Dominant TE10 mode parameters: lambda_c = 2a, fc = c / 2a (2M), 3. Explanation of why hollow single-conductor guides cannot support TEM mode (2M).",
    "mnemonic": "TE10 = Transverse Electric, 1 half-cycle along width 'a', 0 variation along height 'b'.",
    "pitfall": "Confusing TE10 with TM10 - TM10 cannot exist in rectangular waveguide because both m and n must be >= 1 for TM modes!"
  },
  "Microstrip Line Losses": {
    "summary": "Planar quasi-TEM transmission line fabricated on dielectric substrate with conductor, dielectric, and radiation losses.",
    "blueprint": "1. Cross-sectional geometry: strip width W, substrate thickness h, dielectric constant epsilon_r (2M), 2. Effective dielectric constant epsilon_eff and characteristic impedance Z0 (2M), 3. Three loss mechanisms: Conductor (skin depth), Dielectric (loss tangent tan delta), and Radiation loss (2M).",
    "mnemonic": "Microstrip = Open quasi-TEM (easy component soldering, some radiation); Stripline = Shielded pure TEM (zero radiation).",
    "pitfall": "Assuming microstrip supports pure TEM mode - because fields travel partly in air and partly in substrate, it is strictly QUASI-TEM."
  },
  "CPLD vs FPGA": {
    "summary": "CPLD = Coarse-grained, non-volatile Flash, deterministic timing. FPGA = Fine-grained CLBs, volatile SRAM, massive logic capacity.",
    "blueprint": "Draw a clear 7-row comparison table: Architecture, Logic Capacity, Interconnects, Timing, Volatility, Power, and Applications (Full 8-10M).",
    "mnemonic": "CPLD = Constant Predictable Logic Delay (Instant-ON); FPGA = Flexible Programmable Gate Array (High density).",
    "pitfall": "Writing that FPGAs are non-volatile\u2014most commercial FPGAs use volatile SRAM and require external boot PROM."
  },
  "CMOS Logic Design": {
    "summary": "Static CMOS logic: Pull-Up Network (PMOS) dual of Pull-Down Network (NMOS).",
    "blueprint": "1. Transistor schematic with labeled gates, VDD, GND (3M), 2. Truth table (1M), 3. Aspect ratio sizing calculations (W/L)n and (W/L)p (2M).",
    "mnemonic": "NMOS: Series = AND, Parallel = OR. PMOS: Series = OR, Parallel = AND.",
    "pitfall": "Leaving out (W/L) transistor sizing calculations when the question explicitly states 'Calculate W/L'."
  },
  "Lambda Rules": {
    "summary": "Mead-Conway scalable layout geometric design rules based on unit \u03bb = L/2.",
    "blueprint": "1. Definition of \u03bb (1M), 2. 6 essential layer rules with dimensions: Active (2\u03bb), Poly (2\u03bb), Gate extension (2\u03bb), Metal-1 (3\u03bb), Contact cut (2\u03bb x 2\u03bb) (4M), 3. Layout sketch (1M).",
    "mnemonic": "2-2-2-3: Active width 2\u03bb, Poly width 2\u03bb, Poly extension 2\u03bb, Metal width 3\u03bb.",
    "pitfall": "Drawing contact cuts smaller than 2\u03bb x 2\u03bb or without 1\u03bb active overlap."
  },
  "BIST Architecture": {
    "summary": "Built-In Self-Test circuit design allowing on-chip testing without external automatic test equipment (ATE).",
    "blueprint": "1. BIST block diagram: Pattern Generator (LFSR), CUT, Response Analyzer (MISR), Controller (3M), 2. LFSR PRPG working (2M), 3. BILBO modes table (2M).",
    "mnemonic": "LFSR generates tests -> CUT executes -> MISR compresses signature -> Controller evaluates pass/fail.",
    "pitfall": "Forgetting the signature compressor (MISR)\u2014without it, storing all test outputs would overflow memory."
  },
  "Full vs Para Virtualization": {
    "summary": "Full Virtualization = Unmodified Guest OS + Binary translation / VT-x. Para-Virtualization = Modified Guest OS kernel + Hypercalls.",
    "blueprint": "1. Layered architectural diagram of both approaches (3M), 2. 5-point comparison table: Guest OS modification, performance overhead, portability, examples (3M).",
    "mnemonic": "Full = Complete disguise (Windows runs unchanged); Para = Cooperative communication (Kernel recompiled with hypercalls).",
    "pitfall": "Claiming Para-virtualization supports proprietary unmodified Windows\u2014it historically required open-source Linux kernel modifications."
  },
  "CIA Security Model": {
    "summary": "Foundational security model: Confidentiality (Privacy), Integrity (Authenticity), Availability (Reliability).",
    "blueprint": "1. CIA Triad diagram (1M), 2. Explanation of each with cloud enforcement mechanisms: Confidentiality (AES-256/KMS), Integrity (SHA-256), Availability (Multi-AZ / Auto-scaling) (3M), 3. Real-world threat examples (2M).",
    "mnemonic": "CIA = Confidential (No unauthorized reading), Integrity (No unauthorized tampering), Available (Always online).",
    "pitfall": "Omitting the specific cloud technologies used to achieve each pillar (e.g. AWS KMS, S3 Object Lock)."
  },
  "Batch Normalization": {
    "summary": "Normalizes layer activations across each mini-batch to zero mean and unit variance, reducing internal covariate shift.",
    "blueprint": "1. Internal covariate shift definition (2M), 2. 4-step mathematical formulas: Mean (\u03bc), Variance (\u03c3\u00b2), Normalize (x\u0302), Scale & Shift (y = \u03b3x\u0302 + \u03b2) (3M), 3. 3 core benefits (2M).",
    "mnemonic": "Compute \u03bc & \u03c3\u00b2 -> Normalize -> Scale (\u03b3) & Shift (\u03b2).",
    "pitfall": "Forgetting learnable parameters \u03b3 and \u03b2\u2014without them, the network's representational capacity is severely restricted."
  },
  "VGGNet vs AlexNet": {
    "summary": "VGG proved that stacking small 3x3 convolutions is superior in accuracy and parameter efficiency to large 11x11/5x5 filters.",
    "blueprint": "1. Receptive field equivalence proof: Two 3x3 = One 5x5; Three 3x3 = One 7x7 (3M), 2. Parameter reduction calculation: 27C\u00b2 vs 49C\u00b2 (45% reduction) (3M), 3. Architecture comparison table (2M).",
    "mnemonic": "Small stacked 3x3 filters = Same receptive field + 45% fewer weights + More non-linear ReLUs.",
    "pitfall": "Not calculating the exact parameter reduction ratio when comparing 3 stacked 3x3 filters vs one 7x7 filter."
  },
  "LSTM Cell Gates": {
    "summary": "Overcomes vanishing gradients via constant error cell state highway controlled by Forget, Input, and Output gates.",
    "blueprint": "1. LSTM cell architecture diagram (2M), 2. Equations for Forget Gate (f_t), Input Gate (i_t & C\u0303_t), Cell Update (C_t), and Output Gate (o_t, h_t) (3M), 3. Vanishing gradient resolution explanation (2M).",
    "mnemonic": "F-I-O Gates: Forget old, Input new candidate, Output filtered hidden state.",
    "pitfall": "Using matrix multiplication for gate masking instead of element-wise Hadamard product (*)."
  },
  "Anonymous Function": {
    "summary": "Function without an identifier name, assigned to variables, passed as callbacks, or run as IIFE.",
    "blueprint": "1. Definition & syntax (2M), 2. Example as variable expression and as callback in setTimeout / addEventListener (2M), 3. Advantages: Encapsulation & scope safety (2M).",
    "mnemonic": "Anonymous = Nameless function expression, defined right where it is needed.",
    "pitfall": "Expecting anonymous function expressions to be hoisted\u2014they are NOT hoisted like function declarations!"
  }
};

function showAiAssistant(topicKey) {
    const hints = window.SPPU_AI_HINTS[topicKey] || {
        summary: "Standard SPPU 6/6 Marks Model Answer structure.",
        blueprint: "1. Definition & Labeled Diagram (2M), 2. Mathematical Equations / Derivations (2M), 3. Working Principle & Real-time Applications (2M).",
        mnemonic: "Structure answer with: Definition -> Schematic -> Formula -> Applications.",
        pitfall: "Writing large unstructured text blocks without bold keywords and labeled diagrams."
    };

    const modal = document.getElementById('aiAssistantModal');
    if (!modal) return;

    document.getElementById('aiModalTopic').textContent = topicKey;
    document.getElementById('aiSummary').textContent = hints.summary;
    document.getElementById('aiBlueprint').textContent = hints.blueprint;
    document.getElementById('aiMnemonic').textContent = hints.mnemonic;
    document.getElementById('aiPitfall').textContent = hints.pitfall;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAiAssistant() {
    const modal = document.getElementById('aiAssistantModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
