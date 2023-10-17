// LIST AND TABLE DS 
    List
        // Collection of values 
        // eg Arrays, sets , lInkedList
        // Greate for storing values that are retrieved by positon (via index or search)
        // Also great for search.
    Tables 
        // Collection of key value pairs 
        // Objects and Maps 
        // Great for storing values that are retrieved by key 
        // Not primarily focused on loops.

// Stack and queue 
        //                  stack                 vs                  Arrays
        // ElementAccess     O(1)                                     O(1)
        // Insertion at End  O(1)                 vs                  O(1)
        // Insertion at Begging
                        // . O(N)   with dataloss                     O(N)
        // Insertion at Middle
                        //   O(N)   with dataloss                     O(n)
        // Search Element    O(n)   with dataloss                     O(n)

    // --------------------------

        //                  queue                 vs                  Arrays
        // ElementAccess     O(1)                                     O(1)
        // Insertion at End  O(n) with dataloss                 vs    O(1)
        // Insertion at Begging
                        // . O(1)   with dataloss                     O(N)
        // Insertion at Middle
                        //   O(N)   with dataloss                     O(n)
        // Search Element    O(n)   with dataloss                     O(n)


// hash tables

    // Input  ----> Hashing function ----> Hash Tables

        // find first repeated word in string "academind"
        // Using object we can solve this in O(N)
        // Using arrays we can solve this in O(N2)

    /**
     *                      HashTables                           Objects
     * elementAccess           O(1) without collisions              O(1)
     *                         O(n) with collisions    
     * 
     * insertionAtEnd           O(1)                                O(1)
     *                          O(n) with collisions
     * 
     * insertAtBegging           same                               same
     * insertinMiddle            same                               same
     * search                    same                               same
     */

// Trees
        // Binary search tree and AVL 
        // Trie

/**                          Tree                 Array
 *    Access/Search         Worstcase: O(N)         O(1) With index
 *                           average -log n         O(N)
 * 
 *    Insertion             Worstcase: O(n)         O(1) (at end)
 *                          average -log n          O(n) (at beginning)
 * 
 *    Removal               Worstcase: O(n) .       O(1) (At end)
 *                          average -log n          O(N) (At beginning)
 * 
 * 
 */
