import { VscUnmute } from "react-icons/vsc";
import "./DownloadCard.css";
import { MdFileDownload } from "react-icons/md";
import { useState } from "react";

const DownloadCard = ({ hasAudio, url, size, quality, ext, name }) => {
  // const [tempUrl, setTempUrl] = useState("");
  // const fetchFile = (url) => {
  //   fetch(url)
  //     .then((res) => res.blob())
  //     .then((file) => {
  //       setTempUrl(URL.createObjectURL(file));
  //       // let aTag = URL.createObjectURL(file);
  //     });
  // };
  return (
    <div className="download-container">
      <div className="download-container-row1">
        <div>
          <div className="small-item">
            <span>{quality}</span>
          </div>
          <div className="small-item">
            <span>{ext}</span>
          </div>
        </div>
        <div>
          <div className="small-item">
            <VscUnmute /> :{"  "}
            {hasAudio.toString()}
          </div>
          <div>
            <div className="small-item">
              <span>{size}</span>
            </div>
          </div>
        </div>
      </div>
      <a
        href={url}
        download={name}
        target="_blank"
        rel="noreferrer"
        className="download-container-row2"
        crossOrigin="anonymous"
      >
        <button>
          <span>Download</span>
          <MdFileDownload />
        </button>
      </a>
    </div>
  );
};

export default DownloadCard;
