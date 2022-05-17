import express, { Express, Request, Response } from "express";
import { DonationRoutes, DonatorsRoutes, WorkerRoutes } from "./routes";

const app: Express = express();

app.use(express.json());
app.use("/donation", DonationRoutes);
app.use("/worker", WorkerRoutes);
app.use("/donators", DonatorsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScrisadaspt dasdasdsadadasds");
});

app.listen("3001", () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3001`);
});

