import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
const MyReactQuill = ({desc, setDesc}) => {
  const ref = useRef(null);
  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.onchange = (e) => {
      const fileDesc = e.target.files[0];
      if (fileDesc) {
          const data = new FormData();
          data.append("file", fileDesc);
          axios.post('http://localhost:5000/api/upload-image/', data).then((response) => {
            const imageURL = response.data;
            ref.current.getEditor().insertEmbed(0, "image", process.env.REACT_APP_API_URL + imageURL); 
          });
      }
    };

    input.click();
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <ReactQuill
      ref={ref}
      modules={modules}
      formats={formats}
      theme="snow"
      value={desc}
      onChange={setDesc}
    />
  );
};

export default MyReactQuill;
