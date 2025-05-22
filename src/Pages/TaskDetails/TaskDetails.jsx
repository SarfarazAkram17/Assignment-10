import React from "react";
import { Link, useLoaderData } from "react-router";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const TaskDetails = () => {
  const task = useLoaderData();
  return (
    <div className="my-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to='/browseTasks'>
          <BsArrowLeftCircleFill size={22} />
        </Link>
        <h1 className="text-5xl mb-12 text-center">Task Details</h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 text-center space-y-4 bg-base-200 border-2 border-gray-200 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">{task.title}</h1>
        <p className="text-xs font-semibold">{task.category}</p>
        <p>
          <strong>Deadline: </strong>
          {task.deadline}
        </p>
        <p>
          <strong>Budget: </strong>
          {task.budget}$
        </p>
        <p>
          <strong>Task Creator: </strong>
          {task.name}
        </p>
        <p>
          <strong>Assigned To (Email): </strong>
          {task.email}
        </p>
        <p>
          <strong>Description: </strong>
          {task.description}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default TaskDetails;
