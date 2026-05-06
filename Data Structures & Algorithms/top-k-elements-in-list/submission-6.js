class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k){
        const counter = {};
        for(const n of nums){
            counter[n] = (counter[n] || 0) + 1;
        }

        const counterSorted = Object.entries(counter).sort((a, b) => b[1] - a[1])

        const ans = [];
        for(let i=0; i < k; i++){
            ans.push(counterSorted[i][0])
        }

        return ans;
    } 
    
}
