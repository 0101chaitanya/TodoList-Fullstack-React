const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/TodoModel");
const {json} = require("express");
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true


}))
app.use(express.json());

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://chaitanya:chaitanya@cluster0.ojoav.mongodb.net/todo-fullstack?appName=Cluster0"
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connectToDb();


app.post("/add-task", async (req, res) => {
    const {title, status} = req.body;
    try {
        const todo = new TodoModel({
            title,
            status,

        })
        const savedTodo = await todo.save();
        return res.json(savedTodo);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})
app.get("/get-a-task/:id", async (req, res) => {

    try {
        const {id} = req.params;

        const todo = await TodoModel.findById(id);
        //throw new Error("Failed to fetch todos");
        return res.json(todo);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})

app.get("/get-all-tasks", async (req, res) => {
    try {
        const todos = await TodoModel.find();

        return res.json(todos);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})

app.put("/put-task/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const updatedTask = await TodoModel.findByIdAndUpdate(req.body._id, req.body, {returnDocument: "after"});

        return res.json(updatedTask);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})

app.delete("/delete-task/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTask = await TodoModel.findByIdAndDelete(id);
        return res.json({
            message: "Task deleted successfully",
            deletedTask
        });
    } catch (e) {
        return res.status(500).json({error: e.message});

    }
})


app.listen(3000,
    () => {
        console.log(`Server is running on port 3000`);
    });
