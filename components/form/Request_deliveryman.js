"use client";
import React, { useState } from "react";
import classes from "./Form.module.css";
import { CgClose } from "react-icons/cg";
import { TbPhone } from "react-icons/tb";
import Link from "next/link";
const Request_deliveryman = () => {
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
                            خدمه العملاء هتراجع طلبك دلوقتي في خلال دقيقه الى
                            دقيقتين وهتحدد السعر النهائي ووقت التوصيل المتوقع
                        </p>
                        <p className="font-semibold mb-4 text-2xl">
                            التكلفه المتوقعه : <span>20 جنيه</span>
                        </p>
                        <Link href="/myOrders">التوجه الى صفحه طلباتي</Link>
                    </div>
                </div>
            </div>
            <section className="flex flex-col gap-4 py-4">
                <div className={`center ${classes.ads}`}>
                    <picture>
                        <source
                            media="(min-width: 40rem)"
                            srcSet="/image/ads.avif"
                            type="image/avif"
                        />
                        <img
                            src="/image/ads-2.avif"
                            alt="Description of the image"
                        />
                    </picture>
                </div>
                <div className={classes.form}>
                    <form action="">
                        <div className="text-center">
                            <p className="font-semibold text-3xl">
                                ابعت بيانات الاوردر لمندوبك
                            </p>
                            <p>
                                * بعد تاكيد البيانات هيتم مراجعه الطلب من طرف
                                خدمه العملاء لتحديد السعر النهائي ووقت التوصيل
                                على ان يتم اعلامك في خلال دقيقه الى دقيقتين
                            </p>
                            <p>
                                * بنفكرك ان الحد الاقصى للوزن 10 كيلو و يشترط
                                تناسب حجم الطلب مع بوكس الطيار
                            </p>
                            <div className="flex items-center justify-center gap-2 text-red-400">
                                <a
                                    href="tel:01026204006"
                                    className="text-2xl underline"
                                >
                                    للاستفسار تواصل مع خدمه العملاء
                                </a>
                                <TbPhone />
                            </div>
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
                        <div>
                            <label htmlFor="n10"> الطلب </label>
                            <textarea
                                id="n10"
                                placeholder="ادخل الطلب"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="n10"> ملاحظات </label>
                            <textarea
                                id="n10"
                                placeholder="اكتب اي ملاحظه عايز توصلها لمندوبك او خدمه العملاء"
                            ></textarea>
                        </div>
                        <div>
                            <label> جدول الطلب لوقت محدد لو عايز ! </label>
                            <div className="flex gap-4 w-full">
                                <input type="date" className="w-full" />
                                <input type="time" className="w-full" />
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

export default Request_deliveryman;
