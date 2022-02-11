import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CollectionsSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imgs = [
    {
      file: "https://res.cloudinary.com/beeyou/image/upload/v1636945795/beecase/beecase_6ae43e6632cb4ce18d0972c782f7edd5_large_qh0zwf.png",
      link: "/collections/op-lung",
    },
    {
      file: "https://res.cloudinary.com/beeyou/image/upload/v1636945814/beetee/beetee_5a2df0b4d92e4439ab0e77598ec5ed57_large_be0snc.webp",
      link: "/collections/ao-thun",
    },
    {
      file: "https://res.cloudinary.com/beeyou/image/upload/v1636945748/beebag/beebag_31d7440d436d4e2ca11f85e34bb9a01e_large_zvjkvf.webp",
      link: "/collections/beebag",
    },
    {
      file: "https://res.cloudinary.com/beeyou/image/upload/v1636945760/beecarry/beecarry_large_xw6jm0.webp",
      link: "/collections/beecarry",
    },
  ];

  return (
    <section className="home-collection paddingTop30">
      <div className="wrapper">
        <div className="home-section-header">
          <h2>Bộ sưu tập</h2>
        </div>
        <div className="home-collection-thumbnail">
          <Container>
            <Slider {...settings}>
              {imgs.map((img, index) => (
                <Link key={index} href={img.link}>
                  <a>
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      src={img.file}
                      alt="Túi Totebag Xuongrong"
                    />
                  </a>
                </Link>
              ))}
            </Slider>
          </Container>
        </div>
      </div>
    </section>
  );
}
