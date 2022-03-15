function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateURL() {
  const input = 'abcdefghijklmnopqrstuvwxyz1234567890'
  const collection = [...input]


  let url = 'http://localhost:3000/'
  for (let i = 1; i < 7; i++) {
    url += sample(collection)
  }
  return url
}
module.exports = generateURL