import express from 'express'
import devBundle from './devBundle' //*
import path from 'path'

const app = express();
devBundle.compile(app); //*

//to tell express app to take static files when requested by client side from dist folder
const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//* - are only meant for development mode and must be commented for production