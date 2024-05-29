"use client";

import Image from "next/image";
import { isEmail } from "validator";
import "./globals.sass";
import styles from "./page.module.sass";
import { useState } from "react";
import Titlebar from "@/components/titlebar/Titlebar";
import Input from "@/components/input/Input";

export default function Home() {
  const [showAuthForm, setShowAuthForm] = useState<boolean>(true);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const emailComplete = isEmail(email) && email.trim().length > 0;

  return (
    <main>
      {showAuthForm ? (
        <section id="auth-container" className={styles.auth_container}>
          <div id="auth-stepper" className={styles.stepper_container}>
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

          <div id="auth-titlebar">
            <Titlebar title="LOG IN TO YOUR ACCOUNT" />
          </div>

          <div id="auth-body" className={styles.row}>
            <div className={styles.br_2}>
              {currentStep === 0 ? (
                <>
                  <div className="flex1 column mx-24 my-26">
                    <p className={styles.auth_intro}>
                      Enter your Anchorwatch registered email
                    </p>

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

                    <div className={styles.auth_actions}>
                      <a href="#" className={styles.auth_help}>
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
                        className={styles.auth_btn}
                        onClick={() => setCurrentStep(1)}
                        disabled={!emailComplete}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="flex1 column">
              <div className={styles.auth_image}>
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
  );
}
