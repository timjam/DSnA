# Set

Set is a data structure that contains only unique items of a certain type.

Usually set supports at least following methods:

1. Contains: Returns true if set contains given item, otherwise false
2. Insert: Adds new element to the set. Returns nothing or error if element is already present in the set
3. Remove: Removes an item from set. Does nothing if the item is not present in the set
4. Union: Returns a new set containing all unique items from two sets
5. Intersect: Returns a new set containing only unique items that exists in both two sets
6. Subtract: Returns a new set containing all items present in one set, but not in another
7. Get_size: Returns the number of items in set
8. Is_empty: Returns true, if there are no items present in the set. False otherwise.

## TypeScript

I tried to write this implementation without using the TS/JS array methods, because some of them are already methods that could be used in Set itself too. In the end of the day some methods use these array methods and the whole implementation of this Set is very questionable and at some points uses very weird methods. After all I wanted to get this done and move to next DS.
