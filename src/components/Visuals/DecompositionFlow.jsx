import './DecompositionFlow.css'

export default function DecompositionFlow() {
    return (
        <div className="decomposition-flow">
            {/* Row 1: 4 Bubbles */}
            <div className="decomp-row decomp-row-1">
                <div className="decomp-circle"></div>
                <div className="decomp-circle"></div>
                <div className="decomp-circle"></div>
                <div className="decomp-circle"></div>
            </div>

            {/* Row 2: 2 Bubbles */}
            <div className="decomp-row decomp-row-2">
                <div className="decomp-circle"></div>
                <div className="decomp-circle"></div>
            </div>

            {/* Row 3: 1 Bubble */}
            <div className="decomp-row decomp-row-3">
                <div className="decomp-circle"></div>
            </div>
        </div>
    )
}
