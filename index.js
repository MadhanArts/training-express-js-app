import express from "express";
import path from "path";
import members from './routes/api/members.js'

// import logger from "./middleware/logger.js";

const app = express();

// init midleware
// app.use(logger);

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//     // res.send("<h1>Hello world!!</h1>");
//     console.log(path.resolve());
//     res.sendFile(path.join(path.resolve(), "public", "index.html"));
// })

// // Gets all Members
// app.get("/api/members", (req, res) => {
//     res.json(members);
// });

// // Get single member
// app.get("/api/members/:id", (req, res) => {
//     // res.send(req.params.id);

//     const filterMember = members.filter(
//         (member) => member.id === parseInt(req.params.id)
//     );

//     if (filterMember.length > 0) {
//         res.json(filterMember);
//     } else {
//         res.status(400).json({
//             message: `No member with the id ${req.params.id}`,
//         });
//     }
// });

// Set static folder
app.use(express.static(path.join(path.resolve(), "public")));

// Members API routes
app.use('/api/members', members);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on port " + PORT));
