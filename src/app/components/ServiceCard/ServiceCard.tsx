"use client";
import Link from "next/link";

type serviceInputs = {
  _id: any;
  title: string;
  description: string;
  thumbnail: string;
};
export const ServiceCard = ({
  _id,
  title,
  description,
  thumbnail,
}: serviceInputs) => {
  return (
    <li className="cardItem">
      <Link className="cardLink" href={`/service/${_id}`}>
        <div className="cardMainImg">
          <img className="cardImg" src={thumbnail} alt={title} />
        </div>
        <div className="text-section">
          <h2 className="cardTitleSection">{title}</h2>
          <div className="cardDetails">
            <p className="cardDescription">{description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
