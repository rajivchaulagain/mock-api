import { RequestHandler } from "express";
import { assertIsDefined } from "../util/assertIsDefined";
import createHttpError from "http-errors";
import DetailModel from "../models/detail";


export const postDetail: RequestHandler = async (req, res, next) => {
    const { title, description, imageUrl } = req.body;
    const authenticatedUserId = req.session.userId;
    try {
        assertIsDefined(authenticatedUserId);
        if (!title) {
            throw createHttpError(400, "Mmust have a title");
        }
        const newDetail = await DetailModel.create({
            userId: authenticatedUserId,
            description,
            imageUrl
        })
        res.status(201).json(newDetail);
    }
    catch (error) {
        next(error);
    }
}

export const getDetails: RequestHandler = async (req, res, next) => {
    const authenticatedUserId = req.session.userId;

    try {
        assertIsDefined(authenticatedUserId);

        const details = await DetailModel.find({ userId: authenticatedUserId }).exec();
        res.status(200).json(details);
    } catch (error) {
        next(error);
    }
};