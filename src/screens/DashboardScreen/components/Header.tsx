import React, {FunctionComponent} from 'react';

import _R from '../../../R';

const Header: FunctionComponent = () => {
  return (
    <_R.components.HeaderComponent
      middleComponent
      middleComponentTypeText
      middleComponentText={'Dashboard'}
    />
  );
};

export default Header;
