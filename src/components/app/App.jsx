import React from "react";
import "./App.css";
import Sidebar from "../side/side";
import Home from "../home/home";

const data = [{info: 'PORTRAIT', image: 'img/work-1.jpg.webp', title: 'Black & Gold Paint Face', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'NATURE', image: 'img/work-2.jpg.webp', title: 'Green Leaves', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'NATURE', image: 'img/work-3.jpg.webp', title: 'Coal', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'NATURE', image: 'img/work-4.jpg.webp', title: 'Top Leaf', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'PORTRAIT', image: 'img/work-5.jpg.webp', title: 'Building', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'FASHION', image: 'img/work-6.jpg.webp', title: 'Black Girl Model', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'ANIMALS', image: 'img/work-7.jpg.webp', title: 'Pug Puppy', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'NATURE', image: 'img/work-8.jpg.webp', title: 'White Flower', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
  {info: 'ANIMALS', image: 'img/work-9.jpg.webp', title: 'Turtle', text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'},
]

const App = () => {
  return (
    <>
      <Sidebar />
      <Home data={data}/>
    </>
  );
};

export default App;