/**
 * @desc this is an Implementation of bubbleSort Algorithm to sort a given set of integers.
 */


var list = [9, 2, 5, 6, 65, 100, 6000, 4, 3, 7, 10, 1, 8];
console.log ("Unsorted Array: " + list);


/**
 * @param {int[]} list this is a list of integers
 * @param {int} i this is the number value 1
 * @param {int} j this is the number value 2
 * @desc this function swap the two integers
 */

function swap(list, i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

/**
 * @param {int[]} list this is a list of integers
 * @return {list} returns the list of sorted Array
 */
function bubbleSort(list) {
    for (var i = 0; i < list.length; i++) {
        for (var j = 1; j < list.length; j++) {
            if (list[j - 1] > list[j]) {
                swap(list, j - 1, j);
            }
        }
    }
    return list;
}

console.log("Sorted Array :" + bubbleSort(list.slice()));