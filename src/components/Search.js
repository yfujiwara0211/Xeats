import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import background from "./AdobeStock_120766551.jpeg";
import image from "./AdobeStock_297158540.jpeg";

function Search() {
  const [menus, setMenus] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();

  const handleSearch = () => {
    setSearchQuery(
      menus.filter((menu) => menu.title.toLowerCase().includes(ref.current.value))
    );
  };

  const dummyData = [
    { id: 1, title: "12月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", photo: image, url: "https://tech0-jp.com/" },
    { id: 2, title: "1月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", photo: image, url: "https://tech0-jp.com/"},
    { id: 3, title: "2月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", photo: image, url: "https://tech0-jp.com/"},
    { id: 4, title: "3月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", photo: image, url: "https://tech0-jp.com/"},
    { id: 5, title: "4月の献立：根菜と塩麹を使った、腸を労わる献立 10品", price: "11000円（税込）", photo: image, url: "https://tech0-jp.com/"},
  ];

  useEffect(() => {
    // APIから取得する代わりにローカルのダミーデータをセット
    setMenus(dummyData);
    setSearchQuery(dummyData); // 初期表示用にもセット
  }, []);

  const handleDetailClick = (url) => {
    // ボタンクリック時の処理
    if (url) {
      window.open(url, "_blank"); // 新しいタブでリンクを開く
    }
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
        <hr />
        <div className="content">
          {searchQuery.map((menu) => (
            <div className="box" key={menu.id}>
              <h3>{menu.title}</h3>
              <hr />
              <img src={menu.photo} alt="" />
              <h5>{menu.price}</h5>
              <button onClick={() => handleDetailClick(menu.url)}>詳細画面</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;