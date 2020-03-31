import React from "react";
import { Layout, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const { Content } = Layout;

type Props = {
  onSelectBlock: (block: any) => void; // This onClick should return a block to edit
};
export const EditorSlidePreview = ({ onSelectBlock }: Props) => {
  return (
    <Layout>
      <Content
        style={{
          margin: "16px 16px"
        }}
      >
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
    </Layout>
  );
};
