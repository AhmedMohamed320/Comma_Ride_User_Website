import React from "react";
import classes from "./page.module.css";
const page = () => {
    return (
        <section className={`mainContainer py-4 ${classes.section}`}>
            <div className={classes.hero}>
                <div className={classes.logo}>
                    <img src="/image/firnas-2.png" alt="dots logo" />
                </div>
                <p>
                    قريبا فيرناس هتساعدك توصل بين اقاليم الشرقيه
                </p>
            </div>
        </section>
    );
};

export default page;
