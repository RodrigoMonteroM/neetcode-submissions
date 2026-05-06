class DynamicArray {

  private int[] arr;
  private int length;
  private int capacity;

  public DynamicArray(int capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new int[this.capacity];
  }

  public int get(int i) {
    return arr[i];
  }

  public void set(int i, int n) {
    arr[i] = n;
  }

  public void pushback(int n) {
    if (this.capacity == this.length) {
      resize();
    }

    this.arr[length] = n;
    this.length++;
  }

  public int popback() {
    if (length > 0) {
        // soft delete the last element
        length--;
    }
    return this.arr[this.length];
}


  private void resize() {
    this.capacity = this.capacity * 2;
    int[] arrCopy = new int[capacity];
    int i = 0;

    for (int obj : this.arr) {
      arrCopy[i] = obj;
      i++;
    }

    this.arr = arrCopy;
  }

  public int getSize() {
    return this.length;
  }

  // Get the capacity of the array
  public int getCapacity() {
    return this.capacity;
  }
}
