import React from "react";
import "./ResultBody.css";
import Loading from "../Loading/Loading";
import {} from "react-icons/md";
import DownloadCard from "../DownloadCard/DownloadCard";

const ResultBody = ({ VideoData, loading }) => {
  return (
    <>
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
            <h3 style={{ color: "black" }}>
              <i>
                Copy and paste the link to the Youtube video into the input
                field above
              </i>
            </h3>
            {loading && <Loading />}
          </div>
        )}
      </div>
    </>
  );
};

export default ResultBody;
