class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
       let ans = '';
       let left = 0;
       let right = s.length - 1;

       while (left <= right){
        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
       }
    }
}
