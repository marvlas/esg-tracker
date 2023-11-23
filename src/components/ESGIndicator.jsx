function ESGIndicator ({ score }) {

    // Defining good, moderate and bad thresholds
    const good = 70;
    const moderate = 50;
  
    // Defining color based on score
    let indicatorClass;
    if (score >= good) {
      indicatorClass = 'esg-good';
    } else if (score >= moderate) {
      indicatorClass = 'esg-moderate';
    } else {
      indicatorClass = 'esg-bad';
    }
  
    return (
      <div>
        <div className={`esg-indicator ${indicatorClass}`} style={{ width: `${score}%` }}></div>
        <p>{score}</p>
      </div>
    );
  };
  
  export default ESGIndicator