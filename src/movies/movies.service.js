const knex = require("../db/connection");

const list = (isShowing) => {
    if(!isShowing) return knex("movies").select("*");
    return knex("movies as m")
        .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
        .distinct("mt.movie_id")
        .select("m.*")
        .where({is_showing: true});
};

const read = (movieId) => {
    return knex("movies")
        .select("*")
        .where({movie_id: movieId})
        .first();
};

module.exports = {list, read};