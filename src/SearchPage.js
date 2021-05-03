import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://avatars.githubusercontent.com/u/61814592?v=4"
        channel="RgnDunes"
        verified
        subs="983K"
        noOfVideos="573"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />
      <VideoRow
        views="4.3K"
        subs="573"
        description="Let's learn about flask today."
        timestamp="1 hour"
        channel="RgnDunes"
        title="🍎  Flask sessions"
        image="https://firebasestorage.googleapis.com/v0/b/dunes-instagram-clone-react.appspot.com/o/images%2FScreenshot%20from%202021-04-24%2020-50-47.png?alt=media&token=15dd3d08-31b2-4012-94fd-4d32223f606d"
      />
      <VideoRow
        views="4.3K"
        subs="573"
        description="Let's learn about version control in git today."
        timestamp="2 hour"
        channel="RgnDunes"
        title="🍎  Git version control"
        image="https://avatars.githubusercontent.com/u/62606435?v=4"
      />
      <VideoRow
        views="4.3K"
        subs="573"
        description="Let's learn about flaskforms today."
        timestamp="3 hour"
        channel="RgnDunes"
        title="🍎  Flaskforms"
        image="https://firebasestorage.googleapis.com/v0/b/dunes-instagram-clone-react.appspot.com/o/images%2FScreenshot%20from%202021-04-25%2002-29-16.png?alt=media&token=b86cb0b8-a6f9-4758-9c0c-22c09ada5b93"
      />
      <VideoRow
        views="4.3K"
        subs="573"
        description="Let's learn about class based components and functional components."
        timestamp="4 hour"
        channel="RgnDunes"
        title="🍎  Class based components V/S functional components"
        image="https://firebasestorage.googleapis.com/v0/b/dunes-instagram-clone-react.appspot.com/o/images%2FScreenshot%20from%202021-04-25%2006-10-38.png?alt=media&token=cef63742-c2c0-48a0-adc5-f16cd3b78089"
      />
    </div>
  );
}

export default SearchPage;
