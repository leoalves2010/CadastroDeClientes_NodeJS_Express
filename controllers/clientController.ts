import { Request, Response } from "express";
import clientsModel from "../models/clientsModel";

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

async function edit(req: Request, res: Response, next: any) {
    try {
        const client = await clientsModel.findByPk(req.params.id);
            if(client === null) {
            res.status(404).send('Registro não encontrado!');
        }else{
            res.status(404).render('editClient', { client });
        }
    } catch(error) {
        console.log(error);
        res.status(500).end();
    }    
}

async function editDB(req: Request, res: Response, next: any) {
    try {
        await clientsModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.redirect('/');
    } catch(error) {
        console.log(error);
        res.status(500).end();
    }
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

async function deleteDB(req: Request, res: Response, next: any) {
    try {
        await clientsModel.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
}

export default { index, show, create, createDB, edit, editDB, deleteDB };