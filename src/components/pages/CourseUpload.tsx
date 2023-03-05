import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button, IconButton, TextField } from "@mui/material";
import { SelectedItem } from "../user/Audit";
import { DeleteOutlined, Preview, CameraAlt } from "@mui/icons-material";
import { BrandButtonStyle } from "../utils/UIThemes";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import courseimg from "../assets/images/courseimg.svg";
import { uploadFile } from "../utils/utilityfunctions";

interface Course {
  title: string;
  body: string;
  description: string;
  image: string;
  filename: string;
  subtitle: string;
  tags: Array<string>;
}

const CourseUpload = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const { userData, loading } = useSelector(
    (state: { user: any }) => state.user
  );
  const [course, setCourse] = useState<Course>();
  const [image, setImage] = useState("");
  const config =  {
    headers: { Authorization: `Bearer ${userData.token}` },
  }



  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    let filePath = uploadFile(formData, {
      headers: { Authorization: `Bearer ${userData.token}` },
    });
    filePath.then((result:any)=> {
      toast.success("File uploaded")
      setCourse({...course,filename: result.data.filename})}).catch(err=>{
        toast.error("Unable to upload file")
      })
  };


  const handleUpload = () => {
    axios.post("https://api.pneumaimpact.ng/v1/api/courses", course ,{
      headers: { Authorization: `Bearer ${userData.token}` },
    },  )
      .then((res) => {
        toast.success("course uploaded succsessfully ");
      })
      .catch((err) => toast.error("unable to upload course "));
  };

  let loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (event.target.files) {
      formData.append("file", event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
     let imagePath = uploadFile(formData, {
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      imagePath.then((result:any)=> {
        toast.success("image file uploaded")
        setCourse({...course,image: result.data.filename})}).catch(err=>{
          toast.error("Unable to upload Image")
        })
    }
  };


  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "title":
        setCourse({ ...course, title: event.target.value });
        break;
      case "subtitle":
        setCourse({ ...course, subtitle: event.target.value });
        break;
      case "body":
        setCourse({ ...course, body: event.target.value });
        break;
      case "description":
        setCourse({ ...course, description: event.target.value });
        break;
      case "image":
        setCourse({ ...course, image: event.target.value });
        break;
      case "tags":
        setCourse({ ...course, tags: event.target.value.split(",") });
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col w-full justify-center items-center space-y-5 p-7">
      {/* <Toaster /> */}
      <div className=" flex flex-col w-full sm:w-11/12 md:w-8/12 justify-center  space-y-5">
        <div>
          <span className=" text-3xl ">Upload Course {JSON.stringify(course)} </span>
        </div>
        <div className="flex flex-col space-y-2">
          <TextField
            placeholder="Course Title"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "title")
            }
          />
          <TextField
            placeholder="Subtitle"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "subtitle")
            }
          />
          <TextField
            placeholder="Body"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "body")
            }
          />
          <TextField
            multiline
            rows={5}
            maxRows={10}
            placeholder="Description"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "description")
            }
          />
          <TextField
            placeholder="Tags"
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "tags")
            }
          />
          <TextField placeholder="Category" size="small" />
        </div>
        <div
          className="upload-courese-image"
          style={{
            backgroundImage: `url(${image ? image : ""})`,
            height: "200px",
            width: "400px",
          }}
        >
          <label
            id="upload-label"
            className="flex justify-center space-x-4 items-center w-full h-full text-center"
            htmlFor="upload-input"
          >
            <CameraAlt />
          </label>
          <input
            id="upload-input"
            onChange={loadFile}
            accept=".jpg, .jpeg, .png"
            type={"file"}
            multiple
            className=" "
          />
          {/* {true && (
            <Button
              onClick={() => {
                console.log(imageFormData.get('file'))
                uploadFile(imageFormData, {
                  headers: { Authorization: `Bearer ${userData.token}` },
                });
              }}
            >
              Upload Image
            </Button>
          )} */}
        </div>
        <div className="flex flex-col ">
          <div className="flex relative w-full h-[100px] bg-lightBlue justify-center items-center space-x-4">
            <label
              id="upload-label"
              className="flex justify-center space-x-4 items-center w-full h-full text-center"
              htmlFor="upload-input2"
            >
              <CloudUploadIcon />
              <span>
                Drag and drop or <span className="text-red">Browse </span> your
                local device to upload
              </span>
            </label>
            <input
              id="upload-input2"
              onChange={changeHandler}
              accept=".doc,.docx,.pdf"
              type={"file"}
              multiple
            />
          </div>
          {isFilePicked && (
            <div
              className="flex relative w-full h-[60px] bg-lightBlue justify-between items-center space-x-4 "
              id="fadein"
            >
              <SelectedItem
                fileSize={selectedFile.size}
                fileName={selectedFile.name}
              />

              <IconButton
                onClick={() => {
                  setSelectedFile({});
                  setIsFilePicked(false);
                }}
              >
                <DeleteOutlined />
              </IconButton>
            </div>
          )}
        </div>
        <div className="flex w-full items-center justify-center">
          <Button
            className=" w-2/5"
            variant="pneumaBlue"
            style={BrandButtonStyle}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseUpload;
