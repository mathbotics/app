import React, { useState } from "react";
import {
  Typography,
  Button,
  Alert,
  Layout,
  Tooltip,
  Dropdown,
  Menu
} from "antd";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { getRootQueryDataID } from "../../graphql/relay";
import LessonPreview from "./LessonPreview";
import { LessonsPageQuery } from "../../pages/LessonsPage";
import { LessonsPageQueryResponse } from "../../pages/__generated__/LessonsPageQuery.graphql";
import CreateLessonModal from "./CreateLessonModal";
import styled from "styled-components";

const { Title } = Typography;
const menu = (slides: any) => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

type HeaderProps = { onAddLesson: () => void };
const Header = ({ onAddLesson }: HeaderProps): JSX.Element => {
  return (
    <HeaderWrappper>
      <Title level={1}>Lesson Catalogue</Title>
      <Tooltip title={"Add a lesson"}>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          htmlType="submit"
          size={"large"}
          onClick={() => onAddLesson()}
        />
      </Tooltip>
    </HeaderWrappper>
  );
};

type Props = { lessons: LessonsPageQueryResponse["lessons"] };
enum PageState {
  Default, // Normal state
  CreateLessonIntent,
  CreateLessonSuccess,
  CreateLessonError
}
export default ({ lessons }: Props): JSX.Element => {
  const history = useHistory();
  const [pageState, setPageState] = useState<PageState>(PageState.Default);
  return (
    <Layout style={{ backgroundColor: "white", width: "60%" }}>
      {/* OnCreateLessonError - Attempt to create a lesson went wrong :( */}
      {pageState === PageState.CreateLessonError && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Unable to create lesson"
          type="error"
        />
      )}

      {/* OnCreateLessonSuccess - Attempt to create a lesson was succesful :) */}
      {pageState === PageState.CreateLessonSuccess && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Successfully created a lesson"
          type="success"
        />
      )}

      {/* Lessons header
        Idea: this can eventually become a banner or somethign less
        boring than what we have now?... just an idea
      */}
      <Header onAddLesson={() => setPageState(PageState.CreateLessonIntent)} />

      {/* List of lessons */}
      <LessonsWrapper>
        {lessons.map((lesson, index: number) => (
          <Dropdown
            key={index}
            overlay={() => menu(lesson)}
            trigger={["click"]}
          >
            <div>
              <LessonPreview
                lesson={lesson}
                onClick={(lessonId: string) =>
                  history.push(`/lessons/${lessonId}/slides`)
                }
              />
            </div>
          </Dropdown>
        ))}
      </LessonsWrapper>

      {/* OnCreateLessonIntent - Someone clicked a button to create a lessons */}
      {pageState === PageState.CreateLessonIntent && (
        <CreateLessonModal
          title="Create a lesson"
          rootDataID={getRootQueryDataID(LessonsPageQuery, {})}
          visible={pageState === PageState.CreateLessonIntent}
          onSubmitSuccess={() => setPageState(PageState.CreateLessonSuccess)}
          onSubmitError={(e: Error) => {
            console.log(e);
            setPageState(PageState.CreateLessonError);
          }}
          onCancel={() => setPageState(PageState.Default)}
        />
      )}
    </Layout>
  );
};

const LessonsWrapper = styled(Layout.Content)``;

const HeaderWrappper = styled(Layout.Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
