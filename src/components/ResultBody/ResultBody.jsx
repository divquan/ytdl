import React from "react";
import "./ResultBody.css";
// import VideoData from "../../data";
import {} from "react-icons/md";
import DownloadCard from "../DownloadCard/DownloadCard";

const ResultBody = ({ VideoData, loading }) => {
  return (
    <div className="resultbody ">
      {VideoData.status ? (
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
      ) : (
        <div className="Alert">
          <h2>
            Copy and paste the link to the Youtube video into the input field
            above
          </h2>
        </div>
      )}
      {loading && (
        <div className="loadingio-spinner-spinner-bglmvp8a12i spinner">
          <div className="ldio-ucij0jb0008">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultBody;
