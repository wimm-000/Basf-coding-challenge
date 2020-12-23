#!/bin/dash
# We install proyect dependencies mostly npm install in each folder. 
# We are using yarn in the react app, its faster.
cd ..
npm install
cd api && npm install
cd app && yarn install
