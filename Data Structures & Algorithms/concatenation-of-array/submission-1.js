class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const nLength = nums.length;
        const ans = new Array(nLength * 2);
        for(let i = 0; i < nLength; i++){
            ans[i] = ans[nLength + i] = nums[i];
        }

        return ans;
    }
}
