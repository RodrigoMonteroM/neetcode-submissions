class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            '(' : ')',
            '{' : '}',
            '[': ']'
        }

        for(const char of s){
            if(char in map) stack.push(char);
            else{
                const lastChar = stack.pop(); // ( 
                if(map[lastChar] !== char) return false;
            }
        }

        return stack.length === 0;
    }
}
