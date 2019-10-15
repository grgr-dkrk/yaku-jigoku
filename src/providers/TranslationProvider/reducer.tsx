/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import { Action } from 'redux';
import { TranslationInitialState, TranslationStateType } from './state';

/**
 * Action Labels
 */
export const SET_TRANSLATION_TEXT = 'SET_TRANSLATION_TEXT' as const;
export const SET_TRANSLATION_RESULT = 'SET_TRANSLATION_RESULT' as const;
export const RESET_TRANSLATION = 'RESET_TRANSLATION' as const;
export const SET_TRANSLATION_LEVEL = 'SET_TRANSLATION_LEVEL' as const;

/**
 * Actions
 */
interface IsetTranslationAction extends Action {
  type: typeof SET_TRANSLATION_TEXT;
  payload: TranslationStateType['text'];
}

export const setTranslationAction = (
  payload: IsetTranslationAction['payload']
): IsetTranslationAction => ({
  type: SET_TRANSLATION_TEXT,
  payload,
});

interface IsetTranslationResultAction extends Action {
  type: typeof SET_TRANSLATION_RESULT;
  payload: TranslationStateType['result'];
}

export const setTranslationResultAction = (
  payload: IsetTranslationResultAction['payload']
): IsetTranslationResultAction => ({
  type: SET_TRANSLATION_RESULT,
  payload,
});

interface IresetTranslationAction extends Action {
  type: typeof RESET_TRANSLATION;
}

export const resetTranslationAction = (): IresetTranslationAction => ({
  type: RESET_TRANSLATION,
});

interface IsetTranslationLevelAction extends Action {
  type: typeof SET_TRANSLATION_LEVEL;
  payload: TranslationStateType['level'];
}

export const setTranslationLevelAction = (
  payload: IsetTranslationLevelAction['payload']
): IsetTranslationLevelAction => ({
  type: SET_TRANSLATION_LEVEL,
  payload,
});

/**
 * Actions Type
 */
export type TranslationActionTypes =
  | IsetTranslationAction
  | IsetTranslationResultAction
  | IresetTranslationAction
  | IsetTranslationLevelAction;

/**
 * Reducer
 */
export function TranslationReducer(
  state = TranslationInitialState,
  action: TranslationActionTypes
): TranslationStateType {
  switch (action.type) {
    case SET_TRANSLATION_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_TRANSLATION_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case RESET_TRANSLATION:
      return {
        ...state,
        text: '',
        result: '',
      };
    case SET_TRANSLATION_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    default:
      const _: never = action;
      return state;
  }
}
