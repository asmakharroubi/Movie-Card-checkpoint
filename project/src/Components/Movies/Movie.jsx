import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from "react-stars";
import '../Movies/Movie.css'

const Movies = ({movie}) => {
  return (
    
      // <Card style={{ width: "18rem" }}>
      //   <Card.Img variant="top" src={movie.img} />
      //   <Card.Body>
      //     <Card.Title>{movie.Title}</Card.Title>
      //     <Card.Text>{movie.description}</Card.Text>
      //     <ReactStars
      //       count={5}
      //       color={"#ffd700"}
      //       value={movie.Rating}
      //       edit={false}
      //       half={false}
      //     />
      //   </Card.Body>
      // </Card>
      <div className='movie'>
        <img src={movie.img} alt="movie 1" variant="top"/>
        <h1 className='Title'>{movie.Title}</h1>
        <span className='des'>{movie.description}</span>
        <ReactStars className='faza'
            count={5}
            color={"#ffd700"}
            value={movie.Rating}
            edit={false}
            half={false}
          />
          <span className='faza'>{movie.date}</span>
      </div>

    
  );
}

export default Movies