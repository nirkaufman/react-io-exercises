import React from "react";
import {Loader} from "../../shared/Loader.tsx";

interface WithLoaderProps {
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withLoader(WrappedComponent: React.ComponentType<any>) {
  return function WithLoader({ isLoading, ...props }:WithLoaderProps) {
    if (isLoading) {
      return <Loader />;
    } else {
      return <WrappedComponent {...props} />;
    }
  }
}
