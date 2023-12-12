import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";
import locationsRouter from "./routes/locations.js";
import swagger from "./routes/swagger.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/docs", swagger);

// app.use("*", (req, res) => {
//   res.send("404 Not Found");
// });

// app.use((err, req, res, next) => {
//   return res.json({ error: err.message });
// });

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
