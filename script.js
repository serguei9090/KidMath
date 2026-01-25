document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('btnAdd');
    const btnSub = document.getElementById('btnSub');
    const btnMix = document.getElementById('btnMix');
    const btnRandomize = document.getElementById('btnRandomize');
    const btnPrint = document.getElementById('btnPrint');
    const worksheetContainer = document.getElementById('worksheet');

    let currentMode = 'add'; // 'add', 'sub', 'mix'

    // Configuration for random numbers
    const MAX_SUM = 100; // Limits addition problems to sum <= 100
    const MIN_NUM = 1;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateProblem(mode) {
        let num1, num2, sign;
        let selectedMode = mode;

        if (mode === 'mix') {
            selectedMode = Math.random() > 0.5 ? 'add' : 'sub';
        }

        if (selectedMode === 'add') {
            // Ensure sum <= MAX_SUM
            num1 = getRandomInt(MIN_NUM, MAX_SUM - MIN_NUM);
            num2 = getRandomInt(MIN_NUM, MAX_SUM - num1);
            sign = '+';
        } else {
            // Subtraction: Ensure non-negative result
            num1 = getRandomInt(MIN_NUM, MAX_SUM);
            num2 = getRandomInt(MIN_NUM, num1);
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

    btnRandomize.addEventListener('click', () => {
        renderWorksheet();
    });

    btnPrint.addEventListener('click', () => {
        window.print();
    });

    // Initial render
    renderWorksheet();
});
