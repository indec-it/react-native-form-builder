import getInputValue from '../../src/util/getInputValue';

describe('getInputValue', () => {
    context('when the input value is a not empty string', () => {
        const result = getInputValue('answer');

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return the input value', () =>
            result.should.be.equal('answer')
        );
    });

    context('when the input value is an empty string', () => {
        const result = getInputValue('');

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return an empty string', () =>
            result.should.be.equal('')
        );
    });

    context('when the input value is an integer', () => {
        const result = getInputValue(35);

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return the input value converted to string', () =>
            result.should.be.equal('35')
        );
    });

    context('when the input value is a float', () => {
        const result = getInputValue(8.4);

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return the input value converted to string', () =>
            result.should.be.equal('8.4')
        );
    });

    context('and the input value is null', () => {
        const result = getInputValue(null);

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return an empty string', () =>
            result.should.be.equal('')
        );
    });

    context('when the input value is undefined', () => {
        const result = getInputValue(undefined);

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return an empty string ', () =>
            result.should.be.equal('')
        );
    });

    context('when the input value is NaN', () => {
        const result = getInputValue(NaN);

        it('should return a String Object', () =>
            result.should.be.String()
        );

        it('should return an empty string ', () =>
            result.should.be.equal('')
        );
    });
});
