const multer = require("multer");
const UserCSV = require("../models/userModel");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.saveData = async (req, res) => {
  upload.single("csvFile")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error uploading the CSV file." });
    }

    if (!req.file || !req.file.buffer) {
      return res
        .status(400)
        .json({ error: "CSV file not found in the request." });
    }

    const csvData = req.file.buffer.toString("utf8");
    const lines = csvData.split("\n");
    if (lines.length <= 1) {
      return res.status(400).json({ error: "Invalid CSV file format." });
    }
    const users = [];
    try {
      lines.slice(1).forEach((line) => {
        if (line.trim().length === 0) {
          return;
        }
        const data = line.split(",");
        if (data.length !== 4) {
          throw new Error("Invalid data format in the CSV file.");
        }
        const person = {
          name: data[0],
          city: data[1],
          country: data[2],
          favorite_sport: data[3],
        };
        const newUser = new UserCSV(person);
        newUser.save();
        users.push(newUser);
      });
      return res
        .status(200)
        .json({ message: "CSV data saved successfully.", users });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while processing the CSV data." });
    }
  });
};

exports.getData = async (req, res) => {
  const searchTerm = req.query.q;

  try {
    let query = {};
    if (searchTerm) {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { city: { $regex: searchTerm, $options: "i" } },
          { country: { $regex: searchTerm, $options: "i" } },
          { favorite_sport: { $regex: searchTerm, $options: "i" } },
        ],
      };
    }
    const items = await UserCSV.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while searching." });
  }
};
