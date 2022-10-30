import React from "react";

export default function DrawerBody(props: { children }) {
    return <div style={{ padding: 10, flex: 1 , overflow:'auto', overflowX:'hidden'}}>{props.children}</div>;
}
