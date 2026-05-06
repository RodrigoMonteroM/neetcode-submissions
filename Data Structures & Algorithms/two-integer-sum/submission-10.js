class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i=0; i < nums.length; i++){
            const curr = nums[i];
            const complemento = target - curr; 
            if(complemento in map){
                return [i, map[complemento]]
            }
            map[curr] = i;

        }

        return [];
    }
}
