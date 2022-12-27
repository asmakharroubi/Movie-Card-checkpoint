import React from 'react'
import {useState} from 'react'
import {Button, Modal} from "react-bootstrap"

const AddMovie = ({newMovie, setNewMovie ,filtredMovies, setFiltredMovies }) => {
  const [show,setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleChange = () => {
    setFiltredMovies([...filtredMovies,newMovie]) ;
    setShow(false);
  }

  const handleAdd = (e) => {
         if (e.target.name === "Rating") {
      setNewMovie({ ...newMovie, [e.target.name]: parseInt(e.target.value) });
    } else {
      setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    }
  }
    return (
      <div>
        <>
          <Button variant="primary" onClick={handleShow}>
            Add a new movie
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection:"column"
                }}
              >
                <label>Title</label>
                <input type="text" name="Title" onChange={handleAdd} />
                <label>Description</label>
                <input type="text" name="description" onChange={handleAdd} />
                <label>Poster Url</label>
                <input type="text" name="img" onChange={handleAdd} />
                <label>Rating</label>
                <input type="number" name="Rating" onChange={handleAdd} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleChange}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
}

export default AddMovie