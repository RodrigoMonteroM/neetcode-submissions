class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        for(let i=0; i < nums.length; i++){
            const current = nums[i];
            if(current in hash){
                return true;
            }

            hash[current] = current;
        }
        return false;
    }
}
