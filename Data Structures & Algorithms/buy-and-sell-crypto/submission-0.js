class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
    for(let i=0; i < prices.length; i++){
        for(let k= i+1; k < prices.length; k++){
            const currentProfit = prices[k] - prices[i];
            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
    }
}
