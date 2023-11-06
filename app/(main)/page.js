import classes from "./Home.module.css";
export default function Home() {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.hero}>
                <div className={classes.logo}>
                    <p>دوتس</p>
                    <img src="/image/dots-2.png" alt="dots logo" />
                </div>
                <p>هنساعدك توصل اي حاجه من اي مكان ل اي مكان داخل الزقازيق</p>
            </div>
            <div className={classes.service}>
                <div>
                    <div className={classes.img}>
                        <img src="/image/food.webp" alt="food" />
                    </div>
                    <div className={classes.text}>
                        <p>اكلك</p>
                        <p>
                            هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت يعني
                            هتاكله سخن
                            هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت يعني
                            هتاكله سخن
                        </p>
                    </div>
                </div>
                <div>
                    <div className={classes.img}>
                        <img src="/image/grocery.png" alt="grocery" />
                    </div>
                    <div className={classes.text}>
                        <p>تسويقتك</p>
                        <p>
                            هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت يعني
                            هتاكله سخن
                            هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت يعني
                            هتاكله سخن
                        </p>
                    </div>
                </div>
                <div>
                    <div className={classes.img}>
                        <img src="/image/pharmacy.webp" alt="pharmacy" />
                    </div>
                    <div className={classes.text}>
                        <p>ادويتك</p>
                        <p>
                            هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت يعني
                            هتاكله سخن
                            هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت يعني
                            هتاكله سخن
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
