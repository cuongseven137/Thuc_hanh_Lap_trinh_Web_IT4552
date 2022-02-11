import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { patchData } from "../../utils/fecthData";
import { toast } from "react-toastify";

function ProfilePage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const [avatar, setAvatar] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!auth.token) {
      router.push("/account/signin");
    }
  }, [auth.token, router]);

  const schema = Yup.object({
    firstName: Yup.string()
      .max(255, "Tối đa 255 kí tự")
      .required("Cần phải nhập"),
    lastName: Yup.string()
      .max(255, "Tối đa 255 kí tự")
      .required("Cần phải nhập"),
    phone: Yup.string().matches(
      /((09|03|07|08|05)+([0-9]{8})\b)/g,
      "Số điện thoại không đúng định dạng"
    ),
  });

  const fileInputRef = useRef();
  const changeAvatar = (e) => {
    // const file = e.target.files[0];
    // if (!file)
    //   return dispatch({
    //     type: "NOTIFY",
    //     payload: { err: "File does not exist." },
    //   });
    // if (
    //   file.type !== "image/jpeg" &&
    //   file.type !== "image/png" &&
    //   file.type !== "image/gif"
    // )
    //   //1mb
    //   return dispatch({
    //     type: "NOTIFY",
    //     payload: { err: "Đây không phải tệp hình ảnh" },
    //   });
    // setAvatar({ ...data, avatar: file });
  };

  const handleSubmit = async (values, { resetForm }) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
    };
    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });

    patchData("users/profile/edit", userData, auth.token).then((res) => {
      if (res.err) {
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

      dispatch({ type: "NOTIFY", payload: {} });
      dispatch({
        type: "AUTH",
        payload: {
          token: auth.token,
          user: {
            firstName: res.user.firstName,
            lastName: res.user.lastName,
            email: auth.user.email,
            phone: res.user.phone,
            address: [],
          },
        },
      });
      return toast.success(res.msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };

  return (
    <>
      <Head>
        <title>Tài khoản - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling />
      <section className="wrapper" style={{ marginBottom: "30px" }}>
        <div className="page-header">
          <h1>Tài khoản của tôi</h1>
        </div>
        <hr></hr>
        {auth.user ? (
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{
              firstName: auth.user.firstName,
              lastName: auth.user.lastName,
              phone: auth.user.phone,
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
              <Form noValidate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card" style={{ height: "100%" }}>
                      <div className="card-body">
                        <div
                          className="d-flex flex-column align-items-center text-center"
                          style={{ height: "100%" }}
                        >
                          <Image
                            src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
                            alt="avatar"
                            className="rounded-circle"
                            width={150}
                            height={150}
                          />

                          <div className="text-center btn-upload-avatar mt-3">
                            <button
                              onClick={() => fileInputRef.current.click()}
                              className="btn btn-info"
                            >
                              Thay đổi ảnh
                            </button>
                            <input
                              onChange={changeAvatar}
                              multiple={false}
                              ref={fileInputRef}
                              type="file"
                              hidden
                            />
                          </div>

                          {/* <div className="mt-3">
                            <h4>{`${auth.user.lastName} ${auth.user.firstName}`}</h4>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row row-profile">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Tên</h6>
                          </div>
                          <div className="col-sm-9">
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
                            {/* {auth.user.firstName} */}
                            <Form.Control.Feedback
                              type="invalid"
                              style={{ textAlign: "left" }}
                            >
                              {errors.firstName}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <hr />
                        <div className="row row-profile">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Họ</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
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

                            {/* {auth.user.lastName} */}
                            <Form.Control.Feedback
                              type="invalid"
                              style={{ textAlign: "left" }}
                            >
                              {errors.lastName}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <hr />
                        <div className="row row-profile">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Số điện thoại</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <Form.Control
                              type="text"
                              placeholder="Nhập số điện thoại"
                              name="phone"
                              value={values.phone}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              isValid={touched.phone && !errors.phone}
                              isInvalid={errors.phone}
                            />
                            {/* {auth.user.phone} */}
                            <Form.Control.Feedback
                              type="invalid"
                              style={{ textAlign: "left" }}
                            >
                              {errors.phone}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <hr />
                        <div className="row row-profile">
                          <div className="col-sm-3">
                            <h6 className="mb-0">E-mail</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <Form.Control
                              type="email"
                              placeholder=""
                              disabled
                              value={auth.user.email}
                            />
                          </div>
                        </div>
                        {/* <hr />
                  <div className="row row-profile">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Địa chỉ</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Form.Control type="email" placeholder="Enter email" />
                      {auth.user.address}
                    </div>
                  </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3" style={{ textAlign: "right" }}>
                    <Button variant="primary" type="submit">
                      Đăng ký
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ) : null}
      </section>
    </>
  );
}

export default ProfilePage;
