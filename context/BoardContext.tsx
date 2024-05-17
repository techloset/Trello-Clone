// import { createContext } from "react";

// interface BoardContextType {
//   allboard: any;
//   setAllBoard: React.Dispatch<React.SetStateAction<any>>;
// }

// export const BoardContext = createContext<BoardContextType>({
//   allboard: null,
//   setAllBoard: () => {},
// });

import { createContext, useState, FC, ReactNode } from "react";

// Define the context type
interface Board {
  name: string;
  bgcolor: string;
  list: any[];
}

interface BoardContextType {
  allboard: {
    active: number;
    boards: Board[];
  };
  setAllBoard: React.Dispatch<
    React.SetStateAction<{
      active: number;
      boards: Board[];
    }>
  >;
}

// Initialize the context with default values
const initialBoardState: BoardContextType = {
  allboard: {
    active: 0,
    boards: [],
  },
  setAllBoard: () => {},
};

export const BoardContext = createContext<BoardContextType>(initialBoardState);

// Create a provider component
export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [allboard, setAllBoard] = useState(initialBoardState.allboard);

  return (
    <BoardContext.Provider value={{ allboard, setAllBoard }}>
      {children}
    </BoardContext.Provider>
  );
};
