class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);
        const stack = [];
        for(const car of cars){
            const pos = car[0];
            const speed = car[1];
            const tempo = (target - pos) / speed;
            const top = stack[stack.length - 1];
            if(stack.length > 0){
                if(tempo > top){
                    stack.push(tempo);
                }
            }else{
                stack.push(tempo)
            }
            
        }

        return stack.length;
    }
}
