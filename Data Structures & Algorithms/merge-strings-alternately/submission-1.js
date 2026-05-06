class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const min = Math.min(word1.length, word2.length);
        let ans = '';
        let i = 0;
        let k = 0;

        while(i<min){
            ans += word1[i] + word2[k];
            i++;
            k++;
        }

        return ans + word1.slice(i) + word2.slice(k);
    }
}
