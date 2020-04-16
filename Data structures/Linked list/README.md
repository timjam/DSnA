# Linked list

Linked list is a data structure which nodes points to one or more other nodes in the list. There are various types of linked lists:

1. Singly linked list
    * Every node points to the next node in the list
2. Doubly linked list
    * Every node points to the previous and next elements in the list
3. Multiply linked list
    * Every node points to two or more nodes
4. Circular linked list
    * Last node points to the first node in the list

Just to name a few. For simplicity sake I'll implement only _singly_ and _doubly_ linked lists.

Linked lists usually support at least following methods:

1. Insert: Inserts a new node into the list on the specified position
2. Remove: Removes a node from the linked list from the specified position
3. Length: Returns the number of nodes in the list

## TypeScript

Idea is to implement this DS without using TS array at all.
