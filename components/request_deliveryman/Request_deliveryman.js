import React from "react";
import classes from "./Request_deliveryman.module.css";
const Request_deliveryman = () => {
    return (
        <section className="flex flex-col gap-4 py-4">
            <div className={`center ${classes.ads}`}>
                <img src="/image/ads.avif" alt="" />
            </div>
            <div className={classes.form}>
                <form action="">
                    <p className="text-center font-semibold">
                        ابعت بيانات الاوردر لمندوبك
                    </p>
                    <div className={classes.part}>
                        <p>بيانات الي هيستلم منه المندوب (من)</p>
                        <div>
                            <label htmlFor="n4">عنوان</label>
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
                            <label htmlFor="n4">عنوان</label>
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
                <button className="center">
                    تاكيد
                </button>
            </div>
        </section>
    );
};

export default Request_deliveryman;
