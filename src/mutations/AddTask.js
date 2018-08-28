// mutations/AddTask.js
import gql from 'graphql-tag'
export default gql`
  mutation addTask($name: String!, $completed: Boolean!) {
    createTask(
      input: {
        name: $name, completed: $completed
      }
    ) {
        id
        name
        completed
      }
  }
`
