/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './FeacturedMovie.css';

/*
  UMA HORA E QUARENTA E TRES DO VÍDEO
*/


export default ({ item }) => {
  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} nota</div>
            <div className="featured--year">2099</div>
            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
        </div>
      </div>
    </section>
  )
}