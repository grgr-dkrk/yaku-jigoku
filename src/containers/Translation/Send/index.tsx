import * as React from 'react';
import Button from '~/components/Atoms/Button';
import {
  TranslationContext,
  DispatchTranslationContext,
} from '~/providers/TranslationProvider';
import { ComponentPropTypes } from '~/types';
import { setTranslationResultAction } from '~/providers/TranslationProvider/reducer';
import { Translation } from '~/functions/Translation';

type SendProps = ComponentPropTypes;

const Send: React.FC<SendProps> = props => {
  const state = React.useContext(TranslationContext);
  const dispatch = React.useContext(DispatchTranslationContext);
  const sendTranslation = React.useCallback(async () => {
    if (!state.text) return;
    const data = Translation(state.text);
    dispatch(setTranslationResultAction(data));
  }, [state.text]);
  return (
    <Button className={props.className || ''} handleClick={sendTranslation}>
      翻訳
    </Button>
  );
};

export default Send;
