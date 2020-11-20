import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import styled from 'styled-components';
import { Store } from 'rc-field-form/lib/interface';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import DeleteCourseModal from './DeleteCourseModal';
import { UpdateCourseForm } from '../form/UpdateCourseForm';
import { commit as commitUpdateOneCourseMutation } from '../../graphql/mutations/UpdateOneCourseMutation';
import { commit as commitDeleteCourseMutation } from '../../graphql/mutations/DeleteCourseMutation';
import { EditCourseDetails_course } from './__generated__/EditCourseDetails_course.graphql';
import { DeleteCourseInput } from '../../graphql/mutations/__generated__/DeleteCourseMutation.graphql';

const FormWrapper = styled.div`
  width: 350px;
`;
type Props = {
  onSubmitSuccess: () => void;
  onSubmitError: (e: any) => void;
  course: EditCourseDetails_course;
};
const EditCourseDetails = ({
  onSubmitSuccess,
  onSubmitError,
  course: { id },
}: Props) => {
  const onSubmit = ({ name, description }: Store) =>
    commitUpdateOneCourseMutation(
      { data: { name, description }, where: { id } },
      onSubmitSuccess,
      onSubmitError,
    );
  const onDelete = () => console.log('did we get here?');
  const [isDeleteCourseModalOpen, toggleDeleteCourseModal] = useState<boolean>(
    false,
  );

  const DeleteButton = () => (
    <Button
      block
      type="primary"
      danger
      htmlType="reset"
      size="large"
      onClick={() => toggleDeleteCourseModal(true)}
      style={{
        marginTop: '10px',
      }}
    >
      Delete
    </Button>
  );
  console.log('how about here?');
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <FormWrapper>
        <UpdateCourseForm
          onSubmit={onSubmit}
          onDelete={onDelete}
          onSubmitError={onSubmitError}
        />

        <DeleteCourseModal
          title="Delete All Students"
          visible={isDeleteCourseModalOpen}
          courseId={id}
          onSubmitSuccess={() => console.log('deleteing')}
          onSubmitError={(e: Error) => console.log(e)}
          onCancel={() => toggleDeleteCourseModal(!isDeleteCourseModalOpen)}
        />
        <DeleteButton />
      </FormWrapper>
    </Layout>
  );
};

export default createFragmentContainer(EditCourseDetails, {
  course: graphql`
    fragment EditCourseDetails_course on Course {
      id
    }
  `,
});
