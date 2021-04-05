import React from 'react';
import { Modal } from 'antd';
import { DeleteStudentModalContent } from '../students/Modals/DeleteStudentModalContent';

import { commit as commitDeleteCourseMutation } from '../../graphql/mutations/DeleteCourseMutation';
import { DeleteCourseInput } from '../../graphql/mutations/__generated__/DeleteCourseMutation.graphql';
import { useHistory } from 'react-router-dom';

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
  courseId: string;
};
export default ({
  title,
  visible,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
  courseId,
}: ModalProps) => {

  const onSubmit = () => {
    commitDeleteCourseMutation(
      { courseId } as DeleteCourseInput,
      onSubmitSuccess,
      onSubmitError,
    );
  };

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <DeleteStudentModalContent
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
      />
    </Modal>
  );
};
