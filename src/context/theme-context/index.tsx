"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { createDynamicContext } from "../create-dynamic-context";

// const THEME_KEY = "_theme";

interface ThemeContextProps {}

const { ContextProvider, useContext } =
  createDynamicContext<ThemeContextProps>();

export const useThemeContext = useContext;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ThemeContextProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>{children}</ContextProvider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;
