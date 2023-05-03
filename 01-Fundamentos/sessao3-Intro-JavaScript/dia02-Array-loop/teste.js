const average = (arr) => {
    let total = 0;  
    for (let i = 0; i < arr.length; i += 1) {
      total += arr[i] / arr.length
    }    
    return Math.round(total);
  };
average([-11, -5, 2])