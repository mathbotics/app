import React from 'react';
import { DataID } from 'react-relay';
import { Modal } from 'antd';
import { Store } from 'rc-field-form/lib/interface';

import { CreateLessonForm } from '../form/CreateLessonForm';
import { commit as commitCreateOneLessonMutation } from '../../graphql/mutations/CreateOneLessonMutation';

type ModalProps = {
  title: string;
  time?: string;
  difficultyLevel?: string;
  visible: boolean;
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  onCancel: () => void;
  rootDataID: DataID;
};
export default ({
  title,
  visible,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
  rootDataID,
}: ModalProps) => {
  const onSubmit = ({ title, time, difficultyLevel }: Store) =>
    commitCreateOneLessonMutation(
      { input: { title, time, difficultyLevel } },
      onSubmitSuccess,
      onSubmitError,
      rootDataID,
    );
  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <CreateLessonForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
