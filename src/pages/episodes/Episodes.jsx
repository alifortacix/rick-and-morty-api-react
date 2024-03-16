import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Badge, Button, Container, ListGroup, Row } from 'react-bootstrap'
import Loading from '../../components/Loading/Loading';

const Episodes = () => {
    const [episodeList, setEpisodeList] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;
    const [requestUrl, setRequestUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const loadMoreButtonRef = useRef(null);
    const loadMore = () => {
        setLoading(true);
        if (requestUrl != null) {
            axios.get(requestUrl)
                .then((res) => {
                    setEpisodeList(prevEpisodes => [...prevEpisodes, ...res.data.results]);
                    setRequestUrl(res.data.info.next);
                    setLoading(false);
                })
                .catch(() => console.log("object"))
        }
    }
    useEffect(() => {
        setLoading(true);
        axios.get(apiUrl + "/episode")
            .then((res) => {
                setEpisodeList(prevEpisodes => [...prevEpisodes, ...res.data.results]);
                setRequestUrl(res.data.info.next);
                setLoading(false);
            })
            .catch(() => console.log("object"))
    }, []);

    useEffect(() => {
        if (requestUrl == null) {
            loadMoreButtonRef.current.disabled = true;
            loadMoreButtonRef.current.innerText = "No more data";
        }
    }, [requestUrl]);

    return (
        <Container className='py-5'>
            <Row>
                {
                    episodeList.map((episode, index) => (
                        <ListGroup as="ul" key={index} className='mb-1'>
                            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{episode.name}</div>
                                    {episode.air_date}
                                </div>
                                <Badge bg="primary" pill>
                                    {episode.episode}
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    ))
                }
                <Button ref={loadMoreButtonRef} variant='primary' className='mt-3' onClick={loadMore}>Load More</Button>
                {
                    loading ? <Loading /> : <></>
                }
            </Row>
        </Container>
    )
}

export default Episodes