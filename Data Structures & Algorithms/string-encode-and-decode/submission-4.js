class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = '';
        for(let word of strs){
            ans += word.length + '#' + word;
        }
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const ans = [];
        let i=0;
        while(i < str.length){
            let j=i;
            while(str[j] !== '#'){j++}
            const len = Number(str.substring(i, j));
            ans.push(str.substring( j + 1, j + len + 1));
            i= j + len + 1;
        }

        return ans;
    }
}
