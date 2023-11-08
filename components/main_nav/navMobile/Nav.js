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

    return (
        <section className={classes.section}>
            <div className={classes.list}>
                <ul className="w-full h-full">
                    <li className={pathname == "/offers" ? classes.active : ""}>
                        <Link href="/offers">
                            <IoMdGift className="text-5xl" />
                            <p>العروض</p>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/request_deliveryman"
                                ? classes.active
                                : ""
                        }
                    >
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
                    <li
                        className={
                            pathname.includes("/myOrders")? classes.active : ""
                        }
                    >
                        <Link href="/myOrders">
                            <MdOutlineBookmarkAdded className="text-5xl" />
                            <p>طلباتي</p>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/myAccount" ? classes.active : ""
                        }
                    >
                        <Link href="/myAccount">
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
