import { Object } from "realm";

export class QuizRoom extends Object {
  static schema = {
    name: 'QuizRoom',
    properties: {
        _id: 'objectId',
        difficulty: 'string?',
        numQuestions: 'int?',
        questions: 'string[]',
        questionNo: 'int',
        roomCapacity: 'int',
        players: 'objectId[]',
        answers: 'string[]',
        scores: 'int[]',
        roomName: 'string',
        musicType: 'string?',
        category: 'string?',
        private: 'bool',
        joinCode: 'int',
    },
    primaryKey: '_id'
  }
};