const fs = require("fs");

const addressBook = {};
const dir = `${__dirname}/versions/`;
const files = fs.readdirSync(dir);

files.forEach((fileName) => {
    if (fileName.endsWith(".json")) {
        exports[fileName] = readJsonSync(`${dir}/${fileName}`);
    }
});

const versions = Object.keys(addressBook).sort();

exports.latest = exports[versions[0]];

function readJsonSync(path) {
    return JSON.parse(fs.readFileSync(path, "utf8"));
}
