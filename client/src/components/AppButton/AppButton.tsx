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
    <button
      style={props.style}
      disabled={props.isLoading || props.disable}
      onClick={() => {
        props.onClick?.();
      }}
      className={"btn green-button " + props.className}
    >
      {props.isLoading ? (
        <ClipLoader
          size={20}
          color={props.loadingColor ? props.loadingColor : "white"}
        />
      ) : (
        props.children
      )}
    </button>
  );
}
