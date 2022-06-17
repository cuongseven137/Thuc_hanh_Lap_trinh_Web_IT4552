import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fecthData";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { toast } from "react-toastify";

export default function SigninPage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const schema = Yup.object({
    email: Yup.string()
      .email("Sai định dạng email")
      .max(30, "Email phải ít hơn 30 kí tự")
      .required("Email còn thiếu"),
    password: Yup.string()
      .min(6, "Mật khẩu nhiều hơn 6 kí tự")
      .max(30, "Mật khẩu ít hơn 30 kí tự")
      .required("Chưa nhập mật khẩu"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const userData = { email: values.email, password: values.password };

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });

    const res = await postData("users/signin", userData);

    if (res.errCode === 1) {
      resetForm({ values: { email: "", password: "" } });
      dispatch({
        type: "NOTIFY",
        payload: {},
      });
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
    if (res.errCode === 2) {
      resetForm({ values: { ...values, password: "" } });
      dispatch({
        type: "NOTIFY",
        payload: {},
      });
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

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: process.env.BASE_URL,
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      router.push("/");
    }
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Đăng nhập - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <section className="paddingTop30">
        <div className="wrapper">
          <div className="account-container">
            <div className="account-header">
              <h1>Đăng nhập</h1>
            </div>
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                email: "",
                password: "",
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
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Ghi nhớ đăng nhập"
                      style={{ textAlign: "left" }}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Đăng nhập
                  </Button>
                  <Link href="/">
                    <a className="displayBlock">Trở về</a>
                  </Link>
                  <Link href="/account/register">
                    <a className="displayBlock">Đăng ký</a>
                  </Link>
                  <Link href="#">
                    <a className="displayBlock">Quên mật khẩu?</a>
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
