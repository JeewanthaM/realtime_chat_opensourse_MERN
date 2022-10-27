import React from "react";
import { Fragment } from "react";

import "./Navbar.scss";

export default function Navbar(props: {
    children?: any;
    onAddButtonClick?: CallableFunction;
    onSettingsButtonClick?: CallableFunction;
    onFilterButtonClick?: CallableFunction;
    hideSettings?: boolean;
    hideAdd?: boolean;
    hideFilter?: boolean;
}) {
    return (
        <div className="navbar-wrap">
            <div className="d-flex flex-row tab-section">{props.children}</div>

        </div >
    );
}
