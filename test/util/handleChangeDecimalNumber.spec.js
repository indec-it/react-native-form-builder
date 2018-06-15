import should from 'should';

import handleChangeDecimalNumber from '../../src/util/handleChangeDecimalNumber';

describe('handleChangeDecimalNumber', () => {
    context('when the input value is not a valid decimal string', () => {
        let result;

        it('should get undefined from an empty input', () => {
            handleChangeDecimalNumber(
                {name: 'answer'},
                '',
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });

        it('should get undefined from an undefined input', () => {
            handleChangeDecimalNumber(
                {name: 'answer'},
                undefined,
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is an integer', () => {
        let result;

        handleChangeDecimalNumber(
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

    context('when the input value is a float', () => {
        context('without decimals', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                '2.',
                value => result = value
            );

            it('should not call onChange handler', () => {
                handleChangeDecimalNumber(
                    {name: 'answer'},
                    '2,',
                    value => result = value
                );
                should(result).be.undefined();
            });
        });

        context('with decimals', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                '2.3',
                value => result = value
            );

            it('should call onChange handler', () =>
                result.should.be.not.undefined()
            );

            it('should return the input value converted to number', () => {
                result.answer.should.be.equal(2.3);
            });
        });
    });

    context('when the input value is greater than the min', () => {
        let result = 'old answer';
        handleChangeDecimalNumber(
            {
                name: 'answer',
                min: 1
            },
            '2',
            value => result = value
        );

        it('should return the input value converted to number', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(2);
        });
    });

    context('when the input value is lower than the max', () => {
        let result = 'old answer';
        handleChangeDecimalNumber(
            {name: 'answer', max: 3},
            '2',
            value => result = value
        );

        it('should return the input value converted to number', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(2);
        });
    });

    context('with a number lower than the minimum', () => {
        let result = 'old answer';
        handleChangeDecimalNumber(
            {name: 'answer', min: 10},
            '5',
            value => result = value
        );

        it('should get the min value', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(10);
        });
    });

    context('with a number greater than the maximum', () => {
        let result = 'old answer';
        handleChangeDecimalNumber(
            {name: 'answer', max: 1},
            '2',
            value => result = value
        );

        it('should get a max value', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(1);
        });
    });

    context('when the input value is equals to maximum', () => {
        let result = 'old answer';

        handleChangeDecimalNumber(
            {name: 'answer', max: 1},
            '1',
            value => result = value
        );

        it('should get the max value', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(1);
        });
    });

    context('when the input value is equals to minimum', () => {
        let result = 'old answer';

        handleChangeDecimalNumber(
            {
                name: 'answer',
                min: 1
            },
            '1',
            value => result = value
        );

        it('should get the min value', () => {
            result.answer.should.be.Number();
            result.answer.should.be.equal(1);
        });
    });

    context('when the input allows zero and value is equals to 0', () => {
        let result = 'old answer';
        handleChangeDecimalNumber(
            {name: 'answer', allowZero: true},
            '0',
            value => result = value
        );

        it('should get a number', () =>
            result.answer.should.be.Number()
        );

        it('should get 0', () => {
            result.answer.should.be.equal(0);
        });
    });
});
