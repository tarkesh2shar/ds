// The concepts of levels ,nesting and child/parent dont exists
// directed and undirected graphs 
// eg. social networks , dependencies


// Two ways to represent graph in code 
// 1) adjancecy matrix (matrix forms)
/**
 * [
 *  [0 0 1],
 *  [1 0 1],
 *  [1 1 1]
 * ]
 */
// 2) adjency list 
/**?
 *  {
 *      1: [2,3]
 *      2: [],
 *      3: [2] .     <-- node 3 points to 2 
 * 
 *  }
 */

/**?                                            Matrix              List
 *  Time complexity 
 *      Insert                                   O(n)               O(1)
 *      Finding edge between nodes               O(1)               0(n) or 0(1)
 *      Find all adjacent Nodes                  0(n)               0(1)
 *  Space complexity                             0(n2)              0(n+e)
 *      
 */