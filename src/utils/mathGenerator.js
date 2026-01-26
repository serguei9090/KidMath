const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function generateProblem(config) {
    const { mode, secondDigits, maxSum100, noNegatives } = config;

    let num1, num2, sign;
    let selectedMode = mode;

    if (mode === 'mix') {
        selectedMode = Math.random() > 0.5 ? 'add' : 'sub';
    }

    // Retry loop to ensure constraints are met
    for (let attempt = 0; attempt < 50; attempt++) {
        num1 = getRandomInt(10, 99);

        let min2, max2;
        if (secondDigits === 'one') {
            min2 = 1; max2 = 9;
        } else if (secondDigits === 'two') {
            min2 = 10; max2 = 99;
        } else {
            min2 = 1; max2 = 99;
        }

        if (selectedMode === 'add') {
            sign = '+';

            if (maxSum100) {
                let localMax = 100 - num1;
                if (localMax < min2) continue;
                num2 = getRandomInt(min2, Math.min(max2, localMax));
            } else {
                num2 = getRandomInt(min2, Math.min(max2, 99));
            }
        } else {
            sign = '-';

            if (noNegatives) {
                if (num1 < min2) continue;
                num2 = getRandomInt(min2, Math.min(max2, num1));
            } else {
                num2 = getRandomInt(min2, Math.min(max2, 99));
            }
        }

        return { num1, num2, sign, id: Math.random() };
    }

    // Safe fallback
    return { num1: 20, num2: 5, sign: selectedMode === 'add' ? '+' : '-', id: Math.random() };
}
