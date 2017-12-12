'use strict';

module.exports = class Game {
    constructor() {
        this.alives = new Set();
    }

    addCell(x, y) {
        this.alives.add('foo');
    }

    getPositionKey(row, col) {
        return `${row},${col}`;
    }

    getNeighboursCoords(row, col) {
        const coords = [];
        const topLeftRow = row - 1;
        const topLeftCol = col - 1;
        const indexesFromTopLeft = [
            [0, 1, 2],
            [0, 2],
            [0, 1, 2],
        ];
        indexesFromTopLeft.forEach((columns, rowIdx) => {
            columns.forEach(colIdx => {
                const key = this.getPositionKey(topLeftRow + rowIdx, topLeftCol + colIdx);
                coords.push(key);
            });
        });
        return coords;
    }

    getNumberOfLivingCells(row, col) {
        return 0;
    }
};
