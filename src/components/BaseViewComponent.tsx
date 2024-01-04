import React, {Fragment, FunctionComponent} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import KeyboardAwareScrollViewComponent from './KeyboardAwareScrollViewComponent';

import theme from '../config/theme';

interface IBaseViewProps {
  isSafeAreaTopView?: boolean;
  safeAreaTopViewBackgroundColor?: string;
  isSafeAreaBottomView?: boolean;
  safeAreaBottomViewBackgroundColor?: string;
  isGreyBackgroundColor?: boolean;
  baseStyle?: any;
  containerStyle?: any;
  keyboardAwareScrollViewStyle?: any;
  isNormalView?: boolean;
  isScrollable?: boolean;
  isImageBackgroundView?: boolean;
  imageBackgroundSource?: any;
  isFullScreenView?: boolean;
  children: React.ReactNode;
}

const BaseViewComponent: FunctionComponent<IBaseViewProps> = ({
  isSafeAreaTopView,
  safeAreaTopViewBackgroundColor,
  isSafeAreaBottomView,
  safeAreaBottomViewBackgroundColor,
  isGreyBackgroundColor,
  baseStyle,
  containerStyle,
  keyboardAwareScrollViewStyle,
  isNormalView,
  isScrollable,
  isImageBackgroundView,
  imageBackgroundSource,
  isFullScreenView,
  children,
  ...props
}) => {
  const styles = EStyleSheet.create({
    greyBackgroundColor: {
      backgroundColor: theme.constants.color.GREY_LIGHTEST,
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
    },
    safeAreaTopView: {
      backgroundColor: !isSafeAreaTopView
        ? theme.constants.color.WHITE
        : safeAreaTopViewBackgroundColor
        ? safeAreaTopViewBackgroundColor
        : theme.constants.color.GREY_LIGHTEST,
    },
    safeAreaBottomView: {
      backgroundColor: !isSafeAreaBottomView
        ? theme.constants.color.WHITE
        : safeAreaBottomViewBackgroundColor
        ? safeAreaBottomViewBackgroundColor
        : theme.constants.color.GREY_LIGHTEST,
    },
    safeAreaView: {
      flex: 1,
      backgroundColor: !isGreyBackgroundColor
        ? theme.constants.color.WHITE
        : null,
    },
    safeAreaBackgroundImageView: {
      backgroundColor: null,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
    },
    normalViewContainer: {
      flex: 1,
    },
    scrollViewStyle: {
      flex: 0,
    },
  });

  const renderChildren = () => {
    return isNormalView ? (
      <View
        {...props}
        style={[
          styles.container,
          styles.normalViewContainer,
          isGreyBackgroundColor ? styles.greyBackgroundColor : null,
          containerStyle,
        ]}>
        {children}
      </View>
    ) : isScrollable ? (
      <KeyboardAwareScrollViewComponent
        {...props}
        keyboardAwareScrollViewStyle={[
          styles.container,
          isGreyBackgroundColor ? styles.greyBackgroundColor : null,
          styles.scrollViewStyle,
          keyboardAwareScrollViewStyle,
        ]}>
        {children}
      </KeyboardAwareScrollViewComponent>
    ) : (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          {...props}
          style={[
            styles.container,
            isGreyBackgroundColor ? styles.greyBackgroundColor : null,
            containerStyle,
          ]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderWithSafeAreaView = () => {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeAreaTopView} />
        <SafeAreaView style={[styles.safeAreaView, baseStyle]}>
          <StatusBar
            animated={true}
            barStyle={'dark-content'}
            backgroundColor={theme.constants.color.GREY_LIGHTEST}
          />
          {renderChildren()}
        </SafeAreaView>
        <SafeAreaView style={styles.safeAreaBottomView} />
      </Fragment>
    );
  };

  const renderImageBackgroundView = () => {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={imageBackgroundSource}
        resizeMode="cover">
        <SafeAreaView
          style={[
            styles.safeAreaView,
            styles.safeAreaBackgroundImageView,
            baseStyle,
          ]}>
          {isNormalView ? (
            <View {...props} style={[styles.container, containerStyle]}>
              {children}
            </View>
          ) : isScrollable ? (
            <KeyboardAwareScrollViewComponent
              {...props}
              keyboardAwareScrollViewStyle={[
                styles.container,
                styles.scrollViewStyle,
                keyboardAwareScrollViewStyle,
              ]}>
              {children}
            </KeyboardAwareScrollViewComponent>
          ) : (
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}>
              <View {...props} style={[styles.container, containerStyle]}>
                {children}
              </View>
            </TouchableWithoutFeedback>
          )}
        </SafeAreaView>
      </ImageBackground>
    );
  };

  return (
    <>
      {isImageBackgroundView
        ? renderImageBackgroundView()
        : isFullScreenView
        ? renderChildren()
        : renderWithSafeAreaView()}
    </>
  );
};

export default BaseViewComponent;
