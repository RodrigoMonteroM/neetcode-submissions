class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = new Array(temperatures.length).fill(0);
        
        for(let i = 0; i < temperatures.length; i++){
            const curr = temperatures[i];

            while(stack.length > 0 && curr > temperatures[stack[stack.length - 1]]){
                // prendo il top dello stack;
                const currIndex = stack.pop();
                result[currIndex] = i - currIndex;
            }

            stack.push(i)
        }
        
        return result;
    }
}
