import React from 'react';
import { Modal } from 'antd';
import { DeleteStudentModalContent } from '../students/Modals/DeleteStudentModalContent';

import { commit as commitDeleteOneLessonMutation } from '../../graphql/mutations/DeleteOneLessonMutation';
import { DeleteLessonInput } from '../../graphql/mutations/__generated__/DeleteOneLessonMutation.graphql';

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
  lessonId: string;
};
export default ({
  title,
  visible,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
  lessonId,
}: ModalProps) => {
  const onSubmit =
  () =>
    commitDeleteOneLessonMutation(
      { lessonId } as DeleteLessonInput,
      onSubmitSuccess,
      onSubmitError,
    );

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <DeleteStudentModalContent onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
