class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '')
        return s.split('').reverse().join('').toLowerCase() == s.split('').join('').toLowerCase();
    }
}
