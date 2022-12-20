import React from "react";
import { useState } from "react";
import "./Profile.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { Button } from 'react-bootstrap'
import {
  userImageAction,
  userprofileaction,
} from "../../../REDUX/Actions/userActions";


function Profile() {

  const dispatch = useDispatch();
  const [pimage, setImage] = useState(" ");
  const userprofile = useSelector((state) => state.userProfile);
  const { loading, error, profiledata } = userprofile;
  const image = useSelector((state) => state.userImage);
  const { imageloading, imageerror, userimage } = image;
  const [photo, setPhoto] = useState("");
  console.log(userimage + "THIS IS THE IMAGE EEE");
  const addphoto = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log(photo);
    data.append("file", photo);
    data.append("upload_preset", "hk0nezym");
    data.append("cloud_name", "dchrawfgy");
    console.log(data);
    fetch("https://api.cloudinary.com/v1_1/dchrawfgy/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(userImageAction(data.url));
      });
  };
  useEffect(() => {
    dispatch(userprofileaction());
  }, [userimage]);
  console.log(userimage + "THIS IS THE IMAGEEEE");
  return (
    <div>
      <div className="main-div">
        <Container>
          <h1>My Profile</h1>
          {profiledata ? (
            <div>
              {
                imageloading ? <h1>Loading</h1> : <img
                  className="profilepic"
                  src={
                    profiledata.photo
                      ? profiledata.photo
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  }
                  alt=""
                />
              }

              <div className="inputdiv">
                <h2 className="inputforname">
                  {profiledata.firstname} {profiledata.lastname}
                </h2>
                <h2 className="inputforname">{profiledata.email}</h2>
              </div>
              <form>
                <input controlId="formBasicEmail" className="formcontrol"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  type="file"
                  placeholder="choose a profile pic"
                />
                <Button onClick={addphoto}>Add Photo</Button>
              </form>
            </div>
          ) : (
            ""
          )}
        </Container>
      </div>
    </div>
  );
}

export default Profile;
