"use client";
import React from "react";
import classes from "./Aside.module.css";
import {
    MdOutlineAccountCircle,
    MdOutlineBookmarkAdded,
    MdOutlineClose,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdGift } from "react-icons/io";

const Aside = (props) => {
    const pathname = usePathname();

    return (
        <section className={classes.section}>
            <aside className={classes.aside}>
                <div className={classes.close} onClick={props.onHideAside}>
                    <MdOutlineClose />
                </div>
                <div className={classes.head}>
                    <Link
                        href="/"
                        className={classes.logo}
                        onClick={props.onHideAside}
                    >
                        <img src="/image/ride_logo_2.png" alt="ride_logo" />
                    </Link>
                </div>
                <ul className="flex gap-8 flex-col">
                    <li className={pathname == "/" ? classes.active : ""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <HiOutlineHome />
                            <p>الرئيسيه</p>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/request_deliveryman"
                                ? classes.active
                                : ""
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/request_deliveryman",
                            }}
                            onClick={props.onHideAside}
                        >
                            <IoAddCircleOutline />
                            <p>اطلب مندوب</p>
                        </Link>
                    </li>
                    <li className={pathname == "/offers" ? classes.active : ""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/offers",
                            }}
                            onClick={props.onHideAside}
                        >
                            <IoMdGift />
                            <p>العروض</p>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/myOrders" ? classes.active : ""
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/myOrders",
                            }}
                            onClick={props.onHideAside}
                        >
                            <MdOutlineBookmarkAdded />
                            <p>طلباتي</p>
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/myAccount" ? classes.active : ""
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/myAccount",
                            }}
                            onClick={props.onHideAside}
                        >
                            <MdOutlineAccountCircle />
                            <p>حسابي</p>
                        </Link>
                    </li>
                </ul>
                <span className={classes.hr}></span>
                <div className="flex items-center  px-10  gap-4 cursor-pointer font-semibold">
                    <Link href="/sign_in">تسجيل الخروج</Link>
                    <BiLogOut className="text-4xl" />
                </div>
            </aside>
        </section>
    );
};

export default Aside;
