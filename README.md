![Banner](./static/banner.svg)

> [!CAUTION]
> This app is NOT DONE YET. This README file is only for when the app is completed. For now, everything written here is INVALID.

## ℹ️ About this project

This project is made to complete COMPFEST's 2025 Software Engineering Academy task.

## 🧰 Tech Stack

![Tech Stack](https://skillicons.dev/icons?i=nodejs,ts,svelte,postgresql,prisma)

## ⚙️ Project Setup

Make sure that you have at least Node.js 20 installed.

```bash
# clone this repository
$ git clone https://github.com/Kritzeey/sea-catering.git

# cd into the cloned repo and install dependencies
$ cd sea-catering
$ npm install
```

## 🗝️ Environment variables

In order to make the app run properly, you need to create a `.env` file at the root of the project. An example of the file would look like this:

```env
DATABASE_URL=...
```

Make sure to have these variables inside the `.env` file:

| Variable     | Example Value                                       | Description                   |
| ------------ | --------------------------------------------------- | ----------------------------- |
| DATABASE_URL | postgresql://postgres:password@localhost:5432/appdb | Your PostgreSQL database URL. |

## 🛠️ Running the App

Before running the app, make sure that you have created a `.env` file. If you haven't, refer to <a href="#️-environment-variables">Environment Variables</a>.

1. Push your Prisma schema into your database. This command will also generate a <a href="https://www.prisma.io/docs/orm/prisma-client">Prisma Client</a> instance.

   ```bash
   $ npm run db:push

   # OR

   $ npx prisma db push
   ```

2. Run the app in development mode.
   ```bash
   $ npm run dev
   ```
3. To keep track of the changes made inside your database, make use of Prisma Studio.

   ```bash
   $ npm run db:studio

   # OR

   $ npx prisma studio
   ```

## 📄 External Docs

These docs are used through this app's production and is proved to be very helpful.

https://svelte.dev/docs - Svelte and SvelteKit documentation

https://www.prisma.io/docs - Prisma documentation

https://lucia-auth.com/ - Lucia authentication guide
