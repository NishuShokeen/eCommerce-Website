import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:kharbsonu144@gmail.com">
        <Button>Contact For More Detail: kharbsonu144@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
