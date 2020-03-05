import express from "express";
import routes from "../routes";
import {
  videos,
  postUpload,
  getUpload,
  videosDetail,
  editVideo,
  deleteVideo
} from "../controller/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.home, videos);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.upload, getUpload);

videoRouter.get(routes.videoDetail(), videosDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
