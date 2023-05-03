const num = require('./exercicio');

describe('Quesito 1', () => {
    it('A func true', () => {
        expect(true).toEqual(num([1, 2, 3, 4, 5]));
    });
});