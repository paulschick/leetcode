export const reverseWords = (s: string): string => {
    const wordsArray = s
        .split(' ')
        .filter((word) => word !== '');

    let start = 0;
    let end = wordsArray.length - 1;
    while (start < end) {
        const s = wordsArray[start];
        wordsArray[start] = wordsArray[end];
        wordsArray[end] = s;
        start++;
        end--;
    }

    return wordsArray.join(' ');
};
