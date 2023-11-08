"use client";
import React, { useState } from "react";
import classes from "./My_Orders.module.css";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
const My_Orders = () => {
    const [showAlert, setShowAlert] = useState(false);
    const alertClass = `${classes.pop}  ${showAlert ? `${classes.show}` : ""}`;
    return (
        <>
            <div className={alertClass}>
                <div>
                    <div className={classes.close}>
                        <CgClose
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        />
                    </div>
                    <div>
                        <div className={classes.form}>
                            <form action="">
                                <div className="text-center">
                                    <p className="font-semibold text-3xl">
                                        طلب رقم 450
                                    </p>
                                </div>

                                <div className={classes.part}>
                                    <p>بيانات الي هيستلم منه المندوب (من)</p>
                                    <div>
                                        <label htmlFor="n4">المنطقه</label>
                                        <select name="" id="">
                                            <option value="">العصلوجي</option>
                                            <option value="">القوميه</option>
                                            <option value="">الزهور</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="n4">العنوان</label>
                                        <input
                                            type="text"
                                            id="n4"
                                            placeholder="العنوان الي مندوبك هيستلم منه  "
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="n2">رقم الهاتف</label>
                                        <input
                                            type="number"
                                            id="n2"
                                            placeholder="ادخل رقم الشخص او المكان "
                                        />
                                    </div>
                                </div>
                                <div className={classes.part}>
                                    <p>بيانات الي المندوب هيسلم لي (الى)</p>
                                    <div>
                                        <label htmlFor="n4">المنطقه</label>
                                        <select name="" id="">
                                            <option value="">العصلوجي</option>
                                            <option value="">القوميه</option>
                                            <option value="">الزهور</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="n4">العنوان</label>
                                        <input
                                            type="text"
                                            id="n4"
                                            placeholder=" العنوان الي مندوبك هيسلم لي   "
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="n2">رقم الهاتف</label>
                                        <input
                                            type="number"
                                            id="n2"
                                            placeholder="ادخل رقم الشخص او المكان "
                                        />
                                    </div>
                                </div>

                                <div className={classes.data}>
                                    <label htmlFor="n10"> بيانات الطلب </label>
                                    <textarea
                                        id="n10"
                                        placeholder="-----"
                                    ></textarea>
                                </div>

                                <div className={classes.data}>
                                    <label htmlFor="n10"> ملاحظات </label>
                                    <textarea
                                        id="n10"
                                        placeholder="اكتب اي ملاحظه عايز توصلها لمندوبك او خدمه العملاء"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <button
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        >
                            تاكيد بيانات الطلب
                        </button>
                    </div>
                </div>
            </div>
            <section className="flex flex-col gap-8 py-4">
                <p className="text-4xl font-semibold">طلباتك الحاليه</p>
                <div className={classes.part}>
                    <p className="text-3xl">طلبات تحت المراجعه</p>
                    <div>
                        <p className="text-center  ">
                            *جاري مراجعه الطلب من طرفه خدمه العملاء لتحديد السعر
                            النهائي و وقت التوصيل المتوقع ارجوك انتظر دقيقتين
                        </p>
                        <div>
                            <p>
                                الطلب : <span>ورق من مكتبه عمر ب اسم محمد</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p>
                                تم الطلب بتوقيت : <span>01:45</span>
                            </p>
                            <p>
                                برقم : <span>458</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p>السعر النهائي : -- جنيه</p>
                            <p className={classes.state}>تحت المراجعه</p>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------- */}
                <div className={classes.part}>
                    <p className="text-3xl">طلبات تنتظر تاكيدك</p>
                    <div>
                        <div>
                            <p className="text-center  ">
                                *سوف يتحرك مندوبك فور تاكيدك على السعر المحدد
                            </p>
                            <div className="flex justify-center items-center gap-4">
                                <p>*تاكد من بيانات وتفاصيل الطلب</p>
                                <span
                                    onClick={() => {
                                        setShowAlert(true);
                                    }}
                                    className={`underline underline-offset-4 cursor-pointer text-xl text-red-400`}
                                >
                                    عرض التفاصيل
                                </span>
                            </div>
                        </div>
                        <div>
                            <p>
                                الطلب : <span>ورق من مكتبه عمر ب اسم محمد</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p>
                                تم الطلب بتوقيت : <span>01:45</span>
                            </p>
                            <p>
                                برقم : <span>458</span>
                            </p>
                        </div>
                        <p>
                            يصلك خلال : <span>45 دقيقه</span>
                        </p>
                        <div className="flex items-center gap-8">
                            <p>السعر النهائي : 25 جنيه</p>
                            <p className={classes.state}>ننتظر تاكيدك</p>
                        </div>
                        <div>
                            <button
                                className={`text-2xl text-center p-4 rounded-lg w-full ${classes.confirm}`}
                            >
                                اوافق على التسعيره يمكنك التحرك
                            </button>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------- */}
                <div className={classes.part}>
                    <p className="text-3xl">في الطريق ليك </p>
                    <div>
                        <div className="flex items-center justify-between">
                            <p>
                                الطلب : <span>ورق من مكتبه عمر ب اسم محمد</span>
                            </p>
                            <Link href="/myOrders/delivery_tracking"
                                className={`text-2xl text-center p-4 rounded-lg ${classes.confirm}`}
                            >
                                تتبع الطيار
                            </Link>
                        </div>
                        <div className="flex items-center gap-8">
                            <p>
                                تم الطلب بتوقيت : <span>01:45</span>
                            </p>
                            <p>
                                برقم : <span>458</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <p>
                                يصلك : <span>02:30</span>
                            </p>
                            <p>
                                التكلفه : <span>25 جنيه</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default My_Orders;
