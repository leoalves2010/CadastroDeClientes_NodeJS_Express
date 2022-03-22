import { Request, Response } from "express";
import clientsModel from "../models/ClientsModel";

async function index(req: Request, res: Response, next: any) {
    const clients = await clientsModel.findAll();
    res.render('index', { clients });
}

async function show(req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id);
    res.render('showClient', { client });
}

export default { index, show };