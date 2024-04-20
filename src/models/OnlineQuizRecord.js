import { Object } from "realm";

export class OnlineQuizRecord extends Object {
  static schema = {
    name: 'OnlineQuizRecord',
    embedded: true,
    properties: {
      difficulty: 'string?',
      length: 'int?',
      scores: 'int[]',
      students: 'objectId[]',
      topic: 'string?',
    },
  }
};