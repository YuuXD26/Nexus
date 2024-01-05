const { spawn } = require("child_process");
const path = require("path");
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("Nexus Bot Ready to Listening🚀");
});

app.listen(3000, () => {
  console.log("Nexus Bot Ready t Listening🚀");
});

function start() {
  let args = [path.join(__dirname, "itsbayy.js"), ...process.argv.slice(2)];
  console.log([process.argv[0], ...args].join("\n"));
  let p = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  })
    .on("message", (data) => {
      if (data == "reset") {
        console.log("Restarting Bot...");
        p.kill();
        start();
        delete p;
      }
    })
    .on("exit", (code) => {
      console.error("Exited with code:", code);
      if (code == "." || code == 1 || code == 0) start();
    });
}
start();
