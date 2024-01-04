import React, {FunctionComponent} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';

import theme from '../config/theme';

interface IProps {
  modalVisibleFlag: boolean;
  title: string;
  subtitle: string;
  okBtnText: string;
  cancelBtnText: string;
  onPressOk: any;
  onPressCancel: any;
}

const DialogModal: FunctionComponent<IProps> = ({
  modalVisibleFlag,
  title,
  subtitle,
  okBtnText,
  cancelBtnText,
  onPressOk,
  onPressCancel,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={modalVisibleFlag}
      onRequestClose={onPressCancel}>
      <View style={styles.container}>
        <View style={styles.popupContainer}>
          <TextComponent
            type="title"
            fontWeight="BOLD"
            text={title}
            numberOfLines={2}
          />
          <TextComponent
            type="subtitle"
            style={styles.subtitle}
            text={subtitle}
            numberOfLines={4}
          />
          <View style={styles.actionsContainer}>
            <ButtonComponent
              type="primary"
              style={styles.button}
              text={okBtnText}
              onPress={onPressOk}
            />
            <ButtonComponent
              type="primary"
              style={[styles.button, styles.cancelButton]}
              text={cancelBtnText}
              onPress={onPressCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  popupContainer: {
    paddingVertical: theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 5,
    paddingHorizontal: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 5,
    borderRadius: 10,
    backgroundColor: theme.constants.color.GREY_LIGHTEST,
  },
  subtitle: {
    paddingTop: theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
  cancelButton: {
    backgroundColor: theme.constants.color.RED_DARK,
  },
});

export default DialogModal;
