import React, {FunctionComponent} from 'react';

import _R from '../../../R';

const Header: FunctionComponent = () => {
  return (
    <_R.components.HeaderComponent
      leftComponent
      middleComponent
      middleComponentTypeText
      middleComponentText={'Movie List'}
    />
  );
};

export default Header;
