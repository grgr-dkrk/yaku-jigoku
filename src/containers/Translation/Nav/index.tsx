import * as React from 'react';
import { StyledTextAreaNav, StyledSelectNav } from './styles';
import { ComponentPropTypes } from '~/types';
import {
  TranslationContext,
  DispatchTranslationContext,
} from '~/providers/TranslationProvider';
import { setTranslationLevelAction } from '~/providers/TranslationProvider/reducer';
import { LABELS } from '~/constants';

type MainProps = ComponentPropTypes & {};

const TranslationArea: React.FC<MainProps> = props => {
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
      dispatch(setTranslationLevelAction(2));
    },
    [state.level]
  );

  return (
    <StyledTextAreaNav className={props.className || ''}>
      <StyledSelectNav
        handleChange={handleChangeLevel}
        options={(LABELS.LEVEL as unknown) as string[]}
      >
        {LABELS.SELECT}{' '}
      </StyledSelectNav>
    </StyledTextAreaNav>
  );
};

export default TranslationArea;
