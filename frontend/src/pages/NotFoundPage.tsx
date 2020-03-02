import React from "react";
import { Result } from "antd";

export const NotFoundPage = (props: any) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
  >
    <Result
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  </div>
);
