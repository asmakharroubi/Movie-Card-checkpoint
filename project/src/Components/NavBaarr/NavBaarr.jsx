import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,Button} from 'react-bootstrap'
import ReactStars from "react-stars";
import AddMovie from "../AddMovie/AddMovie"

const NavBaarr = ({search, setSearch, stars , setStars, newMovie, setNewMovie ,filtredMovies, setFiltredMovies}) => {
  // const list = ({Movie,setMovie}) =>{
  // const [searchMovie , setSearchMovie] = useState("")
  // useEffect(() => {
  //   const newMovie = movies.filter((value) =>
  //     movie.Title.toLowerCase().includes(searchMovie.toLowerCase())
  //   );
  //   setMovie(newMovie);
  // }, [searchMovie]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleStars = (newRating) => { 
    setStars(newRating);
  };

  return (
    <div>
      <Navbar bg="#793259" expand="lg" style={{color:"#793259"}}>
        <Container fluid>

          <Navbar.Brand href="#">
            <img Src="data:image/png;base64,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" width="10" heigth="10" className="d-inline-block align-top">
              </img>Movie Card</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Movies</Nav.Link>
            
              <Nav.Link href="#action3">
                Series
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleInput}
              />

              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <ReactStars count={5} color={"#ffd700"} half={false} onChange={handleStars} value={stars} />
          <AddMovie newMovie={newMovie} setNewMovie={setNewMovie} filtredMovies={filtredMovies} setFiltredMovies={setFiltredMovies} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBaarr