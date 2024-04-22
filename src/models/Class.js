import { Object } from "realm";

export class Class extends Object {
  static schema = {
    name: 'Class',
    properties: {
      _id: 'objectId',
      class_name: 'string',
      live_quiz_ip: 'string?',
      live_quiz_port: 'string?',
      online_quiz_history: 'OnlineQuizRecord[]',
      students: 'User[]',
      teacher: 'User',
      join_code: 'int'
    },
    primaryKey: '_id',
  }
};