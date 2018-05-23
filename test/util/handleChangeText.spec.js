import should from 'should';
import handleChangeText from '../../src/util/handleChangeText';

describe('handleChangeText', () => {
    context('with a valid string answer', () => {
        it('should return a string object', () => {
            let result = 'old answer';
            handleChangeText(
                {
                    name: 'answer'
                },
                'a happy answer',
                value => result = value
            );
            result.answer.should.be.String();
        });

        it('should be equal to the input', () => {
            let result = 'old answer';
            handleChangeText(
                {
                    name: 'answer'
                },
                'a happy answer',
                value => result = value
            );
            result.answer.should.be.String();
            result.answer.should.be.equal('a happy answer');
        });
    });

    context('with a null answer', () => {
        it('should return undefined', () => {
            let result = 'old answer';
            handleChangeText(
                {
                    name: 'answer'
                },
                null,
                value => result = value
            );
            result.should.not.be.undefined();
            should(result.answer).be.undefined();
        });
    });
});


