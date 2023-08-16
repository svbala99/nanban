import { PixelRatio } from 'react-native';

export const n = (size: number): number =>
    PixelRatio.getPixelSizeForLayoutSize(size);

export const SPACE_1 = n(1);
export const SPACE_2 = n(2);
export const SPACE_4 = n(4);
export const SPACE_6 = n(6);
export const SPACE_8 = n(8);
export const SPACE_12 = n(12);
export const SPACE_16 = n(16);
export const SPACE_24 = n(24);
export const SPACE_32 = n(32);
export const SPACE_48 = n(48);
export const SPACE_56 = n(56);
export const SPACE_64 = n(64);
export const SPACE_80 = n(80);

export const TEXT_M_1_SIZE = 32;
export const TEXT_M_1_LINE_HEIGHT = 38;
export const TEXT_M_2_SIZE = 28;
export const TEXT_M_2_LINE_HEIGHT = 36;
export const TEXT_M_3_SIZE = 24;
export const TEXT_M_3_LINE_HEIGHT = 30;
export const TEXT_M_4_SIZE = 20;
export const TEXT_M_4_LINE_HEIGHT = 24;
export const TEXT_M_5_SIZE = 16;
export const TEXT_M_5_LINE_HEIGHT = 24;
export const TEXT_M_6_SIZE = 14;
export const TEXT_M_6_LINE_HEIGHT = 18;
export const TEXT_S_1_SIZE = 14;
export const TEXT_S_1_LINE_HEIGHT = 18;
export const TEXT_S_2_SIZE = 12;
export const TEXT_S_2_LINE_HEIGHT = 16;
export const TEXT_XS_SIZE = 10;
export const TEXT_XS_LINE_HEIGHT = 12;
