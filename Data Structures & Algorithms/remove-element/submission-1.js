class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0;
    
        for(let i=0; i < nums.length; i++){
            const curr = nums[i];
            if(curr !== val){
                nums[count] = curr;
                count++;
            }
            
        }

        return count;
    }
}
