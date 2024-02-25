"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medidas_1 = __importDefault(require("./routes/medidas"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const recetas_1 = __importDefault(require("./routes/recetas"));
const ingredientes_1 = __importDefault(require("./routes/ingredientes"));
const pasos_1 = __importDefault(require("./routes/pasos"));
const connection_1 = __importDefault(require("./db/connection"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/medidas', medidas_1.default);
app.use('/usuarios', usuarios_1.default);
app.use('/recetas', recetas_1.default);
app.use('/ingredientes', ingredientes_1.default);
app.use('/pasos-preparacion', pasos_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on port ${PORT}`);
    try {
        yield connection_1.default.authenticate();
        console.log('Database connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}));
