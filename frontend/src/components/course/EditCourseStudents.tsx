import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StudentsTable from '../students/StudentsTable';
import { EditCourseStudents_course } from './__generated__/EditCourseStudents_course.graphql';
import AddStudentModal from '../students/AddStudentModal';

type Props = { course: EditCourseStudents_course };
const EditCourseStudents = ({ course }: Props) => {
  const [isModalOpen, toggleModal] = useState<boolean>(false);
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Button
        onClick={() => toggleModal(!isModalOpen)}
        icon={<UserAddOutlined />}
        type="primary"
        style={{ margin: '10px 0', width: 'fit-content' }}
      >
        Add Student
      </Button>
      <AddStudentModal
        title="Add student"
        visible={isModalOpen}
        courseId={course.id}
        onSubmitSuccess={() => toggleModal(false)}
        onSubmitError={(e: Error) => console.error(e)}
        onCancel={() => toggleModal(!isModalOpen)}
      />
      <StudentsTable course={course} />
    </Layout>
  );
};

export default createFragmentContainer(EditCourseStudents, {
  course: graphql`
    fragment EditCourseStudents_course on Course {
      id
      ...StudentsTable_course
    }
  `,
});
