import type { Subject, AcademicYear } from '../types/syllabus';

export const ACADEMIC_YEARS: AcademicYear[] = [
  {
    id: 'year-1',
    name: '1st Year',
    badge: 'Term 1 Available',
    terms: [
      {
        id: 'term-1',
        name: 'Term 1',
        yearId: 'year-1',
        description: 'First semester foundation courses covering programming, core mathematics, applied engineering physics, and web fundamentals.',
        isAvailable: true,
        statusBadge: 'Active • 4 Courses',
        subjects: [
          {
            id: 'python-prog',
            name: 'Problem Solving With Python Programming-1',
            code: 'CS-101',
            category: 'Programming & Logic',
            description: 'Fundamental programming principles with Python: syntax, conditionals, loop structures, collections, functions, recursion, and GUI modules.',
            iconName: 'Code2',
            yearId: 'year-1',
            termId: 'term-1',
            modules: [
              {
                id: 'python-m1',
                number: 'Module-I',
                name: 'Python Basics, Operators and Expressions',
                syllabusPreview: 'Literal constants, variables, identifiers, data types, I/O operations, comments, reserved words, indentation, operators, and expression precedence.',
                contentDetails: 'Python Basics: Literal Constants, Variables and Identifiers, Data Types, Input/Output Operations, Comments, Reserved Words, Indentation. Operators and Expressions: Arithmetic, Comparison, Assignment, Relational, Unary, Bitwise, Shift, Logical, Membership, Identity, Operator Precedence, and Associativity of Expressions.'
              },
              {
                id: 'python-m2',
                number: 'Module-II',
                name: 'Selection & Conditional Branching Statements',
                syllabusPreview: 'if, if-else, Nested if, if elif-else decision and branching statements.',
                contentDetails: 'Selection/Conditional Branching Statements – if, if-else, Nested if, if elif-else statements.'
              },
              {
                id: 'python-m3',
                number: 'Module-III',
                name: 'Loop Structures / Iterative Statements-1',
                syllabusPreview: 'while and for loops with comprehensive programming walkthroughs and examples.',
                contentDetails: 'Loop Structures/Iterative Statements-1: while, for loops with examples.'
              },
              {
                id: 'python-m4',
                number: 'Module-IV',
                name: 'Loop Structures / Iterative Statements-2',
                syllabusPreview: 'Nested loops, continue, break, and pass control statements.',
                contentDetails: 'Loop Structures/Iterative Statements-2: Nested loops, continue, break, pass statements.'
              },
              {
                id: 'python-m5',
                number: 'Module-V',
                name: 'Strings and its Operations',
                syllabusPreview: 'Concatenating, appending, multiplying strings, built-in string methods, slice operation, iterating string, string module.',
                contentDetails: 'Strings and its operations: Concatenating, Appending, Multiplying strings, Built-in String methods and functions, Slice Operation, Iterating String, String Module.'
              },
              {
                id: 'python-m6',
                number: 'Module-VI',
                name: 'Lists and Nested Lists',
                syllabusPreview: 'Creation of lists, indexing, slicing, updating lists, list methods, iterating lists, and nested lists.',
                contentDetails: 'Lists: Creation of Lists, Indexing, Slicing, Updating Lists, List Methods, Iterating Lists, Nested Lists.'
              },
              {
                id: 'python-m7',
                number: 'Module-VII',
                name: 'Tuples',
                syllabusPreview: 'Creating tuples, accessing elements, tuple methods, and immutability characteristics.',
                contentDetails: 'Tuples: Creating Tuples, Accessing Elements, Tuple Methods.'
              },
              {
                id: 'python-m8',
                number: 'Module-VIII',
                name: 'Functions and Variable Scopes',
                syllabusPreview: 'Declaration, definition, variable scope, lifetime of variables, return statements, argument types, lambda functions.',
                contentDetails: 'Functions: Declaration, Definition, Variable Scope, Lifetime of Variables, Return Statements, Types of Arguments, Lambda function.'
              },
              {
                id: 'python-m9',
                number: 'Module-IX',
                name: 'Recursion and Modules',
                syllabusPreview: 'Recursive function mechanics, built-in Python modules, and user-defined module structuring.',
                contentDetails: 'Recursion, Modules- Built-in Modules, User-defined Modules.'
              },
              {
                id: 'python-m10',
                number: 'Module-X',
                name: 'Modules, Libraries and Simple GUI Applications',
                syllabusPreview: 'Labels, buttons, entry, text, frame, menu, simple GUI applications, basic packages and libraries.',
                contentDetails: 'Modules and Libraries: Labels, Buttons, Entry, Text, Frame, Menu, Simple GUI Applications, Basic Packages and Libraries.'
              }
            ]
          },
          {
            id: 'math-cs',
            name: 'Mathematics for Computer Science',
            code: 'MATH-101',
            category: 'Discrete Mathematics & Logic',
            description: 'Core mathematical principles: number systems, IEEE-754 representation, modular arithmetic, proofs, matrices, combinatorics, sequences, sets, relations, and recurrence relations.',
            iconName: 'BarChart3',
            yearId: 'year-1',
            termId: 'term-1',
            modules: [
              {
                id: 'math-m1',
                number: 'MODULE I',
                name: 'Number Systems and Bitwise Operators',
                syllabusPreview: 'Binary, decimal, octal, hexadecimal conversions, arithmetic, bitwise operators, shift operations, optimization techniques.',
                contentDetails: 'Types of Number Systems: Binary, Decimal, Octal, Hexadecimal – Conversions between Number Systems, Basic Arithmetic operations in Decimal, Binary, Octal, Hexadecimal, Bitwise Operators: AND, OR, NOT, XOR, NAND, NOR, Shift Operations – Applications of Bitwise Operators in Optimization (Checking if a number is even or odd, Swapping two numbers without temporary storage, Counting the number of set bits in a number).'
              },
              {
                id: 'math-m2',
                number: 'MODULE II',
                name: 'Signed, Unsigned, & Floating Point Representations',
                syllabusPreview: 'Signed & unsigned integers, sign magnitude, 1\'s and 2\'s complement, overflow/underflow, IEEE 754 floating-point, rounding errors.',
                contentDetails: 'Representation of Signed & Unsigned Integers, Range of Signed and Unsigned Integers, Sign Magnitude form, 1’s complement representation, 2’s complement representation, Conversions between representations, Comparison of Sign Magnitude, 1’s complement, 2’s complement methods, Overflow, Underflow, and Wrap Around. Floating Point Representation – Decimal to Binary Floating-point conversion, Normalization of Floating Point Numbers, IEEE 754 Structure for Floating-point Representation, Rounding Errors.'
              },
              {
                id: 'math-m3',
                number: 'MODULE III',
                name: 'Modular Mathematics',
                syllabusPreview: 'GCD and LCM, Euclidean Theorem, modulo arithmetic, multiplicative inverse, Extended Euclidean, Fermat\'s Little Theorem, error detection (CRC, checksum).',
                contentDetails: 'GCD and LCM, Euclidean Theorem for GCD (Subtraction Method and Modulo Method), Relation between GCD and LCM, Modulo Arithmetic and Properties, Multiplicative Inverse, Extended Euclidean Algorithm (without proof), Fermat’s Little Theorem (without proof), Introduction to Applications in Computing: Simple Error Detection Techniques – Parity Bits, Checksum, Cyclic Redundancy Check (CRC).'
              },
              {
                id: 'math-m4',
                number: 'MODULE IV',
                name: 'Basics of Logic and Proof Methods',
                syllabusPreview: 'Propositional logic, logical equivalences, predicates & quantifiers, rules of inference, direct, indirect, vacuous, trivial, and case proofs.',
                contentDetails: 'Propositional logic, Logical Equivalences, Predicates & quantifiers, Rules of Inference, Proof Methods: Direct Proof, Indirect Proof, Vacuous Proof, Trivial Proof, Proof by Cases.'
              },
              {
                id: 'math-m5',
                number: 'MODULE V',
                name: 'More Proof Methods & Matrices',
                syllabusPreview: 'Mathematical induction, strong induction, matrix operations, determinants via cofactor expansion, adjoint and inverse properties.',
                contentDetails: 'Mathematical Induction, Strong Induction, Matrix Introduction – Matrix Addition and Multiplication and their Properties – Determinants: Cofactor Expansion Method – Properties of Determinants – Adjoint and Inverse of a Matrix – Properties of Adjoint and Inverse.'
              },
              {
                id: 'math-m6',
                number: 'MODULE VI',
                name: 'Permutations & Combinations',
                syllabusPreview: 'Principles of counting, permutations with/without repetition, circular permutations, AES encryption, combinations, selection problems.',
                contentDetails: 'Basic Principles of Counting – Permutations: Arrangement with and Without Repetition, Circular Permutation – Applications in real-world scenarios: Scheduling tasks, Cryptography (AES Encryption) – Combinations: With and Without Replacement – Selection problems, Techniques, and Real-life examples.'
              },
              {
                id: 'math-m7',
                number: 'MODULE VII',
                name: 'Sequences & Series',
                syllabusPreview: 'Arithmetic, Geometric, and Harmonic Progression, AM-GM-HM relation, AGP series finite and infinite sum.',
                contentDetails: 'Arithmetic Progression – Geometric Progression – Harmonic Progression – Relation between Arithmetic Mean, Geometric Mean, and Harmonic Mean – AGP Series (including nth term, sum of n terms in finite and infinite conditions).'
              },
              {
                id: 'math-m8',
                number: 'MODULE VIII',
                name: 'Sets and Binary Operations',
                syllabusPreview: 'Set theory fundamentals, operations, Venn diagrams, Cartesian products, function types (injective, surjective, bijective).',
                contentDetails: 'Fundamentals of Set Theory – Set Operations: Union, Difference, Intersection, Complement – Venn Diagrams and Applications – Cartesian Products – Properties of Cartesian Products – Applications of Cartesian Products–Functions – Functions Terminology (Domain, Range, Codomain) – Types of Functions (Injective, Surjective, and Bijective).'
              },
              {
                id: 'math-m9',
                number: 'MODULE IX',
                name: 'Relations',
                syllabusPreview: 'Types of relations, equivalence relations, partial orders, Hasse diagrams, extremal elements, bounds, lattices.',
                contentDetails: 'Relations – Types of Relations (Reflexive, Symmetric, Transitive, Antisymmetric, and Partial Order Relation), Equivalence Relations, Partial Order Relations, Totally Ordered sets, Hasse Diagrams, Maximal & Minimal elements, Greatest & Least elements, Lower & Upper bounds, Lattices.'
              },
              {
                id: 'math-m10',
                number: 'MODULE X',
                name: 'Recursion and Recurrence Relations',
                syllabusPreview: 'Recursive definitions, recursively defined functions and sets, recurrence relations, linear homogeneous recurrence relations.',
                contentDetails: 'Recursive Definitions, Recursively defined functions, Recursively defined sets, Recurrence Relations, Linear Homogeneous Recurrence Relations.'
              }
            ]
          },
          {
            id: 'eng-physics',
            name: 'Engineering Physics',
            code: 'PHYS-101',
            category: 'Applied Physics & Hardware',
            description: 'Modern physics principles: quantum mechanics, quantum computing, semiconductors, optoelectronics, magnetic data storage, ferroelectricity, EM wave imaging, and sensors.',
            iconName: 'BrainCircuit',
            yearId: 'year-1',
            termId: 'term-1',
            modules: [
              {
                id: 'phys-m1',
                number: 'Module 1',
                name: 'Fundamentals of Quantum Physics',
                syllabusPreview: 'Planck’s theory, photoelectric effect, wave-particle duality, Schrödinger’s equation, particle in 1D potential box, quantum tunnelling.',
                contentDetails: 'Planck’s theory, photoelectric effect, wave-particle duality, Schrödinger’s equation, Particle in 1 D potential box, Quantum tunnelling (Transmission and Reflection coefficients).'
              },
              {
                id: 'phys-m2',
                number: 'Module 2',
                name: 'Introduction to Quantum Computing',
                syllabusPreview: 'Foundation for quantum computing, Qubits, superposition, quantum entanglement, quantum gates, quantum circuits.',
                contentDetails: 'Foundation for quantum computing, Qubits, Superposition, Quantum entanglement, Quantum gates, Quantum circuits.'
              },
              {
                id: 'phys-m3',
                number: 'Module 3',
                name: 'Semiconductor Physics and Device Applications',
                syllabusPreview: 'Energy bands in solids, intrinsic & extrinsic semiconductors, PN junction diodes, transistors operation & switching, CPUs, GPUs, SSDs.',
                contentDetails: 'Energy bands in solids, intrinsic & extrinsic semiconductors, PN junction diodes, transistors (Qualitative)– operation and switching, Relevance in CPUs, GPUs, SSDs.'
              },
              {
                id: 'phys-m4',
                number: 'Module 4',
                name: 'Optoelectronics and Display Technologies',
                syllabusPreview: 'Light-matter interaction, LEDs, photodiodes, laser diodes, LCD, LED, OLED displays, optical sensors, monitors, communication hardware.',
                contentDetails: 'Light-matter interaction, LEDs, photodiodes, laser diodes, Display technologies: LCD, LED, OLED, Applications - optical sensors, monitors, communication hardware.'
              },
              {
                id: 'phys-m5',
                number: 'Module 5',
                name: 'Magnetism in Data Storage',
                syllabusPreview: 'Magnetic materials classification, domain theory, hysteresis, soft and hard magnets, shielding, HDDs working, MRAM.',
                contentDetails: 'Magnetic materials – classification, Domain theory, Hysteresis, Soft and Hard Magnetic materials, magnetic shielding, Magnetic domains in HDDs, Working of HDDs, MRAM.'
              },
              {
                id: 'phys-m6',
                number: 'Module 6',
                name: 'Ferro Electricity and Memory Technologies',
                syllabusPreview: 'Dielectric materials, ferroelectricity, charge storage in capacitors, ferroelectric transistors, memristors, dielectric tunnelling, FeRAM.',
                contentDetails: 'Dielectric Materials, Ferroelectricity, Charge storage in capacitors, Ferro electric capacitors, Ferro electric transistors, Ferro electric Memristors, Dielectric tunnelling, Emerging memory: FeRAM.'
              },
              {
                id: 'phys-m7',
                number: 'Module 7',
                name: 'Electromagnetic Waves and Light Interference in Imaging',
                syllabusPreview: 'Light as an EM wave, superposition principle, interference, wave intensity, mathematical representation, digital sensors, image capture.',
                contentDetails: 'Light as an Electromagnetic Wave, Principle of Superposition, and Interference, Wave Intensity and Mathematical Representation, Digital Sensors and Image Capture.'
              },
              {
                id: 'phys-m8',
                number: 'Module 8',
                name: 'Matrix Representation in Optical Imaging',
                syllabusPreview: 'Mathematical modelling of interference, intensity computation in matrix format, image as a matrix bridging physics and computing.',
                contentDetails: 'Mathematical Modelling of Interference, Intensity Computation in a Matrix Format, Image as a Matrix: Bridging Physics and Computing, Interdisciplinary Applications.'
              },
              {
                id: 'phys-m9',
                number: 'Module 9',
                name: 'Photonics and Fiber Optic Communication',
                syllabusPreview: 'Total internal reflection, optical fibers, acceptance angle, numerical aperture, signal loss mechanisms, high-speed internet, cloud data transfer.',
                contentDetails: 'Total internal reflection, optical fibers, acceptance angle, Numerical Aperture (Qualitative), Signal loss mechanisms: attenuation, dispersion, Fiber Optic Communication - Applications in high-speed internet and cloud data transfer.'
              },
              {
                id: 'phys-m10',
                number: 'Module 10',
                name: 'Sensors and its Applications',
                syllabusPreview: 'Sensor characteristics (sensitivity, precision, accuracy), principles of mechanical, optical, thermal sensors, robotics, IoT, smart systems.',
                contentDetails: 'Sensors, Sensor characteristics: sensitivity, precision, accuracy, Principles of mechanical, optical, and thermal sensors, Applications in robotics, automation, IoT, and smart systems.'
              }
            ]
          },
          {
            id: 'web-dev',
            name: 'Fundamentals Of Web Development',
            code: 'WEB-101',
            category: 'Web Technologies & Frontend',
            description: 'Comprehensive web development foundation: HTML5 semantic structure, CSS box model, Flexbox layout, Bootstrap utilities, CSS animations, CSS Grid, and Tailwind CSS.',
            iconName: 'Database',
            yearId: 'year-1',
            termId: 'term-1',
            modules: [
              {
                id: 'web-m1',
                number: 'Module-I',
                name: 'Introduction to Web Development & HTML Basics',
                syllabusPreview: 'Web basics, role of web technologies, syntax, debugging, tweaking code, HTML structure, headings, paragraphs, buttons, CSS text styling.',
                contentDetails: 'Web Basics: Importance of Web Development, Role of web technologies in modern applications. Fundamentals: Syntax, Debugging, and Tweaking Code, Getting Started with HTML and CSS. HTML Structure and Elements: Headings, Paragraphs, Container Elements, Button. CSS Text Styling: Text Alignment, CSS Colors with HeX Codes, Font Family, Font Size, Font Style, Font weight, Text Decoration.'
              },
              {
                id: 'web-m2',
                number: 'Module-II',
                name: 'CSS Styling – Text, Background, and Box Properties',
                syllabusPreview: 'CSS background (color, image, size), box model (height, width, border, padding), viewport, multiple class names, Bootstrap introduction.',
                contentDetails: 'CSS Background: Background Color, Background Image, Background Size. CSS Box Model: Height, Width, Border Properties: Width, Radius, Color, Style, Padding. Viewport: Height, Width. CSS Rulesets & Frameworks: Applying Styles with HTML Attributes, Using Multiple Class Names, Introduction to Bootstrap, Predefined Styles.'
              },
              {
                id: 'web-m3',
                number: 'Module-III',
                name: 'Building Layouts with Flexbox and Bootstrap',
                syllabusPreview: 'Bootstrap Flexbox container, direction, justify content, images, void elements, margins, layout components, hyperlinks, lists, anchors.',
                contentDetails: 'Bootstrap Flexbox Properties: Flexbox Container, Flex Direction, Justify Content. HTML Elements: Image (src), Void Elements, CSS Box Properties: Margin. Layout Development with Bootstrap: Bootstrap Components, Bootstrap Utilities, Display Utility. HTML Attributes: Id, onclick, href, target, Lists (Ordered and Unordered), Anchor, Horizontal Rule, Hyperlinks.'
              },
              {
                id: 'web-m4',
                number: 'Module-IV',
                name: 'HTML5 Multimedia',
                syllabusPreview: 'Hyperlinks, horizontal rules, audio, video elements, semantic elements (header, nav, article, section, footer).',
                contentDetails: 'HTML Attributes: Anchor, Horizontal Rule, Hyperlinks. Multimedia Support: Audio, Video Elements, Semantic Elements (Header, Nav, Article, Section, Footer).'
              },
              {
                id: 'web-m5',
                number: 'Module-V',
                name: 'Responsive Web Design',
                syllabusPreview: 'Bootstrap grid, container, row, column, breakpoints, spacing, navbar, CSS selectors, specificity, inline styles, cascade.',
                contentDetails: 'Bootstrap Grid: Container, Row, Column, Multi-column Layouts, Breakpoints, Column Wrapping. Utilities: Spacing, Background Color, Navbar. CSS Box Properties: Margin Variants, Auto Margin. CSS Selectors: Class, ID, Type, Pseudo-classes, Pseudo-elements, Combinators. CSS Styling: Specificity, Inline Styles, Cascade.'
              },
              {
                id: 'web-m6',
                number: 'Module-VI',
                name: 'Bootstrap Containers',
                syllabusPreview: 'Bootstrap sizing, icons, modal, buttons, cards, minimal CSS utilities (flex, position, shadow, colors).',
                contentDetails: 'Bootstrap Utilities: Sizing, Icons. Bootstrap Components: Modal, Buttons, Cards. Minimal CSS Utilities: Flex, Position, Shadow, Colors.'
              },
              {
                id: 'web-m7',
                number: 'Module-VII',
                name: 'CSS Animation & Responsive Design',
                syllabusPreview: 'CSS gradients (linear, radial), transitions, transforms, keyframes, timing, animatable properties, 2D transforms.',
                contentDetails: 'CSS Gradients: Linear, Radial. CSS Transitions & Animations: CSS Transforms, Properties & Values, Keyframes, Timing, Animatable and Non-Animatable Properties, Combining 2D Transform Functions.'
              },
              {
                id: 'web-m8',
                number: 'Module-VIII',
                name: 'CSS Flexbox & Grid Layout',
                syllabusPreview: 'Box sizing, overflow handling, flexbox layout properties, flex-wrap, align self, order, media queries, responsive design.',
                contentDetails: 'Box Sizing & Overflow: Sizing elements, Min/Max Sizes, Handling Overflow, Box sizing properties. Flexbox & Media Queries: Flexbox layout properties, Flex-wrap, Align Self, Order, Responsive Design, Multiple Media Features.'
              },
              {
                id: 'web-m9',
                number: 'Module-IX',
                name: 'Flexbox Sizing and CSS Grid',
                syllabusPreview: 'Flex grow, flex shrink, flex basis, CSS grid lines, cells, tracks, areas, grid gap, fraction units, template rows & columns.',
                contentDetails: 'Flexbox Sizing: Flex Grow, Flex Shrink, Flex Basis. CSS Grid Basics: Grid Types, Grid Line, Cell, Track, Area, Grid Gap, Fraction unit, Template Rows & Columns.'
              },
              {
                id: 'web-m10',
                number: 'Module-X',
                name: 'CSS Positioning and Tailwind CSS',
                syllabusPreview: 'Responsive grid layout, CSS positioning basics, display, gap, fractional units, combining Flexbox + Grid, Tailwind CSS setup, utility classes.',
                contentDetails: 'Responsive Grid Layout: CSS Positioning Basics, Grid Properties: Display, Gap, Fractional Units, Repeat, Combining Flexbox + Grid for responsive layouts. Tailwind CSS: Setup, Grid Utility Classes, Responsive Utility Classes.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'year-2',
    name: '2nd Year',
    badge: 'Term 2 (Upcoming)',
    terms: [
      {
        id: 'term-2',
        name: 'Term 2',
        yearId: 'year-2',
        description: 'Second year Term 2 syllabus. Previous subjects have been removed as requested; upcoming syllabus will be added upon commencement of Term 2.',
        isAvailable: false,
        statusBadge: 'Upcoming • Syllabus Pending',
        subjects: [] // Cleared as requested: Term 2 syllabus will be added after starting of Term 2
      }
    ]
  }
];

// Flat list of all currently active subjects
export const SUBJECTS: Subject[] = ACADEMIC_YEARS.flatMap(y => y.terms.flatMap(t => t.subjects));

export function getSubjectsByYearAndTerm(yearId: string, termId: string): Subject[] {
  const year = ACADEMIC_YEARS.find(y => y.id === yearId);
  if (!year) return [];
  const term = year.terms.find(t => t.id === termId);
  return term ? term.subjects : [];
}

export function getTermById(yearId: string, termId: string) {
  const year = ACADEMIC_YEARS.find(y => y.id === yearId);
  return year?.terms.find(t => t.id === termId);
}

export function getSubjectById(id: string): Subject | undefined {
  return SUBJECTS.find(s => s.id === id);
}

export function getModuleById(subjectId: string, moduleId: string) {
  const subject = getSubjectById(subjectId);
  return subject?.modules.find(m => m.id === moduleId);
}
