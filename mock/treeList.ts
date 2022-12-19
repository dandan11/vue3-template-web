import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/getTreeList",
    method: "post",
    response: () => {
      interface Tree {
      id: string;
      label: string;
      children?: Tree[];
    }

    const getKey = (prefix: string, id: number) => {
      return `${prefix}-${id}`;
    };

    const createData = (
      maxDeep: number,
      maxChildren: number,
      minNodesNumber: number,
      deep = 1,
      key = "node"
    ): Tree[] => {
      let id = 0;
      return Array.from({ length: minNodesNumber })
        .fill(deep)
        .map(() => {
          const childrenNumber =
            deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
          const nodeKey = getKey(key, ++id);
          return {
            id: nodeKey,
            label: nodeKey,
            children: childrenNumber
              ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
              : undefined
          };
        });
    };
    const data = createData(2, 10, 40);
      return {
        success: true,
        data: {
          list: data
        }
      };
    }
  }
] as MockMethod[];
