import { GraphQLEnumType } from "graphql";

export const GradeLevel = new GraphQLEnumType({
    name: "GradeLevel",
    values: {
      FIRST: {value: "FIRST"},
      SECOND: {value: "SECOND"},
      THIRD: {value: "THIRD"},
      FOURTH: {value: "FOURTH"},
      FIFTH: {value: "FIFTH"},
      SIXTH: {value: "SIXTH"},
      SEVENTH: {value: "SEVENTH"},
      EIGHTH: {value: "EIGHTH"},
      NINTH: {value: "NINTH"},
      TENTH: {value: "TENTH"},
      ELEVENTH: {value: "ELEVENTH"},
      TWELFTH: {value: "TWELFTH"}
    }
  })