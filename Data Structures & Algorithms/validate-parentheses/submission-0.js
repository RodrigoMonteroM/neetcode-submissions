class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
   const hash = {
       '(' : ')',
       '{': '}',
       '[': ']'
   }

   for(let i = 0; i < s.length; i++) {
       const current = s.charAt(i);
       if(hash[current]){
           stack.push(current);
       }else{
            const lastOpen = stack.pop();
            if(hash[lastOpen] !== current){
                return false;
            }
       }

   }

    return stack.length === 0; 
    }
}
