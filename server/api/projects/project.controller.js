// import { projectModal } from "../../model/project.js";

export function addProject(req, res) {
  //   var newProject = new projectModal(req.body);
  console.log(req);
  res.json({
    message: "Project created",
  });
}
