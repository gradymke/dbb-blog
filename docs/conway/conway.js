/*
Stuff for Conway's Life
*/
document.addEventListener("alpine:init", () => {
  Alpine.data("grid", () => ({
    rows: 20,
    columns: 20,
    running: false,
    interval: null,
    universe: [],
    calculateTaurusCoordinates: function (i, j) {
      let coords = [i, j];
      // Test the edges and wrap around (taurus)
      if (i < 0) {
        coords[0] = this.rows - 1;
      } else if (i == this.rows) {
        coords[0] = 0;
      }
      if (j < 0) {
        coords[1] = this.columns - 1;
      } else if (j == this.columns) {
        coords[1] = 0;
      }

      return coords;
    },
    getNWNeighbor: function (ii, jj) {
      let i = ii - 1;
      let j = jj - 1;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getNNeighbor: function (ii, jj) {
      let i = ii - 1;
      let j = jj;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getNENeighbor: function (ii, jj) {
      let i = ii - 1;
      let j = jj + 1;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getENeighbor: function (ii, jj) {
      let i = ii;
      let j = jj + 1;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getSENeighbor: function (ii, jj) {
      let i = ii + 1;
      let j = jj + 1;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getSNeighbor: function (ii, jj) {
      let i = ii + 1;
      let j = jj;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getSWNeighbor: function (ii, jj) {
      let i = ii + 1;
      let j = jj - 1;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getWNeighbor: function (ii, jj) {
      let i = ii;
      let j = jj - 1;

      coords = this.calculateTaurusCoordinates(i, j);
      i = coords[0];
      j = coords[1];

      return this.universe[i][j] ? 1 : 0;
    },
    getNeighborCount: function (ii, jj) {
      // Returns the number of neighbors a cell has
      return (
        this.getNWNeighbor(ii, jj) +
        this.getNNeighbor(ii, jj) +
        this.getNENeighbor(ii, jj) +
        this.getENeighbor(ii, jj) +
        this.getSENeighbor(ii, jj) +
        this.getSNeighbor(ii, jj) +
        this.getSWNeighbor(ii, jj) +
        this.getWNeighbor(ii, jj)
      );
    },
    shiftRight: function () {
      let newUniverse = [];
      for (i = 0; i < this.rows; i++) {
        newUniverse[i] = [];
        for (j = 0; j < this.columns; j++) {
          if (j == this.columns - 1) {
            newUniverse[i][0] = this.universe[i][j];
          } else {
            newUniverse[i][j + 1] = this.universe[i][j];
          }
        }
      }
      this.universe = newUniverse;
    },
    conwayGen: function () {
      let newUniverse = [];
      for (let i = 0; i < this.rows; i++) {
        newUniverse[i] = [];
        for (let j = 0; j < this.columns; j++) {
          nbrs = this.getNeighborCount(i, j);
          newCell = false; // Assume death
          // Any live cell with fewer than 2 live neighbors dies
          // Any live cell with 2-3 neighbors stays alive
          // Any live cell with > 3 neighbors dies
          // Any dead cell with exactly 3 neighbors comes to life
          if (this.universe[i][j]) {
            // current cell is alive
            if (nbrs >= 2 && nbrs <= 3) {
              newCell = true;
            }
          } else {
            // Current cell is not alive
            if (nbrs == 3) {
              newCell = true;
            }
          }
          newUniverse[i][j] = newCell;
        }
      }
      this.universe = newUniverse;
    },
    addRow: function () {
      if (this.rows < 100) {
        this.universe[this.rows] = [];
        for (j = 0; j < this.columns; j++) {
          this.universe[this.rows][j] = false;
        }
        this.rows++;
      }
    },
    loseRow: function () {
      if (this.rows > 5) {
        for (j = 0; j < this.columns; j++) {
          this.universe[this.rows - 1][j] = false;
        }
        this.rows--;
      }
    },
    addColumn: function () {
      if (this.columns < 100) {
        for (i = 0; i < this.rows; i++) {
          this.universe[i][this.columns] = false;
        }
        this.columns++;
      }
    },
    loseColumn: function () {
      if (this.columns > 5) {
        this.columns--;
        for (i = 0; i < this.rows; i++) {
          this.universe[i][this.columns] = false;
        }
      }
    },
    clearUniverse: function () {
      let newUniverse = [];
      for (let i = 0; i < this.rows; i++) {
        newUniverse[i] = [];
        for (let j = 0; j < this.columns; j++) {
          newUniverse[i][j] = false;
        }
      }

      this.universe = newUniverse;
    },
    toggleRunning: function () {
      this.running = !this.running;

      if (this.running) {
        this.interval = setInterval(this.conwayGen.bind(this), 100);
      } else {
        clearInterval(this.interval);
      }
    },
    init: function () {
      this.clearUniverse();
    },
  }));
});
