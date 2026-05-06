class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let maxCount = 0;
        
        for(const num of nums){
            if(!(unique.has(num - 1))){
              let currNumber = num;
              let currCount = 0;
              while(unique.has(currNumber)){
                currNumber++;
                currCount++;
                if(currCount > maxCount) maxCount = currCount;
              } 
            }
        }

        return maxCount;
    }
}
