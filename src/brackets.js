const Stack = require("./lib/stack");

const match = (expression) => {
  const stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    const character = expression[i];
    const closingBracket = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    // if opening bracket, then push the corresponding closing bracket into stack
    if ("({[".includes(character)) {
      stack.push(closingBracket[character]);
      // if closing bracket, top of the stack must match (then pop) or else brackets are out of order.
    } else {
      if (")}]".includes(character)) {
        if (stack.top?.value === character) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.top;
};

module.exports = match;