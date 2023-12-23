import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <div>
      <div className={styles.contact}>
        <div className={styles.contact_header}>
          <div className={styles.overlay}></div>
          <p className={`${styles.ellu_p} drop-in`}> Contact Us</p>
        </div>

        <div className={styles.contact_wrapper}>
          <div className="container-xl">
            <div className={styles.address}>
              <h4>We are located at:</h4>
              <p>
                Bethel land, Glory Tabernacle Ministry, Ojurin Bodija, Ibadan
              </p>
            </div>

            <div className={styles.contact_cta}>
              <div className={styles.contact_card}>
                <div className={styles.icon_wrapper}>
                  <img src="./assets/images/email.png" alt="" width="100%" />
                </div>
                <div className={styles.contact_details}>
                  <h4>Email</h4>
                  <div>
                    <p>support@email.com</p>
                  </div>
                </div>
              </div>
              <div className={styles.contact_card}>
                <div className={styles.icon_wrapper}>
                  <img src="./assets/images/phone.png" alt="" width="100%" />
                </div>
                <div className={styles.contact_details}>
                  <h4>Call us</h4>
                  <div>
                    <p>+234-818-074-6707</p>
                  </div>
                </div>
              </div>

              <div className={styles.contact_card}>
                <div className={styles.icon_wrapper}>
                  <img
                    src="./assets/images/location-pin.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className={styles.contact_details}>
                  <h4>Address</h4>
                  <div>
                    <p>support@email.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contact_form}>
          <div className="container mx-auto">
            <div className="row gx-5">
              <div className={`col-md-8 ${styles.form_container}`}>
                <div className="mb-5">
                  <h3>Get in touch</h3>
                  <p>You can fill the form and we will get back to you. </p>
                </div>

                <div className="footer-1">
                  <div className="footertext">
                    <form
                      id="contact-form"
                      role="form"
                      method="post"
                      enctype="text/plain"
                      action="mailto:noahtochukwu10@gmail.com">
                      <div className="row gy-4 mb-4">
                        <div className="col-md-6">
                          <div className="form-group">
                            {/* <!-- <label for="form_email">Email *</label> --> */}
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Email Address*"
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {/* <!-- <label for="form_need">Full Name *</label> --> */}
                            <input
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              placeholder="Full Name*"
                              data-error="Please enter your name."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-5">
                          <div className="form-group">
                            {/* <!-- <label for="form_message">Message *</label> --> */}
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."></textarea>
                          </div>
                        </div>
                        <br />
                        <div className="col-md-12">
                          <input
                            type="submit"
                            className={`btn btn-warning pt-2 btn-block ${styles.submit_button}
  `}
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <!-- <div className="social-links">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div> --> */}
                </div>
              </div>
              {/* <!-- <div className="col-sm"></div> --> */}
              <div className="col-md-4">
                <div className={styles.map}>
                  <iframe
                    title=""
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.2974929237753!2d3.9175446!3d7.4322955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed51c6f2bf8f%3A0x2baa9ae9082a5ea0!2sGlory%20Tabernacle%20Ministry!5e0!3m2!1sen!2sng!4v1678534932864!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
