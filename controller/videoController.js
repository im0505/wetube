import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", video });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req; // same as : searchingBy = req.query.term
  res.render("search", { pageTitle: "Search", searchingBy, video });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Video" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //To Do: upload and save video
  res.redirect(routes.videoDetail(1233323));
};

export const videosDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
