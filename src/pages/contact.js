import Heading from "../components/heading";
import "../css/ContactPage.css";
import { useEffect, useRef } from "react";

function Contact() {
  const textareaRef = useRef(null);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
  };

  useEffect(() => {
    resizeTextarea(); // Initial resize on component mount
  }, []);

  const handleInput = () => {
    resizeTextarea();
  };
  return (
    <div className="entire">
      <div className="Top">
        <Heading />
      </div>
      <p className="para">Contact Us</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <div
          style={{
            border: "solid rgb(180, 143, 143) 2px",
            height: "300px",
            padding: "0 100px 0 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p style={{ color: "rgb(31, 57, 35)", fontSize: "50px" }}>
            Stay updated
          </p>
          <p style={{ color: "rgb(31, 57, 35)", fontSize: "20px" }}>
            Need to get in touch with us ?
          </p>
          <div style={{margin:"30px 0px",}}>
            <a  href="" style={{color:"rgb(31, 57, 35)"}}>Facebook</a><br/>
            <a href="https://www.instagram.com/houseplantclub/?hl=en" target="blank" style={{color:"rgb(31, 57, 35)"}}>Instagram</a>
          </div>
        </div>
        <div
          style={{
            border: "solid rgb(180, 143, 143) 2px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "auto",
            }}
        >
          <input type="text" id="name" className="name" placeholder="name" />
          <input
            type="email"
            id="email"
            className="name"
            placeholder="xyz@gmail.com"
          />
          <textarea
            id="descrip"
            className="name"
            ref={textareaRef}
            placeholder="typesomething in 200 word"
            onChange={handleInput}
            style={{ overflow: "hidden", resize: "none" }}
          />
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
