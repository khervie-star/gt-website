import React from "react";
import pioneerPastor from "../../../assets/images/dr_obed.JPG";
import mummyChy from "../../../assets/images/dr_chy.JPG";
import pioneerPastorAndMummyChy from "../../../assets/images/combined.JPG";
import styles from "./churchHistory.module.css";
import { HeaderOverlay } from "../../../components";

export const ChurchHistory = () => {
  return (
    <>
      <HeaderOverlay>In the beginning...</HeaderOverlay>
      <div
        class={`container-xl mx-auto py-5 d-flex  flex-column flex-md-row ${styles.padding_top}`}>
        <div class="col-12 col-md-6 d-flex flex-column ">
          <div class="d-flex px-3 gap-3">
            <div
              class={`card ${styles.card}  ${styles.IC1} rounded-5 border-0`}>
              <img
                src={pioneerPastor}
                width="100%"
                style={{ objectFit: "cover" }}
                class={`${styles.card_img} rounded-4`}
                alt=""
                data-aos="fade-up"
                data-aos-offset="-100"
                data-aos-delay="120"
                data-aos-duration="7500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </div>
            <div class={`card ${styles.card} ${styles.IC2} rounded-5 border-0`}>
              <img
                src={pioneerPastorAndMummyChy}
                style={{ objectFit: "cover" }}
                class={`${styles.card_img} rounded-4`}
                alt=""
                data-aos="fade-up"
                data-aos-offset="-55"
                data-aos-delay="60"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </div>
            <div class={`card ${styles.card} ${styles.IC3} rounded-5 border-0`}>
              <img
                src={mummyChy}
                style={{ objectFit: "cover" }}
                class={`${styles.card_img} rounded-4`}
                alt=""
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              />
            </div>
          </div>
        </div>

        <div
          class={`col-12 col-md-6 mt-4 mt-md-0 ${styles.padding_left}`}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center">
          <h1 class={`display-4 fw-bold text-black ${styles.title}`}>
            Uniting people with purpose
          </h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            accusamus, quae tempore molestias autem cupiditate corrupti illum
            laudantium, ipsum laboriosam odio, ipsam ratione quisquam commodi! A
            officiis voluptates ut sapiente!
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            accusamus, quae tempore molestias autem cupiditate corrupti illum
            laudantium, ipsum laboriosam odio, ipsam ratione quisquam commodi! A
            officiis voluptates ut sapiente!
          </p>
          <button type="button" class="btn-primary rounded-3 custom-button">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};
