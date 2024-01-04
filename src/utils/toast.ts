import SafeArea from 'react-native-safe-area';
import Toast from 'react-native-toast-message';

// Get SafeArea insets for device
const getSafeAreaInsets = async () => {
  return SafeArea.getSafeAreaInsetsForRootView().then(result => {
    // { safeAreaInsets: { top: 44, left: 0, bottom: 34, right: 0 } }
    return result.safeAreaInsets;
  });
};

/**
 * Show Toast for react-native-simple-toast to show message for user
 */
const toastGeneric = async (
  type: 'success' | 'info' | 'error',
  text: string,
  onHide: any,
) => {
  const safeAreaInsets = await getSafeAreaInsets();
  Toast.show({
    type: type,
    text1: text,
    position: 'bottom',
    bottomOffset: safeAreaInsets.bottom,
    onHide: onHide,
  });
};

const toastSuccess = (text: string, onHide?: any) => {
  toastGeneric('success', text, onHide);
};

const toastInfo = (text: string, onHide?: any) => {
  toastGeneric('info', text, onHide);
};

const toastError = (text: string, onHide?: any) => {
  toastGeneric('error', text, onHide);
};

const toast = {
  getSafeAreaInsets,
  toastSuccess,
  toastInfo,
  toastError,
};

export default toast;
