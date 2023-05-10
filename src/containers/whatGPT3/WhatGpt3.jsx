import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is ChatGPT-3"
          text="ChatGPT is a language model developed by OpenAI as part of the GPT family. It has a smaller number of parameters compared to the more advanced ChatGPT-3 model, but it is still capable of generating human-like responses to natural language inputs. ChatGPT is designed to be used in chatbot applications and can be fine-tuned on specific tasks to improve its performance."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination.
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Some chatbots are rule-based, which means they rely on a pre-defined set of rules to determine their responses. Others are powered by artificial intelligence and machine learning algorithms, which enable them to learn from user interactions and improve their performance over time."
        />
        <Feature
          title="KnowledgeBase"
          text="The knowledgebase of ChatGPT is not stored in a single location, but rather is derived from a large corpus of text data that has been used to train the model. This text data is sourced from a variety of publicly available sources such as books, articles, and websites, as well as proprietary sources such as company documents and private datasets."
        />
        <Feature
          title="Education"
          text="ChatGPT can be utilized in the field of education as a language model to support natural language processing tasks. It can be used to build chatbots that assist students in answering common questions, generating automated responses, and providing personalized recommendations based on individual learning needs."
        />
      </div>
    </div>
  );
};

export default WhatGpt3;
