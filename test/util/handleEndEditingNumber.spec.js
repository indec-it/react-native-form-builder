import should from 'should';
import handleEndEditingNumber from '../../src/util/handleEndEditingNumber';

describe('handleEndEditingNumber', () => {
    context('when the input value is float', () => {
        let result = null;
        handleEndEditingNumber(
            {name: 'answer'},
            '2.4',
            value => result = value
        );

        it('should return the round value', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(2.4);
        });
    });

    context('when the input value is number', () => {
        let result = null;
        handleEndEditingNumber(
            {name: 'answer'},
            '2',
            value => result = value
        );

        it('should return the input value', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(2);
        });
    });

    context('when the input value is an empty string', () => {
        let result = null;
        handleEndEditingNumber(
            {name: 'answer'},
            '',
            value => result = value
        );

        it('should return the input value', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is null', () => {
        let result = null;
        handleEndEditingNumber(
            {name: 'answer'},
            null,
            value => result = value
        );

        it('should return undefined', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is undefined', () => {
        let result = null;
        handleEndEditingNumber(
            {name: 'answer'},
            undefined,
            value => result = value
        );

        it('should return undefined', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when question has min', () => {
        context('when the input value is lower than min', () => {
            let result = null;
            handleEndEditingNumber(
                {name: 'answer', min: 5},
                '1',
                value => result = value
            );

            it('should return the min value', () => should(result.answer).be.Number() && should(result.answer).be.equal(5));
        });

        context('when the input value is equals to min', () => {
            let result = null;
            handleEndEditingNumber(
                {name: 'answer', min: 5},
                '5',
                value => result = value
            );

            it('should return the min value', () => should(result.answer).be.Number() && should(result.answer).be.equal(5));
        });
    });

    context('when question has max', () => {
        context('when the input value is equals to max', () => {
            let result = null;
            handleEndEditingNumber(
                {name: 'answer', max: 7},
                '7',
                value => result = value
            );

            it('should return the max value', () => should(result.answer).be.Number() && should(result.answer).be.equal(7));
        });

        context('when the input value is greater than max', () => {
            let result = null;
            handleEndEditingNumber(
                {name: 'answer', max: 7},
                '9',
                value => result = value
            );

            it('should return the max value', () => should(result.answer).be.Number() && should(result.answer).be.equal(7));
        });
    });

    context('when the input value is zero', () => {
        context('when question allow zero', () => {
            let result = null;
            handleEndEditingNumber(
                {name: 'answer', allowZero: true},
                '0',
                value => result = value
            );

            it('should return zero as value', () => should(result.answer).be.Number() && should(result.answer).be.equal(0));
        });

        context('when question not allow zero', () => {
            let result = null;
            handleEndEditingNumber(
                {name: 'answer', allowZero: false},
                '0',
                value => result = value
            );

            it('should return undefined as value', () => should(result.answer).be.undefined());
        });
    });
});
