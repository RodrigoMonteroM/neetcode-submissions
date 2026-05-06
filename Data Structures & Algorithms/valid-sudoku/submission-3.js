class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    
    isValidSudoku(board) {
       const rows = Array.from({length: 9}, () => new Set());
       const cols = Array.from({length: 9}, () => new Set());
       const boxes = Array.from({length: 9}, () => new Set()); 

        for(let i=0; i < 9; i++){
            for(let k=0; k < 9; k++){
                var cell = board[i][k];
                var boxIndex = Math.floor(i / 3) * 3 + Math.floor(k / 3);
                if(cell === '.') continue;
                if(rows[i].has(cell) 
                    || cols[k].has(cell)
                    || boxes[boxIndex].has(cell))
                    return false;
                rows[i].add(cell);
                cols[k].add(cell);
                boxes[boxIndex].add(cell);
            }
        }
        
        return true;

    }
}
