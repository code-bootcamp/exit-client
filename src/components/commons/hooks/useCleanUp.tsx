import { useEffect } from "react";

export default function useCleanUp() {
  useEffect(() => {
    let isComponentMounted = true;
    return () => {
      isComponentMounted = false;
    };
  }, []);
}
