import { useState } from "react";
import "./App.css";
import SearchBar from "./components/InputField/SearchBar";
import Alert from "./components/Alert/Alert";
import ResultBody from "./components/ResultBody/ResultBody";

function App() {
  const [UserInput, setUserInput] = useState("");
  const [VideoData, setVideoData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "" });
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
        // "X-RapidAPI-Key": "70efdebe6dmsh5c57e322aa1fb3dp111a7bjsn739b57ac3007",
        "X-RapidAPI-Key": "54e8246918mshed766ef95ce4520p1f22d4jsncf040b32bfb0",
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
        setLoading(true);
        setVideoData({
          status: response.status,
          title: response.title,
          videoItems: response.videos.items,
          thumbnail: response.thumbnails[0].url,
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          show: true,
          msg: `Unable to fetch data 
          /${err}`,
        });
        setTimeout(() => {
          setAlert({
            show: false,
            msg: "",
          });
        }, 4000);
        console.error(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fetching");
    setLoading(true);
    fetchdata(videoId);
  };

  console.log(VideoData);
  return (
    <div className="main-app">
      <h1>Youtube Video Downloader</h1>
      <SearchBar
        UserInput={UserInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
      />
      {alert.show && <Alert msg={alert.msg} />}
      <ResultBody VideoData={VideoData} loading={loading} />
    </div>
  );
}

export default App;
