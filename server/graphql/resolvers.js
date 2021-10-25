import Student from "../models/Student.js";

//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Student.find();
    },
    getOne: async (parent, args, context, info) => {
      return await Student.findById(args.id);
    },
  },
  Mutation: {
    createStudent: async (parent, args, context, info) => {
      const { name, rollNumber, subjects, status } = args.student;
      const student = await new Student({
        name,
        rollNumber,
        subjects,
        status,
      }).save();
      return student;
    },
    updateStudent: async (parent, args, context, info) => {
      //const { id } = args;
      const { id, name, rollNumber, subjects, status } = args.student;
      const student = await Student.findByIdAndUpdate(
        id,
        { name, rollNumber, subjects, status },
        { new: true }
      );
      return student;
    },
    deleteStudent: async (parent, args, context, info) => {
      const { id } = args;
      await Student.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};

export default resolvers;
