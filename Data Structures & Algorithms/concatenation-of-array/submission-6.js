class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array({length: nums.length * 2}).fill(null);
        for(let i=0; i < nums.length; i++){
            const curr = nums[i];
            ans[i] = curr;
            ans[nums.length + i] = curr;
        }

        return ans;
    }
}
