const fs = require("fs");

const addressBook = {};
const dir = `${__dirname}/versions/`;
const files = fs.readdirSync(dir);

files.forEach((fileName) => {
    if (fileName.endsWith(".json")) {
        addressBook[fileName] = readJsonSync(`${dir}/${fileName}`);
    }
});

const versions = Object.keys(addressBook).sort();
addressBook["latest"] = addressBook[versions[0]];

function readJsonSync(path) {
    return JSON.parse(fs.readFileSync(path, "utf8"));
}

exports.addressBook = addressBook;
