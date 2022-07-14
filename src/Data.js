import img1 from './img/pic1.jpg'
import img2 from './img/pic2.jpg'
import img3 from './img/pic3.jpg'
import img4 from './img/pic4.jpg'
import img5 from './img/pic5.jpg'
import img6 from './img/pic6.jpg'
import img7 from './img/pic7.jpg'
import img8 from './img/pic8.jpg'
import img9 from './img/pic9.jpg'
import img10 from './img/pic10.jpg'
import img11 from './img/pic11.jpg'
import img12 from './img/pic12.jpg'
import Searchbar from './Searchbar'

export default function Data () {
    const array = [{
        img: img1,
        location: 'New York',
        time: 'Immidiate',
        price: 2095,
        type: 'Houses',
    },
    {
        img: img2,
        location: 'Ontario',
        time: 'Immidiate',
        price: 3150,
        type: 'Villa',
    },
    {
        img: img3,
        location: 'New York',
        time: 'After 15 Days',
        price: 1100,
        type: 'Dorm',
    },
    {
        img: img4,
        location: 'Texas',
        time: 'After 1 Month',
        price: 4500,
        type: 'Houses',
    },
    {
        img: img5,
        location: 'Ontario',
        time: 'After 15 Days',
        price: 800,
        type: 'Dorm',
    },
    {
        img: img6,
        location: 'Texas',
        time: 'After 1 Month',
        price: 1900,
        type: 'Villa',
    },]

    return(
        <div className='new'>
            <Searchbar props= {array}/>
        </div>

    );
}