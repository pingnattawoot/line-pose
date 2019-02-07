import _ from 'lodash'

export default function createArrayFilterFunction<T>(
  fields: string[],
  limit: number = Infinity
) {
  return function(array: T[], query: string): T[] {
    query = query.trim()

    if (query.length === 0) {
      if (array.length <= limit) {
        return array
      } else {
        return _.take(array, limit)
      }
    }

    let matchers
    if (query.includes('"')) {
      matchers = query.split('"')
    } else {
      matchers = query.split(/[\s\t\r\n@,._+\-*/]/).map(word => word.trim())
    }
    matchers = _.chain(matchers)
      .filter(word => word.length > 0)
      .uniq()
      .map(word => new RegExp(_.escapeRegExp(word), 'i'))
      .value()

    let index = -1
    let count = 0
    const results: T[] = []
    while (++index < array.length && count < limit) {
      if (
        matchers.every(matcher =>
          fields.some(field => matcher.test(array[index][field]))
        )
      ) {
        results.push(array[index])
        count += 1
      }
    }
    return results
  }
}
