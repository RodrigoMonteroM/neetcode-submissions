class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let maxProfit = 0;

        for(const price of prices){
            if(price < min) min = price;
            const currProfit = price - min;
            if(currProfit > maxProfit) maxProfit = currProfit;
        }

        return maxProfit;

    }
}
