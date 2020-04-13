# TDD - Game of Life

* [x] Install dependencies
* [x] Setup Babel
* [x] Setup test directory
* [x] Add test script
* [x] Cell State
 * [x] Has an ALIVE state
 * [x] Has a DEAD state
* [ ] Cell
 * [x] Should be initialized with a CellState
 * [x] Should die if it has fewer than 2 live neighbours
  * [x] getNextState(numNeighbours)
 * [x] Should live with 2 or 3 live neighbours
 * [x] Should die with more than 3 neighbours
 * [x] Should stay dead if it has more than 3 neighbours
 * [x] Should come alive with exactly 3 neighbours
* [ ] Game
 * [x] Should be initialized with a given state
  * [x] Array of arrays of states
 * [ ] Should retrieve a cell at a given row and column
 * [ ] Should get the number of alive neighbours for a given cell
 * [ ] Should create the next statte of the game
