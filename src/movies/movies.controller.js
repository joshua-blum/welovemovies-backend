const service = require("./movies.service");

const list = async (req,res, next) => {
    const {is_showing = false} = req.query;
    res.json({data: await service.list(Boolean(is_showing))});
};

const read = async (req,res) => {
    res.json({data: res.locals.movie});
};

//middleware to determine if the movieId is valid
const hasValidMovieId = async (req,res,next) => {
    const {movieId} = req.params;
    const validMovie = await service.read(Number(movieId));
    if(validMovie) {
        res.locals.movie = validMovie;
        return next();
    }
    next({
		status: 404,
		message: "Movie cannot be found."
	});
}


module.exports = {
	list,
	read: [hasValidMovieId, read],
	hasValidMovieId,
};