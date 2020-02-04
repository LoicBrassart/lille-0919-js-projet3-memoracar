## Shiny Hedgehog

**1. Resume**

This Repository is the source code for the prototype of a website for a wild code school's project.
Alice Carrasqueira - alimalone/github
Blandine Mallart - BlandineM/github
Pauline Roche - Roche Pauline/github
David Derancourt - dderancourt/github
Laurent Mahieu - laurentmahieu/github
It’s a project that lasted 11 weeks.

**2. Language**
React.js, Javascript, Redux, SCSS, Node.js, MySql.

**3. Quick Start**

First `git pull` this repo in a new folder. Frontend and Backend are both in this repository.

Then `npm i` in both folder backend and frontend.

To properly run this app, you need a database. You can find a dump of the database we used to design this web site
with fake informations in the "dump" file.

To setup the backend, you have to create a Dotenv file using the shema provide by the .env.dist file.
To launch the backend you can use nodemon. It should be install with the npm install. In a new tab in your command line,
go to the backend folder. Then just `nodemon index.js`.

In a new Tab in your command line, you can go the frontend folder and launch `npm start`.

The web site is on fully operationnal.

**4. Code Architecture**

Backend and Frontend works separetly. The Backend provide a REST API and the Frontend use this API.

The Frontend is organize as following. A main folder Pages contains all differents pages of the site. Those pages are built
with components which are store in the components folder. Each of those folders contains a style folder. All files in the
style folder are named with the component that they are stylizing.
The Frontend works with Redux. All informations that comes from Backend are store into the redux's store.

Backend provide informations for the Frontend. The index.Js file require all routes. Route folder contains 3 differents files.
auth.js file contain authentication routes. user.js file contain routes to retrieve users informations. vehicule.js contain
routes to retrieve user's vehicules informations
