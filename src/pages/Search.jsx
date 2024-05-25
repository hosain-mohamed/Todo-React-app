import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar/SearchBar";
import TodoList from "../components/lists/TodoList";
import "../styles/searchPage.css";
import CompleteList from "../components/lists/CompleteList";

const Search = () => {
  return (
    <div className="search-page p-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={7}>
            <div className="pt-5 text-center">
              <SearchBar />
              <TodoList />
              <CompleteList />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
