import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { IoChevronBackCircleSharp } from "react-icons/io5";


function CharacterDetail() {
    const { id } = useParams("id");
    const apiUrl = process.env.REACT_APP_API_URL + "/character/" + id;
    const [character, setCharacter] = useState();

    useEffect(() => {
        axios.get(apiUrl)
            .then((res) => {
                setCharacter(res.data);
            })
            .catch(() => {
                alert("Bilinmeyen Bir Hata Oluştu.")
            })
    }, []);
    return (
        <Container>
            <Row className="py-5">
                <div className="col-md-6 offset-md-3">
                    {character ? (
                        <div className="card border-0 shadow-lg">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={character.image} className="card-img-top py-3" alt={character.name} style={{ width: "400px", borderRadius: "50%" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">{character.name}</h5>
                                <div className="py-5">
                                    <div className="d-flex gap-3">
                                        <p className="card-text">Status: <Badge bg="primary">{character.status}</Badge></p>
                                        <p className="card-text">Species: <Badge bg="success">{character.species}</Badge> </p>
                                        <p className="card-text">Gender: <Badge bg="warning">{character.gender}</Badge> </p>
                                    </div>
                                    <p className="card-text">Origin: <Badge bg="secondary">{character.origin.name}</Badge> </p>
                                    <p className="card-text">Location: <Badge bg="secondary">{character.location.name}</Badge> </p>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-center align-items-center">
                                <Link to={"/characters"} className="btn btn-primary">
                                    <IoChevronBackCircleSharp size={24} className="me-1" />
                                    Back To Characters
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>
            </Row>
        </Container>
    )
}

export default CharacterDetail