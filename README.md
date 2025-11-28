# Task Manager Sample

A simple, modular JavaScript project demonstrating basic task management operations with async functionality.

## Project Structure

```
task-manager-sample/
  package.json
  src/
    index.js           # Main entry point
    tasks/
      createTask.js    # Task creation logic
      completeTask.js  # Task completion logic
      utils.js         # Shared utilities
  README.md
```

## Features

- Create tasks with validation
- Mark tasks as complete
- Modular architecture with separate concerns
- Simulated async operations (e.g., database/network delays)
- Clean, idiomatic ES modules

## Getting Started

### Installation

```bash
npm install
```

### Running the Project

```bash
npm start
```

This will run the sample task management demo, which creates three tasks and completes two of them.

## Module Overview

### `utils.js`
Contains shared utility functions:
- `validateTaskTitle(title)` - Validates task titles
- `delay(ms)` - Simulates async delays
- `generateId()` - Generates unique task IDs

### `createTask.js`
Handles task creation with validation and simulated persistence.

### `completeTask.js`
Manages task completion with status updates.

### `index.js`
Main entry point that demonstrates the task manager in action.

## Example Output

```
=== Task Manager Sample ===

Creating task: "Review pull requests"...
Task created successfully with ID: task_1234567890_abc123def
Creating task: "Write documentation"...
Task created successfully with ID: task_1234567891_ghi456jkl
...
```

## Skill creation prompts
### When to use
Help me fill in the "When to Use" section for this add-logging skill.
It should activate when the user asks to add or insert logging in
a JavaScript function. Write 3–6 bullet points.

### What this skill does
Fill in the "What This Skill Does" section.
Describe that it:
- reads the JS file
- identifies the relevant function
- prepares a console.log diff
- asks for confirmation
- applies the diff if approved
- shows the updated code

### Workflow
Under the "Workflow" heading, write a 3-phase workflow:
- Phase 1: identify function and prepare diff
- Phase 2: show diff and request confirmation
- Phase 3: apply diff and show updated code
Use numbered steps.

### Boundaries
Fill in the "Boundaries" section with bullets that say:
- don't rewrite entire files
- only add one logging statement
- ask user if function cannot be found
- don't modify non-JS files

## License

MIT
