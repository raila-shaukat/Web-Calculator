let display = document.getElementById("display");

// Function to append values
function appendValue(value) {
  if (value === "±") {
    toggleSign();
  } else {
    display.value += value;
  }
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Toggle positive/negative
function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else if (display.value !== "") {
    display.value = "-" + display.value;
  }
}

// Perform calculation
function calculate() {
  try {
    let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
