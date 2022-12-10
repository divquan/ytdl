import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/InputField/SearchBar";
import ResultBody from "./components/ResultBody/ResultBody";

function App() {
  const [UserInput, setUserInput] = useState("");
  const [VideoData, setVideoData] = useState([]);
  // const [alert, setAlert] = useState({ show: false, msg: "" });
  const [loading, setLoading] = useState(false);
  const youtubeParser = (url) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };
  const videoId = youtubeParser(UserInput);
  const fetchdata = (videoId) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "70efdebe6dmsh5c57e322aa1fb3dp111a7bjsn739b57ac3007",
        "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        setVideoData({
          status: response.status,
          title: response.title,
          videoItems: response.videos.items,
          thumbnail: response.thumbnails[0].url,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(true);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fetching");
    setLoading(true);
    fetchdata(videoId);
  };
  // eslint-disable-next-line
  useEffect(() => fetchdata(videoId), []);

  console.log(VideoData);
  return (
    <div className="main-app">
      <h1>Youtube Video Downloader</h1>
      <SearchBar
        UserInput={UserInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
      />
      <ResultBody VideoData={VideoData} loading={loading} />
    </div>
  );
}

export default App;
