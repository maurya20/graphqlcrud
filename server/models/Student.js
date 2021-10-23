import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  rollNumber: Number,
  subjects: [String],
  status: Boolean,
});
const Student = mongoose.model("Student", StudentSchema);
export default Student;
