import NumberLine from '../Visuals/NumberLine'
import DecompositionDiagram from '../Visuals/DecompositionDiagram'

export default function ProblemPanel({ problem, activeVisuals }) {
    const { num1, num2, sign } = problem;

    return (
        <div className="panel">
            <div className="problem">
                {num1} {sign} {num2} = __
            </div>

            <div className="visual-container">
                {activeVisuals && activeVisuals.includes('decomposition') && <DecompositionDiagram />}
                {activeVisuals && activeVisuals.includes('timeline') && <NumberLine />}
            </div>
        </div>
    )
}
