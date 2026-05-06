class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let left = 0;    
        let max = 0;    
        for(let rigth =0; rigth < s.length; rigth++){
            const curr = s[rigth];

            while(seen.has(curr)){
                seen.delete(s[left]);
                left++;
            }
            
            max = Math.max(max, rigth - left + 1);
            seen.add(curr);
        }

        return max;

    }
}
