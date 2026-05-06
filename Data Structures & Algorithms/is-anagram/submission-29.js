class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if(s.length !== t.length) return false;
        const counter = {};
        for(const char of s){
            counter[char] = (counter[char] || 0) + 1; 
        }

        for(const char of t){
            if(!(char in counter) || counter[char] === 0) return false;
            counter[char] -= 1;
        }

        return true;
    }
}
