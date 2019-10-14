import * as React from 'react';
import { StyledFileSelector, StyledFileSelectorWrap } from './styles';
import { ComponentPropTypes } from '~/types';

type FileSelectorProps = ComponentPropTypes & {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileSelector: React.FC<FileSelectorProps> = props => {
  return (
    <StyledFileSelectorWrap className={props.className || ''}>
      <StyledFileSelector type="file" accept=".jpg,.png" onChange={props.handleChange} />
    </StyledFileSelectorWrap>
  );
};

export default FileSelector;
