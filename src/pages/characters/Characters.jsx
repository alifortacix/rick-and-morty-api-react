import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

function Characters() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [requestUrl, setRequestUrl] = useState(`${apiUrl}/character`);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const fetchData = () => {
        try {
            axios.get(requestUrl)
                .then((res) => {
                    setCharacters(prevCharacters => [...prevCharacters, ...res.data.results]);
                    setRequestUrl(res.data.info.next);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                    setLoading(false);
                });
        }
        catch {
            alert("An error occured.")
        }
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollY + windowHeight >= documentHeight - 100) {
            setLoading(true);
        }
    };

    const fetchMoreData = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    useEffect(() => {
        if (loading) {
            fetchMoreData();
        }
    }, [loading]);

    return (
        <Container>
            <Row className="py-5">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Characters..."
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant="outline-secondary">
                        <BsSearch />
                    </Button>
                </InputGroup>
                {
                    characters.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())).map((character, i) => (
                        <Col key={i} className='mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={character.image} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>
                                        <Badge className='me-1' bg="success">{character.status}</Badge>
                                        <Badge className='me-1' bg="primary">{character.species}</Badge>
                                        <Badge bg="warning">{character.gender}</Badge>
                                        <br />
                                        {character.created}
                                    </Card.Text>
                                    <div className='d-grid'>
                                        <Link className='btn btn-primary' to={`/characters/${character.id}`}>Detail</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            {loading ? <Loading /> : <></>}
        </Container>
    )
}

export default Characters