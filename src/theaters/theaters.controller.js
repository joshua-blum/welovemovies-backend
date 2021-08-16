const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const listTheatersWithMovie = async (req,res,next) => {
    if(!res.locals.movie) return next();
    return res.json({data: await service.listTheatersWithMovie(res.locals.movie.movie_id)})
}

const list = async (req,res,next) => {
    const data = await service.list();
    res.json({data});
}

module.exports = {
    list: [listTheatersWithMovie, list]
};