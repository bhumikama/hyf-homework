import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.join(__dirname, "documents.json");

app.use(express.json());

app.get("/search", async (req, res) => {
  try {
    const documents = await readFile();
    if (req.query.q) {
      const searchString = req.query.q.toLowerCase();
      const filteredDocuments = documents.filter((document) =>
        Object.values(document)
          .map((ele) => String(ele).toLowerCase())
          .some((value) => value.includes(searchString))
      );
      return res.json(filteredDocuments);
    } else {
      return res.json(documents);
    }
  } catch (error) {
    res.status(404).json({ message: "Error parsing" });
  }
});

app.post("/search", async (req, res) => {
  try {
    const q = req.query.q;
    const field = req.body.fields;

    if (q && field) {
      return res
        .status(404)
        .json({ message: "Cannot provide both the values" });
    }
    const documents = await readFile();
    let filteredDocuments = documents;

    if (q) {
      filteredDocuments = filteredDocuments.filter((document) =>
        Object.values(document).some((value) =>
          String(value).toLowerCase().includes(q.toLowerCase())
        )
      );
    }
    if (field) {
      for (const property in field) {
        filteredDocuments = filteredDocuments.filter(
          (document) =>
            document[property] && String(document[property]) == field[property]
        );
      }
    }
    return res.json(filteredDocuments);
  } catch (error) {
    return res.status(500).json({ message: "Error parsing" });
  }
});

app.get("/documents/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const documents = await readFile();
    const documentMatchingWithId = documents.find(
      (document) => document.id == Number(id)
    );
    if (documentMatchingWithId) {
      return res.json(documentMatchingWithId);
    } else {
      return res.status(404).json({ Message: "No Documents were found with this ID" });
    }
  } catch (error) {
    return res.status(404).json({ message: "Error parsing" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


async function readFile(){
  const data = await fs.readFile(databasePath, "utf-8");
  return JSON.parse(data);
}