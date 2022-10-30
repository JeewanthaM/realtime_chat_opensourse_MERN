import React from "react";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function AppButton(props: {
  isLoading?: boolean;
  onClick?: CallableFunction;
  children?: any;
  className?: string;
  style?: CSSProperties;
  disable?: boolean;
  loadingColor?: string;
}) {
  return (
    <p>Button</p>

  );
}
