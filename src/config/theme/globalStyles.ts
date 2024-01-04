import {Dimensions} from 'react-native';

import constants from './constants';

const globalStyles = {
  hero: {
    fontSize: constants.fontSize.H1,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.GREY_DARKEST,
  },
  header: {
    fontSize: constants.fontSize.H2,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.GREY_DARKEST,
  },
  headerRightComponentText: {
    fontSize: constants.fontSize.H4,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.BLUE,
  },
  title: {
    fontSize: constants.fontSize.H3,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.GREY_DARKEST,
  },
  subtitle: {
    fontSize: constants.fontSize.H4,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.NORMAL,
    color: constants.color.GREY_DARK,
  },
  cardTitle: {
    fontSize: constants.fontSize.H6,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.GREY_DARK,
  },
  cardSubtitle: {
    fontSize: constants.fontSize.H6,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.NORMAL,
    color: constants.color.GREY_DARK,
  },
  toast: {
    fontSize: constants.fontSize.H6,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.NORMAL,
    color: constants.color.GREY_DARK,
  },
  continueBtnDefaultContainer: {
    marginTop: constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 4,
    height: constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  continueBtnPrimaryContainer: {
    backgroundColor: constants.color.BLUE,
  },
  continueBtnPrimaryDisabledContainer: {
    backgroundColor: constants.color.BLUE,
  },
  continueBtnPrimaryText: {
    fontSize: constants.fontSize.H4,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.WHITE,
  },
  textBtnContainer: {},
  textBtnText: {
    fontSize: constants.fontSize.H5,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.BLUE,
    textDecorationLine: 'underline',
  },
  addToCartBtnContainer: {
    height: constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: constants.color.BLUE,
  },
  addToCartBtnText: {
    fontSize: constants.fontSize.H6,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
    color: constants.color.WHITE,
  },
  tabBarLabel: {
    fontSize: constants.fontSize.H7,
    fontFamily: constants.fontFamily,
    fontWeight: constants.fontWeight.BOLD,
  },
  toastContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: constants.gutterMargin.GUTTER_MARGIN_WIDTH * 3,
    paddingVertical: constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    width: Dimensions.get('window').width * 0.9,
    minHeight: constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 10,
    borderRadius: 4,
    backgroundColor: constants.color.GREY_LIGHTER,
  },
  toastIcon: {
    marginRight: constants.gutterMargin.GUTTER_MARGIN_WIDTH,
    marginLeft: constants.gutterMargin.GUTTER_MARGIN_WIDTH,
  },
  toastText: {
    width: '95%',
  },
};

export default globalStyles;
