# HNG Stage 0 Task — Node.js/Express API

Simple Express app that serves a small API returning user info and a cat fact.

## Files

- [app.js](app.js)
- [route.js](route.js)
- [controller.js](controller.js)
- [package.json](package.json)
- [request.http](request.http)

Key symbols:

- Handler: `controller.me` (controller.js)
- Router: `route.router` (route.js)

## Prerequisites

- Node.js (v14+ recommended)
- npm (or yarn)

## Install

```sh
cd /Users/mac/Desktop/HNG/HNG_stage_0_task
npm install
```

## How to start the project

1. Start with npm (recommended if package.json has scripts):

```sh
npm start
```

2. Start directly with Node:

```sh
node app.js
```

Note: app.js uses ES module syntax (`import`); ensure package.json contains `"type": "module"` or run with a bundler/transpiler.

3. Start in development with nodemon (if installed):

```sh
npx nodemon app.js
```

The server listens on port 3000 by default:
http://localhost:3000

## Test the endpoints

- Root:

```sh
curl http://localhost:3000/
```

- API (example: /me):

```sh
curl http://localhost:3000/me
# Expected: JSON with name, email, stack, timestamp, and a cat fact
```

You can also use the provided `request.http` file with an HTTP client extension in VS Code.

## Notes

- Rate limiting is enabled for routes under `/` via `express-rate-limit`.
- If external APIs are used (e.g., cat fact service), ensure your network allows outbound requests.
- If you encounter "Cannot use import statement outside a module", add `"type": "module"` to package.json or use CommonJS `require`.

## License

ISC
