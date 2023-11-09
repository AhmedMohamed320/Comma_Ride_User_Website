import React from "react";
import classes from "./Account.module.css";
import { LuWallet2 } from "react-icons/lu";
import { MdDoneAll } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoFacebook, BiPhone } from "react-icons/bi";
import Link from "next/link";

const Account = () => {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div className={classes.wallet}>
                    <div className={classes.icon}>
                        <LuWallet2 />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-3xl font-semibold">اهلا احمد محمد</p>
                        <p className="text-2xl">#4524</p>
                    </div>
                    <p>
                        45 <span className="text-3xl font-medium">جنيه</span>
                    </p>
                    <p>محفظتك</p>
                </div>
                <div className={classes.lastOrder}>
                    <p className="text-3xl font-semibold pb-4 pr-2">
                        اخر 5 طلبات
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <div className="flex justify-center items-center">
                                <div className={classes.icon2}>
                                    <MdDoneAll />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p>#4524</p>
                                    <p>10/10/2022 08:50</p>
                                </div>
                                <p>
                                    من : <span>كرم الشام</span>
                                </p>
                                <p>
                                    الطلب : <span>1 شاورما</span>
                                </p>
                                <p>
                                    تكلفه التوصيل : <span>25 جنيه</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-center items-center">
                                <div className={classes.icon2}>
                                    <MdDoneAll />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p>#4524</p>
                                    <p>10/10/2022 08:50</p>
                                </div>
                                <p>
                                    من : <span>كرم الشام</span>
                                </p>
                                <p>
                                    الطلب : <span>1 شاورما</span>
                                </p>
                                <p>
                                    تكلفه التوصيل : <span>25 جنيه</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-center items-center">
                                <div className={classes.icon2}>
                                    <MdDoneAll />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p>#4524</p>
                                    <p>10/10/2022 08:50</p>
                                </div>
                                <p>
                                    من : <span>كرم الشام</span>
                                </p>
                                <p>
                                    الطلب : <span>1 شاورما</span>
                                </p>
                                <p>
                                    تكلفه التوصيل : <span>25 جنيه</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-center items-center">
                                <div className={classes.icon2}>
                                    <MdDoneAll />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p>#4524</p>
                                    <p>10/10/2022 08:50</p>
                                </div>
                                <p>
                                    من : <span>كرم الشام</span>
                                </p>
                                <p>
                                    الطلب : <span>1 شاورما</span>
                                </p>
                                <p>
                                    تكلفه التوصيل : <span>25 جنيه</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-center items-center">
                                <div className={classes.icon2}>
                                    <MdDoneAll />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p>#4524</p>
                                    <p>10/10/2022 08:50</p>
                                </div>
                                <p>
                                    من : <span>كرم الشام</span>
                                </p>
                                <p>
                                    الطلب : <span>1 شاورما</span>
                                </p>
                                <p>
                                    تكلفه التوصيل : <span>25 جنيه</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={classes.contactUs}>
                    <ul className="flex items-center gap-8 justify-center">
                        <li>
                            <a
                                href="https://wa.me/+201026204006"
                                target="_blank"
                            >
                                <BsWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/dotsdelivery.eg?locale=ar_AR"
                                target="_blank"
                            >
                                <BiLogoFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="tel:01026204006">
                                <BiPhone />
                            </a>
                        </li>
                    </ul>
                    <Link href="/sign_in" className={classes.btn}>تسجيل الخروج</Link>
                </div>
            </section>
        </>
    );
};

export default Account;
