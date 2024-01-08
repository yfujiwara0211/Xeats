import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import background from "./AdobeStock_120766551.jpeg";
import image from "./AdobeStock_297158540.jpeg";
import nutrituinist from "./AdobeStock_684056004.jpeg";
import { useNavigate } from "react-router-dom";

function Search() {
  const [menus, setMenus] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(
      menus.filter((menu) => menu.title.toLowerCase().includes(ref.current.value))
    );
  };

  const dummyData = [
    { id: 1, title: "12月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", nutritionist: nutrituinist, name:"山田　美和子 管理栄養士", photo: image},
    { id: 2, title: "1月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", nutritionist: nutrituinist, name:"山田　美和子 管理栄養士", photo: image,},
    { id: 3, title: "2月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", nutritionist: nutrituinist, name:"山田　美和子 管理栄養士", photo: image},
    { id: 4, title: "3月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", nutritionist: nutrituinist, name:"山田　美和子 管理栄養士", photo: image},
    { id: 5, title: "4月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", nutritionist: nutrituinist, name:"山田　美和子 管理栄養士", photo: image},
  ];

  useEffect(() => {
    // APIから取得する代わりにローカルのダミーデータをセット
    setMenus(dummyData);
    setSearchQuery(dummyData); // 初期表示用にもセット
  }, []);

  const handleDetailClick = () => {
    navigate('/detail');
  };

  return (
    <div className='Container'
    style={{
    background: `url(${background}) center`,
    backgroundSize: 'cover',
    }}
    >
      <div className="main">
        <h1>献立を探そう</h1>
        <input type="text" placeholder='食材、料理、味付け等' ref={ref} onChange={() => handleSearch()} />
        <div className="content">
          {searchQuery.map((menu) => (
            <div className="box" key={menu.id}>
              <h3>{menu.title}</h3>
              <hr />
              <div className="menu">
                <img src={menu.photo} alt="" />
                <p>{menu.price}</p>
              </div>
              <div className="nutritionist">
                <img src={menu.nutritionist} alt="" />
                <p>{menu.name}</p>
              </div>
              <button onClick={handleDetailClick}>詳細画面</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;