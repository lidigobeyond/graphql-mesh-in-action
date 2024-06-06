import { createBuiltMeshHTTPHandler } from "./.mesh";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use("api/graphql", createBuiltMeshHTTPHandler());

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
