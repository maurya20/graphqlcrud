import { gql } from "@apollo/client";
export const CREATE_STUDENT = gql`
  mutation createStudent(
    $name: String
    $rollNumber: Int
    $subjects: [String]
    $status: Boolean
  ) {
    createStudent(
      student: {
        name: $name
        rollNumber: $rollNumber
        subjects: $subjects
        status: $status
      }
    ) {
      id
      name
      rollNumber
      subjects
      status
    }
  }
`;
export const UPDATE_STUDENT = gql`
  mutation updateStudent(
    $id: String
    $name: String
    $rollNumber: Int
    $subjects: [String]
    $status: Boolean
  ) {
    updateStudent(
      student: {
        id: $id
        name: $name
        rollNumber: $rollNumber
        subjects: $subjects
        status: $status
      }
    ) {
      id
      name
      rollNumber
      subjects
      status
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation deleteStudent($id: String) {
    deleteStudent(id: $id)
  }
`;
