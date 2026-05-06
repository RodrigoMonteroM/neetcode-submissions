class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for(let n of nums){
            count[n] = (count[n] || 0) + 1;
        }

        const arr = Object.entries(count).sort((a, b) => b[1] - a[1]);
        
        const ans = [];
        for(let i=0; i<k; i++){
            const curr = arr[i];
            ans.push(curr[0]);
        }

        return ans;
    }
}
