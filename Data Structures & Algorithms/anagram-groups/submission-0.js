class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = {};
        for(let str of strs){
            const strSorted = str.split('').sort().join('');
            if(!count[strSorted]){
                count[strSorted] = [];
            }
            count[strSorted].push(str);
        }

        return Object.values(count);
    }
}
