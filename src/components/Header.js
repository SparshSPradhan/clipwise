



import React from 'react';
import './Header.css';
import GroupImage from './Group110.png';
import GroupPics from './Group 109.png';
import Photo from './Group 104.png'
import picture from './Vector 1.png';
import belowpic from './Group 113.png';


function Header() {
  return (
    <header className="header">
    
        <div className="header-left">
        <img
          src={GroupImage} // Replace this with your logo URL
          alt="Pop Rock Crystal"
          className="logo"
        /></div>
      <div className="header-content">
        <h1>Welcome to <br></br><span className='text'>Pop Rock Crystal Shop!</span></h1>
        <p>Here you will find unique phone accessories, crystals, <br></br>jewelry and more. Free shipping inside the U.S. and our <br></br>
            phone grips come with a limited warranty. Enjoy!
        </p>
        <button className="shop-btn">Shop Now </button>      <span>about us</span>
      </div>
      <div className="header-image-container"> {/* New container for the rectangular box */}



  <img 
    src={Photo}
    alt="Side  Inside" 
    className="side-inside"
  />

      

      <span className="header-image-text">Crystal Agate Phone Grip <b>- 18.99$</b></span>{/* Add your text here */}

        <img
          src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__"
          alt="Crystal Product"
          className="header-image"
          
        />
 
      </div>

      <div className="header-right">
        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#help" className="nav-link">Help</a>
        </nav>
      </div>
      

      <div className="small-figure">
        <img
          src={GroupPics} // Replace this URL with your small figure's URL
          alt="Small figure"
        />
      </div>
      
      <div className="wave-container">
  {/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#ffffff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,245.3C672,245,768,171,864,154.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg> */}
  <div className="header-image">
        <img
          src={picture} // Replace this with your image URL
          alt="Description of the image"
          className="header-image-content" // Add class for styling
        />
      </div>
      <img src={belowpic} alt="Description of the image" class="below-image" />

</div>






    </header>
  );
}

export default Header;
