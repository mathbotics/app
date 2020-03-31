import React from "react";
import { Layout, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const { Content } = Layout;

type Props = {
  onSelectBlock: (block: any) => void; // This onClick should return a block to edit
};
export const EditorSlidePreview = ({ onSelectBlock }: Props) => {
  return (
    <Content style={{ margin: "10px", height: "auto" }}>
      <div
        onClick={() => onSelectBlock("ye")}
        style={{
          padding: 24,
          background: "#fff",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Result
          icon={<SmileOutlined />}
          title="Get started by creating a slide!"
        />
      </div>
    </Content>
  );
};
