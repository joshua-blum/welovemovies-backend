const knex = require("../db/connection");
//const mapProperties = require("../utils/map-properties");

// const addCritic = mapProperties({
//     critic_id: "critic.critic_id",
//     preferred_name: "critic.preferred_name",
//     surname: "critic.surname",
//     organization_name: "critic.organization_name",
//     created_at: "critic.created_at",
//     updated_at: "critic.updated_at"
// })

const read = (reviewId) => {
    return knex("reviews").select("*").where({review_id: reviewId}).first();
}

const update = (updatedReview) => {
    return knex("reviews as r")
        .select("*")
        .where({review_id: updatedReview.review_id})
        .update(updatedReview);
}

const destroy = (reviewId) => {return knex("reviews").where({review_id: reviewId}).del();}

const readRelevantCritics = (criticId) => {
    return knex("critics")
        .select("*")
        .where({critic_id: criticId})
        .first();
}

const readMovieReviews = (movieId) => {
    return knex("reviews as r")
        .select("*")
        .where({movie_id: movieId})
}

module.exports = {
    read,
    update,
    delete: destroy,
    readMovieReviews,
    readRelevantCritics
}