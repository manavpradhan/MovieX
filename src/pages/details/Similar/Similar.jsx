import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Similar = ({ mediaType, mediaId }) => {
  const { data, loading } = useFetch(`/${mediaType}/${mediaId}/similar`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">
          {mediaType === "movie" ? "Similar Movies" : "Similar TV Shows"}
        </span>
      </ContentWrapper>
      <Carousel data={data?.results} endpoint={mediaType} />
    </div>
  );
};

export default Similar;
