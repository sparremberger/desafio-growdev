import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        nome: { type: String, required: true },
        comentario: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// Da documentação do Mongoose:
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
const Comment = mongoose.model("Comentario", commentSchema);

export default Comment;
