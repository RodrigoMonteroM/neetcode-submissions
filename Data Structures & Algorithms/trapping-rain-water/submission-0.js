class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let rigth = height.length - 1;
        let maxLeft = 0;
        let maxRigth = 0;
        let totalWater = 0;

        while(left < rigth){
            if(height[left] < height[rigth]){
                if(height[left] <= maxLeft){
                    totalWater += maxLeft - height[left];
                }else{
                    maxLeft = height[left];
                }
                left++;
            }else{
                if(height[rigth] <= maxRigth){
                    totalWater += maxRigth - height[rigth];
                }else{
                    maxRigth = height[rigth];
                }
                rigth--;
            }
        }

        return totalWater;
    }
}
