import mongoose from "mongoose";
const Schema = mongoose.Schema;

const formSchema = new Schema(
    {
        nome: { type: String, required: true },
        telefone: { type: String, required: true },
        email: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
