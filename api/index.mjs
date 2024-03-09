import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.mjs";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "*"
        : [
            "https://demenagementabordable.com",
            "https://www.demenagementabordable.com",
          ],
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
