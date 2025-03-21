import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please provide todo text.']
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    default: null,
  }
}, {
  timestamps: true
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
