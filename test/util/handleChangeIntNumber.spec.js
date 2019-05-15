import should from 'should';
import handleChangeIntNumber from '../../src/util/handleChangeIntNumber';

describe('handleChangeIntNumber', () => {
    context('when the input value is an empty string', () => {
        let result = 'old answer';

        handleChangeIntNumber(
            {name: 'answer'},
            '',
            value => result = value
        );

        it('should return an undefined number', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is undefined', () => {
        let result = 'old answer';

        handleChangeIntNumber(
            {name: 'answer'},
            undefined,
            value => result = value
        );

        it('should return an undefined answer', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is null', () => {
        let result = 'old answer';

        handleChangeIntNumber(
            {name: 'answer', allowZero: true},
            null,
            value => result = value
        );

        it('should change a number', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is an integer', () => {
        let result = 'old answer';

        handleChangeIntNumber(
            {name: 'answer'},
            '2',
            value => result = value
        );

        it('should get a number instance', () =>
            result.answer.should.be.Number()
        );

        it('should return the input value converted to number', () =>
            result.answer.should.be.equal(2)
        );
    });

    context('with a zero answer', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                allowZero: true
            },
            '0',
            value => result = value
        );

        it('should change a zero number', () =>
            result.answer.should.be.Number()
        );
    });
});
