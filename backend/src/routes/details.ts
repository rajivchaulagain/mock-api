import express from "express";
import * as DetaiController from "../controllers/details";

const router = express.Router();

router.get("/", DetaiController.getDetails);

// router.get("/:noteId", DetaiController.getNote);

router.post("/", DetaiController.postDetail);

// router.patch("/:noteId", DetaiController.updateNote);

// router.delete("/:noteId", DetaiController.deleteNote);

export default router;