class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = {};
        for(const char of s){
            count[char] = (count[char] || 0) + 1;
        }

        for(const char of t){
            if(!(char in count) || count[char] === 0){
                return false;
            }else{
                count[char] -= 1;
            }
        }

        return true;
    }
}
