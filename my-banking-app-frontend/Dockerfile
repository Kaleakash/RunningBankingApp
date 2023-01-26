# # Stage 1
# # Create image based on the official Node 12 image from dockerhub
# FROM node:16.10-alpine as node

# # Create a directory where our app will be placed
# RUN mkdir -p /usr/src/app

# # Change directory so that our commands run inside this new directory
# WORKDIR /usr/src/app

# # Copy dependency definitions
# COPY package*.json ./

# # Install dependecies
# RUN npm install

# # Get all the code needed to run the app
# COPY . .

# # Run the angular in production mode
# RUN npm run build

# # Stage 2
# FROM nginx:1.19.2-alpine

# # Copy dist content to html nginx folder, config nginx to point in index.html
# COPY --from=node /usr/src/app/dist/my-banking-app-frontned /usr/share/nginx/html

# #COPY ./nginx.conf /etc/nginx/conf.d/default.conf    

# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:16.10-alpine as builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm i && npm run build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/dist/angular-nginx-docker .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
