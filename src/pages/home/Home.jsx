import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AboutCard from '../../components/AboutCard/AboutCard'
import SkillList from '../../components/SkillList/SkillList'
import Image from "../../assets/images/me.jpg";
function Home() {
    return (
        <Container>
            <Row className='py-5'>
                <AboutCard
                    heading="Hello, I'm Ali 👋"
                    description="I'm a software developer. I'm currently learning react. I love research new techs. I really interest front-end techs."
                    image={Image}
                />
                <SkillList />
            </Row>
        </Container>
    )
}

export default Home