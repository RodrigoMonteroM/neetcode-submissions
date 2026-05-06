class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let ans = 0;
        let stack = [];
        for(let i=0; i < tokens.length; i++){
            let curr = parseInt(tokens[i]);
            let isOperation = isNaN(curr);
            if(isOperation){
                const numB = stack.pop();
                const numA = stack.pop();
                const result = this.calculate(numA, numB, tokens[i]);
                stack.push(result);
            }else{
                stack.push(curr);
            }
        }

        return stack[0];
    }

    calculate(a, b, operation){
        let ans = 0;
        
        switch(operation) {
            case '*':
                ans = a * b;
            break;
            case '+':
                ans = a + b;
                break;
            case '-':
                ans = a - b;
                break;
            case '/':
                if(b !== 0) ans = Math.trunc(a / b);
            break; 
        }

        return ans;
    
    }
}
