import '../style/NavBar.css'
import image from '../assets/image.png';

const Navbar = () => {
  return (
    <div className='navBar'>
      <img className='navBar-img' src={image} />

    </div>
  )
}

export default Navbar