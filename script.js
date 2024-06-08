function calculateCalories() {
    const weights = document.getElementById("weights").value;
    const intensities = document.getElementById("intensities").value;
    const time = document.getElementById("time").value;
    const cal = (weights * intensities * time) / 200;
    if (cal < 0){
      document.getElementById("result").textContent = `Kindly enter positive values.`;
    }
    else{
      document.getElementById("result").textContent = `The calories you burned are approximately ${cal.toFixed(2)}.`;
    }
  }
  