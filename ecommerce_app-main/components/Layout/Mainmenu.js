import React from "react";
import Link from "next/link";
function Mainmenu(props) {
  const menu = {
    menu: [
      //menu1
      {
        content: "BeeCase",
        link: "/collections/op-lung",
        menuTab: [
          {
            content: "Dành cho nam",
            link: "/collections/op-lung-nam",
            // menuTab: [
            //   {
            //     content: "Ốp Lưng Animal",
            //     link: "/collections/op-lung-animal",
            //   },
            //   {
            //     content: "Ốp Lưng Biker",
            //     link: "/collections/op-lung-biker",
            //   },
            //   {
            //     content: "Ốp Lưng Marble",
            //     link: "/collections/op-lung-marble",
            //   },
            //   {
            //     content: "Ốp Lưng Gạch Bông",
            //     link: "/collections/op-lung-gach-bong",
            //   },
            //   {
            //     content: "Ốp Lưng Gym",
            //     link: "/collections/op-lung-gym",
            //   },
            //   {
            //     content: "Ốp Lưng Hamsa",
            //     link: "/collections/op-lung-hamsa",
            //   },
            //   {
            //     content: "Ốp Lưng Phượt Thủ",
            //     link: "/collections/op-lung-phuot-thu",
            //   },
            //   {
            //     content: "Samurai-Geisha",
            //     link: "/collections/op-lung-samurai-geisha",
            //   },
            //   {
            //     content: "Ốp Lưng Thuglife",
            //     link: "/collections/op-lung-thuglife",
            //   },
            //   {
            //     content: "Ốp Lưng Space",
            //     link: "/collections/op-lung-space",
            //   },
            //   {
            //     content: "Ốp Lưng Đội Bóng",
            //     link: "/collections/op-lung-doi-bong",
            //   },
            //   {
            //     content: "Ốp Lưng Cầu Thủ",
            //     link: "/collections/op-lung-cau-thu",
            //   },
            //   {
            //     content: "Ốp Lưng Japan",
            //     link: "/collections/op-lung-japan",
            //   },
            //   {
            //     content: "Ốp Lưng Camo",
            //     link: "/collections/op-lung-camo",
            //   },
            //   {
            //     content: "Ốp Lưng Vape",
            //     link: "/collections/op-lung-vape",
            //   },
            //   {
            //     content: "Ốp Lưng Jean&Suit",
            //     link: "/collections/op-lung-jean-suit",
            //   },
            //   {
            //     content: "Ốp Lưng Moto",
            //     link: "/collections/op-lung-moto",
            //   },
            //   {
            //     content: "Ốp Lưng Shin Bút Chì",
            //     link: "/collections/op-lung-shin-but-chi",
            //   },
            //   {
            //     content: "Ốp Lưng Guetetama",
            //     link: "/collections/op-lung-guetetama",
            //   },
            //   {
            //     content: "Ốp Lưng K-Pop",
            //     link: "/collections/op-lung-k-pop",
            //   },
            //   {
            //     content: "Ốp Lưng Alan Walker",
            //     link: "/collections/op-lung-alan-walker",
            //   },
            //   {
            //     content: "Ốp Lưng One Piece",
            //     link: "/collections/op-lung-one-piece",
            //   },
            //   {
            //     content: "Ốp Lưng Brand",
            //     link: "/collections/op-lung-brand",
            //   },
            //   {
            //     content: "Ốp Lưng Brown&Cony",
            //     link: "/collections/op-lung-brown-cony",
            //   },
            //   {
            //     content: "Ốp Lưng Cá Xinh",
            //     link: "/collections/op-lung-ca-xinh",
            //   },
            //   {
            //     content: "Ốp Lưng Don't Touch",
            //     link: "/collections/op-lung-dont-touch",
            //   },
            //   {
            //     content: "Ốp Lưng Funny Space",
            //     link: "/collections/op-lung-funny-space",
            //   },
            // ],
          },
          //
          {
            content: "Dành cho nữ",
            link: "/collections/danh-cho-nu",
            // menuTab: [
            //   {
            //     content: "Ốp Lưng In Hoa",
            //     link: "/collections/op-lung-in-hoa",
            //   },
            //   {
            //     content: "Ốp Lưng Brand",
            //     link: "/collections/op-lung-brand",
            //   },
            //   {
            //     content: "Ốp Lưng Cute",
            //     link: "/collections/op-lung-cute",
            //   },
            //   {
            //     content: "Ốp Lưng Girly",
            //     link: "/collections/op-lung-girly",
            //   },
            //   {
            //     content: "Ốp Lưng Xương Rồng",
            //     link: "/collections/op-lung-xuong-rong",
            //   },
            //   {
            //     content: "Ốp Lưng Kim Cương",
            //     link: "/collections/op-lung-kim-cuong",
            //   },
            //   {
            //     content: "Ốp Lưng Gạch Bông",
            //     link: "/collections/op-lung-gach-bong",
            //   },
            //   {
            //     content: "Ốp Lưng Hamsa",
            //     link: "/collections/op-lung-hamsa",
            //   },
            //   {
            //     content: "Ốp Lưng Marble",
            //     link: "/collections/op-lung-marble",
            //   },
            //   {
            //     content: "Samurai-Geisha",
            //     link: "/collections/op-lung-samurai-geisha",
            //   },
            //   {
            //     content: "Ốp Lưng Space",
            //     link: "/collections/op-lung-space",
            //   },
            //   {
            //     content: "Ốp Lưng Thuglife",
            //     link: "/collections/op-lung-thuglife",
            //   },
            //   {
            //     content: "Ốp Lưng Travel",
            //     link: "/collections/op-lung-travel",
            //   },
            //   {
            //     content: "Ốp Lưng Jean&Suit",
            //     link: "/collections/op-lung-jean-suit",
            //   },
            //   {
            //     content: "Ốp Lưng Japan",
            //     link: "/collections/op-lung-Japan",
            //   },
            //   {
            //     content: "Ốp Lưng K-Pop",
            //     link: "/collections/op-lung-k-pop",
            //   },
            //   {
            //     content: "Ốp Lưng Don't Touch",
            //     link: "/collections/op-lung-dont-touch",
            //   },

            //   {
            //     content: "Ốp Lưng Funny Space",
            //     link: "/collections/op-lung-funny-space",
            //   },
            //   {
            //     content: "Ốp Lưng Hello Kitty",
            //     link: "/collections/op-lung-hello-kitty",
            //   },
            //   {
            //     content: "Ốp Lưng Lady",
            //     link: "/collections/op-lung-lady",
            //   },
            // ],
          },
          //
          // {
          //   content: "Dành cho cặp đôi",
          //   link: "/collections/danh-cho-cap-doi",
          // },
          // //
          // {
          //   content: "Ốp In Hình Cá Nhân",
          //   link: "/collections/op-ca-nhan",
          // },
        ],
      },
      //menu2
      {
        content: "BeeTee",
        link: "/collections/ao-thun",
        menuTab: [
          {
            content: "Áo Thun Nam",
            link: "/collections/ao-thun-nam",
            // menuTab: [
            //   {
            //     content: "Áo Thun Badass",
            //     link: "/collections/ao-thun-badass",
            //   },
            //   {
            //     content: "Áo Thun Gym",
            //     link: "/collections/ao-thun-gym",
            //   },
            //   {
            //     content: "Áo Thun Phượt",
            //     link: "/collections/ao-thun-phuot",
            //   },
            //   {
            //     content: "Áo Thun Quote",
            //     link: "/collections/ao-thun-quote",
            //   },
            //   {
            //     content: "Áo Thun Rock&Rolls",
            //     link: "/collections/ao-thun-rock-roll",
            //   },
            //   {
            //     content: "Áo Thun Vintage",
            //     link: "/collections/ao-thun-vintage",
            //   },
            // ],
          },
          {
            content: "Áo Thun Nữ",
            link: "/collections/ao-thun-nu",
            // menuTab: [
            //   {
            //     content: "Áo Thun Colorfull",
            //     link: "/collections/ao-thun-colorfull",
            //   },
            //   {
            //     content: "Áo Thun In Hoa",
            //     link: "/collections/ao-thun-in-hoa",
            //   },
            //   {
            //     content: "Áo Thun Dễ Thương",
            //     link: "/collections/ao-thun-de-thuong",
            //   },
            //   {
            //     content: "Áo Thun Typo",
            //     link: "/collections/ao-thun-Typo",
            //   },
            //   {
            //     content: "Áo Thun Retro",
            //     link: "/collections/ao-thun-retro",
            //   },
            // ],
          },
        ],
      },
      //menu3
      {
        content: "BeeBag",
        link: "/collections/beebag",
        menuTab: [
          {
            content: "Totebag Vàng-Xanh-Hồng",
            link: "/collections/totebag-vang-xanh-hong",
          },
          {
            content: "Totebag Girly",
            link: "/collections/totebag-girly",
          },
          // {
          //   content: "Totebag Love",
          //   link: "/collections/totebag-love",
          // },
          // {
          //   content: "Totebag Katbag",
          //   link: "/collections/totebag-katbag",
          // },
          // {
          //   content: "Totebag Màu Đen",
          //   link: "/collections/totebag-mau-den",
          // },
          // {
          //   content: "Totebag Lady",
          //   link: "/collections/totebag-lady",
          // },
          // {
          //   content: "Totebag Bohemia",
          //   link: "/collections/totebag-bohemia",
          // },
          // {
          //   content: "Totebag Princess",
          //   link: "/collections/totebag-princess",
          // },
          // {
          //   content: "Totebag CutePets",
          //   link: "/collections/totebag-cutepets",
          // },
          // {
          //   content: "Totebag Chic&Trendy",
          //   link: "/collections/totebag-chic-trendy",
          // },
          // {
          //   content: "Totebag Fun",
          //   link: "/collections/totebag-fun",
          // },
          // {
          //   content: "Totebag Motivation",
          //   link: "/collections/totebag-motivation",
          // },
          // {
          //   content: "Totebag Happy Girl",
          //   link: "/collections/totebag-happy-girl",
          // },
          // {
          //   content: "Totebag Teenage",
          //   link: "/collections/totebag-teenage",
          // },
        ],
      },
      //menu4
      {
        content: "beecarry",
        link: "/collections/beecarry",
        // menuTab: [
        //   {
        //     content: "Phụ Kiện Da Thật 100%",
        //     link: "/collections/phu-kien-da-that-100%",
        //     menuTab: [
        //       {
        //         content: "Ví Da Pattern",
        //         link: "/collections/vi-da-pattern",
        //       },
        //       {
        //         content: "Ví Da Quotes",
        //         link: "/collections/vi-da-quotes",
        //       },
        //       {
        //         content: "Ví Da Travel",
        //         link: "/collections/vi-da-travel",
        //       },
        //       {
        //         content: "Ví Da Brand",
        //         link: "/collections/vi-da-brand",
        //       },
        //       {
        //         content: "Ví Da Football",
        //         link: "/collections/vi-da-football",
        //       },
        //     ],
        //   },
        // ],
      },
      //menu5
      {
        content: "Về Chúng Tôi",
        link: "/pages/ve-chung-toi",
      },
      {
        content: "Kiểm Tra Đơn Hàng",
        link: "/don-hang-cua-toi",
      },
      // {
      //   content: "Đồng Phục - Quà Tặng ",
      //   link: "/",
      // },
    ],
  };
  return (
    <section className="nav-bar">
      <ul className="nav-menu">
        {menu.menu.map((tab, index) => (
          <li key={index} className="dropdown_menu">
            <Link href={tab.link}>
              <a>
                {tab.content}
                {tab.menuTab ? (
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                ) : null}
              </a>
            </Link>
            {tab.menuTab ? (
              <ul>
                {tab.menuTab.map((menuTab, index) => (
                  <li key={index} className="dropdown_menu dropdown-menu-lv2">
                    <Link href={menuTab.link}>
                      <a>
                        {menuTab.content}
                        {menuTab.menuTab ? (
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                        ) : null}
                      </a>
                    </Link>
                    {menuTab.menuTab ? (
                      <ul className="menu-right">
                        {menuTab.menuTab.map((t, index) => (
                          <li key={index}>
                            <Link href={t.link}>
                              <a>{t.content}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Mainmenu;
