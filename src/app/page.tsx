"use client";

import Image from "next/image";
import { useContext } from "react";
import { isEmail } from "validator";
import "./globals.sass";
import styles from "./page.module.sass";
import { useEffect, useState } from "react";
import Titlebar from "@/components/titlebar/Titlebar";
import Input from "@/components/input/Input";
import Countdown from "@/components/countdown/Countdown";
import { UserContext } from "@/context/UserContext";
import { magic } from "@/libs/magic";
import { redirect } from "next/navigation";

export default function Home() {
  const [user, setUser] = useContext(UserContext);
  const [showAuthForm, setShowAuthForm] = useState<boolean>(true);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [timeout, setTimeout] = useState<number>(30);

  const [email, setEmail] = useState<string>("");
  const emailComplete = isEmail(email) && email.trim().length > 0;

  useEffect(() => {
    if (currentStep === 1) {
      if (timeout !== 0) {
        window.setTimeout(() => setTimeout(timeout - 1), 1000);
      }
    }
  }, [currentStep, timeout]);

  const submitLogin = async (e: any, skipE?: boolean) => {
    if (!skipE) {
      e.preventDefault();
      setCurrentStep(1);
    }

    try {
      const didToken: any = await magic.auth.loginWithEmailOTP({
        email,
      });

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${didToken}`,
        },
      });

      if (res.ok) {
        const userMetadata = await magic.user.getMetadata();
        console.log({ userMetadata });
        setUser(userMetadata);
        redirect("/dashboard");
      } else {
        console.error({ responseError: res });
      }
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    user?.issuer && redirect("/dashboard");
  }, [user]);

  const resendVerification = () => {
    setTimeout(30);
    submitLogin(false, true);
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      <main>
        {showAuthForm ? (
          <section id="form-container" className={styles.form_container}>
            <div id="form-stepper" className={styles.stepper_container}>
              {currentStep === 0 ? (
                <></>
              ) : (
                <button
                  className={styles.back_btn}
                  onClick={() => setCurrentStep(0)}
                >
                  <Image
                    src="/svg/left.svg"
                    alt="Back"
                    width={15}
                    height={15}
                    priority
                  />
                </button>
              )}

              <div className={styles.stepper}>
                <div className={styles.stepper_item_complete}></div>
                <div className={styles.stepper_hr}></div>
                <div
                  className={
                    currentStep === 1
                      ? styles.stepper_item_complete
                      : styles.stepper_item
                  }
                ></div>
              </div>

              <button
                className={styles.close_btn}
                onClick={() => setShowAuthForm(false)}
              >
                <Image
                  src="/svg/close.svg"
                  alt="Close"
                  width={15}
                  height={15}
                  priority
                />
              </button>
            </div>

            <div id="form-titlebar">
              <Titlebar title="LOG IN TO YOUR ACCOUNT" />
            </div>

            <div id="form-body" className={styles.row}>
              <div className={styles.br_2}>
                {currentStep === 0 ? (
                  <div className="flex1 column mx-24 my-26">
                    <p className={styles.form_intro}>
                      Enter your Anchorwatch registered email
                    </p>

                    <form onSubmit={submitLogin}>
                      <Input
                        name="email"
                        label="EMAIL"
                        value={email}
                        onChange={(e: string) => setEmail(e)}
                        type="email"
                        placeholder="Email"
                        isComplete={emailComplete}
                        error={
                          email.trim() !== "" && !emailComplete
                            ? "Please enter a valid email address"
                            : null
                        }
                      />

                      <div className={styles.form_actions}>
                        <a href="#" className={styles.form_help}>
                          Need Help?
                          <Image
                            src="/svg/share.svg"
                            alt="Help Icon"
                            width={16}
                            height={16}
                            priority
                          />
                        </a>

                        <button
                          type="submit"
                          className={styles.form_btn}
                          disabled={!emailComplete}
                        >
                          Next
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="flex1 column mx-24 my-26">
                    <p className={styles.form_intro}>
                      Check your inbox for a sign in link, which is valid for 10
                      minutes. If you didn't receive it within 30 seconds,
                      please resend to receive another link.
                    </p>

                    <div className={styles.form_final_actions}>
                      <button
                        className={styles.form_btn}
                        onClick={() => resendVerification()}
                        disabled={timeout !== 0}
                      >
                        Resend
                      </button>

                      {timeout === 0 ? <></> : <Countdown timeout={timeout} />}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex1 column">
                <div className={styles.form_image}>
                  <Image
                    src={
                      currentStep === 0 ? "/svg/auth-1.svg" : "/svg/auth-2.svg"
                    }
                    alt="Auth Image"
                    width={1050 / 2}
                    height={1050 / 2}
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
      </main>
    </UserContext.Provider>
  );
}
