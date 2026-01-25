const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.getElementById('btnAdd');
    const btnSub = document.getElementById('btnSub');
    const btnMix = document.getElementById('btnMix');
    const btnRandomize = document.getElementById('btnRandomize');
    const btnPrint = document.getElementById('btnPrint');
    const secondDigitsSelect = document.getElementById('secondDigits');
    const pageCountInput = document.getElementById('pageCount');
    const pagesContainer = document.getElementById('pages-container');

    let currentMode = 'add'; // 'add', 'sub', 'mix'

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

    function createPage() {
        const pageContainer = document.createElement('div');
        pageContainer.className = 'page-container';

        const grid = document.createElement('div');
        grid.className = 'worksheet-grid';

        for (let i = 0; i < 4; i++) {
            const problemData = generateProblem(currentMode);
            const panel = document.createElement('div');
            panel.className = 'panel';

            const problemDiv = document.createElement('div');
            problemDiv.className = 'problem';
            problemDiv.textContent = `${problemData.num1} ${problemData.sign} ${problemData.num2} = __`;

            const numberLine = document.createElement('div');
            numberLine.className = 'number-line';
            numberLine.innerHTML = `
                <div class="arrow-left"></div>
                <div class="line"></div>
                <div class="arrow-right"></div>
            `;

            panel.appendChild(problemDiv);
            panel.appendChild(numberLine);
            grid.appendChild(panel);
        }

        pageContainer.appendChild(grid);
        return pageContainer;
    }

    function renderWorksheet() {
        pagesContainer.innerHTML = '';
        const count = Number.parseInt(pageCountInput.value, 10) || 1;
        const safeCount = Math.min(Math.max(count, 1), 50);

        for (let i = 0; i < safeCount; i++) {
            pagesContainer.appendChild(createPage());
        }
    }

    function setMode(mode) {
        currentMode = mode;
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
    pageCountInput.addEventListener('change', () => renderWorksheet());

    btnRandomize.addEventListener('click', () => {
        renderWorksheet();
    });

    btnPrint.addEventListener('click', () => {
        globalThis.print();
    });

    // Initial render
    renderWorksheet();
});
