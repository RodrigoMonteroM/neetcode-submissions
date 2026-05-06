class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = '';

        for(let i=0; i < strs[0].length; i++){
            const chartToSearch = strs[0][i];
            for(const word of strs){
               if(word[i] !== chartToSearch) return prefix
            }

            prefix += chartToSearch;
        }
        
        return prefix;
    }
}
