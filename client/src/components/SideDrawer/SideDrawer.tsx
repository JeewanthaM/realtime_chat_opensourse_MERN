import React from "react";

import "./SideDrawer.scss";

export default function SideDrawer(props: { children?; isOpen?: boolean; className?: string }) {
    let openClose = "";

    if (props.isOpen) {
        openClose = "open";
    }

    let className = "";

    if (props.className) {
        className = props.className;
    }

    return <div className={"side-view " + openClose + " " + className}>{props.children}</div>;
}
