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

        it('should get a number instance', () => result.answer.should.be.Number());

        it('should return the input value converted to number', () => result.answer.should.be.equal(2));
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

            it('should call onChange handler', () => result.should.be.not.undefined());

            it('should return the input value converted to number', () => result.answer.should.be.equal(2.3));
        });
    });

    context('when the input value start with dot', () => {
        context('without decimals', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                '.',
                value => result = value
            );

            it('should not call onChange handler', () => should(result).be.undefined());
        });

        context('with decimals after the dot', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                '.3',
                value => result = value
            );

            it('should call onChange handler', () => should(result.answer).be.equal(0.3));
        });
    });

    context('when the input value includes coma', () => {
        context('without decimals', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                ',',
                value => result = value
            );

            it('should not call onChange handler', () => should(result).be.undefined());
        });

        context('with decimals after the coma', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                ',3',
                value => result = value
            );

            it('should not call onChange handler', () => should(result).be.undefined());
        });

        context('with decimals before and after the coma', () => {
            let result;
            handleChangeDecimalNumber(
                {name: 'answer'},
                '4,3',
                value => result = value
            );

            it('should not call onChange handler', () => should(result).be.undefined());
        });
    });
});
