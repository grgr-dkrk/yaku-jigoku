import { LevelType } from '~/types';

export type TranslationStateType = {
  text: string;
  result: string;
  level: LevelType;
};

export const TranslationInitialState: TranslationStateType = {
  text: '',
  result: '',
  level: 0,
};
