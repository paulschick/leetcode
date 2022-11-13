export type ReverseTestCase = {
    input: string;
    output: string;
};

const testStrings = {
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

class SentenceReverse {
    private static _reverse(sentence: string): void {
        const wordsArray = sentence
            .split(' ')
            .filter((word) => word !== '');

        let start = 0;
        let end = wordsArray.length - 1;
        while (start < end) {
            const s = wordsArray[start];
            wordsArray[start] = wordsArray[end];
            wordsArray[end] = s;
            start ++;
            end --;
        }

        // console.log(wordsArray);
        console.log(wordsArray.join(' '));
    }

    public static reverse(testCase: ReverseTestCase): void {
        const {input, output} = testCase;
        console.log(input);
        console.log(`expected output: "${output}"`);
        SentenceReverse._reverse(input);
    }
}

export const reverseWords = (s: string): string => {
    return s;
};

SentenceReverse.reverse(testStrings.test1);
SentenceReverse.reverse(testStrings.test2);
SentenceReverse.reverse(testStrings.test3);
