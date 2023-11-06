import React from "react";
import classes from "./page.module.css";
const page = () => {
    return (
        <section className={`mainContainer py-4 ${classes.section}`}>
            <div className={classes.hero}>
                <div className={classes.logo}>
                    <img src="/image/cube-2.png" alt="dots logo" />
                </div>
                <p>
                    قريبا كيوب هتساعدك توصل بين محافظات مصر كلها
                </p>
            </div>
        </section>
    );
};

export default page;
