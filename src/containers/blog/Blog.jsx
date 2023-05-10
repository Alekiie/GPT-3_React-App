import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {blog01,blog02,blog03,blog04,blog05} from './imports'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening. <br />
          We are talking about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26,2022" title="AI and Robotics: Collaborating for the Future" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26,2022" title="AI and Gaming: The Future of Interactive Entertainment" />
          <Article imgUrl={blog03} date="Sep 26,2022" title="AI and Marketing: Leveraging Data for Success" />
          <Article imgUrl={blog04} date="Sep 26,2022" title="AI and Education: Advancements and Opportunities" />
          <Article imgUrl={blog05} date="Sep 26,2022" title="AI and Business: Driving Innovation and Growth" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
