import React from "react";
import classes from "./Offers.module.css";
import Link from "next/link";
const Offers = () => {
    return (
        <section className="flex flex-col gap-8 py-4">
            <div className={classes.part}>
                <p className="text-4xl font-semibold text-center">
                    عرضنا اليوم
                </p>
                <div>
                    <Link href="/request_deliveryman">
                        <picture >
                            <source
                                media="(min-width: 40rem)"
                                srcSet="/image/ads.avif"
                                type="image/avif"
                                alt="offer"
                                className="w-full rounded-lg"
                            />
                            <img
                                src="/image/ads-2.avif"
                                alt="offer"
                                className="w-full rounded-lg"
                            />
                        </picture>
                    </Link>
                </div>
            </div>
            <div className={classes.part}>
                <div>
                    <p className="text-4xl font-semibold text-center">
                        باقات دوتس
                    </p>
                    <p className="text-2xl text-center">
                        اشترك في باقاتنا ووفر اكتر
                    </p>
                </div>
                <div className={classes.col3}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Offers;
