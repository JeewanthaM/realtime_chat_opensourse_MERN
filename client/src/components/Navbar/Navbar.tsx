import React from "react";
import { Fragment } from "react";
import AddIcon from "../../assets/images/icons/add.svg";
import GearIcon from "../../assets/images/icons/gear.svg";
import FilterIcon from "../../assets/images/icons/filter.svg";
import ArrowDown from "../../assets/images/icons/down-arrow.svg";
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
            <div className="d-flex flex-row justify-content-around align-items-end">
                {props.hideFilter
                    ? (<Fragment />)
                    : (<div onClick={() => { props.onFilterButtonClick?.(); }} className="icon filter">
                        <img src={FilterIcon} className="" />
                        <p style={{ margin: "0rem 1rem 0rem 0.7rem", fontFamily: "monospace" }}>Filter</p>
                        <img src={ArrowDown} className="" />
                    </div>)
                }

                {props.hideSettings
                    ? (<Fragment />)
                    : (<div onClick={() => { props.onSettingsButtonClick?.(); }} className="icon gear d-flex justify-content-center">
                        <img src={GearIcon} className="gear-icon" />
                    </div>)
                }

                {props.hideAdd
                    ? (<Fragment />)
                    : (<div onClick={() => { props.onAddButtonClick?.(); }} className="icon add d-flex justify-content-center">
                        <img src={AddIcon} className="add-icon" />
                    </div>)
                }
            </div>
        </div >
    );
}
