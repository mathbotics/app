import React from 'react';
import { Modal } from 'antd';
import { Store } from 'rc-field-form/lib/interface';
import { EditStudentForm } from '../../form/EditStudentForm';
import { commit as commitEditStudentMutation } from '../../../graphql/mutations/EditStudentMutation';
import { EditStudentInput } from '../../../graphql/mutations/__generated__/EditStudentMutation.graphql';

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
  studentId
}: ModalProps) => {
  const onSubmit =
  (formData: Store) =>
    commitEditStudentMutation(
      { ...formData, studentId } as EditStudentInput,
      onSubmitSuccess,
      onSubmitError,
    );

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <EditStudentForm onSubmit={onSubmit} onSubmitError={onSubmitError} studentId={studentId} />
    </Modal>
  );
};
