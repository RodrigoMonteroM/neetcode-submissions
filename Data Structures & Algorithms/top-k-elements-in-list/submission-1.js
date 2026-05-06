class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for(let num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        const arrCount = Object.entries(count).sort((a, b) => b[1] - a[1]);
        
        const result = [];
        
        for(let i=0; i < k; i++){
            result.push(Number(arrCount[i][0]));
        }

        return result;

    }
}
