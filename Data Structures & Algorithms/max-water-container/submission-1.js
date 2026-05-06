class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let rigth = heights.length - 1;
        let max = 0;

        while(left < rigth){
            const currLeft = heights[left];
            const currRigth = heights[rigth];
            const currMin = Math.min(currLeft, currRigth);
            const currWater = currMin * (rigth - left);

            if(currWater > max){
                max = currWater;
            }

            if(currLeft < currRigth) left++
            else rigth --;
        }

        return max;
    }
}
