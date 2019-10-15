import * as React from 'react';
import { StyledLevelSelector } from './styles';
import { ComponentPropTypes, LevelType } from '~/types';
import {
  TranslationContext,
  DispatchTranslationContext,
} from '~/providers/TranslationProvider';
import {
  setTranslationLevelAction,
  setTranslationResultAction,
} from '~/providers/TranslationProvider/reducer';
import { LABELS } from '~/constants';
import { SetIndexNum } from '~/functions/SetIndexNum';
import { Translation } from '~/functions/Translation';

type MainProps = ComponentPropTypes & {};

const LevelSelector: React.FC<MainProps> = props => {
  /**
   * Contexts
   */
  const state = React.useContext(TranslationContext);
  const dispatch = React.useContext(DispatchTranslationContext);

  /**
   * Event: HandleChange
   */
  const handleChangeLevel = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const level = SetIndexNum(
        (LABELS.LEVEL as unknown) as string[],
        e.target.value
      );
      dispatch(setTranslationLevelAction(level as LevelType));
      if (state.text) {
        const data = Translation(state.text, level as LevelType);
        dispatch(setTranslationResultAction(data));
      }
    },
    [state.level, state.text]
  );

  return (
    <StyledLevelSelector
      className={props.className || ''}
      handleChange={handleChangeLevel}
      options={(LABELS.LEVEL as unknown) as string[]}
    >
      {LABELS.SELECT}{' '}
    </StyledLevelSelector>
  );
};

export default LevelSelector;
