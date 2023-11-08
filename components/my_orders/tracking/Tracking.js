import React from "react";
import classes from "./Tracking.module.css";
import Map from "@/components/map/Map";
import { TbPhone } from "react-icons/tb";
import Link from "next/link";
const Tracking = () => {
    return (
        <section className={classes.section}>
            <p className="text-3xl font-semibold">طلب رقم 544545</p>
            <div>
                <div className={classes.map}>
                    <Map />
                </div>
                <div className={classes.details}>
                    <div>
                        <p className="text-2xl font-semibold text-center ">
                            رحله الطيار ليك
                        </p>
                        <p className="text-2xl text-center pb-12">
                            طلبك في الطريق ليك خليك جاهز
                        </p>
                    </div>

                    <div className={classes.tracking}>
                        <div className={classes.active}>
                            <p>مندوبك تحرك</p>
                            <p>01:00</p>
                        </div>
                        <div>
                            <p>وصول مكان الاستلام</p>
                            <p>--:--</p>
                        </div>
                        <div>
                            <p>الاستلام</p>
                            <p>--:--</p>
                        </div>
                        <div>
                            <p>وصول مكان التسليم</p>
                            <p>--:--</p>
                        </div>
                        <div>
                            <p>التسليم</p>
                            <p>--:--</p>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <img
                            src="/image/tracking.gif"
                            alt="tracking delivery man"
                        />
                    </div>

                    <div className={classes.deliveryMan}>
                        <p>الطيار محمد احمد</p>
                        <a href="tel:01280626320">
                            <TbPhone />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tracking;
