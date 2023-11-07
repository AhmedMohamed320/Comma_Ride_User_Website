"use client";
import React, { useState } from "react";
import classes from "./Nav.module.css";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdGift } from "react-icons/io";
import Link from "next/link";
import { MdOutlineAccountCircle, MdOutlineBookmarkAdded } from "react-icons/md";

const Nav = (props) => {
    const pathname = usePathname();

    const [isFixed, setIsFixed] = useState(false);
    const navClass = `${classes.section}  ${
        isFixed ? `${classes.onScroll}` : ""
    }`;

    return (
        <section className={navClass}>
            <div className={classes.list}>
                <ul className="w-full h-full">
                    <li className={pathname == "" ? classes.active : ""}>
                        <Link href="/">
                            <IoMdGift className="text-5xl" />
                            <p>العروض</p>
                        </Link>
                    </li>
                    <li className={pathname == "/request_deliveryman" ? classes.active : ""}>
                        <Link href="/request_deliveryman">
                            <IoAddCircleOutline className="text-5xl" />
                            <p>اطلب مندوب</p>
                        </Link>
                    </li>
                    <li className={pathname == "/" ? classes.active : ""}>
                        <Link href="/">
                            <HiOutlineHome className="text-5xl" />
                            <p>الرئيسيه</p>
                        </Link>
                    </li>
                    <li className={pathname == "" ? classes.active : ""}>
                        <Link href="/">
                            <MdOutlineBookmarkAdded className="text-5xl" />
                            <p>طلباتي</p>
                        </Link>
                    </li>
                    <li className={pathname == "" ? classes.active : ""}>
                        <Link href="/">
                            <MdOutlineAccountCircle className="text-5xl" />
                            <p>حسابي</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Nav;
