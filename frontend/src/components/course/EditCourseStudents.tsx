import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StudentsTable from '../students/StudentsTable';
import { EditCourseStudents_course } from './__generated__/EditCourseStudents_course.graphql';
import AddStudentModal from '../students/Modals/AddStudentModal';
import DeleteStudentModal from '../students/Modals/DeleteStudentModal';

type Props = { course: EditCourseStudents_course };
const EditCourseStudents = ({ course }: Props) => {
    const [
        isAddStudentModalOpen,
        toggleAddStudentModal,
    ] = useState<boolean>(false);
    const [
        isDeleteStudentModalOpen,
        toggleDeleteStudentModal,
    ] = useState<boolean>(false);
    return (
      <Layout style={{ backgroundColor: 'white', display: 'inline'}}>
        <Button
          onClick={() => toggleAddStudentModal(!isAddStudentModalOpen)}
          icon={<UserAddOutlined />}
          type="primary"
          style={{ margin: '0px 5px 0px 0px ', width: 'fit-content' }}
        >
          Add Student
        </Button>
        <Button
          // TODO Add confirmation popup to remove all students
          onClick={() => toggleDeleteStudentModal(!isDeleteStudentModalOpen)}
          icon={<DeleteOutlined />}
          type="primary"
          danger
          style={{ margin: '0px 5px 0px 0px ', width: 'fit-content' }}
        >
          Delete All Students
        </Button>
        <AddStudentModal
          title="Add student"
          visible={isAddStudentModalOpen}
          courseId={course.id}
          onSubmitSuccess={() => toggleAddStudentModal(false)}
          onSubmitError={(e: Error) => console.error(e)}
          onCancel={() => toggleAddStudentModal(!isAddStudentModalOpen)}
        />
        <DeleteStudentModal
          title="Delete All Students"
          visible={isDeleteStudentModalOpen}
          courseId={course.id}
          onSubmitSuccess={() => toggleDeleteStudentModal(false)}
          onSubmitError={(e: Error) => console.error(e)}
          onCancel={() => toggleDeleteStudentModal(!isDeleteStudentModalOpen)}
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
