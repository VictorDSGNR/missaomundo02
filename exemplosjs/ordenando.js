
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
    return array;
};


const shuffle = (array, numTrocas) => {
    const length = array.length;
    for (let i = 0; i < numTrocas; i++) {
        const pos1 = Math.floor(Math.random() * length);
        const pos2 = Math.floor(Math.random() * length);
        swap(array, pos1, pos2);
    }
    return array;
};


const bubble_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};


const selection_sort = (array) => {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};


const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        const pivotIndex = particionamento(array, start, end);
        quick_sort(array, start, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, end);
    }
    return array;
};
