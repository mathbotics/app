import React from 'react';
import { DataID } from 'react-relay';
import { Modal } from 'antd';
import { Store } from 'rc-field-form/lib/interface';

import { CreateCourseForm } from '../form/CreateCourseForm';
import { commit as commitCreateOneCourseMutation } from '../../graphql/mutations/CreateOneCourseMutation';

type ModalProps = {
  title: string;
  visible: boolean;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
  rootDataID?: DataID; // Making optional for now...
};
export default ({
  title,
  visible,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
  rootDataID,
}: ModalProps) => {
  const onSubmit = ({ name }: Store) =>
    commitCreateOneCourseMutation(
      { name, suggestedLevel: 'FIRST', lessonPlan: { create: {} } },
      onSubmitSuccess,
      onSubmitError,
      rootDataID,
    );
  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <CreateCourseForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
