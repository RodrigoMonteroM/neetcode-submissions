class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //return s.split('').sort().join('') == t.split('').sort().join('');
        if(s.length != t.length){
            return false;
        }

        const count = {};
        
        for(let i=0; i < s.length; i++){
            const current = s[i];
            count[current] = (count[current] || 0) + 1;
        }

        for(let i=0; i < t.length; i++){
            const current = t[i];
            if(!count[current]){
                return false;
            }

            count[current] = count[current] - 1;
        }

        return true;
    }
}
