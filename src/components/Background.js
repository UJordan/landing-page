import backgroundvideo from '../app/assets/backgroundvideo.mp4';

const Background = () => {
    return (
        <video autoPlay loop muted plays-inline >
            <source src={backgroundvideo} type='video/mp4'></source>
        </video>
    );
};

export default Background;