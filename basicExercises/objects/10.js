/** 
 * Write a function clone that takes an object as argument and returns a
 * shallow copy of that argument. A shallow copy returns a new object that is a
 * copy of the original object. However, only the object itself and any
 * properties with primitive values are duplicated. Properties that are
 * themselves objects are copied "by reference" -- that is, only a pointer to
 * the object is copied.
 *
 * For instance, consider the following object:
 */

let obj = {
  number: 1,
    string: 'abc',
      array: [1, 2, 3],
      };

/**
 * If we make a shallow copy of obj, we'll create a new object that has the same 3 properties as obj:
 */


