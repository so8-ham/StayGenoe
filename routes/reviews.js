const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const reviewController = require("../controllers/reviews");
const { isLoggedIn, isReviewAuthor } = require("../middleware/middleware");

router.post("/", isLoggedIn, wrapAsync(reviewController.createReview));

router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;
