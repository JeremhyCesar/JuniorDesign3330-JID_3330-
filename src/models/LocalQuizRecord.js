import { Object } from "realm";

export class LocalQuizRecord extends Object {
  static schema = {
    name: 'LocalQuizRecord',
    embedded: true,
    properties: {
        difficulty: 'string?',
        length: 'int?',
        score: 'int?',
        topic: 'string?',
    },
  }
};