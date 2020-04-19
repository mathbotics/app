import React from "react";
import { Layout } from "antd";
import SlidesSidebar from "./SlidesSidebar";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Slides_lesson } from "./__generated__/Slides_lesson.graphql";
import CreateSlideModal from "./CreateSlideModal";
import EditBlockSidebar from "./EditBlockSidebar";
import EditorSlidePreview from "./EditorSlidePreview";
import { Block } from "../../types/Block";
import nullthrows from "nullthrows";

enum PageState {
  Default,
  CreateSlide,
  CreateSlideSucess,
  CreateSlideError,
  EditSlide,
  EditBlock,
}

type SlidesProps = {
  lesson: Slides_lesson;
};
const Slides = (props: SlidesProps): JSX.Element => {
  const [pageState, setPageState] = React.useState<PageState>(
    PageState.EditSlide
  );
  const [selectedSlideId, setSelectedSlideId] = React.useState<
    string | undefined
  >(props.lesson.slides[0]?.id);
  const [selectedBlock, setSelectedBlock] = React.useState<Block>();

  React.useEffect(() => {
    selectedBlock && setPageState(PageState.EditBlock);
  }, [selectedBlock]);

  const onSelectBlock = (block: Block) => {
    setSelectedBlock(block);
  };

  return (
    <Layout style={{ height: "92vh" }}>
      <SlidesSidebar
        lesson={props.lesson}
        onCreate={() => setPageState(PageState.CreateSlide)}
        onEdit={(id: string) => {
          setPageState(PageState.EditSlide);
          setSelectedSlideId(id);
        }}
      />
      <EditorSlidePreview
        slide={props.lesson.slides.find(({ id }) => id === selectedSlideId)}
        onSelectBlock={onSelectBlock}
        selectedBlock={selectedBlock}
      />
      {pageState === PageState.EditBlock && (
        <EditBlockSidebar block={nullthrows(selectedBlock)} />
      )}
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
  `,
});
