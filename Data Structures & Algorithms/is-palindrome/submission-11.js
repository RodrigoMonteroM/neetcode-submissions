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
        let ans = true;
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
                ans = false;
                left++;
                rigth--;
            }else{
                left++;
                rigth--;
                continue;
            }

        }

        return ans;

    }
}
