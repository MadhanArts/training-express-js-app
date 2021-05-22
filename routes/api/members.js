import express from "express";
import members from "../../Members.js";
import {v4} from "uuid";
const router = express.Router();

// Gets all Members
router.get("/", (req, res) => {
    res.json(members);
});

// Get single member
router.get("/:id", (req, res) => {
    // res.send(req.params.id);

    const filterMember = members.filter(
        (member) => member.id === parseInt(req.params.id)
    );

    if (filterMember.length > 0) {
        res.json(filterMember);
    } else {
        res.status(400).json({
            message: `No member with the id ${req.params.id}`,
        });
    }
});

// Create members
router.post("/", (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: v4(),
        name: req.body.name,
        status: "active",
    };

    if (!newMember.name) {
        return res
            .status(400)
            .json({message: "Please include a name and email"});
    }

    members.push(newMember);
    res.json(members);
});

export default router;
