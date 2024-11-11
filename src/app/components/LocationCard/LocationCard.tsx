"use client";
import "./style.css";
import React from "react";
import { ILocation } from "@/app/constants/type";

type locationInputs = {
  location: ILocation;
};

export const LocationCard = ({ location }: locationInputs) => {
  return (
    <>
      <dl className="locationCard">
        <dt>店舗名</dt>
        <dd>{location.name}</dd>
        <dt>住所</dt>
        <dd>{location.address}</dd>
        <dt>TEL</dt>
        <dd>{location.phoneNumber}</dd>
        <dt>最寄り駅</dt>
        <dl>{location.access}</dl>
      </dl>
    </>
  );
};
