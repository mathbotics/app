import React from "react";
import SlidesSidebar from "./SlidesSidebar";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Slides_lesson } from "./__generated__/Slides_lesson.graphql";
import CreateSlideModal from "./CreateSlideModal";

enum PageState {
  Default,
  CreateSlide,
  EditSlide
}

type SlidesProps = {
  lesson: Slides_lesson;
};
const Slides = (props: SlidesProps): JSX.Element => {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.Default
  );
  return (
    <SlidesSidebar
      lesson={props.lesson}
      onCreate={() => setPageState(PageState.CreateSlide)}
      onEdit={() => setPageState(PageState.EditSlide)}
    >
      {pageState === PageState.CreateSlide && (
        <CreateSlideModal
          lessonId={props.lesson.id}
          title="Choose a slide layout"
          visible={pageState === PageState.CreateSlide}
          onSubmit={(type: string) => {
            console.log(`Intent to create slide with type ${type}`);
            setPageState(PageState.Default);
          }}
          onCancel={() => setPageState(PageState.Default)}
        />
      )}
    </SlidesSidebar>
  );
};

export default createFragmentContainer(Slides, {
  lesson: graphql`
    fragment Slides_lesson on Lesson {
      id
      title
      ...SlidesSidebar_lesson
    }
  `
});
