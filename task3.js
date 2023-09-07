var fs = require("fs");

console.log("going to write into existing file");
fs.writeFile("welcome.txt", "hello node!!!", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("data written succesfully!");
  console.log("let's read newly written data");

  fs.readFile("welcome.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("asynchronous read:" + data.toString());
  });
});