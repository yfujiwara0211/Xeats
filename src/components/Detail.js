import React from "react";
import "./Detail.css";
import { useNavigate } from "react-router-dom";
import background from "./AdobeStock_120766551.jpeg";
import image from "./AdobeStock_297158540.jpeg";
import nutrituinist from "./AdobeStock_684056004.jpeg";

function Detail() {
    const navigate = useNavigate();
    const handleDetailClick = () => {
        navigate('/');
      };
      
    return (
        <div className='Container'
        style={{
        background: `url(${background}) center`,
        backgroundSize: 'cover',
        }}
        >
            <div className="mainDetail">
                <h2>1月の献立：根菜と塩麹を使った、腸を労わる献立 10品</h2>
                <hr />
                <div className="contentDetail">
                    <img src={image}></img>
                    <p>【週末作り置きセット】<br/>
                        <br/>
                        今週の献立は、塩麹と根菜を使った体を芯から温めるメニュー。<br/>
                        今週の作り置きはレンチンパック3品、下味冷凍3品、副菜4品<br/>
                        <br/>
                        ・大根のポリポリ漬け<br/>
                        ・にんじんのポン酢和え<br/>
                        ・はちみつと塩こうじの大学いも<br/>
                        ・檸檬と塩麹をチキンソテー<br/>
                        ・南瓜の煮つけ<br/>
                        ・鮭のみりん漬け焼きと季節野菜のマリネ
                    </p>
                </div>
                <button onClick={handleDetailClick}>栄養士と会話する</button>
                <button onClick={handleDetailClick}>注文する</button>
            </div>
        </div>
        );
}

export default Detail;
