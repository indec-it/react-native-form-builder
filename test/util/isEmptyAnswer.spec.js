import isEmptyNumberAnswer from '../../src/util/isEmptyNumberAnswer';

const parsedAnswer = 'answer';

describe('isEmptyNumberAnswer', () => {
    context('when the input value is null', () =>
        it('should return true', () => {
            const result = isEmptyNumberAnswer(
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
                const result = isEmptyNumberAnswer(
                    {
                        allowZero: false,
                        answer: 'answer',
                        parsedAnswer: 0
                    }
                );
                result.should.be.true;
            })
        );

        context('and parsed answer is greater than 0', () =>
            it('should return false', () => {
                const result = isEmptyNumberAnswer(
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
            const result = isEmptyNumberAnswer(
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
