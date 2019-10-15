import * as React from 'react';
import { StyledTextAreaBox, StyledTextArea } from './styles';
import { ComponentPropTypes } from '~/types';
import {
  TranslationContext,
  DispatchTranslationContext,
} from '~/providers/TranslationProvider';
import {
  setTranslationAction,
  setTranslationResultAction,
} from '~/providers/TranslationProvider/reducer';
import { Translation } from '~/functions/Translation';
import ResetButton from '../ResetButton';
import { LABELS } from '~/constants';
import StringCounter from '../StringCounter';

type MainProps = ComponentPropTypes & {};

const TranslationArea: React.FC<MainProps> = props => {
  /**
   * Contexts
   */
  const state = React.useContext(TranslationContext);
  const dispatch = React.useContext(DispatchTranslationContext);

  /**
   * Event: TranslationChange
   */
  const handleTranslationChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.target.value;
      const data = Translation(text, state.level);
      dispatch(setTranslationAction(text));
      dispatch(setTranslationResultAction(data));
    },
    [state.level]
  );

  return (
    <StyledTextAreaBox className={props.className || ''}>
      <StyledTextArea
        value={state.text}
        handleChange={handleTranslationChange}
        placeholder={LABELS.PLACEHOLDER}
      >
        {state.text && state.text.length && <ResetButton />}
        <StringCounter count={state.text.length} max={500} />
      </StyledTextArea>
      <StyledTextArea
        value={state.result}
        disabled
        handleChange={() => {}}
      ></StyledTextArea>
    </StyledTextAreaBox>
  );
};

export default TranslationArea;
