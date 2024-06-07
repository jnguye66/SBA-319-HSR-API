CREATOR: John Nguyen
DATE: June 6th, 2024

--------------------------------------------------------------------

DESCRIPTION:

This is a database API that contains information about characters, enemies, and Aeons within the game Honkai: Star Rail.

Currently there are three paths for the user to GET, POST, PATCH, and DELETE from:
 - /chars: The characters (includes only playable characters at the moment)
 - /enemies: The enemies that the playaer encounters
 - /aeons: The Aeons (Gods)

This project allows the user to view, post, update and delete information on their local machine @ localhost:5050/.

--------------------------------------------------------------------

TECHNOLOGIES USED: 
 - Visual Studio Code
 - GitBash
 - Javascript
 - HTML
 - CSS
 - express.js
 - node.js
 - MongoDB
 - Mongoose
 - Postman

--------------------------------------------------------------------

AVAILABLE ROUTES AND OPERATIONS

/chars
 - GET: @ localhost:5050/chars
 - POST: @ localhost:5050/chars
 - PATCH: @ localhost:5050/chars/:id
 - DELETE: @ localhost:5050/chars/:id

/enemies
 - GET: @ localhost:5050/enemies
 - POST: @ localhost:5050/enemies
 - PATCH: @ localhost:5050/enemies/:id
 - DELETE: @ localhost:5050/enemies/:id

/aeons
 - GET: @ localhost:5050/aeons
 - POST: @ localhost:5050/aeons
 - PATCH: @ localhost:5050/aeons/:id
 - DELETE: @ localhost:5050/aeons/:id
