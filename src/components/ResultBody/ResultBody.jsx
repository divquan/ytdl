import React from "react";
import "./ResultBody.css";
// import VideoData from "../../data";
import {} from "react-icons/md";
import DownloadCard from "../DownloadCard/DownloadCard";

const ResultBody = ({ VideoData, alert }) => {
  return (
    <div className="resultbody ">
      {VideoData.status && (
        <>
          <div className="row1">
            <h2>
              TITLE: <br />
              {VideoData.title}
            </h2>
            <img src={VideoData.thumbnail} alt={VideoData.title} />
          </div>
          <div className="row2 ">
            {VideoData.videoItems.map((item, index) => (
              <DownloadCard
                key={index}
                hasAudio={item.hasAudio}
                url={item.url}
                size={item.sizeText}
                quality={item.quality}
                ext={item.extension}
                name={VideoData.title}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultBody;
