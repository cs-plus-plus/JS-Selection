# Unit 8.3 – Selection

## Crash Course: Selection in JavaScript
Selection means your program *chooses* a path based on conditions.

```js
// Relational operators:   <  <=  >  >=  ===  !==
// Logical operators:      && (and)    || (or)    ! (not)

if (age < 13) {
  // Child
} else if (age <= 17) {
  // Teen
} else {
  // Adult or older
}
```

**Tips**
- Convert prompt input to a number: `const age = Number(prompt("Age?"));`
- Guard against bad input: `Number.isFinite(age) && age >= 0`
- Only use `prompt(...)` and `alert(...)` for I/O (no HTML/DOM).

---

## Your Task
Create a file named **`script.js`** that implements:

1) **Pure function** (deterministic; no prompts/alerts):
```js
function ticketPrice(age) {
  // returns a Number: 7, 12, 20 (see rules below)
}
```

2) **Runner function** (does prompts/alerts):
```js
function start() {
  // 1) ask for age via prompt
  // 2) validate
  // 3) compute price with ticketPrice(age)
  // 4) alert a friendly message (see format)
}
```

3) **Exports for Node testing** (required):
```js
module.exports = { ticketPrice, start };
```

### Price Rules
| Age | Category | Price |
|---|---|---|
| 0–12 | Child | \$7 |
| 13–17 | Student | \$12 |
| 18–64 | Adult | \$20 |
| 65+ | Senior | \$12 |

### Alert Message Format
Use one of these exact forms (the grader matches flexibly, but keep it tidy):
- `Child: $7`
- `Student: $12`
- `Adult: $20`
- `Senior: $12`
- For invalid input: `Invalid input`

---

## Examples
- Input: `5` → Alert: `Child: $7`
- Input: `35` → Alert: `Adult: $20`
- Input: `abc` or `-1` → Alert: `Invalid input`

---

## How You’ll Be Graded
The autograder will:
- Verify `script.js` exists and **exports** `{ ticketPrice, start }`
- Check selection logic on multiple ages
- Stub `prompt` with sample inputs and verify the **alert** messages
- Publish a **Summary** to the Actions Summary tab
- Report scores back to GitHub Classroom

> **Important:** No DOM or console output; only `prompt` and `alert`.
