class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const set = new Set(nums);
        let count = 0;

        for(let curr of set){
            if(!set.has( curr - 1)){
                let currStreak = 1;
                let currNum = curr;
                while(set.has(currNum + 1)){
                    currNum++;
                    currStreak++;
                }

                count = Math.max(count, currStreak);
            }
            console.log(set)
        }

        return count;
    }
}
