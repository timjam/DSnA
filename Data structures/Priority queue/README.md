# Priority Queue

Priority queue is a data structure similar to Queue with the exception that additional to value its elements also has priority. Two elements with the same priority are served in the order they were enqueued.

Priority queues usually support at least these methods:

1. Is empty: Checks is there elements in the queue
2. Insert: Inserts a new element with a priority into correct position in the queue
3. Pull: Remove the highest priority element from the queue and return it
4. Peek: Returns the highest priority element, but does not modify the queue

## TypeScript

I decided to implement this so that the priority queue is always sorted in the priority order. Every time a new element is inserted into the queue, it is set to appropriate place based on its priority and FIFO principle. Also thought that it would be good to name the methods similar to normal queue and that's why _insert_ is _enqueue_ and _pull_ is _dequeue_.
