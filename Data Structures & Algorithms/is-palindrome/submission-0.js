class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const backwards = s.split('').reverse().join('')
        return backwards === s;
    }
}
