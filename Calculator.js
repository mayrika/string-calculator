class Calculator {
  constructor() {
    this.str = '';
  }
  calculate(str) {
    this.str = str;
    if (str.indexOf(',') !== -1) {
      const ans = str.split(',');
      let sum1 = 0;
      for (let i = 0; i < ans.length; i += 1) sum1 += parseInt(ans[i], 10);
      return sum1;
    } else if (str.indexOf('\n') !== -1) {
      const ans = str.split('\n');
      let sum2 = 0;
      for (let j = 0; j < ans.length; j += 1) sum2 += parseInt(ans[j], 10);
      return sum2;
    } else if (str) return parseInt(str, 10);
    else if (str === '') return 0;
    return -1;
  }
}

module.exports = Calculator;
