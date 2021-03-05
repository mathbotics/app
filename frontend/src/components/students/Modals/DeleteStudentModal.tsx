import React from 'react';
import { Modal } from 'antd';
import { DeleteStudentModalContent } from './DeleteStudentModalContent';

import { commit as commitDeleteStudentMutation } from '../../../graphql/mutations/DeleteStudentMutation';
import { DeleteStudentsInput } from '../../../graphql/mutations/__generated__/DeleteStudentMutation.graphql';

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
  const onSubmit =
  () =>
    commitDeleteStudentMutation(
      { courseId } as DeleteStudentsInput,
      onSubmitSuccess,
      onSubmitError,
    );

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <DeleteStudentModalContent onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
