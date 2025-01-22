# LeetCode TypeScript Solutions

A collection of LeetCode problems solved using TypeScript, featuring:

- 💡 Detailed explanations and approach breakdowns
- ✅ Comprehensive test coverage
- 🛠️ Interactive CLI test runner
- 📝 TypeScript best practices

## 📚 Contents

- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [Problem Solutions](#problem-solutions)

## 🚀 Setup

1. Clone the repository

```bash
git clone https://github.com/code-guy21/Leetcode-TS.git
cd Leetcode-TS
```

2. Install dependencies

```bash
npm install
```

3. Verify setup

```bash
npm test
```

## 💻 Usage

### Interactive CLI

The custom CLI provides an intuitive interface for running tests:

```bash
npm start
```

Features:

- 📂 Browse problems by category
- 🧪 Run specific problem tests
- 📊 View test coverage

### Command Line Options

Run all tests:

```bash
npm test
```

Run specific problem tests:

```bash
npm test src/tests/arrays/twoSum
```

Generate coverage report:

```bash
npm test -- --coverage
```

Watch mode:

```bash
npm run test:watch
```

## 📁 Project Structure

```
src/
├── arrays/
│   ├── two-sum/
│   │   ├── index.ts         # Solution implementation
│   │   ├── index.test.ts    # Tests
│   │   └── README.md        # Problem explanation
│   └── ...
├── strings/
├── linked-lists/
└── ...
```

Each problem solution includes:

- Detailed explanation of the approach
- Time and space complexity analysis
- Test cases covering edge cases
- TypeScript implementation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/new-solution
```

3. Implement your solution following our template:
   - Add solution in `src/category/problem-name/index.ts`
   - Add tests in `src/category/problem-name/index.test.ts`
   - Add README.md with explanation
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## 📖 Problem Solutions

### Arrays

- [Two Sum](src/tests/arrays/twoSum) - Easy
- [Group Anagrams](src/tests/arrays/twoSum) - Medium
- [Contains Duplicate](src/tests/arrays/containsDuplicate) - Easy

## 🛠️ Tech Stack

- TypeScript 5.x
- Jest for testing

## 📝 Notes

- Solutions prioritize readability and maintainability
- TypeScript features are used to enhance code safety
- Each solution includes performance considerations
- Regular updates with new problems and improvements

## 📄 License

MIT

---

_Don't forget to star ⭐ this repo if you find it helpful!_
