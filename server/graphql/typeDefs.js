import { gql } from "apollo-server-core";

//Queries
const typeDefs = gql`
  type Student {
    id: ID
    name: String
    rollNumber: Int
    subjects: [String]
    status: Boolean
  }
  type Query {
    hello: String
    getAll: [Student]
  }
  input StudentInput {
    name: String
    rollNumber: Int
    subjects: [String]
    status: Boolean
  }
  type Mutation {
    createStudent(student: StudentInput): Student
    updateStudent(id: String, student: StudentInput): Student
    deleteStudent(id: String): String
  }
`;

export default typeDefs;
