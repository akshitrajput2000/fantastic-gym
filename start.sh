#!/bin/bash

current_dir=$(pwd)

cd ./backend/
npm start &

cd "$current_dir"

cd ./frontend/
ng serve

# docker-compose build

# docker-compose up