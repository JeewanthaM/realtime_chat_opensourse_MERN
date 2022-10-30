import React from "react";
import { toBase64 } from "../../services/HelperMethods";
import "./FileInput.scss";
export default function FileInput(props: { onChange?: CallableFunction }) {
    return (
        <input
            type="file"
            className="file-upload-input"

        />
    );
}
