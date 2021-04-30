import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";

import App from "../src/app.jsx";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const app = renderToString(<App />);

  const indexFile = path.resolve("./server-build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

app.use(express.static("./server-build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
