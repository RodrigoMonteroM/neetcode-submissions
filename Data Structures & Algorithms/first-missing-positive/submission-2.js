class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;

    // 1. Reubicar los números en su "casa" correspondiente
    for (let i = 0; i < n; i++) {
        // Mientras el número sea positivo, esté dentro del rango del array
        // y no esté ya en su posición correcta, lo intercambiamos.
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            let correctIdx = nums[i] - 1;
            // Intercambio (swap)
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        }
    }

    // 2. Buscar el primer índice que no tiene el número correcto
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // 3. Si todos están en su lugar, el que falta es el siguiente
    return n + 1;
    }
}
