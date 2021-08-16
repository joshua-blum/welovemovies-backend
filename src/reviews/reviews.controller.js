const service = require("./reviews.service");

const hasValidReviewId = async (req,res,next) => {
    const {reviewId} = req.params;
    const validReview = await service.read(Number(reviewId));
    if(!validReview) return next({status:404, message:"Review cannot be found"});
    res.locals.review = validReview;
    next();
}

const update = async (req,res,next) => {
    const updatedReview = {
        ...req.body.data,
        review_id: res.locals.review.review_id
    }
    await service.update(updatedReview);
    const response = await service.read(res.locals.review.review_id);
    const finalReview = {
        ...response,
        critic: await service.readRelevantCritics(res.locals.review.critic_id)
    }
    res.json({data: finalReview})
}

const destroy = async (req,res,next) => {
    service
        .delete(Number(res.locals.review.review_id))
        .then(() => res.sendStatus(204))
        .catch(next);
};

const readMovieReviews = async (req,res,next) => {
    const ourReviews = await service.readMovieReviews(res.locals.movie.movie_id);
    for (let review of ourReviews){
        review["critic"] = await service.readRelevantCritics(review.critic_id)
    }
    res.json({data: ourReviews})
}

module.exports = {
    update: [hasValidReviewId, update],
    delete: [hasValidReviewId, destroy],
    readMovieReviews
}