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

    context('when the input value is over min', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                min: 1
            },
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

    context('when the input value is under max', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                max: 3
            },
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

    context('when the input value is over of a max number', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                max: 3
            },
            '5',
            value => result = value
        );

        it('should get a number instance', () =>
            result.answer.should.be.Number()
        );

        it('should return a max value', () =>
            result.answer.should.be.equal(3)
        );
    });

    context('when the input value is under of a min number', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                min: 3
            },
            '2',
            value => result = value
        );

        it('should get a number instance', () =>
            result.answer.should.be.Number()
        );

        it('should return a min value', () =>
            result.answer.should.be.equal(3)
        );
    });

    context('when the input value is the same of a max number', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                max: 1
            },
            '1',
            value => result = value
        );

        it('should get a number instance', () =>
            result.answer.should.be.Number()
        );

        it('should get a max value', () =>
            result.answer.should.be.equal(1)
        );
    });

    context('when the input value is the same of a min number', () => {
        let result = 'old answer';
        handleChangeIntNumber(
            {
                name: 'answer',
                min: 1
            },
            '1',
            value => result = value
        );

        it('should get a number instance', () =>
            result.answer.should.be.Number()
        );

        it('should get a min value', () =>
            result.answer.should.be.equal(1)
        );
    });
});
