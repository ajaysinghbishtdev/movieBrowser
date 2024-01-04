import utils from '../../utils';

const constants = {
  gutterMargin: {
    GUTTER_MARGIN_HEIGHT: utils.ui.heightInPixel(5),
    GUTTER_MARGIN_WIDTH: utils.ui.widthInPixel(5),
  },
  color: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREEN: '#329c97',
    RED: '#E30B5C',
    RED_DARK: '#9f134d',
    BLUE: '#2972a1',
    BLUE_LIGHT: '#699cbd',
    GREY_LIGHTEST: '#F2F2F2',
    GREY_LIGHTER: '#E5E5E5',
    GREY_LIGHT: '#D0D0D0',
    GREY: '#C4C4C4',
    GREY_DARK: '#707070',
    GREY_DARKEST: '#4e4e4e',
    // Skeleton
    SKELETON_BACKGROUND: 'rgba(128,128,128,0.4)',
    SKELETON_HIGHLIGHT: '#EAEAEA',
  },
  fontSize: {
    H1: '32rem',
    H2: '24rem',
    H3: '18rem',
    H4: '16rem',
    H5: '13rem',
    H6: '12rem',
    H7: '11rem',
    H8: '10rem',
  },
  fontWeight: {
    NORMAL: 'normal',
    BOLD: 'bold',
  },
  fontFamily: 'NotoSans-Regular',
};

export default constants;
