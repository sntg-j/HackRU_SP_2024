// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Part 1: https://youtu.be/aKYlikFAV4k
// Part 2: https://youtu.be/EaZxUCWAjb0
// Part 3: https://youtu.be/jwRT4PCT6RU

// An object to describe a spot in the grid
function Spot(i, j, x, y, width, height, isWall, grid) {

    this.grid = grid;

    // Location
    this.i = i;
    this.j = j;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // f, g, and h values for A*
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.vh = 0; //visual heuristic for prioritising path options
    // Neighbors
    this.neighbors = undefined;
    this.neighboringWalls = undefined;
    // Where did I come from?
    this.previous = undefined;
    // Am I an wall?
    this.wall = isWall;

    // Did the maze algorithm already visit me?
    this.visited = false;

    // Display me
    this.show = function(color) {
        if (this.wall) {
            fill(0);
            noStroke();

            if (drawingOption === 0) {
                ellipse(this.x + this.width * 0.5, this.y + this.width * 0.5, this.width * 0.5, this.height * 0.5);
            } else {
                rect(this.x, this.y, this.width, this.height);
            }

            stroke(0);
            strokeWeight(this.width / 2);

            var nWalls = this.getNeighboringWalls(this.grid);
            for (var i = 0; i < nWalls.length; i++) {
                var nw = nWalls[i];

                // Draw line between this and bottom/right neighbor walls
                if ((nw.i > this.i && nw.j == this.j) ||
                    (nw.i == this.i && nw.j > this.j)) {
                    line(this.x + this.width / 2,
                        this.y + this.height / 2,
                        nw.x + nw.width / 2,
                        nw.y + nw.height / 2);
                }

                // Draw line between this and bottom-left/bottom-right neighbor walls
                if (!canPassThroughCorners && (nw.j > this.j) &&
                    (nw.i < this.i || nw.i > this.i)) {
                    line(this.x + this.width / 2,
                        this.y + this.height / 2,
                        nw.x + nw.width / 2,
                        nw.y + nw.height / 2);
                }
            }
        } else if (color) {
            fill(color);
            noStroke();
            rect(this.x, this.y, this.width, this.height);
        }
    }

    this.getNeighbors = function() {
        if (!this.neighbors) {
            this.populateNeighbors();
        }
        return this.neighbors;
    }

    this.getNeighboringWalls = function(grid) {

        if (!this.neighboringWalls) {
            this.populateNeighbors();
        }

        return this.neighboringWalls;
    }

    //maybe should be static properties?
    var LURDMoves = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];

    //return node or null if request is out of bounds
    this.getNode = function(i, j) {
        if (i < 0 || i >= this.grid.length ||
            j < 0 || j >= this.grid[0].length) {
            return null;
        }
        return this.grid[i][j];
    }

    //populate neighbor move and neighbor wall arrays
    this.populateNeighbors = function() {
        this.neighbors = [];
        this.neighboringWalls = [];

        //Add Left/Up/Right/Down Moves
        for (var i = 0; i < 4; i++) {
            var node = this.getNode(this.i + LURDMoves[i][0], this.j + LURDMoves[i][1]);
            if (node != null) {
                if (!node.wall) {
                    this.neighbors.push(node);
                } else {
                    this.neighboringWalls.push(node);
                }
            }
        }


    }

}