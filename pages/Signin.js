import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Formik, Form } from "formik";

const Signin = () => {
  return (
    <div>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              {" "}
              we d happy to join us
              <Link href={"/"}>Go To Store </Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best Eshopping services in the world.
            </p>
            <Formik>
              {(form) => {
                return <Form>
                  <input type="text" />
                </Form>;
              }}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
