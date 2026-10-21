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

  // STEP 3: Use ONE if/else if chain, checking in this order:
  //         If the input is not a number (use isNaN()),
  //            alert exactly: "Invalid input"
  //         Else if the number is greater than 0, alert exactly: "Positive"
  //         Else if the number is less than 0, alert exactly: "Negative"
  //         Else if the number is exactly 0 (use ===), alert exactly: "Zero"
  //
  //         Because the isNaN() check comes first, the other branches
  //         only run for real numbers, and only one message ever shows.

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

  // STEP 3: Use ONE if/else if/else chain, checking in this order:
  //
  //         If the age is invalid (isNaN() is true OR the number is
  //            negative) → alert exactly: "Invalid input"
  //         Else if age is 12 or less → alert exactly: "Child: $7"
  //         Else if age is 17 or less → alert exactly: "Teen: $12"
  //         Else if age is 64 or less → alert exactly: "Adult: $20"
  //         Else                      → alert exactly: "Senior: $12"
  //
  //         HINT: Because the invalid check comes first, by the time
  //         you reach "age is 12 or less" you know the age is >= 0.
  //         So checking age <= 12 covers ages 0 through 12.

}
