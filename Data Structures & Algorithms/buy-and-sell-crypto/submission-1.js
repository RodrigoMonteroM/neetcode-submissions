class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity; // Iniziamo con un valore altissimo
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            // Passo 1: Se il prezzo di oggi è più basso del nostro minPrice, aggiorniamolo.
            if(minPrice > prices[i]) {
                minPrice = prices[i];
            }else{
                const currentProfit = prices[i] - minPrice;
                if(currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }
        }
         return maxProfit;
    }
}
