import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gradient: string;
      /* grayscale color */
      black: string;
      white: string;
      base100: string;
      base200: string;
      base300: string;
      line100: string;
      line200: string;
      line300: string;
      iconBasic: string;
      iconImg: string;
      /* font color */
      strong: string;
      accent: string;
      main: string;
      normal: string;
      disabled: string;
      guide: string;
      error: string;
    };
  }
}
