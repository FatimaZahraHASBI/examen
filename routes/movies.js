const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async function (req, res, next) {
  const take = parseInt(req.query.take) || 10;
  const skip = parseInt(req.query.skip) || 0;
  const movies = await prisma.movies.findMany({
    skip: skip,
    take: take,
  });
  res.send({
    data: movies,
    pagination: {
      count: movies.length, // Total des enregistrements
      take: take, // Nombre d'éléments sélectionnés
      skip: skip, // Décalage à partir duquel on prend les  données
    },
  });
});

module.exports = router;
