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
