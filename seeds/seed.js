const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userSeed.json");
const postData = require("./postSeed.json");
const commentData = require("./commentSeed.json");


const seedFiles = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log("\n-------users DATA SEEDED---------\n");


  const posts = await Post.bulkCreate(postData);
  console.log("\n-------posts DATA SEEDED---------\n");


  const comments = await Comment.bulkCreate(commentData);
  console.log("\n-------comments DATA SEEDED---------\n");

  process.exit(0);
};

seedFiles();