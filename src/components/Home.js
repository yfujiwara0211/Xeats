import './Home.css';
import React from "react";
import "./Home.css";
import background from "./AdobeStock_238865078.jpeg";

const Home = () => {
  return (
    <div className='Container'
      style={{
      background: `url(${background}) center`,
      backgroundSize: 'cover'
      }}>
        <h1>あなたの家庭に、専属栄養士を</h1>
        <p>Eiyo Eatsは、栄養士が作る十数種の季節の献立をスマホから手軽に注文し、お届けするサービスです。<br />
            <br />
            “毎日、栄養バランスのとれた食事を摂りたいけれど、そんな時間も労力もかけられないし、知識もない”、”健康は後回しにしてる”<br />
            Eiyo Eatsを利用することで、これらの課題を解消します。<br />
            <br />
            いつでも簡単に、あなたの健康状態に合わせた献立を、栄養士が考え、調理し、出来立ての常備菜をお届け♪<br />
            多くの家庭が、健康的な食生活を簡単に選択できる社会を実現します。<br />
            </p>
    </div>
    );
  };

export default Home;