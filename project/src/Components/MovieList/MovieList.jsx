import React from 'react'
import Movie from '../Movies/Movie'

const MovieList = ({movies}) => {
    console.log(movies)
  return (
    <div style={{display:"flex" , justifyContent:'space-between',flexWrap:'wrap'}}>
        {movies.map((movie)=> <Movie movie={movie}/>)}

    </div>
  )
}

export default MovieList