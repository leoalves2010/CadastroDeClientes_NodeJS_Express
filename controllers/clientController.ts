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

async function create(req: Request, res: Response, next: any) {
    res.render('createClient');
}

async function createDB(req: Request, res: Response, next: any) {
    try {
        await clientsModel.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
}

export default { index, show, create, createDB };