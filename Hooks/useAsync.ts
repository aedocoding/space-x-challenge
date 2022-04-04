import { useCallback, useState } from "react";

const useAsync = <ReturnValue, Params extends unknown[]>({
  asyncFunction,
}: {
  asyncFunction: (...params: Params) => Promise<ReturnValue>;
}): [
  (...params: Params) => void,
  boolean,
  ReturnValue | undefined,
  Error | undefined
] => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<ReturnValue>();
  const [error, setError] = useState<Error>();

  const execute = useCallback(
    async (...params: Params) => {
      try {
        setError(undefined);
        setLoading(true);
        const response = await asyncFunction(...params);
        setValue(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return [execute, loading, value, error];
};

export default useAsync;
