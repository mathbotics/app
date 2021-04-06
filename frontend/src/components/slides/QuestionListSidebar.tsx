import React from 'react';
import { Layout, Select, Card} from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { QuestionListSidebar_content } from './__generated__/QuestionListSidebar_content.graphql';
import { Lesson_lesson } from '../lessons/__generated__/Lesson_lesson.graphql';
import { Slide_slide } from './__generated__/Slide_slide.graphql';
import { ContainerTwoTone } from '@ant-design/icons';
import MultipleChoiceQuestionBlock from '../block/multiple_choice/MultipleChoiceQuestionBlock';

const Sider = styled(Layout.Sider)`
height: 100%;
width: 100%;
`;

type Props = { 
  content?: QuestionListSidebar_content;
  type?: Slide_slide['__typename']; 
};


const QuestionListSidebar = ({ content, type }: Props) => {
  
  return (
    <Sider theme="light" style={{ overflow: 'none' }}>
      <Card title="Question List" style={{width: 200}}>
      <p>Item 1</p>
      <p>Item 2</p>
      {staticContent(content)}
      </Card>
    </Sider>
  );
};

function multipleChoiceQuestionsHandler(content, type)
{
  return (
    <>
    <p>Question 3</p>
    </>
  );
  
}

function staticContent(content)
{
  return (
    <>
    <p>Question 3</p>
    </>
  );
}

function updateQuestionStatus()
{
  ;
}

export default createFragmentContainer(QuestionListSidebar, {
  content: graphql`
    fragment QuestionListSidebar_content on Lesson {
      id
      title
      ...Lesson_lesson
      slides {
        id
        __typename
        title
        ... on SingleSlide {
          ...SingleSlide_singleSlide
        }
      }
    }
  `,
});