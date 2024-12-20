import dotenv from 'dotenv';
import { resolve } from "path";
dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import alunoRoutes from './routes/aluno';
import photoRoutes from './routes/photo';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/photos/", photoRoutes)
  }
}

export default new App().app;
