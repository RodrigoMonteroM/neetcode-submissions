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

        const ans = [];
        for(const key in map){
            const currArr = [];
            for(const word of map[key]){
                currArr.push(word)
            }

            ans.push(currArr);
        }

        return ans;
    }
}
