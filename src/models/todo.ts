/*export class Todo {
  constructor(public id: string, public text: string) {}
}*/

import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

type TodoType = TodoModel & mongoose.Document;

export interface TodoModel {
  title: {
    type: string;
    required: true;
  };
  description: {
    type: string;
    required: true;
  };
}

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Todo: Model<TodoType> = mongoose.model<TodoType>('Todo2', TodoSchema);
export default Todo;
