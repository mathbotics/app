import React from 'react';
import { DataID, fetchQuery } from 'react-relay';
import { Modal } from 'antd';
import { Store } from 'rc-field-form/lib/interface';
import { graphql } from 'babel-plugin-relay/macro';
import { CreateCourseForm } from '../form/CreateCourseForm';
import { commit as commitCreateOneCourseMutation } from '../../graphql/mutations/CreateOneCourseMutation';
import { environment } from "../../graphql/relay";

const query = graphql`
  query CreateCourseModalQuery {
    viewer {
      id
    }
  }
`;


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
  
  const onSubmit = ({ name, suggestedLevel }: Store) => {
    fetchQuery(environment, query, {}).then((data: any) => {
      //get the currently logged in instructor that's creating the course
    const instructorId = data.viewer.id
    commitCreateOneCourseMutation(
      { name, suggestedLevel, instructorId },
      onSubmitSuccess,
      onSubmitError,
      rootDataID,
    );
    })
    
  }
    
  return (
    <Modal visible={visible} title={title} onCancel={onCancel} footer={[]}>
      <CreateCourseForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
    </Modal>
  );
};

