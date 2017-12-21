const Game = require('./../app/main');
const assert = require('assert');

describe('Game of life', function () {
    it('game should exist', function () {
        assert.ok(Game);
    });

    it('should have no living cell on start', function () {
        const game = new Game();
        assert.equal(game.alives.size, 0);
    });

    it('should be able to add a living cell', function () {
        const game = new Game();
        game.addCell(0, 0);
        assert.equal(game.alives.size, 1);
    });

    it('should create keys for position', function () {
        const game = new Game();
        const positionKey = game.getPositionKey(0, 0);
        assert.equal(positionKey, '0,0');
    });

    it('should get all neighbour cell position', function () {
        const game = new Game();
        game.addCell(0, 0);
        const coords = game.getNeighboursCoords(0, 0);
        assert.deepEqual(coords, [
            '-1,-1', '-1,0', '-1,1'
            , '0,-1', '0,1',
            '1,-1', '1,0', '1,1'
        ]);
    });

    it('should return zero living cells around a position', function () {
        const game = new Game();
        const numberOfLivingCells = game.getNumberOfLivingCells(0, 0);
        assert.equal(numberOfLivingCells, 0);
    });

    it('should return 1 living cell around a position', function () {
        const game = new Game();
        game.addCell(0, 1);
        const numberOfLivingCells = game.getNumberOfLivingCells(0, 0);
        assert.equal(numberOfLivingCells, 1);
    });

    it('should return 0 if there are no living cells around a position', function () {
        const game = new Game();
        game.addCell(0, 1);
        const numberOfLivingCells = game.getNumberOfLivingCells(10, 10);
        assert.equal(numberOfLivingCells, 0);
    });

    it('should return all living cells around a position', function () {
        const game = new Game();
        game.addCell(0, 1);
        game.addCell(0, 1);
        game.addCell(1, 0);
        game.addCell(1, 1);
        const numberOfLivingCells = game.getNumberOfLivingCells(0, 0);
        assert.equal(numberOfLivingCells, 3);
    });

    describe('Get next state of a position', function () {
        // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
        it('rule#1 - Any live cell with fewer than two live neighbours dies, as if caused by underpopulation', function () {
            const game = new Game();
            game.addCell(0, 1);
            const isAlive = game.getNextState(0, 1);
            assert.equal(isAlive, false);
        });
    });
});