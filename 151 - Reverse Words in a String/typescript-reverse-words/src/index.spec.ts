import { reverseWords } from './index';

describe('reverse-words', () => {
    let testStrings: {input: string, output: string}[];

    beforeEach(() => {
        testStrings = [
            {
                input: 'the sky is blue',
                output: 'blue is sky the',
            },
            {
                input: '  hello world ',
                output: 'world hello',
            },
            {
                input: 'a good   example',
                output: 'example good a',
            }
        ];
    });

    it('should handle all test cases', () => {
        testStrings.forEach((obj) => {
            const result = reverseWords(obj.input);
            expect(result).toEqual(obj.output);
        });
    });
    it('should solve a random test case', () => {
        const input = 'Hello    world how    are you';
        const expected = 'you are how world Hello';
        expect(reverseWords(input)).toEqual(expected);
    });
});