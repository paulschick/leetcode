import { ReverseTestCase, reverseWords } from './index';

type TestStrings = {
    [key: string]: ReverseTestCase;
};

describe('reverse-words', () => {
    let testStrings: TestStrings;

    beforeEach(() => {
        testStrings = {
            test1: {
                input: 'the sky is blue',
                output: 'blue is sky the',
            },
            test2: {
                input: '  hello world ',
                output: 'world hello',
            },
            test3: {
                input: 'a good   example',
                output: 'example good a',
            }
        };
    });

    it('should reverse test case 1', () => {
        const testCase: ReverseTestCase = testStrings['test1'];
        const result = reverseWords(testCase.input);
        expect(result).toEqual(testCase.output);
    });

    it('should reverse test case 2', () => {
        const testCase: ReverseTestCase = testStrings['test2'];
        const result = reverseWords(testCase.input);
        expect(result).toEqual(testCase.output);
    });

    it('should reverse test case 3', () => {
        const testCase: ReverseTestCase = testStrings['test3'];
        const result = reverseWords(testCase.input);
        expect(result).toEqual(testCase.output);
    });
});