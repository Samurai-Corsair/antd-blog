import * as UserActionCreators from './users/actionCreators'
import * as TodosActionCreators from './todos/actionCreators'

export default {
    ...TodosActionCreators,
    ...UserActionCreators
}