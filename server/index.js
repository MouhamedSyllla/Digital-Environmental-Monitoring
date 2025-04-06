import express from 'express';
import env from 'dotenv';
import regionRoutes from './routes/regionRoutes.js';
import villageRoutes from "./routes/villageRoutes.js";
import sourceRoutes from "./routes/sourceRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import sensorReadingRoutes from "./routes/sensorReadingRoutes.js";
import cors from 'cors';

env.config();

const app = express();
const PORT = process.env.PORT;
const REACT_URL = process.env.REACT_URL;

app.use(cors({
    origin: REACT_URL,
    credentials: true,
}));
app.use(express.json());


app.use(regionRoutes);
app.use(villageRoutes);
app.use(sourceRoutes);
app.use(sensorRoutes);
app.use(sensorReadingRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});