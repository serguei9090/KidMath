import ProblemPanel from './ProblemPanel'
import './Page.css'

export default function Page({ problems, activeVisuals, problemsPerPage }) {
    return (
        <div className="page-container">
            <div className={`worksheet-grid density-${problemsPerPage}`}>
                {problems.map(problem => (
                    <ProblemPanel
                        key={problem.id}
                        problem={problem}
                        activeVisuals={activeVisuals}
                    />
                ))}
            </div>
        </div>
    )
}
