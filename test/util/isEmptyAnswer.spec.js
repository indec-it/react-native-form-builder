import isEmptyAnswer from '../../src/util/isEmptyAnswer';

const parsedAnswer = 'answer';

describe('isEmptyAnswer', () => {
    context('when the input value is null', () =>
        it('should return true', () => {
            const result = isEmptyAnswer(
                {
                    allowZero: true,
                    answer: null,
                    parsedAnswer: 'answer'
                }
            );
            result.should.be.true;
        })
    );

    context('when the flag allowZero is disabled', () => {
        context('and parsed answer is equals to 0', () =>
            it('should return true', () => {
                const result = isEmptyAnswer(
                    {
                        allowZero: false,
                        answer: 'answer',
                        parsedAnswer: 0
                    }
                );
                result.should.be.true;
            })
        );

        context('and parsed answer is greather than 0', () =>
            it('should return false', () => {
                const result = isEmptyAnswer(
                    {
                        allowZero: false,
                        answer: 'answer',
                        parsedAnswer: 5
                    }
                );
                result.should.be.false;
            })
        );
    });

    context('when the flag allowZero is enabled', () =>
        it('should return true for an empty answer', () => {
            const result = isEmptyAnswer(
                {
                    allowZero: true,
                    answer: '',
                    parsedAnswer
                }
            );
            result.should.be.true;
        })
    );
});
