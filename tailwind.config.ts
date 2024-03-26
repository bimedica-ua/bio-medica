import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'ssm': '440px',
      'sm': '640px',
      'md': '768px',
      'mdp': '950px',
      'lg': '1055px',
      'xl': '1292px',
      '2xl': '1536px',
      '3xl': '1880px',
      '4xl': '2210px',
      '5xl': '2450px',
    },
    extend: {
      backgroundImage: {},
      colors: {
        firstColor: '#befcff',
        secondColor: 'white',
        thirdColor: '#affbfb',
        orangeLight: '#ffc895',
        orangeMax: '#ff7a1e',
        orangeDark: '#ffaf66',
        textColor: 'rgb(60, 64, 67)',
        textWhiteColor: 'rgb(240, 240, 240)',
        hoverColor: '#3c6c85',
        bgColor: 'rgb(255,255,255)',
        blackTransperent: '#00000063',
        buttonColor: 'rgb(60, 64, 67)',
        cardImgBorderColor: 'rgb(60, 64, 67)',
        cardFirstColor:'#00d6e0',
        cardSecondColor: '#009fa9'
      },
      fontSize: {
        small: '12px',
        base: '16px',
        medium: '18px',
        large: '20px',
        xl: '22px',
        '2xl': '24px',
      },
      maxWidth: {
        containerWidth: '1000px',
      },
    },
  },
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6)/,
    },
  ],
  plugins: [],
};
export default config;
