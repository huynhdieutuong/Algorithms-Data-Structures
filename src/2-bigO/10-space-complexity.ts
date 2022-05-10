/**
 * - Most primitives (booleans, numbers, undefined, null) are constant space - O(1)
 * - String require O(n) space (where n is the string length)
 * - Reference types are generally O(n), where n is the length (for array) or the numbers of key (for objects)
 */

/**
 * 1/ Object are fast, but there's no order
 * 2/ Array are great when need an order, but it better if do it to add & remove from the end (push - pop),
 * avoid add & remove from begining (shift - unshift) - because it will reindex everything
 */

/** BigO of Array Operations:
 * push     -     O(1)
 * pop      -     O(1)
 * shift    -     O(N)
 * unshift  -     O(N)
 * concat   -     O(N)
 * slice    -     O(N)
 * splice   -     O(N)
 * sort     -     O(N * logN)
 * forEach/map/filter/reduce/etc  -  O(N)
 */
