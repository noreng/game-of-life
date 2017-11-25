const Game = require('./../app/main');
const assert = require('assert');

describe('Game of life', function() {
    it('game should exist', function() {
        assert.ok(Game);
    });

    it('should have no living cell on start', function() {
        const game = new Game();
        assert.equal(game.alives.size, 0);
    });

    it('should be able to add a living cell', function() {
        const game = new Game();
        game.addCell(0,0);
        assert.equal(game.alives.size, 1);
    });

    it('should create keys for position', function() {
        const game = new Game();
        const positionKey = game.getPositionKey(0,0);
        assert.equal(positionKey, '0,0');
    });

    it('should get all neighbour cell position', function() {
        const game = new Game();
        game.addCell(0,0);
        const coords = game.getNeighboursCoords(0,0);
        assert.deepEqual(coords, [
            '-1,-1', '-1,0', '-1,1'
            ,'0,-1','0,1',
            '1,-1','1,0','1,1'
        ]);
    });

    it('should count living cells around a position', function() {
        const game = new Game();
        const numberOfLivingCells = game.getnumberOfLivingCells('0,0');
        assert.equal(numberOfLivingCells, 0);
    });
});