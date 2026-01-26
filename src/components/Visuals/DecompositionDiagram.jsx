import { ReactFlow, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './DecompositionDiagram.css';

// Custom Node component to allow specific connection angles on the circular bubble
const BubbleNode = ({ data }) => {
    return (
        <div className="bubble-node">
            {data.label}
            {/* Target handles at 9 and 3 o'clock positions */}
            <Handle
                type="target"
                position={Position.Left}
                id="t-left"
                style={{ top: '50%', background: 'transparent', border: 'none' }}
            />
            <Handle
                type="target"
                position={Position.Right}
                id="t-right"
                style={{ top: '50%', background: 'transparent', border: 'none' }}
            />

            {/* Source handle at bottom center for outgoing lines */}
            <Handle
                type="source"
                position={Position.Bottom}
                id="s-center"
                style={{ left: '50%', background: 'transparent', border: 'none' }}
            />
        </div>
    );
};

const nodeTypes = {
    bubble: BubbleNode,
};

const initialNodes = [
    // Row 1 (Top)
    { id: '1', position: { x: -50, y: 0 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },
    { id: '2', position: { x: 100, y: 0 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },
    { id: '3', position: { x: 250, y: 0 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },
    { id: '4', position: { x: 400, y: 0 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },

    // Row 2 (Middle) - Tighter Y gap (90)
    { id: '5', position: { x: 25, y: 90 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },
    { id: '6', position: { x: 325, y: 90 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },

    // Row 3 (Bottom) - Tighter Y gap (180 total)
    { id: '7', position: { x: 175, y: 180 }, data: { label: '' }, type: 'bubble', className: 'bubble-node' },
];

const initialEdges = [
    // Left side flow
    { id: 'e1-5', source: '1', target: '5', sourceHandle: 's-center', targetHandle: 't-left', type: 'straight' },
    { id: 'e2-5', source: '2', target: '5', sourceHandle: 's-center', targetHandle: 't-right', type: 'straight' },

    // Right side flow
    { id: 'e3-6', source: '3', target: '6', sourceHandle: 's-center', targetHandle: 't-left', type: 'straight' },
    { id: 'e4-6', source: '4', target: '6', sourceHandle: 's-center', targetHandle: 't-right', type: 'straight' },

    // Bottom flow
    { id: 'e5-7', source: '5', target: '7', sourceHandle: 's-center', targetHandle: 't-left', type: 'straight' },
    { id: 'e6-7', source: '6', target: '7', sourceHandle: 's-center', targetHandle: 't-right', type: 'straight' },
];

export default function DecompositionDiagram() {
    return (
        <div className="decomposition-diagram">
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                nodesDraggable={false}
                zoomOnScroll={false}
                panOnDrag={false}
                panOnScroll={false}
                preventScrolling={false}
                elementsSelectable={false}
                nodesConnectable={false}
                proOptions={{ hideAttribution: true }}
                fitView
                fitViewOptions={{ padding: 0.05 }}
            />
        </div>
    );
}
