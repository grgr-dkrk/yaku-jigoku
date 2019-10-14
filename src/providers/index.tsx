import * as React from 'react';
import FileProvider from './FileProvider';
import TranslationProvider from './TranslationProvider';

const RootProvider: React.FC = props => {
  return (
    <FileProvider>
      <TranslationProvider>{props.children}</TranslationProvider>
    </FileProvider>
  );
};

export default RootProvider;
