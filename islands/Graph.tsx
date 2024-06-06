import {
  Graph as G6Graph,
  GraphOptions,
} from "g6";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";


export interface GraphProps {
  options: GraphOptions;
  onRender?: (graph: G6Graph) => void;
  onDestroy?: () => void;
}

export const GraphIsland = (props: GraphProps) => {
  const { options, onRender, onDestroy } = props;
  const graphRef = useRef<G6Graph>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = new G6Graph({ container: containerRef.current! });
    graphRef.current = graph;

    return () => {
      const graph = graphRef.current;
      if (graph) {
        graph.destroy();
        onDestroy?.();
        graphRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const graph = graphRef.current;

    if (!options || !container || !graph || graph.destroyed) return;

    graph.setOptions(options);
    graph
      .render()
      .then(() => onRender?.(graph))
      .catch((error) => console.debug(error));
  }, [options]);

  if (IS_BROWSER) {
    return <div>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>;
  }
  else {
    return <div></div>
  }
};
