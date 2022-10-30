import React from "react";
import { CSSProperties } from "react";

import "./ProfileImage.scss";

export default function ProfileImage(props: { src: string; className?: string; style?: CSSProperties; }) {
    let src = props.src;

    if (!props.src) {
        src = "/images/placeholder-general.jpg";
    }
    return (<img src={src} style={props.style} className={"profile-pic " + props.className} />);
}
