import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Top 100 bài trẻ hay nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/c/e/6/ace686da0b78c0f3af4582bfe9c1a192.jpg",
    },
    {
      id: 2,
      name: "Top 100 Pop Âu Mỹ hay nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/d/8/9/5d890d445e5ecff4d118a296440f1654.jpg",
    },
    {
      id: 3,
      name: "Top 100 nhạc Electronic/Dance",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
    },
  ];

  return (
    <div>
      <h2>Top 100</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
