import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";

//importing routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import orderRoute from "./routes/orders.js";
import paymentRoute from "./routes/payment.js";
import statsRoute from "./routes/stats.js";

config({
  path: "./.env",
});
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";

connectDB(mongoURI);
export const myCache = new NodeCache();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API working with /api/v1");
});

//using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", statsRoute);

//we can check the images in the browser by this line as it creates the uploads as static
app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
