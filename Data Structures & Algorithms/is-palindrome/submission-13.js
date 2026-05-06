class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        const regex = /[a-z0-9]/;
        let left = 0;
        let rigth = s.length - 1;

        while(left <= rigth){
            const chartLeft = s[left];
            const chartRigth = s[rigth];
            if(!regex.test(chartLeft)){
                left++;
                continue
            }

            if(!regex.test(chartRigth)){
                rigth--;
                continue;
            }

            if(chartLeft !== chartRigth){
                return false;
            }

            left++;
            rigth--;

        }

        return true;

    }
}
