import './DecompositionFlow.css'

export default function DecompositionFlow({ num1, num2, sign }) {
    if (sign !== '+' || num1 < 10 || num2 < 10) {
        return (
            <div className="decomposition-flow">
                <div className="decomp-problem-label">{num1} {sign} {num2}</div>
                <div className="decomp-note">(Decomposition works best with 2-digit addition)</div>
            </div>
        )
    }

    const tens1 = Math.floor(num1 / 10) * 10;
    const ones1 = num1 % 10;
    const tens2 = Math.floor(num2 / 10) * 10;
    const ones2 = num2 % 10;

    const tensSum = tens1 + tens2;
    const onesSum = ones1 + ones2;
    const finalSum = tensSum + (onesSum > 9 ? onesSum : onesSum); // Just calculation logic

    return (
        <div className="decomposition-flow">
            <div className="decomp-problem-label">{num1} {sign} {num2}</div>

            <div className="decomp-row decomp-row-1">
                <div className="decomp-circle">{tens1}</div>
                <div className="decomp-circle">{ones1}</div>
                <div className="decomp-circle">{tens2}</div>
                <div className="decomp-circle">{ones2}</div>
            </div>

            <div className="decomp-row decomp-row-2">
                <div className="decomp-circle">{tensSum}</div>
                <div className="decomp-circle">{onesSum}</div>
            </div>

            <div className="decomp-row decomp-row-3">
                <div className="decomp-circle">{tensSum + onesSum}</div>
            </div>
        </div>
    )
}
