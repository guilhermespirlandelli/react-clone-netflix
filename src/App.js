/* eslint-disable import/no-anonymous-default-export */
/* tslint:disable */

import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeacturedMovie from './components/FeacturedMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [feacturedData, setFeacturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o feactured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeacturedData(chosenInfo);
      
      
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      {feacturedData &&
        <FeacturedMovie item={feacturedData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}