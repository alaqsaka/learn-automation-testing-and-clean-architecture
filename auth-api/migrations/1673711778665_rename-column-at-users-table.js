/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.renameColumn("users", "fullName", "fullname");
};

exports.down = (pgm) => {};
