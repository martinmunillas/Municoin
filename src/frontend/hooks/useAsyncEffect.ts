import { useEffect } from "react";

export const useAsyncEffect = (effect: () => Promise<void>, deps: any[]) => {
  useEffect(() => void effect(), deps);
};
