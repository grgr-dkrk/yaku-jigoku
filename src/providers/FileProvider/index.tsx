import * as React from 'react';
import { FileStateType, FileInitialState } from './state';
import { FileReducer, FileActionTypes } from './reducer';

export const FileContext = React.createContext<FileStateType>(null as any);
export const DispatchFileContext = React.createContext<
  React.Dispatch<FileActionTypes>
>(null as any);

const FileProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(FileReducer, FileInitialState);
  return (
    <FileContext.Provider value={state}>
      <DispatchFileContext.Provider value={dispatch}>
        {props.children}
      </DispatchFileContext.Provider>
    </FileContext.Provider>
  );
};

export default FileProvider;
