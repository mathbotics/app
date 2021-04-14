import React, {useEffect, useState} from 'react';
import { Layout, Button, Card} from 'antd';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import styled from 'styled-components';
// import { QuestionListSidebar_content } from './__generated__/QuestionListSidebar_content.graphql';
import { ContainerTwoTone } from '@ant-design/icons';
import MultipleChoiceQuestionBlock from '../block/multiple_choice/MultipleChoiceQuestionBlock';

const Sider = styled(Layout.Sider)`
height: 100%;
width: 100%;
`;

const QuestionDiv = styled.div`
border-width: 2.5px;
border-color: #40a9ff;
padding-bottom: .5em;
margin-bottom: .5em;
padding-left: 4%;
`;

type GradeProps = {
  grade?: number;
  studentId?: string;
  lessonId?: string;
  courseId?: string;
};


export function LessonGrading ({ courseId, studentId, lessonId, grade }:GradeProps) {
  const [currentGrade, setCurrentGrade] = useState<number>();
  const [currentStudentId, setCurrentStudentId] = useState<string>();
  const [currentLessonId, setCurrentLessonId] = useState<string>();
  const [currentCourseId, setCurrentCourseId] = useState<string>();

  useEffect(() => {
    setCurrentCourseId(courseId);
    setCurrentLessonId(lessonId);
    setCurrentStudentId(studentId);
    setCurrentGrade(grade);
  }, [])

  function updateGrade(newGrade:number){
    let points = (currentGrade !== undefined ? currentGrade:0) + newGrade;
    setCurrentGrade(points);
  }

  function updateLesson(newLessonId:any):void {
    setCurrentLessonId(newLessonId);
  }

  function updateCourse(newCourseId:string) {
    setCurrentCourseId(newCourseId);
  }

  function updateStudent(newStudentId:string) {
    setCurrentStudentId(newStudentId);
  }

  function getCurrentCourse() {
    return currentCourseId;
  }

  function getCurrentLesson() {
    return currentLessonId;
  }

  function getCurrentStudent() {
    return currentStudentId;
  }
  function getCurrentGrade() {
    return currentGrade;
  }

}

function QuestionListSidebar( content:any ){
  const questionItem = (slide:any) => {

    return(
      <div>
        {console.log(slide)}
        <p>{slide.title}</p>
      </div>
    )
  }

  const onSubmit = () => {

  }
  return (
    <Sider theme="light" style={{ overflow: 'none' }} width="300">
      <QuestionDiv>
      {/* {console.log(content)} */}
      {/* <Card title="Question List" style={{width: 200}}>
        {content.lesson.slides.map((slide) => {
          {console.log(slide)}
          {questionItem(slide)}
        })} 
      </Card> */}
      </QuestionDiv>
      <Button onClick={onSubmit}>Submit</Button>
    </Sider>
  );
};

export default createFragmentContainer(QuestionListSidebar, {
  
});