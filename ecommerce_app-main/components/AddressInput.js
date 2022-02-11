import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export default function AddressInput({ setShippingAddress }) {
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [province, setProvince] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [ward, setWard] = useState([]);
  const [wardList, setWardtList] = useState([]);

  //get province
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://provinces.open-api.vn/api/p`);
      const data = await res.json();
      const options = data.map((i) => ({
        name: i.name,
        code: i.code,
      }));
      setProvinceList(options);
    };
    getData();
  }, []);

  //get district
  useEffect(() => {
    setDistrict([]);
    setWard([]);
    const getData = async () => {
      const res = await fetch(
        `https://provinces.open-api.vn/api/p/${province[0].code}/?depth=2`
      );
      const data = await res.json();
      const options = data.districts.map((i) => ({
        name: i.name,
        code: i.code,
      }));
      setDistrictList(options);
    };
    if (province.length > 0) {
      getData();
    }
  }, [province]);

  // get ward
  useEffect(() => {
    setWard([]);
    const getData = async () => {
      const res = await fetch(
        `https://provinces.open-api.vn/api/d/${district[0].code}/?depth=2`
      );
      const data = await res.json();
      const options = data.wards.map((i) => ({
        name: i.name,
        code: i.code,
      }));
      setWardtList(options);
    };
    if (district.length > 0) {
      getData();
    }
  }, [district]);

  useEffect(() => {
    if (
      province.length > 0 &&
      district.length > 0 &&
      ward.length > 0 &&
      apartmentNumber != null
    ) {
      setShippingAddress({
        apartmentNumber,
        ward: ward[0].name,
        district: district[0].name,
        province: province[0].name,
      });
    }
  }, [apartmentNumber, ward, district, province, setShippingAddress]);

  return (
    <div className="address-form content-box-now">
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control
          value={apartmentNumber}
          onChange={(e) => setApartmentNumber(e.target.value)}
          placeholder="Số nhà, ngõ/xóm"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Tỉnh/Thành Phố</Form.Label>
          <Typeahead
            name="province"
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setProvince}
            options={provinceList}
            placeholder="Chọn thành phố/tỉnh"
            selected={province}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Quận/Huyện</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setDistrict}
            options={districtList}
            placeholder="Chọn quận/huyện"
            selected={district}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Phường/Xã</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setWard}
            options={wardList}
            placeholder="Chọn phường/xã"
            selected={ward}
          />
        </Form.Group>
      </Row>
    </div>
  );
}
