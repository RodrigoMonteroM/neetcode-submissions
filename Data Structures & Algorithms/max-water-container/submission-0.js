class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let low = 0;
        let high = heights.length - 1;
        let max = 0;
        while(low < high){
            const minHigh = Math.min(heights[low], heights[high]);
            const width = high - low;
            const area = width * minHigh;

            max = Math.max(area, max);

            if(heights[low] < heights[high]){
                low++;
            }else{
                high--;
            }
        }

        return max;

    }
}
