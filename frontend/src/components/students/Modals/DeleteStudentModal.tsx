import React from 'react';
import { Modal } from 'antd';
import { DeleteStudentModalContent } from './DeleteStudentModalContent';

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
                  // onSubmitSuccess,
                  onSubmitError,
                  onCancel,
                  // courseId,
                }: ModalProps) => {
  const onSubmit = () => { console.log("delete all students mutation goes here") }

  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <DeleteStudentModalContent onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};
