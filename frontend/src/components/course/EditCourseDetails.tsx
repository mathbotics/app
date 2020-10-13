import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Store } from 'rc-field-form/lib/interface';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { UpdateCourseForm } from '../form/UpdateCourseForm';
import { commit as commitUpdateOneCourseMutation } from '../../graphql/mutations/UpdateOneCourseMutation';
import { EditCourseDetails_course } from './__generated__/EditCourseDetails_course.graphql';

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

  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <FormWrapper>
        <UpdateCourseForm onSubmit={onSubmit} onSubmitError={onSubmitError} />
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
