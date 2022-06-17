import React from "react";
import Head from "next/head";
import ParallaxScrolling from "../../components/HomeComponent/ParallaxScrolling";
import AddressInput from "../../components/AddressInput";

export default function PolicyArrantyPage(props) {
  return (
    <>
      <Head>
        <title>Chính Sách Bảo Hành và Đổi Trả - BeeYou</title>
        <meta name="keywords" content="BeeYou"></meta>
      </Head>
      <ParallaxScrolling></ParallaxScrolling>
      <div className="wrapper">
        <div className="support-detail">
          <h1>Chính sách bảo hành và đổi trả</h1>
        </div>
        <div className="support-detail">
          <h1>Quy định bảo hành</h1>
        </div>
        <div className="support-infor">
          <li>
            Bắt buộc phải có hóa đơn bán hàng ghi đầy đủ thông tin KH, ngày bán
            hàng và NVBH
          </li>
          <li>
            Trong thời gian bảo hành: không tính phí bảo hành,nhưng tính phí phụ
            kiện thay thế
          </li>
          <li>
            Phụ kiện thay thế không giống hoàn toàn về mẫu mã, màu sắc,chất
            liệu, kiểu dáng
          </li>

          <h2>1. TÚI TOTE/ ÁO THUN:</h2>
          <h3>
            Bảo hành trọn đời dây kéo, đường chỉ, quai đeo. Nếu do sai quy cách
            sử dụng sẽ miễn phí tiền công chỉ tính tiền phụ kiện thay thế.
          </h3>
          <h3>Thời gian bảo hành:</h3>
          <h3> - 1-2 tuần: nếu không thay phụ kiện.</h3>
          <h3> - 2-4 tuần: thay phụ kiện mới.</h3>

          <h2>2. NGÀNH HÀNG ĐỒ DA:</h2>
          <h3>
            Đổi trong vòng 7 ngày nếu do lỗi nhà sản xuất kể từ ngày ghi hóa đơn
            mua hàng (sau 7 ngày chuyển qua bảo hành)
          </h3>
          <h3>
            KH có nhu cầu mua sản phẩm mới của cùng mã hàng lỗi chỉ cần trả
            trước 30% giá trị sản phẩm mới. Trường hợp đổi sản phẩm khác yêu cầu
            phải bằng hoặc cao hơn sản phẩm lỗi và có sự xét duyệt của BGĐ/QL
            Admin)
          </h3>
          <h3>
            Hàng không giảm giá: bảo hành 2 năm, nếu do lỗi nhà sản xuất được
            đổi mới, nếu do sử dụng sai quy cách sẽ chuyển sang bảo hành.
          </h3>
          <h3>
            Trong thời gian bảo hành: không tính phí bảo hành, nhưng tính phí
            phụ kiện thay thế
          </h3>
        </div>
        <div className="support-detail">
          <h1>Chính sách đổi trả hàng</h1>
        </div>
        <div className="support-infor">
          <h4>Chính sách đổi trả hàng khi mua hàng trên www.beeyou.vn</h4>
          <h3>
            Đổi trả hàng cũng là một trong những chính sách hậu mãi được beeyou
            đặc biệt quan tâm để đảm bảo mang đến quý khách hàng chất lượng dịch
            vụ tốt nhất. Tuy nhiên, hãy tham khảo những nội dung dưới đây để đảm
            bảo sản phẩm của bạn có đủ điều kiện để nằm trong danh mục được đổi
            trả hàng.
          </h3>

          <h2>1. Điều kiện đổi trả hàng</h2>
          <h4>Đổi hàng</h4>
          <li>
            Khi sản phẩm không trùng khớp thông số kỹ thuật, màu sắc theo đơn
            đặt hàng, lỗi kỹ thuật do nhà sản xuất, khách hàng sẽ được đổi sản
            phẩm cùng loại và nếu khách hàng có nhu cầu đổi qua sản phẩm khác
            cao tiền hơn khách hàng phải bù tiền nếu thấp tiền hơn sẽ không được
            hoàn trả tiền chênh lệch.
          </li>
          <li>
            Trường hợp sản phẩm không bị lỗi mà khách hàng yêu cầu đổi hàng
            (theo yêu cầu khách hàng) sẽ bị mất phí 10% + phí vận chuyển ban đầu
            + phí vận chuyển đợt 2 (thông tin theo nhân viên tư vấn)
          </li>
          <li>
            Quá trình đổi hàng sẽ được đối tác giao hàng của beeyou đến thu hồi
            hàng hóa. (Theo thông tin tư vấn của nhân viên CSKH)
          </li>
          <li>Thời gian đổi hàng: 7 ngày kể từ ngày nhận hàng</li>

          <h4>Trả hàng</h4>
          <li>
            Nếu sản phẩm bị lỗi do nhà sản xuất và thỏa mãn các điều kiện sau:
            sản phẩm khi trả lại kho phải chưa qua sử dụng, chưa chịu tác động
            của việc giặt, rửa,….còn đầy đủ phụ kiện, giấy tờ liên quan: tem,
            phiếu bảo hành, hướng dẫn sử dụng.Quá trình trả hàng sẽ được đối tác
            giao hàng của beeyou đến thu hồi hàng hóa. (Theo thông tin tư vấn
            của nhân viên CSKH)
          </li>
          <li>
            Nếu sản phẩm không bị lỗi mà khách hàng yêu cầu trả hàng theo sự
            thay đổi yêu cầu từ phía khách hàng khách hàng sẽ bị mất phí 10% +
            phí vận chuyển ban đầu.Quá trình trả hàng khách hàng sẽ tự gửi trả
            và chịu phí vận chuyển đồng thời trong quá trình nhận hàng trả về
            beeyou đồng kiểm nếu hàng hóa phát sinh sự cố không còn nguyên vẹn
            thì thông tin xử lý sẽ được nhân viên tư vấn trực tiếp.
          </li>
          <li>Thời gian trả hàng: 7 ngày kể từ ngày nhận hàng</li>
          <h2>2. Hình thức đổi trả sản phẩm</h2>
          <li>
            Quý khách có thể gọi điện trực tiếp đến trung tâm hỗ trợ khách hàng
            0901 70 70 11 hoặc gửi yêu cầu vào mail cskh@beeyou.com.vn
          </li>
          <li>
            Ghi chú: Khách hàng phải được sự đồng ý của bộ phận callcenter khách
            hàng mới chuyển hàng về (nếu khách hàng tự ý chuyển về không có sự
            đồng ý bộ phận kho sẽ không nhận hàng).
          </li>
          <li>
            Quý khách phải tự đóng gói và gửi sản phẩm kèm đầy đủ phụ kiện, giấy
            tờ liên quan bao gồm hóa đơn, hướng dẫn sử dụng, phiếu bảo hành về
            beeyou theo địa chỉ
          </li>
          <h4> Địa chỉ gửi hàng</h4>
          <h3>-Địa chỉ: 311/7 Nguyễn Xí, P.13, Q.Bình Thạnh </h3>
          <h3>-Thông tin người nhận hàng</h3>
          <h3>
            -Beeyou - phòng online bộ phận chăm sóc khách hàng: 0901 70 70 11
          </h3>

          <h2>3. Hình thức hoàn phí</h2>
          <h5>TH1: Sản phẩm bị lỗi do nhà sản xuất</h5>
          <li>
            Nếu sản phẩm đáp ứng mọi điều kiện trả hàng, quý khách sẽ được hoàn
            phí 100%.
          </li>
          <li>
            Sản phẩm được đổi trả có giá trị bằng hoặc cao so với các sản phẩm
            ban đầu, nếu đổi sản phẩm giá trị thấp hơn giá trị sản phẩm ban đầu
            quý khách sẽ không được hoàn tiền.
          </li>
          <li>
            Phí gửi hàng đổi trả: Beeyou sẽ chịu tất cả trong quá trình vận
            chuyển hàng hóa ( với điều kiện lỗi kỹ thuật của nhà sản xuất hoặc
            lỗi phát sinh từ quá trình tiếp nhận, đặt hàng, giao hàng của
            Beeyou).
          </li>
          <li>
            Nếu khách hàng đã thanh toán COD hoặc thanh toán online thì sẽ được
            hoàn tiền trong vòng 30 ngày kể từ ngày kho nhận hàng.
          </li>

          <h5>TH2: Khách hàng thay đổi nhu cầu về size và màu</h5>
          <li>
            Tiền chênh lệch size Beeyou sẽ không hoàn trả cho khách hàng nếu đổi
            sản phẩm giá trị thấp hơn
          </li>
          <li>
            Phí chuyển hàng từ khách hàng - kho và từ kho - khách hàng khách
            hàng sẽ tự chịu
          </li>
          <li>
            Khi nào kho nhận lại hàng đổi thì kho sẽ bắt đầu chuyển lại hàng mới
            ra cho khách hàng
          </li>

          <h5>TH3: Khách hàng thanh toán qua cổng trực tuyến</h5>
          <li>Thời gian giao hàng ít nhất từ 3 - 7 ngày</li>
          <li>
            Nếu khách hàng đặt online và thanh toán qua cổng trực tuyến sau đó
            hủy đơn hàng vì lý do phát sinh từ phía khách hàng hoặc giao không
            nhận hàng khách hàng sẽ bị mất phí 20% giá trị đơn hàng.
          </li>
          <li>
            Số tiền thanh toán sẽ được chuyển trả lại lại trong vòng 30 ngày kể
            từ ngày hủy đơn hàng
          </li>

          <h5>
            Lưu ý: Quý khách nên chụp ảnh sản phẩm trước khi đổi trả hàng, việc
            lưu giữ hình ảnh trong trường hợp này sẽ giúp khách hàng không phải
            chịu trách nhiệm về những vấn đề phát sinh trong quá trình đổi trả.{" "}
          </h5>
          <h4>Chính sách mua hàng ở cửa hàng</h4>
          <h4>Quy định đổi sản phẩm</h4>
          <h4> * Trong thời gian quy định (7 ngày):</h4>

          <li>
            Thực hiện đúng quy định và thời gian bảo hành đổi sản phẩm trong
            thông báo QUY ĐỊNH BẢO HÀNH SẢN PHẨM ( Theo thông tin tư vấn nhân
            viên CSKH )
          </li>
          <li>
            Có thể đổi sang sản phẩm khác bằng hoặc cao hơn giá ban đầu. (Đảm
            bảo kiểm tra hàng hóa chưa qua sử dụng, còn mới và không hư hỏng).
          </li>
          <li>
            Tất cả sản phẩm đổi cần có hóa đơn bán hàng kèm theo, nếu không cửa
            hàng chịu trách nhiệm 100% giá trị sản phẩm.
          </li>
        </div>
      </div>
    </>
  );
}
