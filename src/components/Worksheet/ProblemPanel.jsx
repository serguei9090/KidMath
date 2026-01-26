import NumberLine from '../Visuals/NumberLine'

export default function ProblemPanel({ problem }) {
    const { num1, num2, sign } = problem;

    return (
        <div className="panel">
            <div className="problem">
                {num1} {sign} {num2} = __
            </div>

            <NumberLine />
        </div>
    )
}
