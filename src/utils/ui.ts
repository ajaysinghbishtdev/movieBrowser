import {Dimensions, PixelRatio} from 'react-native';

// Set view port width & height as per design
const viewPortWidth = 375;
const viewPortHeight = 812;

// Retrieve initial screen's width & height
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Converts width dimension to independent pixel (dp) by keeping pixel density and screen size in knowledge
const widthInPixel = (dimension: number) => {
  let elementWidth = (dimension / viewPortWidth) * 100;
  return PixelRatio.roundToNearestPixel((elementWidth * screenWidth) / 100);
};

// Converts height dimension to independent pixel (dp) by keeping pixel density, screen size in knowledge
const heightInPixel = (dimension: number) => {
  let elementHeight = (dimension / viewPortHeight) * 100;
  return PixelRatio.roundToNearestPixel((elementHeight * screenHeight) / 100);
};

const ui = {
  widthInPixel,
  heightInPixel,
  screenWidth,
  screenHeight,
};

export default ui;
