function ESGIndicator ({ score }) {

    // Defining good, moderate and bad thresholds
    const good = 70;
    const moderate = 50;
  
    // Defining color based on score
    let color;
    if (score >= good) {
      color = 'green';
    } else if (score >= moderate) {
      color = 'gold';
    } else {
      color = 'darkred';
    }
  
    // Styling for the indicator
    const ESGStyle = {
      width: `${score}%`,
      backgroundColor: color,
      height: '20px',
      borderRadius: '5px',
      margin: '5px 0',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    };
  
    return (
      <div>
        <div style={ESGStyle}></div>
        <p>{score}</p>
      </div>
    );
  };
  
  export default ESGIndicator