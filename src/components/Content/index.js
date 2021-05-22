import React from 'react';

import { CSSContent } from './styles';

function Content(props) {
  return (
    <CSSContent>
      {props.children}
    </CSSContent>
  );
}

export default Content;