# app
Monorepo for Mathbotics services.

Edgar here, so apparently when you do the following query:

query {
  block {
	...on MultipleChoiceQuestionBlock {
    id
    
  }
  }
}

it returns the array but each value is undefined. I need this portion working to retrieve every single MultipleChoiceQuestionBlock object in the database.
