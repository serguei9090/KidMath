import './Sidebar.css'

export default function Sidebar({
    mode,
    setMode,
    secondDigits,
    setSecondDigits,
    pageCount,
    setPageCount,
    maxSum100,
    setMaxSum100,
    noNegatives,
    setNoNegatives,
    activeVisuals,
    toggleVisual,
}) {
    const isNoneActive = activeVisuals.length === 0;

    return (
        <aside className="sidebar no-print">
            <div className="control-section">
                <h3>Operation</h3>
                <div className="button-group vertical">
                    <button
                        onClick={() => setMode('add')}
                        className={mode === 'add' ? 'active' : ''}
                    >
                        Addition (+)
                    </button>
                    <button
                        onClick={() => setMode('sub')}
                        className={mode === 'sub' ? 'active' : ''}
                    >
                        Subtraction (-)
                    </button>
                    <button
                        onClick={() => setMode('mix')}
                        className={mode === 'mix' ? 'active' : ''}
                    >
                        Mixed (+/-)
                    </button>
                </div>
            </div>

            <div className="control-section">
                <h3>Difficulty</h3>
                <div className="input-group">
                    <label htmlFor="secondDigits">2nd Number</label>
                    <select
                        id="secondDigits"
                        value={secondDigits}
                        onChange={(e) => setSecondDigits(e.target.value)}
                    >
                        <option value="one">Single Digit (1-9)</option>
                        <option value="two">Double Digit (10-99)</option>
                        <option value="mixed">Mixed (1-99)</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="pageCount">Pages</label>
                    <input
                        type="number"
                        id="pageCount"
                        value={pageCount}
                        onChange={(e) => setPageCount(Number(e.target.value))}
                        min="1"
                        max="50"
                    />
                </div>
            </div>

            <div className="control-section">
                <h3>Math Constraints</h3>
                <div className="toggle-group">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={maxSum100}
                            onChange={(e) => setMaxSum100(e.target.checked)}
                        />
                        <span>Max Sum 100</span>
                    </label>
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={noNegatives}
                            onChange={(e) => setNoNegatives(e.target.checked)}
                        />
                        <span>No Negatives</span>
                    </label>
                </div>
            </div>

            <div className="control-section">
                <h3>Visualization</h3>
                <div className="checkbox-group">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={isNoneActive}
                            onChange={() => toggleVisual('none')}
                        />
                        <span>None</span>
                    </label>
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={activeVisuals.includes('timeline')}
                            onChange={() => toggleVisual('timeline')}
                        />
                        <span>Number Line</span>
                    </label>
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={activeVisuals.includes('decomposition')}
                            onChange={() => toggleVisual('decomposition')}
                        />
                        <span>Decomposition</span>
                    </label>
                </div>
            </div>
        </aside>
    )
}
