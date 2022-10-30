import TickCircle from "../../TickCircle/TickCircle";
import ProfileImage from "../../ProfileImage/ProfileImage";
import React from "react";
import { Fragment } from "react";

import "./SideDrawerHeader.scss";

export default function SideDrawerHeader(props: { onClose: CallableFunction; profileImage?: any; children?: any; }) {
    return (
        <div className="side-drawer-header">
            <div className="icon-close cursor-pointer" onClick={() => { props.onClose?.(); }}>
                <TickCircle icon="close" large />
            </div>

            {props.profileImage == false
                ? (<Fragment />)
                : (<div className="profile">
                    <ProfileImage src={props.profileImage} className={"main-image"} />
                </div>)
            }

            <div style={{ width: "100%" }}>{props.children}</div>
        </div>
    );
}
