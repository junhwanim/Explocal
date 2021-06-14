# Setup and ports

Open a terminal and change directory to backend `cd backend` then run `yarn install` to install dependencies. Run `yarn start` to start the server.

The server runs on port **8000**, so you can access the server at `http://localhost:8000/`. As a test, you can go to `http://localhost:8000/api/destinations`. You should see a JSON object shown in the browser:

```json
{"status":200,"message":"it works","data":[{"_id":"60a40667f410a8287a97e875","code":"CA","country":"Canada","cities":["Montreal","Ottawa","Toronto","Vancouver"]},{"_id":"60a40780d9fc262e57215e6a","code":"PH","country":"Philippines","cities":["Baguio","Manila","Palawan","Sagada"]},{"_id":"60a406bed9fc262e57215e69","code":"KR","country":"S.Korea","cities":["Busan","Donghae","Jeju","Seoul"]},{"_id":"60a409547d62da42ea352e3e","code":"TH","country":"Thailand","cities":["Bangkok","Chiang-Mai","Phuket"]}]}
```

Add a `proxy` to the server in `client/package.json`. This will allow you to use relative paths in your `fetch` requests to the server.

```json
"proxy": "http://localhost:8000"
```

---

# Endpoints
