class Solution {
    threeSum(nums) {
        // 1. Ordenamos para que los números iguales estén juntos y los punteros funcionen
        nums.sort((a, b) => a - b);
        const ans = [];

        for (let i = 0; i < nums.length; i++) {
            // 2. Si el número actual es igual al anterior, lo saltamos para no repetir tríos
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let low = i + 1;
            let high = nums.length - 1;

            while (low < high) {
                const sum = nums[i] + nums[low] + nums[high];

                if (sum === 0) {
                    // 3. ¡ENCONTRADO! Guardamos los tres VALORES
                    ans.push([nums[i], nums[low], nums[high]]);

                    // 4. SALTAMOS DUPLICADOS: Si el siguiente 'low' es igual al que acabamos de usar, avanzamos
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    // Si el siguiente 'high' es igual al anterior, retrocedemos
                    while (low < high && nums[high] === nums[high - 1]) high--;

                    // Movemos ambos a la siguiente posición distinta
                    low++;
                    high--;
                } else if (sum < 0) {
                    // La suma es muy pequeña, necesitamos un número más grande (derecha)
                    low++;
                } else {
                    // La suma es muy grande, necesitamos un número más pequeño (izquierda)
                    high--;
                }
            }
        }
        return ans;
    }
}