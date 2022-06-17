import React, { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fecthData";
import { Form, Button } from "react-bootstrap";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const { state, dispatch } = useContext(DataContext);

  const router = useRouter();

  const schema = Yup.object({
    firstName: Yup.string()
      .max(255, "Tối đa 255 kí tự")
      .required("Cần phải nhập"),
    lastName: Yup.string()
      .max(255, "Tối đa 255 kí tự")
      .required("Cần phải nhập"),
    email: Yup.string()
      .email("Sai định dạng email")
      .max(30, "Email phải ít hơn 30 kí tự")
      .required("Email còn thiếu"),
    password: Yup.string()
      .min(6, "Mật khẩu nhiều hơn 6 kí tự")
      .max(30, "Mật khẩu ít hơn 30 kí tự")
      .required("Chưa nhập mật khẩu"),

    cf_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Mật khẩu không trùng"
    ),
  });
  const handleSubmit = async (values, { resetForm }) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });
    const res = await postData("users/register", userData);

    if (res.err) {
      resetForm({
        values: { ...values, email: "", password: "", cf_password: "" },
      });
      dispatch({ type: "NOTIFY", payload: {} });
      return toast.error(res.err, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    dispatch({
      type: "NOTIFY",
      payload: {},
    });
    toast.success(res.msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    router.push("/account/signin");
  };

  return (
    <>
      <Head>
        <title>Đăng ký - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className="paddingTop30">
        <div className="wrapper">
          <div className="account-container">
            <div className="account-header">
              <h1>Tạo tài khoản</h1>
            </div>
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                cf_password: "",
              }}
            >
              {({
                handleSubmit,
                handleBlur,
                handleChange,
                values,
                touched,
                errors,
              }) => (
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="form-account"
                >
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="Nhập họ"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                        isInvalid={errors.lastName}
                      />
                      <label htmlFor="floatingInputCustom">Họ</label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tên"
                        name="firstName"
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                        isInvalid={errors.firstName}
                      />
                      <label htmlFor="floatingInputCustom">Tên</label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Floating>
                      <Form.Control
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={errors.email}
                      />
                      <label htmlFor="floatingInputCustom">Email</label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Floating>
                      <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu"
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={errors.password}
                        isValid={touched.password && !errors.password}
                      />
                      <label htmlFor="floatingPasswordCustom">Mật khẩu</label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword cf">
                    <Form.Floating>
                      <Form.Control
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        name="cf_password"
                        value={values.cf_password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={errors.cf_password}
                        isValid={touched.cf_password && !errors.cf_password}
                      />
                      <label htmlFor="floatingPasswordCustom">
                        Nhập lại mật khẩu
                      </label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.cf_password}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Đăng ký
                  </Button>
                  <Link href="/account/signin">
                    <a className="displayBlock">Đăng nhập</a>
                  </Link>
                  <Link href="/">
                    <a className="displayBlock">Trở về</a>
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
