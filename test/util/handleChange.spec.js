import should from 'should';
import handleChange from '../../src/util/handleChange';

describe('handleChange', () => {
    context('when the input value is an empty string', () => {
        let result = null;
        handleChange('answer', '', value => result = value);

        it('should return a String Object', () => {
            result.answer.should.be.String();
        });

        it('should return an empty string', () => {
            result.answer.should.be.equal('');
        });
    });

    context('when the input value is a not empty string', () => {
        let result = null;
        handleChange('answer', 'a happy answer', value => result = value);

        it('should get a String Object', () => {
            result.answer.should.be.String();
        });

        it('should get a new value equals to the input value', () => {
            result.answer.should.be.equal('a happy answer');
        });
    });

    context('when the input value is null', () => {
        let result = null;
        handleChange('answer', null, value => result = value);

        it('should return null', () => {
            result.should.not.be.undefined();
            should(result.answer).be.null();
        });
    });

    context('when the input value is an undefined', () => {
        let result = null;
        handleChange('answer', undefined, value => result = value);

        it('should return undefined', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is an integer', () => {
        let result = null;
        handleChange('answer', 23, value => result = value);

        it('should return the input value number', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(23);
        });
    });
});
