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
      const data = Translation(text);
      dispatch(setTranslationAction(text));
      dispatch(setTranslationResultAction(data));
    },
    []
  );

  return (
    <StyledTextAreaBox className={props.className || ''}>
      <StyledTextArea
        value=""
        handleChange={handleTranslationChange}
        placeholder="テキストを入力してください"
      ></StyledTextArea>
      <StyledTextArea
        value={state.result}
        disabled
        handleChange={() => {}}
      ></StyledTextArea>
    </StyledTextAreaBox>
  );
};

export default TranslationArea;
