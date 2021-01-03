#!/bin/dash
# We install proyect dependencies mostly npm install in each folder. 
# We are using yarn in the react app, its faster.
npm install
pwd
cd api && npm install
cd ..
cd frontend-app && yarn install
