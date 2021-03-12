const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';


const blue = '#0092c8';
const gray = '#a0b7bf';
const lightgray = '#ecf1f2';
const verylightgray = '#f4f8fa';
const darkgray = '#5d828f';
const black = '#114b5f';
const yellow = '#fbde68';
const white = '#ffffff';
const darkyellow = '#f3af2a';
const green = '#82c046';
const red = '#e86135';

export default {
  blue,
  black,
  white,
  gray,
  lightgray,
  verylightgray,
  darkgray,
  yellow,
  darkyellow,
  green,
  red,
  light: {
    text: black,
    background: verylightgray,
    tint: black,
    headerTint: white,
    headerBackground: blue,
    tabBackground: blue,
    tabIconDefault: white,
    tabIconSelected: yellow,
  },
  dark: {
    text: white,
    background: black,
    headerTint: white,
    headerBackground: blue,
    tabBackground: blue,
    tabIconDefault: lightgray,
    tabIconSelected: tintColorDark,
  },
};
