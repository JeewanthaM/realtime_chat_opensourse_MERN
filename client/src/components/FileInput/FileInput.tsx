import React from "react";
import { toBase64 } from "../../services/HelperMethods";
import "./FileInput.scss";
export default function FileInput(props: { onChange?: CallableFunction }) {
    return (
        <input
            type="file"
            className="file-upload-input"
            onChange={(e) => {
                if (e.target.files) {
                    var imgURL = toBase64(e.target.files?.[0]).then(
                        (url: any) => {
                            props.onChange?.(url);
                            
                        }
                    );
                } else {
                    props.onChange?.(null);
                    
                }
            }}
        />
    );
}
