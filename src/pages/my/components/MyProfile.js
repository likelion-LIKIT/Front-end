// 작성자: 구현우

import MyUtils from "../utils/MyUtils";
import "../styles/MyProfile.css";

import { useRef, useState } from "react";

const MyProfile = ({ isMe, setUserInfo, userInfo, setPasswordModal }) => {
  const selectImage = useRef("");

  const handleFileUpload = (e) => {
    const fileArr = e.target.files[0];

    let reader = new FileReader();

    reader.onload = () => {
      setUserInfo({
        ...userInfo,
        profile_image: reader.result,
      });
    };

    reader.readAsDataURL(fileArr);

    MyUtils.updateUserInfro("profile_image", fileArr);
  };

  const deleteProfileImage = () => {
    if (!window.confirm("사진을 삭제 하시겠습니까?")) return;

    MyUtils.updateUserInfro("profile_image", "");

    setUserInfo({
      ...userInfo,
      profile_image: "",
    });
  };

  const uploadProfileImageBtn = () => {
    return (
      <div className="MyProfile_image_btn">
        <input
          type="file"
          style={{ display: "none", pointerEvents: "none" }}
          ref={selectImage}
          accept="image/*"
          onChange={handleFileUpload}
        />
        <div id="profile_imageUploader" onClick={() => selectImage.current.click()}>
          📷
        </div>
        {userInfo.profile_image !== "" && <div onClick={() => deleteProfileImage()}>❌</div>}
      </div>
    );
  };

  return (
    <div className="MyProfile">
      <div id="MyProfile_image">
        <img
          src={userInfo.profile_image === "" ? "/images/basic_profile.png" : userInfo.profile_image}
          alt=""
        />
        {isMe && uploadProfileImageBtn()}
      </div>
      <div id="MyProfile_body">
        <div>{userInfo.name}</div>
        <div>{userInfo.track}</div>
        <div>{userInfo.class + "기 " + userInfo.position}</div>
        <div>{userInfo.student_id}</div>
        <div>{userInfo.major}</div>
        <div>{userInfo.likelion_email}</div>
        {isMe && <button onClick={() => setPasswordModal(true)}>비밀번호 변경</button>}
      </div>
    </div>
  );
};

export default MyProfile;
