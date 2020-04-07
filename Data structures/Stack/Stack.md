# Stack

Stack is a basic data structure that can be thought to be like a jar where you can put things in and remove them in LIFO (Last In First Out) order.

Stack usually supports following operations:

* Push: Insert new element on top of the stack
* Pop: Remove an element from top of the stack
* Is_empty: Checks whether the stack is empty or not
* Is_full: Checks whether the stack is full
* Get_size: Returns the number of elements in the stack

Besides these I will implement some more or less useful operations, which include:

* Get_capacity: Returns the allocated capacity of the stack
* Flush: Empties the whole stack destroying all elements in it

## TypeScript

At the most basic level stack is a linked list, which only supports push and pop as its' modifying methods. Stack can be a typed stack, meaning it only accepts certain data types, or it can support multiple data types, like lists in TS/JS in general. Because lists and stacks are already present in TS/JS I implement a class based stack.
