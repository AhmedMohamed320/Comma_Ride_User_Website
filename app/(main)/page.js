import Link from "next/link";
import classes from "./Home.module.css";
export default function Home() {
    return (
        <section
            className={`mainContainer flex flex-col gap-8 ${classes.section}`}
        >
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
                            هتاكله سخن هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت
                            يعني هتاكله سخن
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
                            هتاكله سخن هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت
                            يعني هتاكله سخن
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
                            هتاكله سخن هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت
                            يعني هتاكله سخن
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
                            هتاكله سخن هنوصل اكلك من مطعمك الي بتحبه في اسرع وقت
                            يعني هتاكله سخن
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.join}>
                <div className="flex flex-col gap-4 p-4">
                    <p className="text-3xl font-semibold">انضم إلينا</p>
                    <p>
                        <span>كن جزء من فريق شركتنا</span> <br />
                        <span>سجل بياناتك وسوف يطلع فريقنا عليها</span>
                    </p>
                    <Link href="">سجل بياناتك</Link>
                </div>
                <div>
                    <img src="/image/delivery.png" alt="delivery" />
                </div>
            </div>
        </section>
    );
}
