import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { GraphIsland } from "../islands/Graph.tsx";
import GridIsland from "../islands/Grid.tsx";

import { GraphData, GraphOptions } from "g6";


const data: GraphData = {
  nodes: [
    {
      id: 'node1',
      label: 'node1-group1',
      groupId: 'group1',
      x: 100,
      y: 100
    },
    {
      id: 'node2',
      label: 'node2-group2',
      groupId: 'group1',
      x: 150,
      y: 200
    },
    {
      id: 'node3',
      label: 'node3-group2',
      groupId: 'group2',
      x: 300,
      y: 200
    },
    {
      id: 'node10',
      label: 'node10-p2',
      groupId: 'p2',
      x: 300,
      y: 310
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2'
    },
    {
      source: 'node2',
      target: 'node3'
    },
    {
      source: 'node1',
      target: 'node3'
    },
    {
      source: 'node10',
      target: 'node1'
    }
  ],
  combos: [
    {
      id: 'group1',
      title: {
        text: '我的群组1',
        stroke: '#444',
        offsetX: -20,
        offsetY: 30
      }
    },
    {
      id: 'group2',
      title: {
        text: '群组2',
        stroke: '#444',
        offsetX: -20,
        offsetY: 30
      },
      parentId: 'p2'
    },
    {
      id: 'p2',
      title: '群组3'
    }
  ]
};

export default function Home() {
  const count = useSignal(3);

  const options: GraphOptions = {
    // autoFit: "view",
    behaviors: [ 'drag-canvas', 'drag-group', 'drag-node-with-group', 'collapse-expand-group' ],
    node: {
      style: {
        fill: '#DEE9FF',
        stroke: '#5B8FF9'   
      },
      type: "circle",
    },
    edge: {
        palette: {
          color: '#e2e2e2'
        },
    },
    data,
    layout: {
      type: "circular",
      // center: true
    }
  }

  return <GraphIsland options={options} />

  // return (
  //   <div class="px-4 py-8 mx-auto bg-[#86efac]">
  //     <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
  //       <img
  //         class="my-6"
  //         src="/logo.svg"
  //         width="128"
  //         height="128"
  //         alt="the Fresh logo: a sliced lemon dripping with juice"
  //       />
  //       <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
  //       <p class="my-4">
  //         Try updating this message in the
  //         <code class="mx-2">./routes/index.tsx</code> file, and refresh.
  //       </p>
  //       <Counter count={count} />
  //       <GraphIsland options={options} />
  //       {/* <GridIsland /> */}
  //     </div>
  //   </div>
  // );
}
