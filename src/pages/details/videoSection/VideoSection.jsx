import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { Playbtn } from "../detailsBanner/Playbtn";
import VideoPopUp from "../../../components/videoPopup/VideoPopUp";
import Img from "../../../components/lazyLoadImage/Img";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="videoItem"
                  onClick={() => {
                    setShow(true);
                    setVideoId(item.key);
                  }}
                >
                  <div className="videoThumbnail">
                    <Img
                      src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                    />
                    <Playbtn />
                  </div>
                  <div className="videoTitle">{item.name}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopUp
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
