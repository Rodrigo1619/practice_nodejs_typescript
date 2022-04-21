"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //hace que la req.body se transforme a un json
const PORT = 3000;
//si ponemos req en el parametro nos da un error por las configuraciones
//pero si ponemos un "_" ts tiene una excepcion y ya se soluciona
app.get('/ping', (_req, res) => {
    console.log('ping here');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
