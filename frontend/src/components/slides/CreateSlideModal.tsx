import React, { useState } from 'react';
import { Modal, Layout } from 'antd';
import styled from 'styled-components';
import Slide from './Slide';
import { Slide_slide } from './__generated__/Slide_slide.graphql';
import { commit as commitCreateSlideMutation } from '../../graphql/mutations/CreateSlideMutation';

const ModalBodyWrapper = styled(Layout.Content)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const ModalSlideWrapper = styled.div`
  width: 300px;
  height: 200px !important;
`;

type SlideType = Slide_slide['__typename'];

type ModalPreviewSlideType = {
  type: SlideType;
  title: string;
  description: string;
};
type ModalProps = {
  title: string;
  lessonId: string;
  visible: boolean;
  onCreateSlideSuccess: () => void;
  onCreateSlideError: (e: Error) => void;
  onCancel: any;
};

export default ({
  title,
  visible,
  lessonId,
  onCreateSlideSuccess,
  onCreateSlideError,
  onCancel,
}: ModalProps) => {
  const [selected, setSelected] = useState<SlideType>('SingleSlide');

  const onCreateSlideMutationSuccess = () => onCreateSlideSuccess();
  const onCreateSlideMutationError = (e: Error) => onCreateSlideError(e);

  const poop = 'poop';

  const previewSlides: ModalPreviewSlideType[] = [
    {
      type: 'SingleSlide',
      title: 'Single Slide',
      description:
        'A single slide, perfect for a single piece of content like and image or some reading material.',
    },
    {
      type: 'HalfSlide',
      title: 'Half Slide',
      description:
        'A slide made for 2 pieces of content. Great for some context on the left and interactive material on the right.',
    },
  ];

  return (
    <Modal
      width={1100}
      visible={visible}
      title={title}
      onOk={() =>
        commitCreateSlideMutation(
          {
            input: { lessonId, title: poop, slideType: selected },
          },
          onCreateSlideMutationSuccess,
          onCreateSlideMutationError,
          lessonId,
        )
      }
      onCancel={onCancel}
    >
      <ModalBodyWrapper>
        {previewSlides.map(
          (
            { type, title, description }: ModalPreviewSlideType,
            index: number,
          ) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                margin: '20px',
              }}
            >
              <ModalSlideWrapper key={index} onClick={() => setSelected(type)}>
                <Slide preview selected={type === selected} type={type} />
              </ModalSlideWrapper>
              <h3 style={{ marginTop: '10px' }}>
                <u>{title}</u>
              </h3>
              <p style={{ width: 300, marginTop: '5px' }}>{description}</p>
            </div>
          ),
        )}
      </ModalBodyWrapper>
    </Modal>
  );
};
