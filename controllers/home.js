const express = require("express");
const { Package } = require("../models");
const flash = require("connect-flash");

exports.getIndex = async (req, res) => {
  try {
    const dataUser = req.flash("user");
    const getPackage = await Package.findAll({
      attributes: ["id", "name", "price", "features"],
    });

    if (dataUser.length == 0) {
      res.render("pages/index", { packages: getPackage });
    } else {
      res.render("pages/index", { packages: getPackage, datauser: dataUser });
    }
  } catch (error) {
    console.log(error);
  }
};
