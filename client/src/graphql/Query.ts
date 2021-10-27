import { gql } from "@apollo/client";

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
