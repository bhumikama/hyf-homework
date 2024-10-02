import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance("contacts");
  let validSortFields = ["first_name", "last_name", "email", "phone"];
  let validSortOrder = ["ASC", "DESC"];

  if ("sort" in req.query) {
    const sortParameter = req.query.sort.toString();
    let parts = sortParameter.split(" ");
    let sortField = parts[0].toLowerCase();
    let sortOrder = parts[1].toUpperCase() || "ASC"; // adding a default value if not provided

    if (
      !validSortFields.includes(sortField) ||
      !validSortOrder.includes(sortOrder)
    ) {
      return res.status(404).json({ message: "invalid sort parameter" });
    }
    query = query.orderBy(sortField, sortOrder); // after validating apply sql query
  }
  try {
    const data = await query;
    return res.json({ data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
