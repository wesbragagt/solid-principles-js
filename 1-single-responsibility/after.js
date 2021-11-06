// Single Responsibility
// After refactor

// Functions are doing one thing
// Only one reason for each function to change
// Ability to share logic
// Scales very well and easier to test
const fs = require("fs")
const path = require("path")

main()

function main(){
  logger("Parsing urls.txt...")
   pipe(
    readUrlsFile,
    parseStringToJson, 
    outputJsonFile
  )()
  logger("Done")
}
function pipe(...fns){
  return (value) => fns.reduce((output, fn) => fn(output), value)
}
// this string1 string2 --> {source: string1, dest: string2}
function parseStringToJson(str = ''){
  const parsed = str.split('\n').filter(Boolean).map(line => line.split(' ')).reduce((acc,cur) => {
    const [source, dest] = cur
    acc.push({source, dest})
    return acc
  }, [])
  return parsed
}

function readUrlsFile(){
  const fileString = fs.readFileSync(path.join(__dirname, 'urls.txt'), 'utf8')
  return fileString
}

function outputJsonFile(data){
  fs.writeFileSync(path.join(__dirname, 'urls.json'), JSON.stringify(data, null, 2))
}

function logger(msg){
  console.log(msg)
}
