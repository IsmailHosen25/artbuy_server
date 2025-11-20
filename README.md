**ArtBuy — Local Setup & API Quick Reference**

 - **Purpose:**: Minimal README to run the backend server and frontend client locally, and list main API endpoints used by the app.

**Business Logic & Functionality**

- **Marketplace goal:** Connect artists who publish artworks with buyers who browse, purchase, and track orders.
- **Roles:** Artist (creates and manages art listings, updates order status), Buyer (browses, adds to cart, places orders, views order history), Optional Admin (moderation, user management).
- **Core flows:**
  - Artist creates/edits/deletes art and uploads images.
  - Buyers browse and search arts, add items to a cart, and place orders.
  - Server creates orders, notifies the artist, and the artist updates order status (accepted → shipped → delivered).
  - Buyers view order status/history; artists view orders for their listings.
- **Key data models:**
  - `User` — profile, role (artist/buyer), contact info, profile image reference.
  - `Art` — title, description, price, image path, artist reference, availability/quantity.
  - `Order` — buyer reference, art reference(s), quantity, total price, status, timestamps.
- **Authentication & uploads:** JWT-based auth (see `middlewares/jwtcheck.js`) secures protected routes; image uploads handled by `middlewares/uplodeimg.js` and served via `Controllers/getimg.js`.
- **Business rules:** Ownership checks for artist actions, stock/quantity validation on orders, defined order status transitions, and JWT-based access control for sensitive endpoints.

**Prerequisites**
- **Node.js**: v16+ installed and on PATH.
- **npm**: comes with Node.js.
- **MongoDB**: running locally or a connection string for a hosted DB.

**Environment**
- Create a `.env` file in `artbuy_server/` with at least:
  - `PORT` — server port (e.g., `3002`).
  - `DBLINK` — MongoDB connection string.
  - `JWT` — secret used for signing JWTs.
- Do NOT commit `.env` to source control.

**Server — Run (PowerShell)**
- Install dependencies and start the server (uses `nodemon`):

```pwsh
cd "i:\10th semester\CSC455(WA)\Artbuy\artbuy_server"
npm install
npm start
```

- The server listens on the port from `PORT` in the `.env`. Example log: `server is running at http://localhost:3002`.

**Client — Run (PowerShell)**
- Install dependencies and start the client (Vite dev server):

```pwsh
cd "i:\10th semester\CSC455(WA)\Artbuy\Client"
npm install
npm run dev
```

- The Vite dev server will show the local URL (usually `http://localhost:5173`).

**Key API Endpoints (core)**
- Authentication & Users
  - `POST /api/auth/signup` — register new user (`Controllers/sign.cont.js`).
  - `POST /api/auth/login` — login and receive JWT (`Controllers/login.cont.js`).
  - `GET /api/users/:id` — get user profile (`Controllers/getuser.cont.js`).
  - `PUT /api/users/:id` — update profile (`Controllers/updateinfo.js`).
  - `PUT /api/users/:id/profile-image` — update profile image (`Controllers/updprofileimg.js`).

- Art Listings
  - `GET /api/arts` — list/search arts (`Controllers/getarts.cont.js`, `getallarts.cont.js`).
  - `GET /api/arts/:id/image` — serve art image (`Controllers/getimg.js`).
  - `POST /api/arts` — create art (artist; image upload via middleware) (`Controllers/addarts.cont.js`).
  - `PUT /api/arts/:id` — update art (`Controllers/updateart.cont.js`).
  - `DELETE /api/arts/:id` — delete art (`Controllers/deleteart.cont.js`).

- Orders
  - `POST /api/orders` — create order (`Controllers/addorder.cont.js`).
  - `PUT /api/orders/:id/status` — update order status (artist) (`Controllers/orderstatusudt.cont.js`).
  - `GET /api/orders/artist/:artistId` — artist order history (`Controllers/artistorderhistory.cont.js`).
  - `GET /api/orders/buyer/:buyerId` — buyer order history (`Controllers/buyerorderhistory.cont.js`).

**Notes & Recommendations**
- Authentication: protected routes use JWT check middleware in `middlewares/jwtcheck.js`. Include the token in `Authorization: Bearer <token>`.
- Uploads: image uploads handled by `middlewares/uplodeimg.js` and served by `Controllers/getimg.js`.
- The server expects environment variables `PORT`, `DBLINK`, and `JWT` in `artbuy_server/.env`.
- Consider adding: payment integration, server-side validation, pagination for art lists, and testing.

**Troubleshooting**
- If MongoDB connection fails, verify `DBLINK` and that MongoDB is running.
- If route returns 401, check JWT token is present and valid in request headers.

**Where to look in this repo**
- Server code: `artbuy_server/` (controllers in `artbuy_server/Controllers/`, models in `artbuy_server/models/`, middlewares in `artbuy_server/middlewares/`).
- Client code: `Client/src/` (pages in `Client/src/Pages/`).

