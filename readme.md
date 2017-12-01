## What is this?

Node/Express API app for Carter FED Project

## Getting started

To get started just clone the rep and run:

```bash
npm i
```

```bash
npm start
```

This will install all dependencies and start the development server

## Setting up environment variables
Just rename variables.sample.env to variables.env and add MongoDB connection string

## API endpoints

```bash
http://localhost:7777/quotes
```

GET - Lists all quotes

```bash
http://localhost:7777/quotes/add
```

POST - Inserts a new quote

Params:

Name: (string)
Quote: (string)
