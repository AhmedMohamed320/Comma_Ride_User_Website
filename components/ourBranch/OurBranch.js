import React from "react";
import classes from "./OurBranch.module.css";
const OurBranch = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <ul>
                <li>
                    <img src="/image/dots.png" alt="dots" />
                </li>
                <li>
                    <img src="/image/firnas.png" alt="dots" />
                    <p>soon</p>
                </li>
                <li>
                    <img src="/image/cube.png" alt="dots" />
                    <p>soon</p>
                </li>
            </ul>
        </section>
    );
};

export default OurBranch;
