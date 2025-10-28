# Unit 8.3 — Selection

This mini‑lab is a crash course on **selection** using plain JavaScript with **one `prompt()`** for age and **one `alert()`** for the result. **No HTML form elements** and **no DOM APIs** are allowed—everything happens when the page loads.

---

## Crash Course: Selection (If / Else If / Else)

Selection lets your program choose a path based on conditions.

```js
if (conditionA) {
  // run only when conditionA is true
} else if (conditionB) {
  // run when A is false and B is true
} else {
  // run when none of the above were true
}
```

Common patterns you’ll use:

- **Relational operators**: `<, <=, >, >=, ===, !==`
- **Logical operators**: `&&` (“and”), `||` (“or”), `!` (“not”)
- **Boundary checks** (e.g., age bands):
  - `age <= 12` (Child)
  - `age >= 13 && age <= 17` (Teen)
  - `age >= 18 && age <= 64` (Adult)
  - `age >= 65` (Senior)

Validate input up front (NaN or negative numbers are **invalid**).

---

## Task

When the page loads:

1. Ask once: `prompt("Enter your age:")`
2. Parse and validate the input:
   - If the value is missing, not a number, or `< 0` → `alert("Invalid input")`
3. Otherwise, compute ticket pricing and show the category label:
   - **Child (0–12)** → `$7`
   - **Teen (13–17)** → `$12`
   - **Adult (18–64)** → `$20`
   - **Senior (65+)** → `$12`
4. Alert **exactly one** message like:  
   - `Child: $7`, `Teen: $12`, `Adult: $20`, `Senior: $12`

### Absolutely do NOT

- Use any HTML forms, inputs, buttons, `document.getElementById`, `querySelector`, or other DOM APIs.
- Call `prompt()` more than once.
- Export functions or use `module.exports` (the script just runs immediately).

---

## Starter Files (expected names)

- `index.html` — includes `<script src="script.js"></script>`
- `script.js` — contains your on‑load logic (no functions/exports required)

> The autograder **requires** the file name `script.js` at repo root.

---

## How You’ll Be Graded (GitHub Classroom)

The workflow runs **Jest** in a Node environment. Each test run **mocks** `prompt` and `alert`, then `require`s `script.js` so your code executes immediately. If your script uses any DOM APIs (`document`, `getElementById`, etc.), it will throw in Node and the test will fail.

### Tests

- **Required run** — script loads, calls `prompt()` once, and `alert()` once (no DOM).
- **Child** — age `5` → `Child: $7`
- **Teen** — age `16` → `Teen: $12`
- **Adult** — age `35` → `Adult: $20`
- **Senior** — age `70` → `Senior: $12`
- **Invalid** — `abc`, empty, whitespace, `-1`, or `null` → alerts “Invalid input”
- **Boundaries** — `0,12` (Child), `13,17` (Teen), `18,64` (Adult), `65` (Senior)
- **Single prompt** — ensures you didn’t prompt multiple times

A summary is written to the job summary with ✅/❌ per check and points like `(15/15)` based on the *actual* grader outputs.
