import { useState, useCallback } from 'react'
import './App.css'
import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import Worksheet from './components/Worksheet/Worksheet'

function App() {
    const [mode, setMode] = useState('add');
    const [secondDigits, setSecondDigits] = useState('mixed');
    const [pageCount, setPageCount] = useState(1);
    const [maxSum100, setMaxSum100] = useState(true);
    const [noNegatives, setNoNegatives] = useState(true);
    const [activeVisuals, setActiveVisuals] = useState(['timeline']);
    const [seed, setSeed] = useState(0);

    const handleRandomize = useCallback(() => {
        setSeed(prev => prev + 1);
    }, []);

    const handlePrint = useCallback(() => {
        window.print();
    }, []);

    const toggleVisual = (visual) => {
        if (visual === 'none') {
            setActiveVisuals([]);
        } else {
            setActiveVisuals(prev => {
                if (prev.includes(visual)) {
                    return prev.filter(v => v !== visual);
                } else {
                    return [...prev, visual];
                }
            });
        }
    };

    const config = {
        mode,
        secondDigits,
        maxSum100,
        noNegatives,
    };

    const isDebug = import.meta.env.VITE_DEBUG_PRINT === 'true';

    return (
        <div className={`app ${isDebug ? 'debug-print' : ''}`}>
            <Navbar onRandomize={handleRandomize} onPrint={handlePrint} />

            <div className="app-container">
                <Sidebar
                    mode={mode}
                    setMode={setMode}
                    secondDigits={secondDigits}
                    setSecondDigits={setSecondDigits}
                    pageCount={pageCount}
                    setPageCount={setPageCount}
                    maxSum100={maxSum100}
                    setMaxSum100={setMaxSum100}
                    noNegatives={noNegatives}
                    setNoNegatives={setNoNegatives}
                    activeVisuals={activeVisuals}
                    toggleVisual={toggleVisual}
                />

                <main className="content-area">
                    <Worksheet
                        config={config}
                        pageCount={pageCount}
                        activeVisuals={activeVisuals}
                        seed={seed}
                    />
                </main>
            </div>
        </div>
    )
}

export default App
