
  export function generateQuestion(difficulty = 'easy') {
    const operations = ['+', '-', '*', '/'];
    let range = 10;
  
    if (difficulty === 'medium') range = 50;
    else if (difficulty === 'hard') range = 100;
  
    const num1 = Math.floor(Math.random() * range);
    const num2 = Math.floor(Math.random() * range) || 1; 
    const operator = operations[Math.floor(Math.random() * operations.length)];
  
    let question, answer;
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = parseFloat((num1 / num2).toFixed(2));
        break;
      default:
        break;
    }
    question = `${num1} ${operator} ${num2}`;
    return { question, answer };
  }