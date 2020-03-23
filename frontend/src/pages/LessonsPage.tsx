import React, { useState } from "react";
import { Typography, Button, Alert, Layout } from "antd";
import styled from "styled-components";

import { graphql } from "babel-plugin-relay/macro";
import LessonPreview from "../components/lessons/LessonPreview";
import { environment } from "../graphql/relay";
import { LessonsPageQueryResponse } from "./__generated__/LessonsPageQuery.graphql";
import { QueryRenderer } from "react-relay";
import CreateLessonModalRefetch from "../components/lessons/CreateLessonModalRefetch";

const { Title } = Typography;

const LessonsWrapper = styled(Layout.Content)`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`;

const LessonsPageQuery = graphql`
  query LessonsPageQuery {
    lessons {
      ...LessonPreview_lesson
    }
  }
`;

type PageProps = {
  lessons: LessonsPageQueryResponse["lessons"];
};
enum PageState {
  Default,
  CreateLesson,
  CreatingLesson,
  CreateLessonSuccess,
  CreateLessonError
}
export const Lessons = (props: PageProps): JSX.Element => {
  const [pageState, setPageState] = useState<PageState>(PageState.Default);

  const CreateLessonModal = CreateLessonModalRefetch(LessonsPageQuery);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={2}>Lessons</Title>
        <Button
          type="primary"
          onClick={() => setPageState(PageState.CreateLesson)}
          size="large"
          htmlType="submit"
        >
          Create a lesson
        </Button>
      </div>

      {pageState === PageState.CreateLessonError && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Unable to create lesson"
          type="error"
        />
      )}

      {pageState === PageState.CreateLessonSuccess && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Successfully created a lesson"
          type="success"
        />
      )}

      {pageState === PageState.CreateLesson && (
        <CreateLessonModal
          title="Create a lesson"
          visible={pageState === PageState.CreateLesson}
          onSubmitSuccess={() => setPageState(PageState.CreateLessonSuccess)}
          onSubmitError={(e: Error) => {
            console.log(e);
            setPageState(PageState.CreateLessonError);
          }}
          onCancel={() => setPageState(PageState.Default)}
        />
      )}

      <LessonsWrapper>
        {props.lessons.map((lesson, i) => (
          <LessonPreview
            lesson={lesson}
            key={i}
            onClick={() => console.log("hi")}
          />
        ))}
      </LessonsWrapper>
    </>
  );
};

export const LessonsPage = () => (
  <QueryRenderer
    environment={environment}
    variables={{}}
    query={LessonsPageQuery}
    render={({ props, error }) =>
      !error &&
      props && <Lessons lessons={(props as LessonsPageQueryResponse).lessons} />
    }
  />
);
