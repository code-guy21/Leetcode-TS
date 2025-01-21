# LeetCode TypeScript Solutions

A collection of LeetCode problems solved using TypeScript with full test coverage and an interactive CLI test runner.

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

You can run tests in two ways:

### Interactive CLI

Run the interactive test runner:

```bash
npm start
```

This will launch an interactive CLI that allows you to:

- Select problem categories
- Run specific problem tests
- Run all tests in a category
- Run all tests in the project

### Command Line

Run all tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## Project Configuration

- **TypeScript**: Configured with strict type checking and modern ES2020 features
- **Jest**: Set up with ts-jest for TypeScript testing support
- **Interactive CLI**: Built with inquirer for a user-friendly test running experience
- **Test Structure**: Each solution includes:
  - Implementation file (`index.ts`)
  - Test file (`index.test.ts`) with multiple test cases

## License

MIT
