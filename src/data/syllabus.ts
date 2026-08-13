import type { Subject } from '../types/syllabus';

export const SUBJECTS: Subject[] = [
  {
    id: 'prob-stats',
    name: 'Probability Theory and Statistical Analysis',
    code: 'MATH-301',
    category: 'Mathematics & Statistics',
    description: 'Fundamental mathematical principles for data analysis, probability models, hypothesis testing, and regression analysis.',
    iconName: 'BarChart3',
    modules: [
      {
        id: 'prob-stats-m1',
        number: 'Module I',
        name: 'Introduction to Statistics',
        syllabusPreview: 'Frequency tables, histograms, ogives, stem-and-leaf, central tendency, variability, Chebyshev inequality, skewness, scatter plots.',
        contentDetails: 'Introduction to statistics, representation of small datasets using frequency tables, histograms, ogives, stem and leaf plots, measures of central tendency, measures of variability, Chebyshev\'s inequality, normal datasets, skewness of data, and representation of two quantitative variables on a scatter plot.'
      },
      {
        id: 'prob-stats-m2',
        number: 'Module II',
        name: 'Introduction to Probability',
        syllabusPreview: 'Basics of probability, axioms, conditional probability, Bayes\' theorem, independent and dependent events.',
        contentDetails: 'Basics of probability, axioms of probability, conditional probability, Bayes\' theorem, independent and dependent events.'
      },
      {
        id: 'prob-stats-m3',
        number: 'Module III',
        name: 'Random Variables',
        syllabusPreview: 'Random variables, probability distribution function, discrete mean and variance, numericals, probability density function.',
        contentDetails: 'Random variables, types of random variables, probability distribution function, mean, variance, and standard deviation of discrete random variables, numericals on mean and variance, probability density function.'
      },
      {
        id: 'prob-stats-m4',
        number: 'Module IV',
        name: 'Discrete Probability Distributions',
        syllabusPreview: 'Binomial, Poisson, MGF, mean and variance of Binomial & Poisson, relationship between Binomial & Poisson.',
        contentDetails: 'Binomial distribution, moment generating function, mean and variance of binomial distribution, Poisson distribution, mean and variance of Poisson distribution, relationship between binomial and Poisson distributions.'
      },
      {
        id: 'prob-stats-m5',
        number: 'Module V',
        name: 'Continuous Probability Distributions',
        syllabusPreview: 'Normal distribution, Z-table usage, uniform, gamma, exponential, and beta distributions.',
        contentDetails: 'Normal distribution and its properties, use of normal distribution table, numericals on normal distribution, mean and variance of normal distribution, uniform, gamma, exponential, and beta distributions.'
      },
      {
        id: 'prob-stats-m6',
        number: 'Module VI',
        name: 'Sampling & Estimation',
        syllabusPreview: 'Sampling types, Central Limit Theorem, t-distribution, chi-squared, F-distribution, point & interval estimation.',
        contentDetails: 'Introduction to sampling and types of sampling, sampling distributions, central limit theorem, t-distribution, chi-squared distribution, F-distribution, estimation, point and interval estimation.'
      },
      {
        id: 'prob-stats-m7',
        number: 'Module VII',
        name: 'Testing of Hypothesis – I',
        syllabusPreview: 'Null & alternate hypotheses, Type I & Type II errors, significance levels, hypothesis testing for mean.',
        contentDetails: 'Testing of hypothesis, null and alternate hypotheses, type I and type II errors, level of significance, testing of hypothesis for mean.'
      },
      {
        id: 'prob-stats-m8',
        number: 'Module VIII',
        name: 'Testing of Hypothesis – II',
        syllabusPreview: 'Proportion hypothesis testing, numerical models for single and comparison proportions.',
        contentDetails: 'Testing of hypothesis for all proportions, and numericals on all hypothesis testing models.'
      },
      {
        id: 'prob-stats-m9',
        number: 'Module IX',
        name: 'Correlation',
        syllabusPreview: 'Correlation and covariance, correlation types, coefficient of correlation, Spearman\'s rank correlation.',
        contentDetails: 'Correlation and covariance, types of correlation, coefficient of correlation, Spearman\'s rank correlation and coefficient.'
      },
      {
        id: 'prob-stats-m10',
        number: 'Module X',
        name: 'Regression',
        syllabusPreview: 'Simple linear regression, multiple linear regression, nonlinear and polynomial regression models.',
        contentDetails: 'Simple linear regression, multiple linear regression with more than two independent variables, nonlinear regression, polynomial regression.'
      }
    ]
  },
  {
    id: 'ai-fundamentals',
    name: 'Fundamentals of Artificial Intelligence',
    code: 'CS-401',
    category: 'Computer Science & AI',
    description: 'Core concepts of AI agents, search algorithms, logic inference, game theory, uncertain reasoning, and machine learning models.',
    iconName: 'BrainCircuit',
    modules: [
      {
        id: 'ai-m1',
        number: 'Module I',
        name: 'Introduction to Artificial Intelligence',
        syllabusPreview: 'AI definition, industry applications, intelligent agents, AI ethics, societal impact, AI subfields.',
        contentDetails: 'Definition AI, AI applications in various industries, Intelligent Agents and their types, AI Ethics and societal impact, different types of AI, subfields of AI, recent advancements in AI.'
      },
      {
        id: 'ai-m2',
        number: 'Module II',
        name: 'Uninformed Search Strategies',
        syllabusPreview: 'State space search, Uniform Cost Search, Depth Limited Search, Iterative Deepening DFS, blind search.',
        contentDetails: 'State space search, uninformed search methods, Uniform Cost Search, Depth Limited Search, Iterative Deepening Depth-First Search, Blind Search Algorithm.'
      },
      {
        id: 'ai-m3',
        number: 'Module III',
        name: 'Informed Search Strategies',
        syllabusPreview: 'Best-First Search, A* Search, Hill-Climbing, Beam Search, heuristic evaluation functions.',
        contentDetails: 'Best First Search, A* Search, Hill-climbing search, Beam Search.'
      },
      {
        id: 'ai-m4',
        number: 'Module IV',
        name: 'Optimal Decisions in Games',
        syllabusPreview: 'Alpha-Beta Pruning, Constraint Satisfaction Problems (CSPs), backtracking, Monte Carlo Tree Search.',
        contentDetails: 'Perfect decisions, imperfect decisions, Alpha-Beta Pruning, defining Constraint Satisfaction Problems, constraint propagation, backtracking search for CSPs, Monte Carlo Tree Search, and games for search problems.'
      },
      {
        id: 'ai-m5',
        number: 'Module V',
        name: 'Inferences',
        syllabusPreview: 'Propositional & First Order Logic, Unification, Forward & Backward Chaining, Resolution.',
        contentDetails: 'Introduction to Logic and Reasoning, Propositional Logic, First Order Logic, inference in First Order Logic, Unification, Forward Chaining, Backward Chaining, Resolution.'
      },
      {
        id: 'ai-m6',
        number: 'Module VI',
        name: 'Knowledge Representation & Reasoning',
        syllabusPreview: 'Knowledge-Based Agents, Wumpus World, Ontological Engineering, Categories & Objects, Frames.',
        contentDetails: 'A Knowledge-Based Agent, The Wumpus World, Environment, Semantics, Frames, Ontological Engineering, Categories and Objects, Events, case studies of knowledge-based systems.'
      },
      {
        id: 'ai-m7',
        number: 'Module VII',
        name: 'State Space Planning',
        syllabusPreview: 'Planning agents, state space search algorithms, Planning Graphs, Partial Order & Hierarchical Planning.',
        contentDetails: 'A Simple Planning Agent, from problem-solving to Planning, algorithms for planning with State Space, Search, Planning, Graphs, basic representation of plans, partial order planning, and hierarchical planning.'
      },
      {
        id: 'ai-m8',
        number: 'Module VIII',
        name: 'Uncertainty in AI',
        syllabusPreview: 'Uncertain domains, Bayesian Networks semantics, conditional distributions, approximate inference.',
        contentDetails: 'Representing knowledge in an uncertain domain, the semantics of Bayesian Networks, efficient representation of conditional distributions, approximate inference in Bayesian Networks, applications of uncertainty.'
      },
      {
        id: 'ai-m9',
        number: 'Module IX',
        name: 'General Model of Learning Agents',
        syllabusPreview: 'Inductive learning, Decision Trees, Information Theory, statistical learning, Reinforcement Learning.',
        contentDetails: 'Inductive Learning, Learning Decision Trees, Using Information Theory, Statistical Learning with complete data, hidden variables, instance-based learning, introduction to reinforcement learning.'
      },
      {
        id: 'ai-m10',
        number: 'Module X',
        name: 'Applications of AI',
        syllabusPreview: 'Real-world case studies in Healthcare, Finance, Agriculture, and Governance.',
        contentDetails: 'Case studies of AI in Healthcare, AI in Finance, AI in Agriculture, AI in Governance.'
      }
    ]
  },
  {
    id: 'dsa-cpp',
    name: 'Data Structures Using C++',
    code: 'CS-202',
    category: 'Software Engineering',
    description: 'Fundamental data structures, time/space complexity analysis, memory management, and Standard Template Library (STL) in C++.',
    iconName: 'Code2',
    modules: [
      {
        id: 'dsa-m1',
        number: 'Module I',
        name: 'Introduction to C++ Programming',
        syllabusPreview: 'C++ evolution, program structure, tokens, keywords, variables, data types, I/O streams, type conversion.',
        contentDetails: 'Evolution of C++, features of C++, structure of a C++ program, tokens, keywords, identifiers, variables, constants, data types, operators, input and output streams, type conversion.'
      },
      {
        id: 'dsa-m2',
        number: 'Module II',
        name: 'Control Statements',
        syllabusPreview: 'Decision making statements (if-else, switch), looping statements (for, while, do-while), function design.',
        contentDetails: 'Decision making statements, looping statements, functions.'
      },
      {
        id: 'dsa-m3',
        number: 'Module III',
        name: 'Arrays – 1D',
        syllabusPreview: 'One-dimensional arrays, declaration, initialization, array passing to functions, array operations.',
        contentDetails: 'One-dimensional numeric arrays, array declaration and initialization, passing arrays to functions, operations on single dimensional arrays.'
      },
      {
        id: 'dsa-m4',
        number: 'Module IV',
        name: 'Arrays – 2D',
        syllabusPreview: 'Two-dimensional numeric arrays, matrix manipulation, row-column operations.',
        contentDetails: 'Two-dimensional numeric arrays, matrix operations, operations on two-dimensional arrays.'
      },
      {
        id: 'dsa-m5',
        number: 'Module V',
        name: 'String Arrays',
        syllabusPreview: 'String representations, built-in methods, character frequency, string reversal, pattern matching.',
        contentDetails: 'String representation and built-in methods, character frequency and comparison techniques, string traversal and reversal, word-level manipulation and tokenization, character mapping and pattern matching.'
      },
      {
        id: 'dsa-m6',
        number: 'Module VI',
        name: 'Structures',
        syllabusPreview: 'Structure declaration, member access, array of structures, nested structures, passing structs to functions.',
        contentDetails: 'Introduction and need for structures, structure declaration and initialization, accessing members, arrays of structures, nested structures, and structures with functions.'
      },
      {
        id: 'dsa-m7',
        number: 'Module VII',
        name: 'Data Structures Performance Analysis',
        syllabusPreview: 'Abstract Data Types (ADTs), Time Complexity, Space Complexity, Asymptotic Notations (Big-O, Big-Omega, Big-Theta).',
        contentDetails: 'Introduction to data structures, types of data structures, characteristics of algorithms, Abstract Data Types, Time Complexity, Space Complexity, Asymptotic Notations.'
      },
      {
        id: 'dsa-m8',
        number: 'Module VIII',
        name: 'Stacks',
        syllabusPreview: 'Stack ADT, push/pop operations, array implementation of stacks, stack applications (infix/postfix, recursion).',
        contentDetails: 'Stack ADT, stack operations, stack implementation using arrays, applications of stacks.'
      },
      {
        id: 'dsa-m9',
        number: 'Module IX',
        name: 'Queues',
        syllabusPreview: 'Queue ADT, enqueue/dequeue operations, array implementation, circular queues, queue applications.',
        contentDetails: 'Queue ADT, queue operations, queue implementation using arrays, types and applications of queues.'
      },
      {
        id: 'dsa-m10',
        number: 'Module X',
        name: 'STL Fundamentals & Containers',
        syllabusPreview: 'Pairs, vectors, dynamic resizing, iterators, deque, stack, queue, sets, maps in C++ STL.',
        contentDetails: 'Pairs and vectors with dynamic resizing and indexing, iterators and built-in utility functions, deque, stack, and queue operations, sets and maps.'
      }
    ]
  },
  {
    id: 'adv-dbms',
    name: 'Advanced Database Management Systems',
    code: 'CS-405',
    category: 'Database Systems',
    description: 'Relational query optimization, normalization, ACID transactions, concurrency control, NoSQL architectures, and MongoDB.',
    iconName: 'Database',
    modules: [
      {
        id: 'dbms-m1',
        number: 'Module 1',
        name: 'Relational Query Languages & Extended ER Models',
        syllabusPreview: 'Relational algebra (Selection, Projection, Joins), ER diagrams, subclasses, generalization, aggregation.',
        contentDetails: 'Introduction to relational query languages and relational algebra operations such as Selection, Projection, Union, Composition, and Cartesian Product. Entity Relationship (ER) modeling, ER diagrams, naming conventions, subclasses, superclasses, inheritance, specialization, generalization, aggregation, and modeling of union types using categories.'
      },
      {
        id: 'dbms-m2',
        number: 'Module 2',
        name: 'Fundamentals of Normalization',
        syllabusPreview: 'Schema refinement, functional dependencies, First Normal Form (1NF), Second Normal Form (2NF).',
        contentDetails: 'Schema refinement techniques to improve database design by eliminating redundancy and anomalies. Functional dependencies, types of functional dependencies, and normalization concepts with First Normal Form (1NF) and Second Normal Form (2NF).'
      },
      {
        id: 'dbms-m3',
        number: 'Module 3',
        name: 'Advanced Normalization',
        syllabusPreview: '3NF, BCNF, 4NF, 5NF, functional dependency analysis, lossy/lossless decomposition, denormalization.',
        contentDetails: 'Advanced normalization techniques including Third Normal Form (3NF), Boyce-Codd Normal Form (BCNF), Fourth Normal Form (4NF), and Fifth Normal Form (5NF). Functional dependency analysis, decomposition techniques, and denormalization for performance optimization.'
      },
      {
        id: 'dbms-m4',
        number: 'Module 4',
        name: 'Transactions in DBMS',
        syllabusPreview: 'ACID properties, transaction life cycle, transaction states, schedules, multi-user concurrency control.',
        contentDetails: 'Introduction to database transactions, transaction management, and ACID properties to ensure reliable data processing. Transaction life cycle, transaction states, scheduling concepts, and the need for concurrency control in multi-user environments.'
      },
      {
        id: 'dbms-m5',
        number: 'Module 5',
        name: 'Concurrency Control',
        syllabusPreview: 'Locking mechanisms (shared/exclusive), timestamp ordering, serializability, deadlock handling.',
        contentDetails: 'Concurrency control mechanisms for maintaining database consistency during simultaneous transactions. Locking techniques including shared and exclusive locks, timestamp-based protocols, serializability concepts, and deadlock handling methods.'
      },
      {
        id: 'dbms-m6',
        number: 'Module 6',
        name: 'Storage and File Structure',
        syllabusPreview: 'Database storage architecture, RAID levels, file organization methods, record indexing, data dictionary.',
        contentDetails: 'Database storage architecture, RAID technology, and file organization methods for efficient data storage and retrieval. Organization of records in files, storage structures, and management of metadata through the data dictionary.'
      },
      {
        id: 'dbms-m7',
        number: 'Module 7',
        name: 'Database Recovery Techniques',
        syllabusPreview: 'Log-based recovery, shadow paging, transaction undo/redo, database backup strategies, disaster recovery.',
        contentDetails: 'Recovery mechanisms to restore databases after transaction, system, or media failures. Recovery concepts, shadow paging, log-based recovery, database backup strategies, and recovery from catastrophic failures.'
      },
      {
        id: 'dbms-m8',
        number: 'Module 8',
        name: 'Introduction to NoSQL Databases and MongoDB',
        syllabusPreview: 'NoSQL vs Relational databases, MongoDB architecture, document collections, Atlas & Compass setup.',
        contentDetails: 'Overview of NoSQL databases, their characteristics, and comparison with relational databases. Introduction to MongoDB architecture, advantages, types of NoSQL databases, installation, and environment setup using MongoDB Atlas and Compass.'
      },
      {
        id: 'dbms-m9',
        number: 'Module 9',
        name: 'Performing CRUD Operations in MongoDB',
        syllabusPreview: 'Connecting to MongoDB Atlas, document CRUD operations, query filtering, importing/exporting data.',
        contentDetails: 'Connecting to MongoDB Atlas and performing Create, Read, Update, and Delete (CRUD) operations on collections and documents. Managing databases using MongoDB commands, filtering records, and importing/exporting data.'
      },
      {
        id: 'dbms-m10',
        number: 'Module 10',
        name: 'Advanced Querying and Data Aggregation in MongoDB',
        syllabusPreview: 'Conditional & logical operators, sorting, aggregation pipeline ($match, $group), embedded arrays.',
        contentDetails: 'Advanced querying using conditional, comparison, and logical operators for efficient data retrieval. Sorting, limiting results, aggregation framework, grouping operations, and handling complex data types such as embedded documents and arrays.'
      }
    ]
  }
];

export function getSubjectById(id: string): Subject | undefined {
  return SUBJECTS.find(s => s.id === id);
}

export function getModuleById(subjectId: string, moduleId: string) {
  const subject = getSubjectById(subjectId);
  return subject?.modules.find(m => m.id === moduleId);
}
