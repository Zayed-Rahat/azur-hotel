import React, { useState, useEffect } from "react";

// reactstrap components
import { Button, Card, Collapse } from "reactstrap";

import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import {
  newReview,
  checkReviewAvailability,
  clearErrors,
} from "../../redux/actions/roomActions";
import { NEW_REVIEW_RESET } from "../../redux/constants/roomConstants";
const NewReview = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, success } = useSelector((state) => state.newReview);
  const { reviewAvailable } = useSelector((state) => state.checkReview);

  const { id } = router.query;

  useEffect(() => {
    if (id !== undefined) {
      dispatch(checkReviewAvailability(id));
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Review is posted.");
      dispatch({ type: NEW_REVIEW_RESET });

      router.push(`/room/${id}`);
    }
  }, [dispatch, success, error, id]);

  const submitHandler = () => {
    const reviewData = {
      rating,
      comment,
      roomId: id,
    };

    dispatch(newReview(reviewData));
  };

  function setUserRatings() {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
      star.starValue = index + 1;

      ["click", "mouseover", "mouseout"].forEach(function (e) {
        star.addEventListener(e, showRatings);
      });
    });

    function showRatings(e) {
      stars.forEach((star, index) => {
        if (e.type === "click") {
          if (index < this.starValue) {
            star.classList.add("red");

            setRating(this.starValue);
          } else {
            star.classList.remove("red");
          }
        }

        if (e.type === "mouseover") {
          if (index < this.starValue) {
            star.classList.add("light-red");
          } else {
            star.classList.remove("light-red");
          }
        }

        if (e.type === "mouseout") {
          star.classList.remove("light-red");
        }
      });
    }
  }

  return (
    <>
      <p>
        {reviewAvailable && (
          <Button
            color="dark"
            type="button"
            onClick={() => {
              setCollapseOpen(!collapseOpen);
              setUserRatings();
            }}
          >
            Submit Your Review
          </Button>
        )}
      </p>
      <Collapse isOpen={collapseOpen}>
        <Card className=" card-body" style={{ color: "black" }}>
          <div className="modal-header">
            <h5 className="modal-title">Submit Review</h5>
          </div>
          <div className="modal-body">
            <ul className="stars">
              <li className="star">
                <i className="fa fa-star" />
              </li>
              <li className="star">
                <i className="fa fa-star" />
              </li>
              <li className="star">
                <i className="fa fa-star" />
              </li>
              <li className="star">
                <i className="fa fa-star" />
              </li>
              <li className="star">
                <i className="fa fa-star" />
              </li>
            </ul>

            <textarea
              className="form-control mt-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="btn my-1 float-right review-btn px-3 text-white"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </Card>
      </Collapse>
    </>
  );
};

export default NewReview;
