'use strict';

module.exports = class Game {
    constructor() {
        this.alives = new Set();
    }

    addCell(row, col) {
        const posKey = this.getPositionKey(row, col);
        this.alives.add(posKey);
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
        const neighbours = this.getNeighboursCoords(row, col);
        return neighbours.reduce((numberOfLivingCells, posKey) => {
            if (this.alives.has(posKey)) {
                numberOfLivingCells++;
            }
            return numberOfLivingCells;
        }, 0);
    }
};
