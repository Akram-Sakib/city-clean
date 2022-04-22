import React from "react";
import Rating from "react-rating";

const SingleTestomonial = ({ testomonial }) => {
  const { name, img, degisnation, description, rating } = testomonial;
  return (
    <>
      <div>
        <div className="flex pl-6 py-4">
          {" "}
          <img className="w-16 h-16 rounded-full" src={img} alt="" />
          <div className="my-auto mx-2">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{degisnation}</p>
          </div>
        </div>
        <p className="pl-6 text-sm text-gray-500 pb-2">{description}</p>

        <Rating
          readonly
          className="text-yellow-400 px-6 pb-2"
          initialRating={rating}
          emptySymbol="far fa-star "
          fullSymbol="fas fa-star "
        />
      </div>
    </>
  );
};

/*
json data for reviews
*/

export default SingleTestomonial;
