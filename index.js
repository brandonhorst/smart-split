module.exports = function split (input, strOrRegex, capturingGroup) {
  capturingGroup = capturingGroup || 0

  var results = []

  if (strOrRegex instanceof RegExp) {
    var regex = new RegExp(strOrRegex.toString().slice(1, -1), 'g')
    var oldIndex = 0
    var match
    while ((match = regex.exec(input))) {
      if (capturingGroup === 0) {
        results.push(input.substring(oldIndex, match.index))
        results.push(match[0])
      } else {
        
      }
      if (match.index === regex.lastIndex) throw new Error('No zero-width captures allowed')
      oldIndex = match.index + match[0].length
    }
    results.push(input.substring(oldIndex))
  } else {
    var splits = input.split(strOrRegex)
    var item
    for (var i = 0, l = splits.length; i < l - 1; i++) {
      item = splits[i]
      results.push(item)
      results.push(strOrRegex)
    }
    results.push(splits[splits.length - 1])
  }

  return results
}
