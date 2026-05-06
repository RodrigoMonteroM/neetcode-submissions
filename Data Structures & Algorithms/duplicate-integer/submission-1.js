class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counter = {};
        for(const n of nums){
            if(!(n in counter)){
                counter[n] = 1;
            }else{
                return true;
            }
        }

        return false;
    }
}
