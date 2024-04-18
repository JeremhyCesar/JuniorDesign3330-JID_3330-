import { Object } from "realm";

export class User extends Object {
  static schema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      enrolled_class: 'Class',
      friends: 'objectId[]',
      full_name: 'string',
      lesson_progress: 'int[]',
      lesson_topics: 'string[]',
      local_quiz_history: 'LocalQuizRecord[]',
      managed_class: 'Class',
      user_type: 'string',
    },
    primaryKey: '_id',
  }
};

/*export const UserSchema = {
  name: 'User',
  properties: {
    _id: 'objectId',
    enrolled_class: 'Class',
    friends: 'objectId[]',
    full_name: 'string',
    lesson_progress: 'int[]',
    lesson_topics: 'string[]',
    local_quiz_history: 'LocalQuizRecord[]',
    managed_class: 'Class',
    user_type: 'string',
  },
  primaryKey: '_id',
}*/

