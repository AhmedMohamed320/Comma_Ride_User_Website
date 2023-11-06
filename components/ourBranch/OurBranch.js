import React from "react";
import classes from "./OurBranch.module.css";
import Link from "next/link";
const OurBranch = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <ul>
                <li>
                    <Link href="/">
                        <img src="/image/dots.png" alt="dots" />
                    </Link>
                </li>
                <li>
                    <Link href="/firnasCompany">
                        <img src="/image/firnas.png" alt="dots" />
                        <p>soon</p>
                    </Link>
                </li>
                <li>
                    <Link href="/cubeCompany">
                        <img src="/image/cube.png" alt="dots" />
                        <p>soon</p>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default OurBranch;
