// index.js
const core = require('@actions/core');

async function run() {
  try {
    const exampleInput = core.getInput('example-input');
    console.log(`Example input: ${exampleInput}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
