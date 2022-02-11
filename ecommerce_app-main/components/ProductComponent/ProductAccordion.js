import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { getData } from "../../utils/fecthData";
export default function ProductAccordion() {
  const [hotProducts, setHotProducts] = useState([]);
  useEffect(() => {
    const getHotList = async () => {
      const res = await getData(`products/hot?limit=5`);
      setHotProducts(res);
    };
    getHotList();
  }, []);
  return (
    <div className="sidebar-container">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="sidebar-title-2">
            Sản phẩm nổi bật
          </Accordion.Header>
          <Accordion.Body className="card-product">
            {hotProducts.length > 0 &&
              hotProducts.map((product, index) => (
                <>
                  <Link href={`/products/${product.slug}`} key={index}>
                    <a className="sidebar-product-item">
                      <Image
                        width={65}
                        height={65}
                        src={product.variant[0].img}
                        alt="BeeYou - Thời trang Chất"
                      />
                      <div className="sidebar-product-content">
                        <p>{product.title}</p>
                        <span className="sidebar-product-price">
                          {product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                          ₫
                        </span>
                      </div>
                    </a>
                  </Link>
                </>
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
