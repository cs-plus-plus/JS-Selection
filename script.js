// ============================================
//  Unit 8.3 – Selection & Conditionals
// ============================================
//  Complete each function below by following
//  the STEP comments. Do NOT rename the functions.
// ============================================


// --- WARM-UP: checkNumber() ---
// This function checks whether a number is positive,
// negative, or zero.

function checkNumber() {
  // STEP 1: Use prompt() to ask "Enter a number"
  //         Store the result in a variable using let.

  // STEP 2: Use parseFloat() to convert the string to a number.

  // STEP 3: Check if the input is not a number using isNaN().
  //         If it is not a number, alert exactly: "Invalid input"
  //         Then return (exit the function early).

  // STEP 4: Use if/else if/else to check the number:
  //         If the number is greater than 0, alert exactly: "Positive"
  //         If the number is less than 0, alert exactly: "Negative"
  //         If the number is exactly 0, alert exactly: "Zero"

}


// --- ticketPrice() ---
// This function determines a ticket price based on the
// customer's age. Each age range has a different price.
//
//   Child  (0–12)  → $7
//   Teen   (13–17) → $12
//   Adult  (18–64) → $20
//   Senior (65+)   → $12

function ticketPrice() {
  // STEP 1: Use prompt() to ask "Enter your age"
  //         Store the result in a variable using let.

  // STEP 2: Use parseInt() to convert the string to a whole number.
  //         Ages should be whole numbers, so use parseInt (not parseFloat).

  // STEP 3: Check if the input is invalid.
  //         Invalid means: isNaN() is true OR the number is negative.
  //         If invalid, alert exactly: "Invalid input"
  //         Then return (exit the function early).

  // STEP 4: Use if/else if/else to determine the ticket price.
  //         Check the age ranges in order:
  //
  //         If age is 12 or less → alert exactly: "Child: $7"
  //         If age is 17 or less → alert exactly: "Teen: $12"
  //         If age is 64 or less → alert exactly: "Adult: $20"
  //         Otherwise            → alert exactly: "Senior: $12"
  //
  //         HINT: Since you already checked for negative numbers
  //         in STEP 3, you know the age is >= 0 by this point.
  //         So checking age <= 12 covers ages 0 through 12.

}
