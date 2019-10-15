import * as React from 'react';
import { StyledButton } from './styles';
import { ComponentPropTypes } from '~/types';
import { resetTranslationAction } from '~/providers/TranslationProvider/reducer';
import { LABELS } from '~/constants';
import { DispatchTranslationContext } from '~/providers/TranslationProvider';

type ResetButtonProps = ComponentPropTypes & {};

const ResetButton: React.FC<ResetButtonProps> = props => {
  /**
   * Contexts
   */
  const dispatch = React.useContext(DispatchTranslationContext);

  /**
   * Event: Reset
   */
  const handleReset = React.useCallback(() => {
    dispatch(resetTranslationAction());
  }, []);

  return (
    <StyledButton
      className={props.className || ''}
      ariaLabel={LABELS.RESET}
      handleClick={handleReset}
    />
  );
};

export default ResetButton;
