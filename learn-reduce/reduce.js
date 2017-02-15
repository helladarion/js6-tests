var fs = require('fs')

var output = fs.readFileSync('data.txt', 'utf8')
  .trim() // Remove any empty spaces
  .split('\n') // Split the file in an array
  .map(line => line.split('\t')) // Create new array with the text split in tabs
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [] // reuse the array if there is another with the same name
    customers[line[0]].push({
      position: line[1],
      office: line[2],
      age: line[3],
      start_date: line[4],
      salary: line[5]
    })
    return customers
  }, {})
console.log('output', JSON.stringify(output, null, 2))
