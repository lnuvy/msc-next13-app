import useSafeContext from "@/hooks/use-safe-context";
import React from "react";

export const createDynamicContext = <TProps extends object>() => {
  const Context = React.createContext<TProps | null>(null);

  const useContext = () => {
    return useSafeContext(Context);
  };

  const ContextProvider = ({
    children,
    ...props
  }: { children: React.ReactElement | React.ReactElement[] } & TProps) => (
    <Context.Provider value={props as TProps}>{children}</Context.Provider>
  );

  const withContextProvider =
    (Component: React.FunctionComponent<TProps>) => (props: TProps) => {
      // const Memoized = useMemo(() => React.memo<TProps>(Component), []);
      return (
        <ContextProvider {...props}>
          {/* <Memoized {...props} /> */}
          <Component {...props} />
        </ContextProvider>
      );
    };

  return { useContext, Context, ContextProvider, withContextProvider };
};
