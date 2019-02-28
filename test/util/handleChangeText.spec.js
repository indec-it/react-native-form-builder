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

    context('with an answer including emojis', () => {
        it('should sanitize it by default', () => {
            let result = '';
            handleChangeText(
                {
                    name: 'answer'
                },
                'answer with \ud83c\udff4',
                value => result = value
            );
            result.answer.should.be.String();
            result.answer.should.be.equal('answer with ');
        });
        it('should not sanitize it if allowEmojis is set to true', () => {
            let result = '';
            handleChangeText(
                {
                    name: 'answer',
                    allowEmojis: true
                },
                'answer with \ud83c\udff4',
                value => result = value
            );
            result.answer.should.be.String();
            result.answer.should.be.equal('answer with \ud83c\udff4');
        });
    });
});


