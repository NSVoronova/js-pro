import React, { useState } from "react";
import Input from "../SignForm/Input/Input";
import Title from "../Title";
import SignForm from "../SignForm/SignForm";
import SignButton from "../SignForm/SignButton/SignButton";
import { CREATE_POST } from "src/actions/actions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

import ImageUploading, { ImageListType } from 'react-images-uploading';


const AddPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [lessonNumber, setLessonNumber] = useState("0");
  //const [postImage, setPostImage] = useState("");
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const [descriptionValue, setDescriptionValue] = useState(''); 
  const [textValue, setTextValue] = useState(''); 
const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const handleClick = () => {
    dispatch(CREATE_POST({title: postTitle, lessonNumber: +lessonNumber, image: images, description: descriptionValue, text: textValue}))
  };
  return (
    <>
      <Title text="Add post"></Title>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <Input
          label="Title"
          placeholder="Your Title"
          type="text"
          value={postTitle}
          onChange={setPostTitle}
        />
        <Input
          label="Lesson number"
          placeholder="lesson number"
          type="text"
          value={lessonNumber}
          onChange={setLessonNumber}
        />
        <ImageUploading  multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {({imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps,}) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
        {/* <Input
          label="Image"
          type="file"
          value={postImage}
          onChange={setPostImage}
        /> */}
        <label htmlFor="desription">Description</label>
        <textarea 
        id="desription"
        value={descriptionValue}
        onChange={ (e) => setDescriptionValue(e.currentTarget.value)}
        rows={4}
        cols={50}      />
          <label htmlFor="text">Text</label>
        <textarea 
        id="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        rows={4}
        cols={50}      />
        <SignButton
         type="button"
          text={"Add post"}
          onClick={handleClick}
          customClass="sign__button"
        />
      </form>
     </>
  );
};

export default AddPost;
