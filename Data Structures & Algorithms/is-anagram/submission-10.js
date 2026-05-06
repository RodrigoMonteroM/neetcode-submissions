class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }
        let count = {};

        for(let char of s){
            count[char] = (count[char] || 0) + 1;
        }

        for(let char of t){
            count[char] -= 1;
        }

        for(let n in count){
            if(count[n] !== 0){
                return false;
            }
        }

        return true;
    }
}
