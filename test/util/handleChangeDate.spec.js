import should from 'should';
import handleChangeDate from '../../src/util/handleChangeDate';

const dateFormat = 'DD/MM/YYYY HH:mm';

describe('handleChangeDate', () => {
    context('when the input value is a string date', () => {
        let result = 'old answer';
        handleChangeDate(
            'answer',
            '15/12/1995 03:24',
            dateFormat,
            value => result = value
        );

        it('should return a Date Object', () => {
            result.should.not.be.undefined();
            result.answer.should.be.Date();
        });

        it('should return the input value converted to date', () => {
            result.should.not.be.undefined();
            result.answer.should.be.eql(new Date(1995, 11, 15, 3, 24));
        });
    });

    context('when the input value is an invalid string date', () =>
        it('should return undefined', () => {
            let result = 'old answer';
            handleChangeDate(
                'answer',
                'stringAnswer',
                dateFormat,
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        })
    );

    context('when the input value is null', () => {
        let result = 'old answer';
        handleChangeDate(
            'answer',
            null,
            dateFormat,
            value => result = value
        );

        it('should return undefined', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });

    context('when the input value is undefined', () => {
        let result = 'old answer';
        handleChangeDate(
            'answer',
            undefined,
            dateFormat,
            value => result = value
        );

        it('should be undefined', () => {
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });
});
