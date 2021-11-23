"use strict";

const Grid = require("./src/models/Grid");

const grid = new Grid(4, 4);

grid.createArray();
grid.printGrid();
grid.printArray();
grid.newGrid();
grid.printGrid();
