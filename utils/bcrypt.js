const bcrypt = require("bcryptjs");

/**
 * Generate a hashed text from the given plain text.
 * @param {string} plainText The plain text to generate a hashed text from.
 * @returns {string} The hashed text.
 */
const generate = (plainText) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainText, salt);
};

/**
 * Compare the given plain text with the hashed text.
 * @param {string} plainText The plain text to compare.
 * @param {string} hash The hashed text to compare with.
 * @returns {boolean} True if the given plain text equals the hashed text.
 */
const compare = (plainText, hash) => bcrypt.compareSync(plainText, hash);

module.exports = { compare, generate };
