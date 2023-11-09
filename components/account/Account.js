import React from "react";
import classes from "./Account.module.css";
import { LuWallet2 } from "react-icons/lu";
const Account = () => {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div className="text-center">
                    <p className="text-4xl font-semibold pb-4">
                        اهلا احمد محمد
                    </p>
                    <p className="text-2xl">#4524</p>
                </div>
                <div className={classes.wallet}>
                    <div className={classes.icon}>
                        <LuWallet2 />
                    </div>
                    <p>
                        45 <span className="text-3xl font-medium">جنيه</span>
                    </p>
                    <p>محفظتك</p>
                </div>
                <div className={classes.lastOrder}>
                    <div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Account;
