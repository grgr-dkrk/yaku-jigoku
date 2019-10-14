import { Action } from 'redux';
import { ReadFileType } from '~/types';
import { FileInitialState, FileStateType } from './state';

export const SET_FILE = 'SET FILE' as const;

interface IsetFileAction extends Action {
  type: typeof SET_FILE;
  payload: ReadFileType;
}

export const setFileAction = (
  payload: IsetFileAction['payload']
): IsetFileAction => ({
  type: SET_FILE,
  payload,
});

export type FileActionTypes = IsetFileAction;

export function FileReducer(
  state = FileInitialState,
  action: FileActionTypes
): FileStateType {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
      };
    default:
      return state;
  }
}
