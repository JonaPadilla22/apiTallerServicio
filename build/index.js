"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use((0, express_fileupload_1.default)());
app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.static(path.resolve(__dirname, '../files')));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', index_1.default);
app.listen(PORT, () => {
    console.log('Server on port ', PORT);
});
