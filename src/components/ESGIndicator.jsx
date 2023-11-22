function ESGIndicator ({ score }) {

    // Defining good, moderate and bad thresholds
    const good = 70;
    const moderate = 50;
  
    // Defining color based on score
    let color;
    if (score >= good) {
      color = '#138808';
    } else if (score >= moderate) {
      color = '#e1ad01';
    } else {
      color = '#960018';
    }
  
    // Styling for the indicator
    const ESGStyle = {
      width: `${score}%`,
      backgroundColor: color,
      height: '20px',
      borderRadius: '5px',
      margin: '5px 0',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      opacity: '0.8'
    };
  
    return (
      <div>
        <div style={ESGStyle}></div>
        <p>{score}</p>
      </div>
    );
  };
  
  export default ESGIndicator