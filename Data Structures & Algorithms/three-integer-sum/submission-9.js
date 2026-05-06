class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const ans = [];
        for(let i=0; i < nums.length; i++){
            const curr = nums[i];
            if( i > 0 && curr === nums[i - 1]) continue;
            let left = i + 1;
            let rigth = nums.length - 1;

            while(left < rigth){
                let sum = nums[left] + nums[rigth] + curr;


                if(sum === 0){
                    ans.push([nums[left], nums[rigth], curr]);
                    left++;
                    rigth--;
                    while(left < rigth && nums[left] === nums[left - 1]) left++;
                    while(left < rigth && nums[rigth] === nums[rigth + 1]) rigth--;
                    continue;
                }

                if(sum < 0){
                    left++
                }

                if(sum > 0){
                    rigth--;
                }
            }
        }

        return ans;
    }
}