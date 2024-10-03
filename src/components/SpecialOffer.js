import React from 'react';
import './SpecialOffer.css';
import picture from './Vector 1.png';



function SpecialOffer() {
  return (
    <section className="special-offer-section">
      <h2>Best Price <br></br><span className='special'>Agate Phone Grip</span></h2>
      <p className="offer-description"></p>
      <p className="price">19.50$ <span className="old-price">44.50$</span></p>
      <p className='offer-text'>These Pop Rock Crystal grip tops can be swapped with <br></br>other tops depending on your mood, outfit, nails, <br></br>phone case, holiday, etc.! Just gently squeeze the sides <br></br>to remove and swap out with another color or design!
      </p>
      <button className="buy-now">Buy Now</button>
      <div class="outer-ellipse">
  <div class="inner-ellipse"><img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A_" alt="Description" /></div>
</div>
         {/* Image above the footer */}

<div className="footer-image">
        <img
          src={picture} // Replace this with your image URL
          alt="Description of the image"
          className="footer-image-content"
        />
       
      </div>
      

    </section>
    
  );
  
}

export default SpecialOffer;
