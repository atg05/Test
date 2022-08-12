import { taskModal } from "../../model/task.js";

import Express from "express";

async function addTask(req, res) {

  console.log(req);
  res.json({
    message: "Task Completed",
  });
}

export { addTask };
