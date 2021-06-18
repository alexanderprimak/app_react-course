import React from 'react'

function Main_content() {
    return (
        
        <div className = "main-content">
        <img src = "https://i.ytimg.com/vi/-5_jZy-f_yU/maxresdefault.jpg" />
        <div className = "img_info">
            <div className = "img">
              <img src = "https://techpinions.com/wp-content/uploads/2014/04/Fotolia_53885302_Subscription_Monthly_M.jpg" />
            </div>
            <div className = "info">
              <h1>Maria Koval</h1>
              <ul>
                <li>Date of Birth : 13 December</li>
                <li>City:Poznan</li>
                <li>Education:BSU'11</li>
                <li>Web Site:https:/Mashka_umnichka</li>
              </ul>
            </div>
        </div>
        <div className = "myPosts" >
          <h1>My posts</h1>
          <div className ="inputNews">
            <span>your news...</span>
          </div>
          <div className = "btnSend">Send</div>
        </div>
      </div>

    )
}

export default Main_content
