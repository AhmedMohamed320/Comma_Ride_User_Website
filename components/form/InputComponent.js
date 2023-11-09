import React, { useState } from "react";
import classes from "./InputComponent.module.css";
import { BsBoxArrowDownRight } from "react-icons/bs";
const InputComponent = (props) => {
    const [showLastData, setShowLast] = useState(false);
    return (
        <>
            <div>
                <label htmlFor="n4">
                    {props.type === "ads" ? "العنوان" : "الرقم"}
                </label>
                <div className={classes.upInput}>
                    <input
                        type="text"
                        id="n4"
                        placeholder={props.type === "ads" ? "ادخل العنوان بالتفصيل " : "ادخل الرقم"}
                        
                    />
                    <div
                        onClick={() => {
                            setShowLast(!showLastData);
                        }}
                    >
                        <BsBoxArrowDownRight />
                    </div>
                </div>
                {showLastData && (
                    <>
                        <div className={classes.lastData}>
                            <p className="text-center font-semibold">
                            {props.type === "ads" ? "العناوين السابقه" : "الارقام السابقه"}
                            </p>
                            <ul>
                                <li>
                                    <p>شارع مستشفى حمدي السيد اليمين التاني</p>
                                </li>
                                <li>
                                    <p>شارع مستشفى حمدي السيد اليمين التاني</p>
                                </li>
                                <li>
                                    <p>شارع مستشفى حمدي السيد اليمين التاني</p>
                                </li>
                                <li>
                                    <p>شارع مستشفى حمدي السيد اليمين التاني</p>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default InputComponent;
