"use client";
import React, { useState } from "react";
import classes from "./Form.module.css";
import { CgClose } from "react-icons/cg";
const Join_us = () => {
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
                        <p className="mb-4 w-4/5 m-auto">
                            تم ارسال بياناتك الى خدمه العملاء سوف نراجعها ونقوم
                            ب التواصل معك في اقرب وقت
                        </p>
                        <button
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        >
                            شكرا
                        </button>
                    </div>
                </div>
            </div>
            <section className="py-4">
                <p className="text-center font-semibold text-3xl mb-4">
                    انضم الينا 
                </p>
                <div className={classes.form}>
                    <form action="">
                        <div className="text-center">
                            <p className=" text-3xl">
                                ابعت لينا بياناتك وهنتواصل معاك
                            </p>
                        </div>

                        <div className={classes.part}>
                            <div>
                                <label htmlFor="n4">الاسم</label>
                                <input
                                    type="text"
                                    id="n4"
                                    placeholder="ادخل اسمك"
                                />
                            </div>
                            <div>
                                <label htmlFor="n2">رقم الهاتف</label>
                                <input
                                    type="number"
                                    id="n2"
                                    placeholder="ادخل رقم هاتفك  "
                                />
                            </div>
                            <div>
                                <label htmlFor="n4">العنوان</label>
                                <input
                                    type="text"
                                    id="n4"
                                    placeholder="ادخل عنوانك"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="n10"> ملاحظات </label>
                            <textarea
                                id="n10"
                                placeholder="اكتب اي ملاحظه عايز توصلها  لخدمه العملاء"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="">نقدر نتواصل معاك امته ؟</label>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">من </label>
                                    <input type="time" className="w-full" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="">الى </label>
                                    <input type="time" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <button
                        className="center"
                        onClick={() => {
                            setShowAlert(true);
                        }}
                    >
                        تاكيد البيانات
                    </button>
                </div>
            </section>
        </>
    );
};

export default Join_us;
