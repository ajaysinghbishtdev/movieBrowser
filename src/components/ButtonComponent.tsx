import React, {FunctionComponent} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import theme from '../config/theme';
import TextComponent from './TextComponent';

interface IButtonProps {
  style?: any;
  textStyle?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: 'primary' | 'text' | 'addToCart';
  text?: string;
  onPress?: any;
}

const ButtonComponent: FunctionComponent<IButtonProps> = ({
  style,
  textStyle,
  loading,
  disabled,
  type,
  text,
  onPress,
}) => {
  const styles = EStyleSheet.create({
    continueBtnPrimaryContainer: {
      ...theme.globalStyles.continueBtnDefaultContainer,
      ...theme.globalStyles.continueBtnPrimaryContainer,
    },
    continueBtnPrimaryDisabledContainer: {
      ...theme.globalStyles.continueBtnPrimaryDisabledContainer,
    },
    continueBtnPrimaryText: {
      ...theme.globalStyles.continueBtnPrimaryText,
    },
    textBtnContainer: {
      ...theme.globalStyles.textBtnContainer,
    },
    textBtnText: {
      ...theme.globalStyles.textBtnText,
    },
    addToCartBtnContainer: {
      ...theme.globalStyles.addToCartBtnContainer,
    },
    addToCartBtnText: {
      ...theme.globalStyles.addToCartBtnText,
    },
  });

  let containerStyleByType = {};

  switch (type) {
    case 'primary':
      containerStyleByType = {...styles.continueBtnPrimaryContainer};
      break;
    case 'text':
      containerStyleByType = {...styles.textBtnContainer};
      break;
    case 'addToCart':
      containerStyleByType = {...styles.addToCartBtnContainer};
      break;
  }

  let textStyleByType = {};

  switch (type) {
    case 'primary':
      textStyleByType = {...styles.continueBtnPrimaryText};
      break;
    case 'text':
      textStyleByType = {...styles.textBtnText};
      break;
    case 'addToCart':
      textStyleByType = {...styles.addToCartBtnText};
      break;
  }

  return (
    <TouchableOpacity
      style={[
        containerStyleByType,
        disabled || loading ? styles.continueBtnPrimaryDisabledContainer : null,
        style,
      ]}
      activeOpacity={0.8}
      onPress={disabled || loading ? null : onPress ? onPress : null}>
      {loading ? (
        <ActivityIndicator size={'small'} color={theme.constants.color.WHITE} />
      ) : (
        <TextComponent
          type="title"
          style={[textStyleByType, textStyle]}
          text={text}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
