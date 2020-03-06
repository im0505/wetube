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
import { uploadVideo } from "../middlewares";
const videoRouter = express.Router();

videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.upload, getUpload);

videoRouter.get(routes.videoDetail(), videosDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
