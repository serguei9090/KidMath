import './Navbar.css'

export default function Navbar({ onRandomize, onPrint }) {
    return (
        <nav className="top-nav no-print">
            <div className="logo">KidMath</div>
            <div className="nav-actions">
                <button onClick={onRandomize} className="primary">
                    <span className="icon">↻</span> Randomize
                </button>
                <button onClick={onPrint} className="secondary">
                    Print
                </button>
            </div>
        </nav>
    )
}
