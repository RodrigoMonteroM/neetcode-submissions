class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const ans = {};
        for(let i=0; i < nums.length; i++){
            const curr = nums[i];
            if(curr in ans){
                return true;
            }
            ans[curr] = 1;
        }

        return false;
    }
}
