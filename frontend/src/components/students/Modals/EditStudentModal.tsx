import React from 'react';
import { Modal } from 'antd';
import { EditStudentForm } from '../../form/EditStudentForm';
import { commit as commitDeleteStudentMutation } from '../../../graphql/mutations/DeleteStudentMutation';
import { DeleteStudentInput } from '../../../graphql/mutations/__generated__/DeleteStudentMutation.graphql';

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
//   courseId: string;
};
export default ({
  title,
  visible,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
//   courseId,
}: ModalProps) => {
  const onSubmit =
  () =>
    console.log(visible);
    // commitDeleteStudentMutation(
    //   { courseId } as DeleteStudentInput,
    //   onSubmitSuccess,
    //   onSubmitError,
    // );
  // TODO linter complaining about no declaration or statement
  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <EditStudentForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
