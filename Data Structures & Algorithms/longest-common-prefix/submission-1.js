class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length == 0) return '';
        let prefix = '';
        for(let i=0; i < strs[0].length; i++){
            let letter = strs[0][i];
            for(let word of strs){
                if( i >= word.length || letter !== word[i]){
                    return prefix;
                }
            }

            prefix += letter;
        }

        return prefix;
    }
}
