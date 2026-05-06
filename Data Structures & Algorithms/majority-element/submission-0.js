class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = {};
        for(let n of nums){
            count[n] = (count[n] || 0) + 1;
        }

        const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
        return sorted[0][0];
    }
}
