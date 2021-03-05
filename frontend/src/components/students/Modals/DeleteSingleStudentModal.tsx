import React from 'react';
import { Modal } from 'antd';
import { DeleteStudentModalContent } from './DeleteStudentModalContent';

import { commit as commitDeleteSingleStudentMutation } from '../../../graphql/mutations/DeleteSingleStudentMutation';
import { DeleteStudentInput } from '../../../graphql/mutations/__generated__/DeleteSingleStudentMutation.graphql';

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
  studentId: string;
};
export default ({
  title,
  visible,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
  studentId,
}: ModalProps) => {
  const onSubmit =
  () =>
    commitDeleteSingleStudentMutation(
      { studentId } as DeleteStudentInput,
      onSubmitSuccess,
      onSubmitError,
    );

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <DeleteStudentModalContent onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
