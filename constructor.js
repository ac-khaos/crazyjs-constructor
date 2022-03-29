const readline = require("readline");
const fsPromises = require("fs/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function creater() {
  const optionsPath = "./options.json";

  fsPromises.readFile(optionsPath).then((data) => {
    const options = JSON.parse(data);
    
    
  }).catch((err) => {
    throw(err);
  });
}

// cmd读取用户输入
function rlQuestionPromise(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

module.exports = {
  creater,
};
