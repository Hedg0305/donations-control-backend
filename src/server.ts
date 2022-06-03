import express, { Express, Request, Response } from "express";
import {
  DonationRoutes,
  DonatorsRoutes,
  CourierRoutes,
  TelemarketingRoutes,
} from "./routes";

const app: Express = express();

app.use(express.json());
app.use("/donation", DonationRoutes);
app.use("/courier", CourierRoutes);
app.use("/donators", DonatorsRoutes);
app.use("/telemarketing", TelemarketingRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScrisadaspt dasdasdsadadasds");
});

app.listen("3001", () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3001`);
});

