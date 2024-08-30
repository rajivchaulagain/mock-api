import { InferSchemaType, model, Schema } from "mongoose";

const detailSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String }
}, { timestamps: true });

type Detail = InferSchemaType<typeof detailSchema>;

export default model<Detail>("Detail", detailSchema);