# Digital-Environmental-Monitoring
Digital Environmental Monitoring is a project designed to track and analyze environmental data in real time using a network of sensors and cloud-based analytics tools.

## Run the Client side 

### Installation

Install the application dependencies by running:

```sh
npm install
```

### Development

Start the application in development mode by running:

```sh
npm run dev
```

### Production

Build the application in production mode by running:

```sh
npm run build
```


## Express Server with Sequelize

### Prerequisites

- Node.js (v14+ recommended)
- MySQL or PostgreSQL installed and running
- Sequelize CLI installed globally or locally

```bash
npm install -g sequelize-cli
# or
npm install --save-dev sequelize-cli
```

### Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure database

Edit `config/config.json` or `config/config.js` with your DB name, user, password, host, etc.

### 3. Create the database

```bash
npx sequelize db:create
```

### 4. Run migrations

```bash
npx sequelize db:migrate
```

### 5. Seed the database (optional)

```bash
npx sequelize db:seed:all
```

### 6. Start the server

```bash
npm start
```

## Scripts (add to `package.json`)

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "db:create": "sequelize db:create",
  "db:migrate": "sequelize db:migrate",
  "db:seed": "sequelize db:seed:all"
}
```
