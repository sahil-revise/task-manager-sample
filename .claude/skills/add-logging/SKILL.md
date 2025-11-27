---
name: add-logging
description: >
  Use this skill PROACTIVELY whenever the user asks to "add logging", "insert logging",
  "add a log statement", or anything similar. This skill is the preferred and
  standardized way to add logging to a function. If the user asks to add
  logging to a specific file or function, this skill should be activated.
  This skill adds standardized console.log statements at both the start and end of the
  selected JavaScript function to capture entry parameters and exit outcomes. It proposes
  the diff, asks for confirmation before applying it, and then a
  pplies ONLY the logging changes.
allowed-tools:
  - Read
  - Edit
  - Glob
---

# Add Logging Skill

## CRITICAL CONSTRAINTS - READ THIS FIRST

**THIS SKILL MUST ONLY ADD LOGGING STATEMENTS. NOTHING ELSE.**

When using this skill, you MUST:
- ✓ ONLY add `console.log()` statements
- ✓ Use the Edit tool to make surgical, minimal changes
- ✓ Preserve all existing code exactly as-is, including:
  - Syntax errors
  - Formatting issues
  - Extra whitespace
  - Trailing spaces
  - Missing semicolons
  - Duplicate functions
  - Unused variables
  - Any other code issues

You MUST NOT:
- ✗ Fix syntax errors (even obvious ones)
- ✗ Fix formatting or indentation (unless required for the log statement)
- ✗ Remove duplicate code
- ✗ Refactor anything
- ✗ Add comments (other than the log statement)
- ✗ Fix typos
- ✗ Remove unused code
- ✗ Add error handling
- ✗ Make any "bonus" improvements
- ✗ Change anything other than inserting the log statement

**If you encounter bugs, syntax errors, or code smells - IGNORE THEM.**
The user only asked for logging, not code fixes.

---

## When to Use
Activate this skill when:
- The user selects or opens a JavaScript file and asks to add logging
- The user uses phrases like:
  - "add logging here"
  - "insert logging"
  - "add logging to this file"
  - "apply the logging skill"
  - "add a log at the start of this function"

Do not activate for:
- Non-JavaScript files
- Requests unrelated to inserting logs

---

## What This Skill Does
1. Reads the open or referenced JavaScript file.
2. Detects the function(s) where logging should be added.
3. Prepares Edit operations that ONLY insert `console.log()` statements at both entry and exit points.
4. Asks the user for confirmation before applying the changes.
5. Applies ONLY the logging changes using the Edit tool.
6. Reports success.

---

## Workflow

### Phase 1 — Identify the functions
1. Read the file the user has referenced or opened.
2. Detect the function(s) where logging should be inserted.
3. For each function, prepare minimal Edits that add ONLY:
   - **Entry logging** at the start of the function:
     ```js
     console.log("Entering <functionName> with param1: ${param1}, param2: ${param2}");
     ```
   - **Exit logging** before each return statement:
     ```js
     console.log("Exiting <functionName> with result:", result);
     return result;
     ```
   - For functions without explicit return statements, add exit logging at the end of the function body.
4. The Edit tool `old_string` should include enough context to be unique, but NO MORE.
5. The Edit tool `new_string` should be identical to `old_string` except for the added log lines.

### Phase 2 — Confirm and apply
6. Show the user what logging will be added and ask:
   "Would you like me to apply these logging statements?"
7. If yes: Apply the edits using the Edit tool
8. If no: Cancel and explain no changes were made

### Phase 3 — Wrap up
9. Report success
10. Do NOT mention any bugs, syntax errors, or improvements you noticed
11. Do NOT fix anything other than what was asked

## Example of Correct Behavior

**BAD (violates constraints):**
```
User: Add logging to this file
Assistant: I'll add logging. I also noticed a syntax error on line 50, let me fix that too.
```

**GOOD (follows constraints):**
```
User: Add logging to this file
Assistant: I'll add logging to all functions. [Shows the logging that will be added]
Would you like me to apply these logging statements?
User: Yes
Assistant: [Applies ONLY the logging changes]
Done! I've added logging to all functions.
```

## Boundaries
- Use Edit tool for surgical changes, not Write tool
- Only insert logging statements - nothing else
- If the function cannot be detected, ask the user to specify
- Do not mention or fix any other issues you observe in the code