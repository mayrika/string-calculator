class Calculator {
    calculate(str) {
        if(str.indexOf(",")!==-1) {
            var ans = str.split(",")
            var sum = parseInt(ans[0])+parseInt(ans[1])
            return sum }
        if(str.indexOf("\n")!==-1) {
            var ans = str.split("\n")
            var sum1 = parseInt(ans[0])+parseInt(ans[1])
            return sum1 }
        else if (str) {
            return parseInt(str) }
        else if(str===''){
            return 0 }
    }
}

module.exports = Calculator
