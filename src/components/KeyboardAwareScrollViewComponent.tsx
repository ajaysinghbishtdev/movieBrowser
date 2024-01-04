import React, {FunctionComponent} from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface IKeyboardAwareScrollViewProps {
  keyboardAwareScrollViewStyle?: any;
  children: React.ReactNode;
}

const KeyboardAwareScrollViewComponent: FunctionComponent<
  IKeyboardAwareScrollViewProps
> = ({keyboardAwareScrollViewStyle, children, ...props}) => (
  <KeyboardAwareScrollView
    {...props}
    enableOnAndroid={true}
    contentContainerStyle={[
      styles.contentContainerStyle,
      keyboardAwareScrollViewStyle,
    ]}
    showsVerticalScrollIndicator={false}>
    {children}
  </KeyboardAwareScrollView>
);

const styles = EStyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
});

export default KeyboardAwareScrollViewComponent;
