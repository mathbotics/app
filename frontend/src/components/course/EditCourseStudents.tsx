import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import StudentsTable from '../students/StudentsTable';
import { EditCourseStudents_course } from './__generated__/EditCourseStudents_course.graphql';
import AddStudentModal from '../students/Modals/AddStudentModal';
import DeleteStudentModal from '../students/Modals/DeleteStudentModal';
import DeleteSingleStudentModal from '../students/Modals/DeleteSingleStudentModal';
import EditStudentModal from '../students/Modals/EditStudentModal';
// import EditBlockSidebar from '../slides/EditBlockSidebar';

type Props = { course: EditCourseStudents_course };

const EditCourseStudents = ({ course }: Props) => {

  const [isAddStudentModalOpen, toggleAddStudentModal] = useState<boolean>(
    false,
  );
  const [isDeleteStudentModalOpen, toggleDeleteStudentModal] = useState<boolean>(
    false
  );
  const [edit, toggleEdit] = useState<boolean>(false);
  const [deleteStudent, toggleDeleteStudent] = useState<boolean>(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  return (
    <Layout style={{ backgroundColor: 'white', display: 'inline' }}>
      <Button
        onClick={() => toggleAddStudentModal(!isAddStudentModalOpen)}
        icon={<UserAddOutlined />}
        type="primary"
        style={{ margin: '0px 5px 15px 0px ', width: 'fit-content' }}
      >
        Add Student
      </Button>
      <Button
        onClick={() => toggleDeleteStudentModal(!isDeleteStudentModalOpen)}
        icon={<DeleteOutlined />}
        type="primary"
        danger
        style={{ margin: '0px 5px 15px 0px ', width: 'fit-content' }}
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
      <StudentsTable
        course={course}
        onClickEdit={(studentId) => {
          setSelectedStudentId(studentId);
          toggleEdit(!edit);
        }}
        onClickRemove={(studentId) => {
          setSelectedStudentId(studentId);
          toggleDeleteStudent(!deleteStudent);
          console.log('trying to remove');
        }}
      />
      <EditStudentModal
        title="Edit Student"
        visible={edit}
        studentId={selectedStudentId}
        onSubmitSuccess={() =>  toggleEdit(false) }
        onSubmitError={(e: Error) =>
          console.error(`Unable to edit student ${e}`)
        }
        onCancel={() => toggleEdit(!edit)}
      />
      <DeleteSingleStudentModal
        title="Delete Student"
        visible={deleteStudent}
        studentId={selectedStudentId}
        onSubmitSuccess={() => toggleDeleteStudent(false)}
        onSubmitError={(e: Error) => console.error(e)}
        onCancel={() => toggleDeleteStudent(!deleteStudent)}
      />
    </Layout>
  );
};

export default createFragmentContainer(EditCourseStudents, {
  course: graphql`
    fragment EditCourseStudents_course on Course {
      id
      students {
        username
        firstName
        lastName
        gradeLevel
        id
      }
      ...StudentsTable_course
    }
  `,
});
