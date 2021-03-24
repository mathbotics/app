import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { Layout } from 'antd';
import { graphql } from 'babel-plugin-relay/macro';
import { Lesson_lesson } from './__generated__/Lesson_lesson.graphql';
import SlidesSidebar from '../slides/SlidesSidebar';
import EditorSlidePreview from '../slides/EditorSlidePreview';
//import QuestionListSidebar from '../slides/QuestionListSidebar';

type Props = {
  lesson: Lesson_lesson;
};
const Lesson = (props) => {
  const [selectedSlideId, setSelectedSlideId] = React.useState<
    string | undefined
  >(props.lesson.slides[0]?.id);

  return (
    <Layout style={{ height: '92vh' }}>
      <SlidesSidebar
        onClick={(id) => setSelectedSlideId(id)}
        lesson={props.lesson}
      />
      <EditorSlidePreview
        slide={props.lesson.slides.find(({ id }) => id === selectedSlideId)}
      />
      {/* <QuestionListSidebar 
        
      /> */}
    </Layout>
  );
};

export default createFragmentContainer(Lesson, {
  lesson: graphql`
    fragment Lesson_lesson on Lesson {
      id
      title
      ...SlidesSidebar_lesson
      slides {
        id
        ...EditorSlidePreview_slide
      }
    }
  `,
});
