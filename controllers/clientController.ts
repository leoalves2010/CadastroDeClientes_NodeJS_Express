import { Request, Response } from "express";
import clientsModel from "../models/ClientsModel";

async function index(req: Request, res: Response, next: any) {
    const clients = await clientsModel.findAll();
    res.render('index', { clients });
}

export default { index };