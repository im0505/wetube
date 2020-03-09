import express from "express";
import routes from "../routes";
import {
  postUpload,
  getUpload,
  videosDetail,
  getEditVideo,
  deleteVideo,
  postEditVideo
} from "../controller/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";
const videoRouter = express.Router();

videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);
videoRouter.get(routes.upload, onlyPrivate, getUpload);

videoRouter.get(routes.videoDetail(), videosDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
