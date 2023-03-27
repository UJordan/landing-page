import { Container, Col, Row, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardSubtitle, CardText, CardGroup, Button } from 'reactstrap';

const Cards = () => {
    return (
        <CardGroup>
            <Card color="light" style={{ width: '30rem' }}>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle tag="h5">Personal Wedding Mobile App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Made In React Native</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button style={{ marginRight: '1rem',}}>Play Video</Button>
                    <Button>GitHub</Button>
                </CardBody>
            </Card>
            <Card color="light" style={{ width: '30rem', }}>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle tag="h5">Personal Wedding Website</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Made In React</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button style={{ marginRight: '1rem',}}>Link</Button>
                    <Button>GitHub</Button>
                </CardBody>
            </Card>
            <Card color="light" style={{ width: '30rem',}}>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle tag="h5">Dog Food Donation App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Made In React Native</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button style={{ marginRight: '1rem',}}>Link</Button>
                    <Button>GitHub</Button>
                </CardBody>
            </Card>
        </CardGroup>
    );
};

export default Cards;