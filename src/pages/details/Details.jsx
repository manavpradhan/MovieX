import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import "./style.scss";
import DetailBanner from "./detailsBanner/DetailBanner";
import Cast from "./cast/Cast";
import VideoSection from "./videoSection/VideoSection";
import Similar from "./Similar/Similar";
import Recommendation from "./Recommendations/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div className="details">
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data?.results} loading={loading} />
      <Similar mediaType={mediaType} mediaId={id} />
      <Recommendation mediaType={mediaType} mediaId={id} />
    </div>
  );
};

export default Details;
