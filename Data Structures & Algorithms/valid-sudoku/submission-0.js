class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());
        for(let r=0; r < board.length; r++){
            for(let c=0; c < board[r].length; c++){
                const currCell = board[r][c];
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if(currCell === '.') continue;
                if(rows[r].has(currCell)) return false;
                if(cols[c].has(currCell)) return false;
                if(boxes[boxIndex].has(currCell)) return false;
                rows[r].add(currCell);
                cols[c].add(currCell);
                boxes[boxIndex].add(currCell)
            }
        }

        return true;
    }
}
