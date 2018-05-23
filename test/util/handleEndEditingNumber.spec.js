import should from 'should';
import handleEndEditingNumber from '../../src/util/handleEndEditingNumber';

describe('handleEndEditingNumber', () => {
    context('when the input value is float', () =>
        it('should return the round value', () => {
            let result = null;
            handleEndEditingNumber(
                {
                    name: 'answer'
                },
                '2.4',
                value => result = value
            );
            result.answer.should.be.Number();
            result.answer.should.be.equal(2.4);
        })
    );

    context('when the input value is number', () =>
        it('should return the input value', () => {
            let result = null;
            handleEndEditingNumber(
                {
                    name: 'answer'
                },
                '2',
                value => result = value
            );
            result.answer.should.be.Number();
            result.answer.should.be.equal(2);
        })
    );

    context('when the input value is an empty string', () =>
        it('should return the input value', () => {
            let result = null;
            handleEndEditingNumber(
                {
                    name: 'answer'
                },
                '',
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        })
    );

    context('when the input value is null', () =>
        it('should return undefined', () => {
            let result = null;
            handleEndEditingNumber(
                {
                    name: 'answer'
                },
                null,
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        })
    );

    context('when the input value is undefined', () =>
        it('should return undefined', () => {
            let result = null;
            handleEndEditingNumber(
                {
                    name: 'answer'
                },
                undefined,
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        })
    );
});
