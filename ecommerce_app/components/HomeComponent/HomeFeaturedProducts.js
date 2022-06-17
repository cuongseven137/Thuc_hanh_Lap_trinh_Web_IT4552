import React, { useEffect, useState } from "react";
import Tabs from "../MyTabs/Tabs";
import Panel from "../MyTabs/Panel";
import Link from "next/link";
import ProductList from "../ProductComponent/ProductList";
import { getData } from "../../utils/fecthData";

function HomeFeaturedProducts(props) {
  const [hotProducts, setHotProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const getHotList = async () => {
      const res = await getData(`products/hot?limit=8`);
      setHotProducts(res);
    };
    getHotList();
  }, []);

  useEffect(() => {
    const getHotList = async () => {
      const res = await getData(`products/newProduct?limit=8`);
      setNewProducts(res);
    };
    getHotList();
  }, []);

  return (
    <section className="home-featured paddingTop30">
      <div className="wrapper">
        <div className="home-section-header">
          <h2>BeeYou</h2>
        </div>
        <Tabs
          class="featured-tab-panel"
          classSelected="featured-tab-panel-selected"
        >
          <Panel title="Sản phẩm nổi bật">
            {hotProducts.length > 0 && (
              <ProductList products={hotProducts}></ProductList>
            )}
            <div style={{ textAlign: "center" }}>
              <Link href="/collections/top-ban-chay">
                <a className="btnViewMore">Xem tất cả sản phẩm</a>
              </Link>
            </div>
          </Panel>
          <Panel title="Sản phẩm mới bán">
            {hotProducts.length > 0 && (
              <ProductList products={newProducts}></ProductList>
            )}
            <div style={{ textAlign: "center" }}>
              <Link href="/collections/san-pham-moi">
                <a className="btnViewMore">Xem tất cả sản phẩm</a>
              </Link>
            </div>
          </Panel>
        </Tabs>
      </div>
    </section>
  );
}

export default HomeFeaturedProducts;
