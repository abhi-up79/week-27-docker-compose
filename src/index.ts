import { PrismaClient } from '@prisma/client';
import express from 'express'

const app = express();
const prismaClient =   new PrismaClient();

app.get("/", async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({
        data
    })
})

app.get("/hello", (req, res) => {
    res.json({
        "message": "hello-world!"
    })
})

app.post("/", async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        "message": "Post Endpoint"
    })
})

app.listen(3000)