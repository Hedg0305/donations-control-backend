"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use("/donation", routes_1.DonationRoutes);
app.use("/worker", routes_1.WorkerRoutes);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen("3001", () => {
    console.log(`⚡️[server]: Server is running at https://localhost:3001`);
});
