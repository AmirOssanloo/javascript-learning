# TDD - Game of Life

Test Driven Development to write a simple Conway's Game of Life. Using Mocha and Chai for testing and React to display the state.

## Tests

### Cell State
 * [x] Has an ALIVE state
 * [x] Has a DEAD state

### Cell
 * [x] Should be initialized with a CellState
 * [x] Should throw error if not initialized with a CellState
 * [x] Should die if it has fewer than 2 live neighbours
 * [x] Should live with 2 or 3 live neighbours
 * [x] Should die with more than 3 neighbours
 * [x] Should stay dead with more than 3 neighbours
 * [x] Should come alive with exactly 3 neighbours

### Game
 * [x] Should be initialized with a given state
 * [x] Should retrieve a cell at a given row and column
 * [x] Should get the number of alive neighbours for a given cell
 * [x] Should get the number of alive neighbours for a cell at the edge
 * [x] Should get the number of alive neighbours for a cell in a big grid
 * [x] Should create the next state of the game
