import Card from './Card';
import './About.css';
import Features from './Features';
import Vision from './Vision';
import MovingText from './MovingText';

const Home = () => {
    return (
    <div id='about1' className='about-container'>   
        <Vision />
        <Card /> 
        <Features />
    </div>
    )
}
export default Home;