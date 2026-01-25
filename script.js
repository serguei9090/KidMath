document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('btnAdd');
    const btnSub = document.getElementById('btnSub');
    const btnMix = document.getElementById('btnMix');
    const btnRandomize = document.getElementById('btnRandomize');
    const btnPrint = document.getElementById('btnPrint');
    const secondDigitsSelect = document.getElementById('secondDigits'); // New dropdown
    const worksheetContainer = document.getElementById('worksheet');

    let currentMode = 'add'; // 'add', 'sub', 'mix'

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateProblem(mode) {
        let num1, num2, sign;
        let selectedMode = mode;

        if (mode === 'mix') {
            selectedMode = Math.random() > 0.5 ? 'add' : 'sub';
        }

        // Rule: First number always 2 digits (10-99)
        num1 = getRandomInt(10, 99);

        // Rule: Second number based on dropdown
        const secondOption = secondDigitsSelect.value;
        let min2, max2;

        if (secondOption === 'one') {
            min2 = 1; max2 = 9;
        } else if (secondOption === 'two') {
            min2 = 10; max2 = 99;
        } else {
            min2 = 1; max2 = 99;
        }

        if (selectedMode === 'add') {
            num2 = getRandomInt(min2, Math.min(max2, 99));
            sign = '+';
        } else {
            // Subtraction: Ensure non-negative result
            num2 = getRandomInt(min2, Math.min(max2, num1));
            sign = '-';
        }

        return { num1, num2, sign };
    }

    function renderWorksheet() {
        // We have 4 panels in the HTML. Let's regenerate their content.
        const panels = worksheetContainer.querySelectorAll('.panel');

        panels.forEach((panel, index) => {
            const problemData = generateProblem(currentMode);
            const problemDiv = panel.querySelector('.problem');

            // Format: "24 + 32 = __"
            problemDiv.textContent = `${problemData.num1} ${problemData.sign} ${problemData.num2} = __`;
        });
    }

    function setMode(mode) {
        currentMode = mode;

        // Update UI state
        [btnAdd, btnSub, btnMix].forEach(btn => btn.classList.remove('active'));
        if (mode === 'add') btnAdd.classList.add('active');
        if (mode === 'sub') btnSub.classList.add('active');
        if (mode === 'mix') btnMix.classList.add('active');

        renderWorksheet();
    }

    // Event Listeners
    btnAdd.addEventListener('click', () => setMode('add'));
    btnSub.addEventListener('click', () => setMode('sub'));
    btnMix.addEventListener('click', () => setMode('mix'));
    secondDigitsSelect.addEventListener('change', () => renderWorksheet());

    btnRandomize.addEventListener('click', () => {
        renderWorksheet();
    });

    btnPrint.addEventListener('click', () => {
        globalThis.print();
    });

    // Initial render
    renderWorksheet();
});
