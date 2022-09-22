import { DatePicker, Space } from "antd";
import React from "react";
export default function DataPicker() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
      ;
    </>
  );
}
