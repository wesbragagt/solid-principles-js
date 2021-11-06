// before
// Single Responsibility principle

// We have to read from a list of urls in a text file and we need to output a json file using javascript
// go from this ^about/contact-us about/ --> {"source": "about/contact-us", "dest": "about/"}
const fs = require("fs");
const path = require("path");

readFileAndOuputJson();

function readFileAndOuputJson() {
  console.log("Parsing urls.txt file to .json...");
  const file = fs.readFileSync(path.join(__dirname, "urls.txt"), "utf8");
  const parsed = file
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split(" "))
    .reduce((acc, cur) => {
      const [source, dest] = cur;
      acc.push({ source, dest });
      return acc;
    }, []);
  fs.writeFileSync(
    path.join(__dirname, "urls.json"),
    JSON.stringify(parsed, null, 2)
  );
  console.log("Done");
}
