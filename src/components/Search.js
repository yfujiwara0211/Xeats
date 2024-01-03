import React from "react";
import Results from './Results';
import "./Search.css";
import background from "./AdobeStock_120766551.jpeg";
import { useRef, useState } from 'react';

const Search = () => {
  const [fetchData,setFetchdata] = useState([]);
  // const API_KEY = "40889916-0c4daad984dff6dc9f10dcd07";

  // useRefフック: コンポーネントで参照を保持するためのフック。
  // この例では、テキスト入力フィールドへの参照を保持している。
  const ref = useRef(); // refに入力した値を取得する

  // handleSubmit関数: フォーム送信時に実行される。
  const handleSubmit = (e) => {
    e.preventDefault(); // フォーム送信によるページリロードを防ぐ
    console.log(ref.current.value); // 現在のテキスト入力値をログに出力
    
    // Pixabay APIへのリクエストURLを組み立てる
    // Pixabay APIの構成↓
    // "https://pixabay.com/api/?key=" + API_KEY + "&q=" + {ref.current.value} + "&image_type=photo";
    const endpointURL = `https://pixabay.com/api/?key=40889916-0c4daad984dff6dc9f10dcd07&q=${ref.current.value}&image_type=photo`;

    // Fetch APIを使用してデータを非同期で取得
    fetch(endpointURL).then((res) => {
      return res.json();
      })
      .then((data) => {
        // data内のhitsを指定する。
        console.log(data.hits); // 取得したデータのログ出力
        setFetchdata(data.hits);  // 状態を更新し、コンポーネントを再レンダリング
      });
  };

  return (
    <div className='Container'
    style={{
    background: `url(${background}) center`,
    backgroundSize: 'cover',
    }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>献立を探そう</h1>
        <input type="text" placeholder='食材、料理、味付け等' ref={ref}/>
      </form>
      {/* ImageGalleryンポーネント)のレンダリング */}
      {/* fetchDataを`ImageGallery`に渡している。 */}
      <Results fetchData={fetchData}/>
    </div>
    );
  };

export default Search;