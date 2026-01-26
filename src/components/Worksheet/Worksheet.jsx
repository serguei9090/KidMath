import { useMemo } from 'react'
import { generateProblem } from '../../utils/mathGenerator'
import Page from './Page'

export default function Worksheet({ config, pageCount, activeVisuals, seed }) {
    const safeCount = Math.min(Math.max(pageCount, 1), 50);

    // Determine problems per page based on active visuals
    const problemsPerPage = useMemo(() => {
        if (activeVisuals.length === 2) return 2; // Both
        if (activeVisuals.length === 1) return 4; // One visual
        return 8; // None
    }, [activeVisuals]);

    const pages = useMemo(() => {
        const result = [];
        for (let i = 0; i < safeCount; i++) {
            const problems = [];
            for (let j = 0; j < problemsPerPage; j++) {
                problems.push(generateProblem(config));
            }
            result.push({ id: `${seed}-${i}`, problems });
        }
        return result;
    }, [config, safeCount, seed, problemsPerPage]);

    return (
        <div id="pages-container">
            {pages.map(page => (
                <Page
                    key={page.id}
                    problems={page.problems}
                    activeVisuals={activeVisuals}
                    problemsPerPage={problemsPerPage}
                />
            ))}
        </div>
    )
}
