class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let rigth = numbers.length - 1;

        while(left <= rigth){
            const sum = numbers[left] + numbers[rigth];

            if(sum == target){
                return [left + 1 , rigth + 1];
            }

            if(sum < target){
                left++;
            }else{
                rigth--;
            }
        }

        return [];
    }
}
