import { Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";
import Comment from "../models/commentModel";
import Form from "../models/formModel";

const getApi = asyncHandler(async (req: Request, res: Response) => {
    res.json("funcionou");
});

// @desc Recebe os dados de todos os comentários
// @route GET /api/comments/
// @access Publico
const getComments = asyncHandler(async (req: Request, res: Response) => {
    const pagina: number = Number(req.query.pagina) || 1;

    // Collation indica que a query atenderá a características específicas de uma linguagem. Nesse caso, a língua portuguesa.
    // Strenght : 2 significa que irá considerar acentos na hora de ordenar o resultado
    const result = await Comment.find({})
        .collation({ locale: "pt", strength: 2 })
        .limit(100) // limita o número de objetos retornados na query
        .skip((pagina - 1) * 100); // mágica pros resultados virem paginados e 100 por página
    res.json(result);
});

// @desc Posta um novo comentário
// @route POST /api/comments
// @access Public
const postComment = asyncHandler(async (req: Request, res: Response) => {
    const { nome, comentario } = req.body;
    //res.send({ email, password }); Com {} envia como json, sem é só o value (sem a key)

    const comment = await Comment.create({ nome, comentario });
    res.json(comment);
});

const postContact = asyncHandler(async (req: Request, res: Response) => {
    const { nome, telefone, email } = req.body;

    const form = await Form.create({ nome, telefone, email });
    res.json(form);
});

export { postComment, getComments, postContact, getApi };
