import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Recommendation = ({ mediaType, mediaId }) => {
  const { data, loading } = useFetch(
    `/${mediaType}/${mediaId}/recommendations`
  );
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Recommendations</span>
      </ContentWrapper>
      <Carousel data={data?.results} />
    </div>
  );
};

export default Recommendation;
