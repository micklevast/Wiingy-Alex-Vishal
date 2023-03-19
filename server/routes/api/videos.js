// include express in order to use methods like .Router()
const express = require("express");
// reference to the videos file in order to write using writeJSONFile
const videosFile = __dirname + "/../../models/videos.json";
// work with array of data from videos
const videos = require(videosFile);
// helper functions: writeJSONFile & getNewId
const helper = require("../../helper/helper");
// setup express router
const router = express.Router();

/**
 * Get all the videos but with fewer properties/keys
 */
router.get("/", (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      channel: video.channel
    };
  });
  res.json(videoList);
});

/**
 * Get video by id
 */
router.get("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    res.json(videos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

/**
 * Post new video
 */
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    channel: req.body.channel,
    description: req.body.description,
    image: req.body.image,
    views: 894,
    likes: 670,
    timestamp: helper.timestamp(),
    video: "https://www.youtube.com/watch?v=x7UaoMn3gVg",
    comments: []
  };
  if (!newVideo.title || !newVideo.description) {
    return res.status(400).json({
      errorMessage: "Please provide title, description, and the video"
    });
  }
  videos.push(newVideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(newVideo.id);
});

module.exports = router;
