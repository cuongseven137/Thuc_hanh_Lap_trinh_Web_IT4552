import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { Button, Form } from "react-bootstrap";
import { DataContext } from "../store/GlobalState";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { patchData } from "../utils/fecthData";
import Cookie from "js-cookie";
import ParallaxScrolling from "../components/HomeComponent/ParallaxScrolling";
import { toast } from "react-toastify";
export default function ChangePasswordPage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  useEffect(() => {
    if (!auth.token) {
      router.push("/account/signin");
    }
  }, [auth.token, router]);

  const schema = Yup.object({
    password: Yup.string()
      .min(6, "Mật khẩu nhiều hơn 6 kí tự")
      .max(30, "Mật khẩu ít hơn 30 kí tự")
      .required("Chưa nhập mật khẩu"),
    newPassword: Yup.string()
      .min(6, "Mật khẩu nhiều hơn 6 kí tự")
      .max(30, "Mật khẩu ít hơn 30 kí tự")
      .required("Chưa nhập mật khẩu mới")
      .notOneOf(
        [Yup.ref("password"), null],
        "Mật khẩu cũ và mật khẩu mới không được trùng"
      ),

    cf_newPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Mật khẩu không trùng"
    ),
  });

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: process.env.BASE_URL });
    localStorage.removeItem("firstLogin");
    localStorage.removeItem("__next__cart__beeyou");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "ADD_CART", payload: [] });
  };

  const handleSubmit = async (values, { resetForm }) => {
    const userData = {
      password: values.password,
      newPassword: values.newPassword,
    };

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });

    const res = await patchData(
      "users/profile/changePassword",
      userData,
      auth.token
    );
    if (res.err) {
      resetForm({
        values: { password: "", newPassword: "", cf_newPassword: "" },
      });
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

    if (res.msg) {
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
      handleLogout();
      router.push("/account/signin");
    }
  };

  return (
    <>
      <Head>
        <title>Đổi mật khẩu - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>

      <section className="wrapper" style={{ marginBottom: "30px" }}>
        <div className="page-header">
          <h1>Đổi mật khẩu</h1>
        </div>
        <hr></hr>
        <div className="card" style={{ width: "400px", margin: "auto" }}>
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                password: "",
                newPassword: "",
                cf_newPassword: "",
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
                        type="password"
                        placeholder="Nhập mật khẩu cũ"
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={errors.password}
                      />
                      <label htmlFor="floatingInputCustom">
                        Nhập mật khẩu cũ
                      </label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Floating>
                      <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu mới"
                        name="newPassword"
                        value={values.newPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={errors.newPassword}
                        isValid={touched.newPassword && !errors.newPassword}
                      />
                      <label htmlFor="floatingPasswordCustom">
                        Nhập mật khẩu mới
                      </label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.newPassword}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword cf">
                    <Form.Floating>
                      <Form.Control
                        type="password"
                        placeholder="Nhập lại mật khẩu mới"
                        name="cf_newPassword"
                        value={values.cf_newPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={errors.cf_newPassword}
                        isValid={
                          touched.cf_newPassword && !errors.cf_newPassword
                        }
                      />
                      <label htmlFor="floatingPasswordCustom">
                        Nhập lại mật khẩu mới
                      </label>
                      <Form.Control.Feedback
                        type="invalid"
                        style={{ textAlign: "left" }}
                      >
                        {errors.cf_newPassword}
                      </Form.Control.Feedback>
                    </Form.Floating>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Đổi mật khẩu
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
