import React from 'react';
import { DataID } from 'react-relay';
import { Modal } from 'antd';
import { Store } from 'rc-field-form/lib/interface';

import { CreateStudentForm } from '../form/CreateStudentForm';
import { commit as commitCreateStudentMutation } from '../../graphql/mutations/CreateStudentMutation';
import { CreateStudentInput } from '../../graphql/mutations/__generated__/CreateStudentMutation.graphql';

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
  const onSubmit = (formData: Store) =>
    commitCreateStudentMutation(
      { ...formData, courseId } as CreateStudentInput,
      onSubmitSuccess,
      onSubmitError,
    );
  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <CreateStudentForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
