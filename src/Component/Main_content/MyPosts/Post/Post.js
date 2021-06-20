import React from 'react';
import style from "./Post.module.scss";

function Post(props) {

    return (
        <div className = {style.img_message}>
            <img className = {style.img_profile}  src = "https://blog.promopult.ru/wp-content/uploads/2020/09/kak-uluchshit-profil-v-instagram-2.png" />
            <span className ={style.message} >{props.text}</span>
        </div>
    )
}

export default Post
