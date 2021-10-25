import { gql } from "@apollo/client";
export const getALL = gql`
  {
    getAll {
      id
      name
      rollNumber
      subjects
      status
    }
  }
`;

export const getOne = gql`
  query getOne($id: ID!) {
    getOne(id: $id) {
      id
      name
      rollNumber
      subjects
      status
    }
  }
`;
