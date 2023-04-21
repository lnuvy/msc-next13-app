interface loadingProps {
  isLoading: true;
  isError?: false;
}
interface errorProps {
  isLoading?: false;
  isError: true;
}
interface successProps {
  isLoading?: false;
  isError?: false;
}

type withLoading<T> = loadingProps & Partial<T>;
type withError<T> = errorProps & Partial<T>;
type withSuccess<T> = successProps & T;

/**
 *
 * fetching data가 필요한 컴포넌트에 사용해서 status가 loading, error상태에 대한
 * 컴포넌트를 구성하기 위해 사용합니다
 *
 */
type WithFetchingPropsReturn<T> = (
  props: withLoading<T> | withError<T> | withSuccess<T>
) => JSX.Element;

const withFetchingProps = <T extends object>(
  Component: WithFetchingPropsReturn<T>
) => Component;

export default withFetchingProps;
