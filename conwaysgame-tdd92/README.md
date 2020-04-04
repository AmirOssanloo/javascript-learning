# TDD - Game of Life

* [ ] Install dependencies
* [ ] Setup Babel
* [ ] Setup test directory
* [ ] Add test script
* [ ] Cell State
 * [ ] Has an ALIVE state
 * [ ] Has a DEAD state
* [ ] Cell
 * [ ] Should be initialized with a cellState
 * [ ] Should die if it has fewer than 2 live neighbours
  * [ ] getNextState(numNeighbours)
 * [ ] Should live with 2 or 3 live neighbours
 * [ ] Should die with more than 3 neighbours
 * [ ] Should come alive with exactly 3 neighbours
* [ ] Game
 * [ ] Should be initialized with a given state
  * [ ] Array of arrays of states
 * [ ] Should retrieve a cell at a given row and column
 * [ ] Should get the number of alive neighbours for a given cell
 * [ ] Should create the next statte of the game