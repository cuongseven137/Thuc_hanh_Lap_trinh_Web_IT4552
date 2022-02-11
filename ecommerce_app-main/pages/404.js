import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function NotfoundPage(props) {
  return (
    <>
      <Head>
        <title>Page Not Found- BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <div className="container" style={{ margin: "30px auto" }}>
        <div className="gif">
          <Image
            src="https://res.cloudinary.com/beeyou/image/upload/v1642156070/logo/giphy_tud0rk.gif"
            height={300}
            width={300}
            alt=""
          ></Image>
        </div>
        <div className="pagenotfound-content">
          <h1 className="main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you are looking for is not found or never existed.
          </p>
          <Link href="/">
            <a>
              <button className="btn-404">
                Trở về trang chủ <i className="far fa-hand-point-right"></i>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
