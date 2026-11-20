import React from 'react'
import img from "../../assets/img.png"

const Card = () => {

  const birthDate = "2002-07-11";
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const getAgeLabel = (age) => {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits >= 12 && lastTwoDigits <= 14) {
      return `${age} lat`;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${age} lata`;
    }
    return `${age} lat`;
  };

  const age = calculateAge(birthDate);
  const thickness = 25; 
  const layers = Array.from({ length: thickness });

  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        
        {layers.map((_, i) => (
          <div 
            key={i} 
            className="card-layer" 
            style={{ transform: `translateZ(${i}px)` }}
          ></div>
        ))}

        <div className="card-front" style={{ transform: `translateZ(${thickness}px)` }}>
          <div className="top-section">
            <div className="small-image">
              <div className="img-container">
                <img src={img} alt="Bartłomiej Mazurkiewicz" />
              </div>
            </div>
            <div className="status">
              <span className='dot'></span>
              <span>Junior developer</span>
            </div>
          </div>
          <div className="card-info">
            <h4>Bartłomiej Mazurkiewicz</h4>
            <p className="subtitle">{getAgeLabel(age)} • Rzeszów, Polska</p>
            <p className="tags">Studia Informatyczne II st. <span>|</span> Cyberbezpieczeństwo</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card