# Unit 8.3 – Selection & Logic: Movie Ticket Price Calculator 🎬

## Overview
In this project, you will write a JavaScript program that calculates **movie ticket prices** based on the user’s age.  
You will use **iteration and conditional logic** to determine which price category applies and display the result on the webpage.

---

## Learning Goals
By the end of this lesson, you should be able to:
- Use variables and conditional logic to implement decision-making in JavaScript.
- Capture user input from a text field using `document.getElementById()`.
- Update the DOM dynamically to display results.

---

## Instructions

### 1. Create your HTML file
Include the following elements in your `index.html`:

```html
<input id="age" type="number" placeholder="Enter your age">
<button onclick="calculate()">Check Ticket Price</button>
<p id="priceOutput"></p>
```

### 2. Create your JavaScript file (`script.js`)
Your code should define a function named `calculate()` that reads the age from the input, determines the correct ticket price, and displays it.

```javascript
function calculate() {
  // your code here
}
```

---

## Ticket Price Rules

| Age Range | Ticket Type | Price |
|------------|--------------|--------|
| 0–12 | Child | $7 |
| 13–17 | Student | $12 |
| 18–64 | Adult | $20 |
| 65+ | Senior | $12 |

---

## How It Works
1. The user enters their **age** in the input field.
2. When the **button** is clicked, your program calls the `calculate()` function.
3. The function checks the input against the price ranges and prints the correct **ticket price** inside the `<p id="priceOutput"></p>` element.

---

## Assessment Criteria

| Criteria | Description | Points |
|-----------|--------------|--------|
| HTML Setup | Includes input with `id="age"` and output element with `id="priceOutput"` | 20 |
| JS Functionality | Implements `calculate()` correctly using conditional statements | 40 |
| Output Accuracy | Displays correct prices for all age groups | 30 |
| Code Clarity | Proper indentation, comments, and readability | 10 |

---

## Common Mistakes
1. Forgetting to convert the input value to a number using `Number()`.
2. Not assigning `id` attributes correctly in HTML.
3. Printing output to the console instead of the webpage.
4. Missing `calculate()` definition or incorrect function name.

---

## Example Output

| Input (Age) | Expected Output |
|--------------|----------------|
| 5 | `$7` |
| 15 | `$12` |
| 35 | `$20` |
| 70 | `$12` |

---

## Unit Connection
- **Unit 8.3 – Iteration** introduces using loops and conditions to automate repetitive logic.
- This lab focuses on using *if–else* structures to apply different rules for different input cases.
- This lays the groundwork for **more complex iteration problems**, such as validating multiple inputs or processing lists of data.

---

## Submission
Commit and push your work to your assigned GitHub Classroom repository.  
Your instructor’s autograder will test your project automatically.
