const connection = require("../../db/db");

const addToFavorite = (req, res) => {
  // Get required info about the book to be added to shopping cart
  const { book_id, user_id, total_price } = req.body;

  // Inject the info in the query
  const data = [book_id, user_id, total_price];
  const query = `INSERT INTO favorite (book_id, user_id, totalPrice) VALUES (?, ?, ?);`;

  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(200).json("Added successfully");
  });
};

const removeFromFavorite = (req, res) => {
  // get book_id of favorite item to be deleted
  const book_id = req.params.book_id;

  // delete the favorite item using book_id
  const query = `DELETE FROM favorite WHERE book_id = "${book_id}";`;
  connection.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.json("Deleted successfully");
  })
};

module.exports = { addToFavorite, removeFromFavorite };