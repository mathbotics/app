import React from "react";
import { Layout } from "antd";
import SlidesSidebar from "./SlidesSidebar";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Slides_lesson } from "./__generated__/Slides_lesson.graphql";
import CreateSlideModal from "./CreateSlideModal";
import { EditBlockSidebar } from "./EditBlockSidebar";
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
  return (
    <Layout>
      {/* The is the left most item which is the sidebar
      displaying all the slides which a lesson contains*/}
      <SlidesSidebar
        lesson={props.lesson}
        onCreate={() => setPageState(PageState.CreateSlide)}
        onEdit={(id: any) => {
          setPageState(PageState.EditSlide);
          console.log(id);
        }}
      />

      {/* This Is the layout containing the preview for 
      the current block being selected. On the right is the editor sidebar
      with the form to edit this preview 

      - onCllick will return a block which will be set in state as selectedBlock and passed down
      to the EditBlockSidebar for editing. Any change on the slide editor will get propagated up and 
      changed on the preview.... This will work well when previewing images 
      */}
      <EditorSlidePreview onSelectBlock={() => {}} />

      {/* Editor siderbar is what display the controls to 
        edit a block. It will return an onSuccess, onFailure and onChange*/}
      {pageState == PageState.EditBlock && <EditBlockSidebar />}

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
    }
  `
});
