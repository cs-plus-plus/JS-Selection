# CS++ JavaScript — Selection & Conditionals

> **Unit 8.3** | 100 Points | 9 Automated Tests

In this assignment you will learn how to make decisions in your code using **if/else if/else** statements. Your program will check conditions and run different code depending on the result.

---

## Table of Contents

1. [Comparison Operators](#comparison-operators)
2. [if Statements](#if-statements)
3. [if/else Statements](#ifelse-statements)
4. [if/else if/else Chains](#ifelse-ifelse-chains)
5. [Logical Operators](#logical-operators)
6. [Input Validation](#input-validation)
7. [parseInt() vs parseFloat()](#parseint-vs-parsefloat)
8. [Assignment](#assignment)
9. [Scoring Rubric](#scoring-rubric)
10. [Tips for Success](#tips-for-success)
11. [FAQ](#faq)

---

## Comparison Operators

Comparison operators compare two values and return `true` or `false`:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `===` | Strict equals | `5 === 5` | `true` |
| `!==` | Strict not equals | `5 !== 3` | `true` |
| `<` | Less than | `3 < 5` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<=` | Less than or equal | `5 <= 5` | `true` |
| `>=` | Greater than or equal | `6 >= 5` | `true` |

### Why === instead of ==?

Always use `===` (strict equality) instead of `==` (loose equality). Loose equality does type conversion, which can cause bugs:

```javascript
5 == "5"   // true — loose equality converts types (BAD)
5 === "5"  // false — strict equality checks type too (GOOD)
```

**The autograder checks that your code uses `===`.**

---

## if Statements

An `if` statement runs code only when a condition is `true`:

```javascript
let temperature = 95;
if (temperature > 90) {
  alert("It's hot outside!");
}
```

---

## if/else Statements

Add `else` to run code when the condition is `false`:

```javascript
let age = 15;
if (age >= 18) {
  alert("You can vote");
} else {
  alert("Too young to vote");
}
```

---

## if/else if/else Chains

When you have **multiple conditions**, chain them with `else if`:

```javascript
let score = 85;
if (score >= 90) {
  alert("A");
} else if (score >= 80) {
  alert("B");
} else if (score >= 70) {
  alert("C");
} else {
  alert("F");
}
```

**Order matters!** Conditions are checked top to bottom. The first one that is `true` runs, and the rest are skipped.

---

## Logical Operators

Combine conditions using logical operators:

| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND — both must be true | `age >= 13 && age <= 17` |
| `\|\|` | OR — at least one must be true | `day === "Sat" \|\| day === "Sun"` |
| `!` | NOT — flips true to false | `!isNaN(num)` |

---

## Input Validation

Always check user input before using it. Users might type letters when you expect numbers, or leave the input empty.

```javascript
let input = prompt("Enter a number");
let num = parseInt(input);
if (isNaN(num)) {
  alert("That's not a number!");
}
```

`isNaN(num)` returns `true` if `num` is **not a number** — this catches empty strings, letters, and other invalid input.

---

## parseInt() vs parseFloat()

- `parseInt("42")` → `42` — converts to a whole number
- `parseInt("42.7")` → `42` — drops the decimal part
- `parseFloat("42.7")` → `42.7` — keeps the decimal part

For things like **age** or **count**, use `parseInt()` because they should be whole numbers.

---

## Assignment

Complete the two functions in `script.js`. Each function is triggered by a button in `index.html`.

### Warm-Up: checkNumber() — 15 points

Write a function that:
1. Prompts for a number
2. If the input is not a number, alerts exactly: `Invalid input`
3. If the number is greater than 0, alerts exactly: `Positive`
4. If the number is less than 0, alerts exactly: `Negative`
5. If the number is exactly 0, alerts exactly: `Zero`

### ticketPrice() — 75 points

Write a function that determines a ticket price based on age:

| Age Range | Category | Price | Alert Format |
|-----------|----------|-------|-------------|
| 0–12 | Child | $7 | `Child: $7` |
| 13–17 | Teen | $12 | `Teen: $12` |
| 18–64 | Adult | $20 | `Adult: $20` |
| 65+ | Senior | $12 | `Senior: $12` |

If the input is not a number or is negative, alert exactly: `Invalid input`

### Code Quality — 10 points

- **Uses `===`** — strict equality operator (5 points)
- **Uses `parseInt()`** — to convert age input to a whole number (5 points)

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | checkNumber() — positive | 5 | Input "5" → alerts "Positive" |
| 2 | checkNumber() — negative | 5 | Input "-3" → alerts "Negative" |
| 3 | checkNumber() — zero | 5 | Input "0" → alerts "Zero" |
| 4 | Uses === operator | 5 | Source code contains `===` |
| 5 | Uses parseInt() | 5 | Source code contains `parseInt(` |
| 6 | Invalid input handling | 15 | "abc", "", "-1", null → "Invalid input" |
| 7 | Child (0–12) → $7 | 20 | Ages 0, 5, 12 → "Child: $7" |
| 8 | Teen (13–17) → $12 | 15 | Ages 13, 17 → "Teen: $12" |
| 9 | Adult (18–64) → $20 | 10 | Ages 18, 35, 64 → "Adult: $20" |
| 10 | Senior (65+) → $12 | 15 | Ages 65, 80 → "Senior: $12" |
| | **Total** | **100** | |

---

## Tips for Success

1. **Start with checkNumber()** — it's simpler and uses the same if/else pattern
2. **Handle invalid input first** — check for bad input at the top of your function, before checking categories
3. **Use `return` after invalid input** — this exits the function early so the rest of the code doesn't run
4. **Check boundaries carefully** — age 12 should be Child, age 13 should be Teen. Off-by-one errors are the most common bug
5. **Use `<=` for range checking** — `if (age <= 12)` followed by `else if (age <= 17)` naturally creates non-overlapping ranges

---

## FAQ

**Q: Why does the order of my if/else if matter?**
Conditions are checked top to bottom. If you check `age <= 64` before `age <= 12`, then a 5-year-old would match `age <= 64` first and get the wrong price.

**Q: Why use `return` after invalid input?**
Without `return`, the function continues running. The age categories might still match and show a wrong price. `return` exits the function immediately.

**Q: Should I use `parseInt()` or `parseFloat()` for age?**
Use `parseInt()`. Ages are whole numbers — nobody is 12.5 years old (for ticket pricing purposes).

**Q: Why does the test check for `===` in my code?**
Strict equality `===` is a best practice in JavaScript. It prevents subtle bugs caused by type coercion. We want you to develop good habits from the start.

---

View all assignments at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
