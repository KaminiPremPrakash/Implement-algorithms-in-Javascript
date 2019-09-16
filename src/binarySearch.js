/**
 * @desc this is a program to check index of a particular number in the list of integers
 */


/**
* @type {object}
*/
const list = [2, 5, 8, 19, 26, 45, 67, 72, 88, 101]
/**
* @type {number}
*/
const numSearch = 45;

/**
 * @param {int[]} list this is a list of integers
 * @param {int} numSearch this is the number that we search the index of
 * @return {int} middle index that hold the values
 * @desp this function returns the index of the searched number.
 */

function binarySearch(list, numSearch) {

    let startIndex = 0
    let lastIndex = list.length - 1
    let middle = Math.floor((startIndex + lastIndex) / 2)

    while (list[middle] !== numSearch && startIndex < lastIndex) {
        if (numSearch < list[middle]) {
            lastIndex = middle - 1
        } else {
            startIndex = middle + 1
        }

        middle = Math.floor((startIndex + lastIndex) / 2)
    }

    return (list[middle] !== numSearch) ? -1 : middle
}


console.log("The value " + numSearch + " is present on index number :" + binarySearch(list, numSearch))
