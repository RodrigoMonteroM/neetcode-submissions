class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let counter = {};
        for(let char of s){
            counter[char] = (counter[char] || 0) + 1;
        }

        for(let char of t){
            if(!(char in counter)) return false;
            counter[char] = counter[char] - 1;
            if(counter[char] < 0) return false;

        }

        return true;
    }
}
