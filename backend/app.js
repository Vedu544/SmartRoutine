import express from "express";
import healthRoute from "./routes/healthRoute.js";
const app = express();
app.use(express.json());
app.use("/api", healthRoute);



// Example route

app.get("/", (req, res) => {
    res.send("SmartRoutine backend running!");
});

export default app;
