class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(const word of strs){
            const wordSorted = word.split("").sort().join();
            if(wordSorted in map){
                map[wordSorted].push(word);
            }else{
                map[wordSorted] = [word];
            }
        }


        return Object.values(map);
    }
}
