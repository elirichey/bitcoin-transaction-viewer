"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../app/page.module.sass";
import Titlebar from "../titlebar/Titlebar";
import Input from "../input/Input";

interface Props {
  closeModal: () => void;
}
export default function AddNewAddress(props: Props) {
  const { closeModal } = props;

  const [newAddress, setNewAddress] = useState<string>("");
  const newAddressComplete = newAddress.trim().length > 0;

  return (
    <div className="modal_container">
      <div className="background" onClick={closeModal} />

      <section id="form-container" className={styles.form_container}>
        <div id="form-stepper" className={styles.stepper_container}>
          <div className={styles.stepper}>
            <div className={styles.stepper_item_complete}></div>
            <div className={styles.stepper_hr}></div>
            <div className={styles.stepper_item}></div>
          </div>

          <button className={styles.close_btn} onClick={closeModal}>
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
          <Titlebar title="ADD BTC ADDRESS" />
        </div>

        <div id="form-body" className={styles.row}>
          <div className={styles.br_2}>
            <div className="flex1 column mx-24 my-26">
              <p className={styles.form_intro}>
                Enter the address below to add it to your vault.
              </p>

              <Input
                name="address"
                label="ADDRESS"
                value={newAddress}
                onChange={(e: string) => setNewAddress(e)}
                type="newAddress"
                placeholder="Enter address here"
                isComplete={newAddressComplete}
                error={null}
                subtext="46 characters maxiumum"
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
                  className={styles.form_btn}
                  //onClick={() => setCurrentStep(1)}
                  disabled={!newAddressComplete}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="flex1 column">
            <div className="form_image">
              <Image
                src="/svg/radar.svg"
                alt="Add New Address"
                width={1050 / 2}
                height={1050 / 2}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
