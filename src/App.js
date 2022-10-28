import React, { useState, useRef, useCallback, useMemo, } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { MessageNode } from './MessageNode';

import Sidebar from './Sidebar';

import './index.css';
import { Header } from './Layouts/Header/Header';

import { GlobalContext, GlobalState } from './GlobalContext';

const DnDFlow = () => {

  const nodeTypes = useMemo(() => ({ messageNode: MessageNode }), []);

  const initialNodes = [
    {
      id: '1',
      type: 'messageNode',
      data: { label: 'input node' },
      position: { x: 250, y: 5 },
    },
    { id: "2", type: 'messageNode', data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: false },
    { id: "e1-3", source: "1", target: "3" }
  ];

  let id = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getId = () => `dndnode_${id++}`;

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [getId, reactFlowInstance, setNodes]
  );

  return (
    <div className="dndflow">
      <GlobalContext.Provider value={GlobalState}>
        <ReactFlowProvider>
          <Header />
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodeTypes={nodeTypes}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              <Controls />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </GlobalContext.Provider>
    </div>
  );
};

export default DnDFlow;
