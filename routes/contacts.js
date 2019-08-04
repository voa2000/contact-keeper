const express = require("express");
const router = express.Router();
//CRUD operations

//  @route GET api/contacts
//  @desc Get all users contacts
//  @access Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//  @route POST api/contacts
//  @Add new contacts
//  @access Private
router.post("/", (req, res) => {
  res.send("Add Contact");
});

// @route   PUT api/contacts/:id
// @desc    Update contacts
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   Delete api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
