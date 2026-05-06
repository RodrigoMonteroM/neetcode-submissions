class MinStack {
    constructor() {
        this.stack = [];
      
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currMin = this.stack.length === 0 ? val : this.getMin();
        this.stack.push({value: val, min: Math.min(val, currMin)});

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].value
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}
