class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, '')
        s = s.toLowerCase();
        return s.split('').reverse().join('') == s.split('').join('');
    }
}
