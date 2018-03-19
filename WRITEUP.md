# Writeup for FatLama Code Test
## Technologies:
* Express
* Node.js
* Jasmine
* better-sqlite3

## File Structure
* ./query.js
* ./search.js
* ./server.js
* ./spec/tests/search.spec.js

### ./query.js
Holds all the sql queries used in the API. We only need one `queries.fullSearch` but I left the other two as relics from when I was developing. Plus, it makes it easier to test the separate parts of the query!

### ./search.js
Accesses the MySQL database and runs the queries from ./query.js . Again, we only really need the `fullSearch()` method, but I left the other two for testing and to give the client more options to search

### ./server.js
Creates and runs an express server based on the methods in ./search.js. We also parse the query parameters in the url before handing them over to ./search.js

### ./spec/tests/search.spec.js
Tests all of the functions in ./search.js