import * as React from 'react';
import { TranslationStateType, TranslationInitialState } from './state';
import { TranslationReducer, TranslationActionTypes } from './reducer';

export const TranslationContext = React.createContext<TranslationStateType>(
  null as any
);
export const DispatchTranslationContext = React.createContext<
  React.Dispatch<TranslationActionTypes>
>(null as any);

const TranslationProvider: React.FC = props => {
  const [state, dispatch] = React.useReducer(
    TranslationReducer,
    TranslationInitialState
  );
  return (
    <TranslationContext.Provider value={state}>
      <DispatchTranslationContext.Provider value={dispatch}>
        {props.children}
      </DispatchTranslationContext.Provider>
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
