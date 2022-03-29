const nodeVersion = process.versions.node;
// 语义化版本号
const semver = nodeVersion.split(".");
const major = Number(semver[0]);
// 最小版本号
const majorMinimum = 14;

if (major < majorMinimum) {
  console.error(`You are running Node ${major}，Constructor requires Node ${majorMinimum} or higher!`);
  process.exit(1);
}

const { creater } = require("./constructor");

creater();
