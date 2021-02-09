import React from 'react';
import { Layout, Select, Card} from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
import { QuestionListSidebar_content } from './__generated__/QuestionListSidebar_content.graphql';
import { Lesson_lesson } from '../lessons/__generated__/Lesson_lesson.graphql';
import { Slide_slide } from './__generated__/Slide_slide.graphql';


/* copied from EditBlockSidebar*/

/* Find a way to display this in every slide page including the edits?
currently shows the list only on the edit slide/creation lesson part.
Layout Sider is correct
location placed at Lesson.tsx
Read standup 6 of sprint 2...
I may have to make a structure data for having id and status

Objective: pass lesson.tsx props to QuestionListSidebar.tsx
*/

const Sider = styled(Layout.Sider)`
height: 100%;
width: 100%;
`;

//will have to add props block until I figure out what to add, should be slide id and multiple choice block id/name
type Props = { 
  content?: QuestionListSidebar_content;
  type?: Slide_slide['__typename'];
};
const QuestionListSidebar = ({ content, type }: Props) => {
  /* //states below
  const [questionListTypename, setquestionListTypename] = React.useState(
    block.__typename,
  );
  */
  return (
    <Sider theme="light" style={{ overflow: 'none' }}>
      <Card title="Question List" style={{width: 200}}>
      <p>Item 1</p>
      <p>Item 2</p>
      {}
      {multipleChoiceQuestionsHandler(content)}
      </Card>
    </Sider>
  );
};

//functions below
/* Handles multiple choice questions in the list
   it will do the following task:
   - count?
   - update list with question id and their number to the list
   - sets question status to unread. ALL OF THEM (this can change to load from Postgres )
*/
function multipleChoiceQuestionsHandler(slide)
{

  //need to identify the type of slide in the parameter.
  /*
  let slides = slide;
  var questions = [];
  slides.forEach(function(id) {
    */
    /* compare if current slide contains a MultipleChoice question in singleSlide
      and if current slide is a Halfslide containing a multiplechoice (you check twice, left and right side) 

      Check exactly Slide.tsx at line 53 for the specific comparison between slide types

      switch (slide?.__typename ?? type) {
    case 'SingleSlide':
    */
    /*
    if() {
      questions.push(id);
    }
    else if() {
      questions.push(id);
    }
    else {
      //do nothing
    }
  });
  
  //display items
  return (
    <>
    <p>hey arnold</p>
    </>
  );
  */
}

/* 
  if current question is answered, change icon and status
*/
function updateQuestionStatus()
{
  ;
}

/*edit this once I figure out what I need, I think I need
 slide itself for id like the one in Lesson.tsx,
__type like the one in Slide.tsx 

  A mix of lesson and slide graphql parts all nested...
*/
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
        ... on HalfSlide {
          ...HalfSlide_halfSlide
        }
      }
    }
  `,
});
