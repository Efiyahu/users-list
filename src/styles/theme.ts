import { css } from 'styled-components/native';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width; // Screen width

export const fontXS = `${Math.round(screenWidth / 34.2856)}px`;
export const fontS = `${Math.round(screenWidth / 25.6)}px`;
export const fontM = `${Math.round(screenWidth / 20.5714)}px`;
export const fontL = `${Math.round(screenWidth / 17.1428)}px`;
export const fontXL = `${Math.round(screenWidth / 15.1428)}px`;
export const fontTitleSize = `${Math.round(screenWidth / 17.1428)}px`;

export type ThemeType = {
  colors: {
    lightgray: string;
    primary: string;
  };
  shadow: {
    ios: string;
    android: string;
  };
  boxShadow: FlattenSimpleInterpolation;
  font: {
    sizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  };
};

const boxShadow = css`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 4.65px rgba(0, 0, 0, 0.29);
  elevation: 7;
`;

const theme: ThemeType = {
  colors: {
    lightgray: '#939393',
    primary: '#292929',
  },
  shadow: {
    ios: 'box-shadow: 1px 1px 2px #4f4f4f',
    android: 'elevation : 3',
  },
  boxShadow,
  font: {
    sizes: {
      xs: fontXS,
      s: fontS,
      m: fontM,
      l: fontL,
      xl: fontXL,
      xxl: fontTitleSize,
    },
  },
};

export default theme;
