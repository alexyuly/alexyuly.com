# alexyuly.com

This repository contains the source code for [alexyuly.com](https://alexyuly.com).

## Gatsby

This website uses Gatsby as its rendering engine. Gatsby generates static webpages based on data from a GraphQL API and React components.

## Prismic

The website uses Prismic as its content engine. Prismic provides a GraphQL API with data to help render our React components.

## Start the Development Server

Run `npm start` to develop on [localhost:8000](http://localhost:8000/).

## Deploy to Production

Push a git commit, and GitHub Actions runs automatically to deploy the website to Amazon S3.

Additionally, each publication from Prismic runs GitHub Actions (via AWS Lambda, due to Prismic/GitHub compatibility limitations).
