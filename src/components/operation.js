function calculate(termone, operator, termtwo) {
  let num;
  let item;
  try {
    num = parseFloat(termone);
    item = parseFloat(termtwo);
  } catch (error) {
    return 'Error';
  }

  // Addition
  if (operator === '+') {
    try {
      return num + item;
    } catch (error) {
      return 'Error';
    }
  }

  // Subtraction
  if (operator === '-') {
    try {
      return num - item;
    } catch (error) {
      return 'Error';
    }
  }

  // Multiplication
  if (operator === 'x') {
    try {
      return num * item;
    } catch (error) {
      return 'Error';
    }
  }

  // Division
  if (operator === '÷') {
    try {
      return num / item;
    } catch (error) {
      return 'Error';
    }
  }

  // Modulo
  if (operator === '%') {
    try {
      return num % item;
    } catch (error) {
      return 'Error';
    }
  }
  return 'Error';
}

export function setprimary(terms) {
  let items = [];
  let operator = '';
  let term = '';
  terms.forEach((item) => {
    if (item === '+' || item === '-') {
      items = [...items, term, item];
      term = '';
    } else if (item === 'x' || item === '÷' || item === '%') {
      operator = `${item}`;
    } else if (operator === 'x' || operator === '÷' || operator === '%') {
      term = calculate(term, operator, item);
      operator = '';
    } else {
      term = `${item}`;
    }
  });
  items = [...items, term];
  return items;
}

export function setsecondary(terms) {
  let result = 0;
  let operator = '+';
  terms.forEach((term) => {
    if (term === '+' || term === '-') {
      operator = `${term}`;
    } else {
      result = calculate(result, operator, term);
    }
  });
  return result;
}
