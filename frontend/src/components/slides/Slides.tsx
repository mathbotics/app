import React from "react";
import { Layout } from "antd";
import EditorSlidesSidebar from "./EditorSlidesSidebar";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Slides_lesson } from "./__generated__/Slides_lesson.graphql";
import CreateSlideModal from "./CreateSlideModal";
import { EditorEditBlockSidebar } from "./EditorEditBlockSidebar";
import { EditorSlidePreview } from "./EditorSlidePreview";
import styled from "styled-components";

const { Content } = Layout;
enum PageState {
  Default,
  CreateSlide,
  CreateSlideSucess,
  CreateSlideError,
  EditSlide,
  EditBlock
}

type SlidesProps = {
  lesson: Slides_lesson;
};
const Slides = (props: SlidesProps): JSX.Element => {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.Default
  );
  const [previewSlideId, setPreviewSlideId] = React.useState<string>(
    props.lesson.slides[0]?.id
  );
  return (
    <Layout>
      {/* The is the left most item which is the sidebar
      displaying all the slides which a lesson contains*/}
      <EditorSlidesSidebar
        lesson={props.lesson}
        onCreate={() => setPageState(PageState.CreateSlide)}
        onEdit={(id: any) => {
          setPageState(PageState.EditSlide);
          console.log(id);
        }}
      />

      {/* This Is the layout containing the preview for 
      the current block being selected. On the right is the editor sidebar
      with the form to edit this preview */}
      <EditorSlidePreview slide={slide} />

      {/* Editor sider is what display the controls to 
        edit the actial slides. It will return an onEditSuccess*/}
      {pageState === PageState.EditBlock && <EditorEditBlockSidebar />}

      {/* Create a slide Modal is the pop up to create a slide.
        This Modal pops up when the sidebar
        item get selected triggering a onCrate intent */}
      {pageState === PageState.CreateSlide && (
        <CreateSlideModal
          lessonId={props.lesson.id}
          title="Choose a slide layout"
          visible={pageState === PageState.CreateSlide}
          onCreateSlideSuccess={() => setPageState(PageState.Default)}
          onCreateSlideError={(e: Error) =>
            setPageState(PageState.CreateSlideError)
          }
          onCancel={() => setPageState(PageState.Default)}
        />
      )}
    </Layout>
  );
};

export default createFragmentContainer(Slides, {
  lesson: graphql`
    fragment Slides_lesson on Lesson {
      id
      title
      ...SlidesSidebar_lesson
      slides {
        id
        ...EditorSlidePreview_slide
      }
    }
  `
});
