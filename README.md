<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" width="200" style="margin-right: 50px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL Logo" width="200">
</p>

# Install

```sh
npm install
```


# Migrations

```sh
npm run migrations:run
```

# Run in dev mode

```sh
npm run dev
```

# Run in prod mode

```sh
npm run start
```

# Connect to DB from Docker

```sh
docker-compose exec postgres bash
psql -h localhost -d my_store -U nico
\d+
SELECT * FROM users;
DELETE FROM users WHERE id=<id>;
```
