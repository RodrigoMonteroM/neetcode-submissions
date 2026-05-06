class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /*const hash = {};
        for(let i=0; i < nums.length; i++){
            const current = nums[i];
            if(current in hash){
                return true;
            }

            hash[current] = current;
        }
        return false;*/

        const seen = new Set();
        
        for(let num of nums){
            if(seen.has(num)){
                return true;
            }
            seen.add(num);
        }

        return false;
    }
}
