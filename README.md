# CS++ JavaScript — Lesson 8.3: Selection

> **Lesson 8.3** | 100 Points | 5 Autograded Tests

In this assignment you will write a ticket pricing program using `if`, `else if`, and `else` statements. Your code runs immediately when the page loads — no buttons, no DOM manipulation. Just one `prompt()` for input and one `alert()` for output.

---

## Table of Contents

1. [Concepts You Need](#concepts-you-need)
2. [Project Overview](#project-overview)
3. [Exact Requirements](#exact-requirements)
4. [File Structure](#file-structure)
5. [Autograding](#autograding)
6. [Try It Yourself — Practice Examples](#try-it-yourself--practice-examples)
7. [Tips for Success](#tips-for-success)
8. [FAQ](#faq)

---

## Concepts You Need

### If / Else If / Else

Selection lets your program choose different paths based on conditions:

```javascript
let temperature = 85;

if (temperature >= 90) {
    console.log("It's hot!");
} else if (temperature >= 70) {
    console.log("It's warm.");    // this runs because 85 >= 70
} else {
    console.log("It's cool.");
}
```

Only **one** block runs — JavaScript checks conditions from top to bottom and stops at the first one that is true.

### Comparison Operators

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `===` | Strict equals | `5 === 5` | `true` |
| `!==` | Not equals | `5 !== 3` | `true` |
| `<` | Less than | `3 < 5` | `true` |
| `<=` | Less than or equal | `5 <= 5` | `true` |
| `>` | Greater than | `7 > 3` | `true` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |

> Always use `===` (strict equality), not `==`. Triple equals checks both value AND type.

### Logical Operators

Combine multiple conditions:

```javascript
let age = 16;

// AND — both must be true
if (age >= 13 && age <= 17) {
    console.log("Teen");
}

// OR — at least one must be true
if (age < 5 || age > 65) {
    console.log("Discount applies");
}

// NOT — flips true/false
if (!isNaN(age)) {
    console.log("Valid number");
}
```

### parseInt() and isNaN()

`parseInt()` converts a string to a whole number. `isNaN()` checks if a value is not a number.

```javascript
let input = "42";
let num = parseInt(input);   // 42

parseInt("hello");  // NaN (not a number)
parseInt("");       // NaN
parseInt("3.7");    // 3 (drops the decimal)

isNaN("hello");     // true — not a valid number
isNaN("42");        // false — it is a valid number
isNaN(42);          // false
```

### Boundary Checking

When categorizing values into ranges, think carefully about where one range ends and the next begins:

```javascript
// Age ranges with no gaps and no overlaps:
// 0-12: Child
// 13-17: Teen
// 18-64: Adult
// 65+: Senior

if (age <= 12) {
    // Child
} else if (age <= 17) {
    // Teen (we already know age > 12 from the first check)
} else if (age <= 64) {
    // Adult
} else {
    // Senior (65 and above)
}
```

---

## Project Overview

When your page loads, `script.js` runs immediately and does the following:

1. Asks the user for their age using `prompt()`
2. Validates the input
3. Categorizes the age into a ticket pricing tier
4. Shows the result using `alert()`

There are **no buttons**, **no HTML forms**, and **no DOM manipulation** in this assignment. Everything runs on page load.

---

## Exact Requirements

### Input
Call `prompt()` **exactly once** with the text: `Enter your age:`

### Validation
If the input is any of the following, alert exactly `Invalid input`:
- Empty string or whitespace
- Not a number (letters, symbols)
- A negative number
- A decimal number (like `17.5`)

### Ticket Pricing Tiers

| Age Range | Category | Alert Text (exact) |
|-----------|----------|-------------------|
| 0–12 | Child | `Child: $7` |
| 13–17 | Teen | `Teen: $12` |
| 18–64 | Adult | `Adult: $20` |
| 65+ | Senior | `Senior: $12` |

### Rules
- Call `prompt()` exactly **once**
- Call `alert()` exactly **once**
- Do NOT use any DOM APIs (`document.getElementById`, `querySelector`, etc.)
- Do NOT export functions or use `module.exports`
- Your code runs immediately at the top level of `script.js` — no function wrappers needed

---

## File Structure

```
JS-Selection/
├── index.html              <-- Loads script.js (provided)
├── script.js               <-- YOUR CODE GOES HERE
└── .github/
    └── workflows/
        └── classroom.yml   <-- Autograding tests (DO NOT MODIFY)
```

**Edit only `script.js`.** Write all your code at the top level so it runs when the file loads.

---

## Autograding

When you push your code, GitHub Actions runs these tests:

| Test | Input | Expected Alert | Points |
|------|-------|---------------|--------|
| Invalid input | `abc`, `""`, `" "`, `-1`, `null` | `Invalid input` | 20 |
| Child | `5` | `Child: $7` | 20 |
| Teen | `13`, `17` | `Teen: $12` | 20 |
| Adult | `18`, `35`, `64` | `Adult: $20` | 20 |
| Senior | `65`, `80` | `Senior: $12` | 20 |

**Total: 100 points**

The tests mock `prompt()` to return specific values and check that `alert()` is called with the exact expected string.

---

## Try It Yourself — Practice Examples

Create a file called `practice.js` in your Codespace. Run it with `node practice.js`.

**Example 1 — Basic if/else:**
```javascript
// practice.js — basic selection
let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");   // this runs
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}
```

**Example 2 — Input validation:**
```javascript
// practice.js — checking for valid input
let inputs = ["42", "hello", "", "-5", "17.5", null];

for (let input of inputs) {
    let num = parseInt(input);
    if (input === null || input.trim() === "" || isNaN(num) || num < 0 || num !== parseFloat(input)) {
        console.log(input, "=> Invalid input");
    } else {
        console.log(input, "=> Valid, age is", num);
    }
}
```

**Example 3 — Ticket pricing logic:**
```javascript
// practice.js — test all age categories
let testAges = [0, 5, 12, 13, 17, 18, 35, 64, 65, 80];

for (let age of testAges) {
    let result;
    if (age <= 12) {
        result = "Child: $7";
    } else if (age <= 17) {
        result = "Teen: $12";
    } else if (age <= 64) {
        result = "Adult: $20";
    } else {
        result = "Senior: $12";
    }
    console.log("Age", age, "=>", result);
}
// Output:
// Age 0 => Child: $7
// Age 5 => Child: $7
// Age 12 => Child: $7
// Age 13 => Teen: $12
// ...
```

---

## Tips for Success

1. Use `parseInt()`, not `parseFloat()` — this assignment works with whole numbers only
2. Check for invalid input **before** checking age ranges
3. Remember that `parseInt("17.5")` returns `17`, but the input `"17.5"` should be treated as invalid (it is not a whole age)
4. Test boundary values: 0, 12, 13, 17, 18, 64, 65
5. Make sure you only call `prompt()` once and `alert()` once
6. Do not wrap your code in a function — it should run immediately when `script.js` loads

---

## FAQ

**Q: Why can't I use document.getElementById or other DOM APIs?**
This assignment tests pure JavaScript logic without the browser DOM. The autograder runs your code in Node.js, which does not have a DOM. If you use DOM APIs, your code will crash and all tests will fail.

**Q: How do I handle decimal input like "17.5"?**
Compare `parseInt(input)` with `parseFloat(input)`. If they are different, the input has a decimal and should be treated as invalid. Alternatively, check if the input contains a `.` character.

**Q: My code works in the browser but fails the tests.**
Make sure you are not using any DOM APIs. Also check that your alert text matches exactly — `"Child: $7"` is not the same as `"Child:$7"` (missing space) or `"child: $7"` (wrong case).

**Q: Do I need to handle age 0?**
Yes. Age 0 is a valid input and falls in the Child category (0-12).

**Q: What if the user clicks Cancel on the prompt?**
When the user clicks Cancel, `prompt()` returns `null`. This should be treated as invalid input.

---

View all assignments and scoring breakdowns at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
