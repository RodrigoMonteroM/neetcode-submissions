class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length <= 0) return '';
        let prefix = '';        
        for(let i=0; i<strs[0].length; i++){
            const letter = strs[0][i];
            for(let word of strs){
                if(i >= word.length || word[i] != letter){
                    return prefix;
                }   
            }

            prefix += letter;
        }

        return prefix;
        
    }
}
