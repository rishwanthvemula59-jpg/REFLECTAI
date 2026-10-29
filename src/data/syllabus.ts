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
    badge: 'Term 2 Active',
    terms: [
      {
        id: 'term-2',
        name: 'Term 2',
        yearId: 'year-2',
        description: 'Sophomore year Term 2 curriculum covering Foundation of Data Science, Advanced Data Structures, Backend Development Fundamentals, and Linear Algebra Essentials.',
        isAvailable: true,
        statusBadge: 'Active • 4 Courses',
        subjects: [
          {
            id: 'fds',
            name: 'Foundation of Data Science',
            code: 'DS-201',
            category: 'Data Science & AI',
            description: 'Core concepts in data science: data preprocessing, statistical exploration, dimensionality reduction, regression, classification, clustering, evaluation, recommendation systems, visualization, and ethics.',
            iconName: 'BarChart3',
            yearId: 'year-2',
            termId: 'term-2',
            modules: [
              {
                id: 'fds-m1',
                number: 'Module-I',
                name: 'Basics of Data Science',
                syllabusPreview: 'AI, Machine Learning, Data Science definitions, classification, data science process, data types, collections, pre-processing.',
                contentDetails: 'Introduction: AI, Machine Learning, and Data Science, what is Data Science, Data Science Classification, Data Science Process. Data Types, Data Collections, Data Pre-processing.'
              },
              {
                id: 'fds-m2',
                number: 'Module-II',
                name: 'Tool Boxes for Data Scientist',
                syllabusPreview: 'SciPy, scikit-learn, matplotlib, seaborn, PyBrain, Pylearn2, data preprocessing techniques, filtering, manipulation, normalizations.',
                contentDetails: 'Fundamental python libraries for Data Scientist, SciPy and sci - kitLearn, matplotlib, seaborn, PyBrain, Pylearn2; Data preprocessing techniques - read, select, filter, manipulate, sort, group, rank and plot the data. Normalizations.'
              },
              {
                id: 'fds-m3',
                number: 'Module-III',
                name: 'Data Analysis and Data Analytics',
                syllabusPreview: 'Descriptive analysis, centrality, dispersion, diagnostic analytics, correlations, predictive, prescriptive, exploratory, mechanistic analysis.',
                contentDetails: 'Descriptive Analysis - Variables, Frequency Distribution, Measures of Centrality and Dispersion of a Distribution. Diagnostic Analytics - Correlations. Predictive Analytics, Prescriptive Analytics, Exploratory Analysis and Mechanistic Analysis.'
              },
              {
                id: 'fds-m4',
                number: 'Module-IV',
                name: 'Dimensionality Reduction and Feature Engineering',
                syllabusPreview: 'PCA, LDA, t-SNE, SVD, feature extraction, feature selection, feature transformation, creating interaction features.',
                contentDetails: 'Principal Component Analysis (PCA), Linear Discriminant Analysis (LDA) and t-SNE, Singular Value Decomposition (SVD), Feature Extraction and Feature Selection, Feature Transformation, Creating Interaction Features.'
              },
              {
                id: 'fds-m5',
                number: 'Module-V',
                name: 'Data Models',
                syllabusPreview: 'Regression, classification, clustering, multiple/ridge/lasso regression, logistic regression, decision trees, k-means, hierarchical clustering.',
                contentDetails: 'Overview of Data Models: Regression, Classification, Clustering, Advanced Regression Techniques: Implementing Multiple, Ridge, and Lasso Regression, Classification Models: Logistic Regression and Decision Trees, Clustering Models: K-Means and Hierarchical Clustering.'
              },
              {
                id: 'fds-m6',
                number: 'Module-VI',
                name: 'Model Evaluation',
                syllabusPreview: 'Evaluation metrics types, training vs validation vs testing, regression/classification/clustering metrics, cross-validation, overfitting and underfitting.',
                contentDetails: 'Evaluation metrics types, Training vs. validation vs. testing, Regression Model Evaluation Metrics, Classification Model Evaluation Metrics, Clustering Metrics, Cross-Validation, Overfitting and underfitting.'
              },
              {
                id: 'fds-m7',
                number: 'Module-VII',
                name: 'Recommendation Systems',
                syllabusPreview: 'Collaborative filtering, content-based filtering, advanced techniques, hybrid recommendation systems, evaluation, real-world applications.',
                contentDetails: 'Overview, Collaborative Filtering, Content-Based Filtering, Advanced Techniques in Collaborative Filtering, Hybrid Recommendation Systems, Evaluating Recommendation Systems, Real-World Applications.'
              },
              {
                id: 'fds-m8',
                number: 'Module-VIII',
                name: 'Data Visualization',
                syllabusPreview: 'Overview, types of visualizations, Matplotlib features, advanced Seaborn, interactive visualization, EDA visualization, geospatial data visualization.',
                contentDetails: 'Overview, Types of Data Visualizations, Basic Plotting with Python Matplotlib Features, Advanced visualizations using Seaborn, Interactive Visualization, Visualization for Exploratory Data Analysis (EDA), Data Visualization with Geospatial Data.'
              },
              {
                id: 'fds-m9',
                number: 'Module-IX',
                name: 'Advanced Data Visualization Techniques',
                syllabusPreview: '3D plotting, subplots with complex layouts, facet grids, heatmaps with hierarchical clustering, Plotly dashboards, big data visualization, BI tools Tableau and Power BI.',
                contentDetails: '3D plotting, subplots with complex layouts, Facet grids, heatmaps with hierarchical clustering, Dashboards with Plotly and advanced interactivity, Data Visualization for Big Data, Introduction to BI tools: Tableau, Power BI.'
              },
              {
                id: 'fds-m10',
                number: 'Module-X',
                name: 'Ethics and Data Science',
                syllabusPreview: 'Doing good data science, data ownership, the Five Cs, ethics and security training, guiding principles, data-driven culture, regulation, case studies.',
                contentDetails: 'Doing Good Data Science, Data Ownership, The Five Cs, Implementing the Five Cs, Ethics and Security Training, Developing Guiding Principles, Building Ethics into a Data-Driven Culture, Regulation, Building Our Future, Case Study.'
              }
            ]
          },
          {
            id: 'ads',
            name: 'Advanced Data Structures',
            code: 'CS-202',
            category: 'Data Structures & Algorithms',
            description: 'Advanced data structures and algorithmic paradigms: hashing, sliding window, two-pointer techniques, linked lists, stacks, monotonic stacks, binary trees, BSTs, self-balancing AVL/Red-Black trees, and heaps.',
            iconName: 'Code2',
            yearId: 'year-2',
            termId: 'term-2',
            modules: [
              {
                id: 'ads-m1',
                number: 'Module-I',
                name: 'Hashing, Sliding Window and Two-Pointer Techniques',
                syllabusPreview: 'Hash tables, hash functions, operations, collisions, separate chaining, open addressing, sliding window, two-pointer technique, Kadane’s algorithm.',
                contentDetails: 'Hashing – hash tables, hash functions, hash-table operations, collisions, Separate Chaining, Open Addressing, Sliding Window – fixed-size and variable-size windows, window expansion and contraction, Two-Pointer Technique – pointer movement and applications, Maximum Subarray – Kadane’s Algorithm.'
              },
              {
                id: 'ads-m2',
                number: 'Module-II',
                name: 'Linked List Basics',
                syllabusPreview: 'Node structure and representation, singly linked list, doubly linked list, circular linked list, traversal, insertion, deletion, comparison of types.',
                contentDetails: 'Linked Lists – node structure and representation, Singly Linked List – traversal, insertion and deletion, Doubly Linked List – traversal, insertion and deletion, Circular Linked List – traversal, insertion and deletion, comparison of linked-list types.'
              },
              {
                id: 'ads-m3',
                number: 'Module-III',
                name: 'Linked List Algorithms',
                syllabusPreview: 'Reversal, Floyd’s cycle-finding algorithm, cycle detection and length, adding two numbers, merging two lists, intersection, flattening linked lists.',
                contentDetails: 'Linked List Algorithms – reversal, Floyd’s Cycle-Finding Algorithm, cycle detection and length, adding two numbers, merging two lists, intersection of linked lists, flattening linked lists.'
              },
              {
                id: 'ads-m4',
                number: 'Module-IV',
                name: 'Stacks',
                syllabusPreview: 'Stacks ADT and LIFO principle, linked-list implementation, push/pop/peek, infix/prefix/postfix expressions, evaluation, balanced parentheses, Min Stack.',
                contentDetails: 'Stacks – ADT and LIFO principle, linked-list implementation, push, pop and peek, infix, prefix and postfix expressions, expression conversion and evaluation, balanced parentheses, Min Stack.'
              },
              {
                id: 'ads-m5',
                number: 'Module-V',
                name: 'Monotonic Stack and Queues',
                syllabusPreview: 'Monotonic stack (increasing/decreasing), next greater/smaller element, queues, FIFO principle, stack using queue, queue using stack.',
                contentDetails: 'Monotonic Stack – increasing and decreasing stacks, Next Greater and Smaller Element, Queues – FIFO principle and linked-list implementation, Stack Using Queue, Queue Using Stack.'
              },
              {
                id: 'ads-m6',
                number: 'Module-VI',
                name: 'Binary Trees',
                syllabusPreview: 'Tree terminology and representation, binary tree types, properties, tree construction, inorder, preorder, postorder, level-order traversals, tree operations.',
                contentDetails: 'Binary Trees – tree terminology and representation, types of binary trees, binary tree properties, tree construction and node relationships, Tree Traversals – inorder, preorder, postorder and level-order traversal, Binary Tree Operations – insertion and traversal-based processing.'
              },
              {
                id: 'ads-m7',
                number: 'Module-VII',
                name: 'Binary Search Trees',
                syllabusPreview: 'BST definition, ordering property, representation, searching, insertion, deletion, traversals, top view, right view, validation.',
                contentDetails: 'Binary Search Trees – definition and ordering property, representation and searching, BST Operations – insertion, deletion and traversal, BST Traversals – inorder, preorder and postorder, BST Views – Top View and Right View, BST Validation – checking and maintaining the BST ordering property.'
              },
              {
                id: 'ads-m8',
                number: 'Module-VIII',
                name: 'Balanced and Self-Balancing Search Trees',
                syllabusPreview: 'Balanced trees, AVL trees, balance factor, rotations, insertion/deletion, AVL balancing, Red-Black trees properties, rotations, comparison.',
                contentDetails: 'Balanced Trees – concept and importance, AVL Trees – structure, balance factor, rotations, insertion and deletion, AVL tree balancing, Red-Black Trees – properties, structure, rotations, insertion and deletion, comparison of AVL and Red-Black Trees.'
              },
              {
                id: 'ads-m9',
                number: 'Module-IX',
                name: 'Heaps',
                syllabusPreview: 'Heap property and representation, Min-Heap, Max-Heap, heap construction, conversion, insertion and deletion.',
                contentDetails: 'Heaps – heap property and representation, Min-Heap, Max-Heap, heap construction and conversion, insertion and deletion.'
              },
              {
                id: 'ads-m10',
                number: 'Module-X',
                name: 'Priority Queues',
                syllabusPreview: 'Priority queues ADT and applications, heap sort, heap construction and extraction, priority-based processing, problem solving.',
                contentDetails: 'Priority Queues – ADT and applications, Heap Sort – heap construction and extraction, Priority-Based Processing – applications of priority queues and heap-based problem solving.'
              }
            ]
          },
          {
            id: 'bdf',
            name: 'Backend Development Fundamentals',
            code: 'CS-203',
            category: 'Backend & Systems',
            description: 'Server-side engineering with Node.js and Express.js, relational databases with SQLite, RESTful API design, JWT auth, middleware, streams, file operations, and MongoDB integration.',
            iconName: 'Database',
            yearId: 'year-2',
            termId: 'term-2',
            modules: [
              {
                id: 'bdf-m1',
                number: 'Module-I',
                name: 'Node.js and Express.js Fundamentals',
                syllabusPreview: 'Backend intro, JavaScript concepts, Node.js setup, NPM, HTTP server, methods, status codes, Express.js routing, request/response, error handling.',
                contentDetails: 'Introduction to Backend Development, JavaScript Concepts for Backend Development, Node.js Basics and Development Environment Setup, NPM and Package Management, HTTP Server Setup, HTTP Methods and Status Codes, Handling HTTP Requests and Responses, Express.js Introduction, Routing and Modular Routing, Request and Response Objects, Basic Error Handling.'
              },
              {
                id: 'bdf-m2',
                number: 'Module-II',
                name: 'SQLite and Relational Database Operations',
                syllabusPreview: 'SQLite database creation and integration, schemas, tables, primary keys, SQL queries, parameterized queries, joins, CRUD operations with Node.js.',
                contentDetails: 'Introduction to SQLite, SQLite Database Creation and Integration, Database Schema and Tables, Primary Keys and Constraints, SQL Query Writing, Parameterized Queries, Basic Joins, CRUD Operations, Integrating SQLite with Node.js.'
              },
              {
                id: 'bdf-m3',
                number: 'Module-III',
                name: 'RESTful API Development and Validation',
                syllabusPreview: 'REST principles and architecture, API endpoints, HTTP methods, request/query parameters, JSON handling, validation, response formatting, API testing.',
                contentDetails: 'REST Principles, RESTful API Architecture, API Endpoints and HTTP Methods, Request Parameters and Query Parameters, RESTful API Development, JSON Request and Response Handling, Request Validation, Response Formatting, HTTP Status Codes, API Testing, Debugging.'
              },
              {
                id: 'bdf-m4',
                number: 'Module-IV',
                name: 'Authentication and User Management',
                syllabusPreview: 'Authentication concepts and strategies, user registration, login, JWT token authentication, token generation/validation, password hashing, auth middleware.',
                contentDetails: 'Authentication Concepts, Authentication Strategies, User Registration and Login, JWT Token Authentication, Token Generation and Validation, Password Hashing, User Management, Authentication Middleware, Security Best Practices.'
              },
              {
                id: 'bdf-m5',
                number: 'Module-V',
                name: 'Middleware, Authorization and Error Handling',
                syllabusPreview: 'Middleware functions, built-in and custom middleware, execution flow, authorization, RBAC, protected routes, error handling, error logging.',
                contentDetails: 'Middleware Functions, Built-in and Custom Middleware, Middleware Execution Flow, Authorization, Role-Based Access Control, Protected Routes, Error Handling, Error Logging, Security Enforcement.'
              },
              {
                id: 'bdf-m6',
                number: 'Module-VI',
                name: 'File Handling and Asynchronous Operations',
                syllabusPreview: 'Node.js fs module, file system operations, reading/writing files, sync vs async operations, callbacks, promises, async/await, buffer management.',
                contentDetails: 'File Handling using the Node.js fs Module, File System Operations, Reading and Writing Files, Synchronous and Asynchronous Operations, Callbacks, Promises and async/await, Buffer Management, Asynchronous Error Handling.'
              },
              {
                id: 'bdf-m7',
                number: 'Module-VII',
                name: 'Streams and Data Processing',
                syllabusPreview: 'Streams intro, file streams, readable/writable/duplex/transform streams, data transformation, stream piping, buffer management, async data processing.',
                contentDetails: 'Introduction to Streams, File Streams, Readable Streams, Writable Streams, Duplex and Transform Streams, Data Transformation, Stream Piping, Buffer Management, Asynchronous Data Processing, Error Handling with Streams.'
              },
              {
                id: 'bdf-m8',
                number: 'Module-VIII',
                name: 'MongoDB and Node.js Integration',
                syllabusPreview: 'MongoDB introduction, setup, Atlas, NoSQL concepts, Node.js integration, native driver, Mongoose, schema design, models and collections.',
                contentDetails: 'Introduction to MongoDB, MongoDB Installation and Setup, MongoDB Atlas, NoSQL Database Concepts, MongoDB–Node.js Integration, Native MongoDB Driver, Mongoose, Schema Design, Models and Collections, Connecting Backend Applications with MongoDB.'
              },
              {
                id: 'bdf-m9',
                number: 'Module-IX',
                name: 'MongoDB CRUD APIs and Query Operations',
                syllabusPreview: 'MongoDB CRUD operations, Mongoose model methods, HTTP status codes, query parameters, filtering, case-insensitive search, sorting, Postman testing.',
                contentDetails: 'MongoDB CRUD Operations, Mongoose Model Methods, Read, Update and Delete Operations, HTTP Status Codes, Query Parameters, Filtering, Case-Insensitive Search, Sorting, Query-Based APIs, API Testing using Postman, Debugging MongoDB APIs.'
              },
              {
                id: 'bdf-m10',
                number: 'Module-X',
                name: 'Secure MongoDB APIs and Backend Integration',
                syllabusPreview: 'CRUD APIs with MongoDB, password hashing, JWT auth with MongoDB, role-based authorization, protected APIs, Postman testing, backend integration.',
                contentDetails: 'CRUD APIs with MongoDB, Password Hashing, JWT Authentication with MongoDB, Role Based Authorization, Protected MongoDB APIs, Testing MongoDB-Backed APIs using Postman, Debugging, Error Handling, Backend and Database Integration, Integration of Authentication, Authorization and MongoDB.'
              }
            ]
          },
          {
            id: 'lae',
            name: 'Linear Algebra Essentials',
            code: 'MATH-201',
            category: 'Mathematics & Computation',
            description: 'Foundations of linear algebra: vector spaces, basis, dimension, matrices, inverses, linear transformations, rank-nullity, systems of equations, eigenvalues, theory of equations, reciprocal equations, and SVD.',
            iconName: 'BrainCircuit',
            yearId: 'year-2',
            termId: 'term-2',
            modules: [
              {
                id: 'lae-m1',
                number: 'Module-I',
                name: 'Foundations of Linear Algebra',
                syllabusPreview: 'Importance in CS, Data Science, ML, fields and scalars, axioms, vectors, Python and NumPy representations.',
                contentDetails: 'Introduction to Linear Algebra – importance in Computer Science, Data Science and Machine Learning, real-world applications, Fields and Scalars – definition of a field, field axioms, examples, scalars and vectors, representation of scalars and vectors using Python/NumPy.'
              },
              {
                id: 'lae-m2',
                number: 'Module-II',
                name: 'Vector Spaces, Basis and Dimension',
                syllabusPreview: 'Vector spaces, axioms, linear combinations, subspaces, linear independence, linear span, basis, dimension, NumPy computations.',
                contentDetails: 'Vector Spaces – definition, axioms and examples, linear combinations, subspaces, linear independence, linear span, basis and dimension, implementation of linear independence, computation of basis and dimension using Python/NumPy.'
              },
              {
                id: 'lae-m3',
                number: 'Module-III',
                name: 'Matrices, Determinants and Inverses',
                syllabusPreview: 'Matrix operations and properties, determinants, row operations, matrix inverse, adjoint method, row-reduction, NumPy verification.',
                contentDetails: 'Matrices – matrix operations and properties, determinants, computation of determinants using expansion and row operations, properties of determinants, matrix inverse, adjoint method, row-reduction method, computation and verification using NumPy.'
              },
              {
                id: 'lae-m4',
                number: 'Module-IV',
                name: 'Linear Transformations and Rank-Nullity',
                syllabusPreview: 'Linear transformations, definition and properties, matrix representation, null space, range, rank, nullity, Rank-Nullity Theorem, NumPy implementations.',
                contentDetails: 'Linear Transformations – definition and properties, matrix representation of linear transformations, null space and range, dimension of null space, rank and nullity, Rank-Nullity Theorem, implementation of linear transformations using NumPy.'
              },
              {
                id: 'lae-m5',
                number: 'Module-V',
                name: 'Systems of Linear Equations',
                syllabusPreview: 'Homogeneous and non-homogeneous systems, Gauss Elimination, Gauss-Jordan, LU Decomposition, Jacobi and Gauss-Seidel iterative methods.',
                contentDetails: 'Systems of Linear Equations – homogeneous and non-homogeneous systems, matrix representation, Gauss Elimination Method, Gauss-Jordan Method, solution of linear systems using NumPy, implementation of Gaussian elimination. Numerical Methods for Linear Systems – LU Decomposition, decomposition of matrices, solving linear systems using LU decomposition, Jacobi Iterative Method, Gauss-Seidel Iterative Method, comparison of direct and iterative methods.'
              },
              {
                id: 'lae-m6',
                number: 'Module-VI',
                name: 'Eigenvalues and Eigenvectors',
                syllabusPreview: 'Characteristic equation, eigenvalues, eigenvectors, eigenspaces, diagonalization, data dimensionality applications, NumPy visualization.',
                contentDetails: 'Eigenvalues and Eigenvectors – characteristic equation, eigenvalues, eigenvectors, computation of eigenvalues and eigenvectors, eigenspaces, diagonalization, applications in data analysis and dimensionality reduction, computation and visualization using NumPy.'
              },
              {
                id: 'lae-m7',
                number: 'Module-VII',
                name: 'Theory of Equations I — Roots & Root Relationships',
                syllabusPreview: 'Surds and irrational roots, roots in AP, GP, HP, Vieta’s formulas, symmetric functions of roots, equation analysis.',
                contentDetails: 'Surds and Irrational Roots – Definition and classification of surds – Simplification and rationalization techniques – Handling irrational roots in algebraic equations. Roots in A.P., G.P., and H.P. – Types of roots and Patterns of roots in Arithmetic, Geometric, and Harmonic Progressions – Formulating equations with structured root relationships. Relationship Between Roots and Coefficients – Vieta\'s formulas – Symmetric functions of roots – Applications in equation analysis.'
              },
              {
                id: 'lae-m8',
                number: 'Module-VIII',
                name: 'Theory of Equations II — Formation & Transformation',
                syllabusPreview: 'Constructing polynomials, conjugate/reciprocal/irrational roots, root transformations, substitution, shifting and scaling.',
                contentDetails: 'Formation of Equations – Constructing polynomial equations from given roots or conditions – Handling conjugate, reciprocal, and irrational root cases. Root Transformations – Techniques for systematically shifting or scaling roots, – Root transformation methods (Reciprocal Transformation, Negating Roots, Conjugate Root Pairs). Transformation of Equations – Substitution methods – Shifting and scaling of variables – Use in root pattern manipulation.'
              },
              {
                id: 'lae-m9',
                number: 'Module-IX',
                name: 'Reciprocal Equations',
                syllabusPreview: 'Definition and recognition, factorization, substitution, graphical, symmetrical methods, programmatic solving and verification.',
                contentDetails: 'Reciprocal Equations – Definition and recognition – Techniques to solve reciprocal equations Factorization Method, Substitution Method, Graphical Method, Symmetrical Method– Equation modelling. Reciprocal Equations - Implementation – Solving reciprocal equations programmatically – Verifying roots using code.'
              },
              {
                id: 'lae-m10',
                number: 'Module-X',
                name: 'Singular Value Decomposition and Applications',
                syllabusPreview: 'Need for SVD, definition, properties, SVD computation, dimensionality reduction, image compression, NumPy implementation.',
                contentDetails: 'Singular Value Decomposition – need for SVD, definition and properties, computation of SVD, relationship between SVD and matrices, dimensionality reduction, image compression, implementation using NumPy.'
              }
            ]
          }
        ]
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
