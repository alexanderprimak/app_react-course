import React from 'react';
import  style from "./main.module.scss";
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        
        <div className = {style.main_content}>
        <img src = "https://i.ytimg.com/vi/-5_jZy-f_yU/maxresdefault.jpg" />
        <div className = {style.img_info}>
            <div className = {style.img}>
              <img src = "https://techpinions.com/wp-content/uploads/2014/04/Fotolia_53885302_Subscription_Monthly_M.jpg" />
            </div>
            <div className = {style.info}>
              <h1>Maria Koval</h1>
              <ul>
                <li>Date of Birth : 13 December</li>
                <li>City:Poznan</li>
                <li>Education:BSU'11</li>
                <li>Web Site:https:/Mashka_umnichka</li>
              </ul>
            </div>
        </div>
        <div className = {style.myPosts} >
          <h1>My posts</h1>
          <div className = {style.inputNews}>
            <span>your news...</span>
          </div>
          <div className = {style.btnSend} >Send</div>
        </div>
        
           <MyPosts></MyPosts>
      </div>

    )
}

export default Profile
