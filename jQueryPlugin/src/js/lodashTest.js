
import _add from 'lodash/fp/add'
import _map from 'lodash/map'

const addOne = _add(1)

console.log(_map([1, 2, 3], addOne));