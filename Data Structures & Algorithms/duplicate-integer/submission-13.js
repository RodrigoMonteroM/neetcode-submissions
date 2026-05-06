class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for(const n of nums){
            if(seen.has(n)) return true;
            else seen.add(n);
        }

        return false;
    }
}
