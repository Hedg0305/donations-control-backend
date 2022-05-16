"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_worker_repository_1 = require("../repositories/prisma/prisma-worker-repository");
const create_worker_use_case_1 = require("../use-cases/worker/create-worker-use-case");
const routes = express_1.default.Router();
exports.routes = routes;
routes.get("/", (req, res) => {
    res.send("Hello from donations");
});
routes.post("/", (req, res) => {
    const prismaWorkerRepository = new prisma_worker_repository_1.PrismaWorkerRepository();
    const cretateWorkerUseCase = new create_worker_use_case_1.CreateWorkerUseCase(prismaWorkerRepository);
    console.log("Bora ganhar dinheiro");
    res.send("Hello from worker");
});
