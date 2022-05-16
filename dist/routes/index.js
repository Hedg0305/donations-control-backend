"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationRoutes = exports.WorkerRoutes = void 0;
const worker_1 = require("./worker");
Object.defineProperty(exports, "WorkerRoutes", { enumerable: true, get: function () { return worker_1.routes; } });
const donation_1 = require("./donation");
Object.defineProperty(exports, "DonationRoutes", { enumerable: true, get: function () { return donation_1.routes; } });
