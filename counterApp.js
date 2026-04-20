 
      let count = 0;
      const max = 108;

      let circle = document.getElementById("circle");
      const progressCircle = document.getElementById("progressCircle");
      let para = document.getElementById("para");
      let para2 = document.getElementById("para2");

      let total = localStorage.getItem("total") || 0;
      ///  let numOfMala = localStorage.getItem("numOfMala") || 0;
      let numOfMala = Math.floor(total / max);
      para.innerText = `Total:${total}`;
      para2.innerText = `Number of Mala:${numOfMala}`;

      // 🔹 SVG CONFIG (sirf ek baar)
      const radius = 90;
      const circumference = 2 * Math.PI * radius;

      progressCircle.style.strokeDasharray = circumference;
      progressCircle.style.strokeDashoffset = circumference;

      // 🔹 Button logic
      function countUpdate() {
        if (count < max) {
          count++;
        } else {
          // numOfMala++;
          // localStorage.setItem("numOfMala", numOfMala);
          count = 1;
        }
        
        numOfMala = Math.floor(total / max);
        para2.innerText = `Number of Mala:${numOfMala}`;
        
        total++;
        localStorage.setItem("total", total);
        para.innerText = `Total:${total}`;
        circle.innerText = `${count} / 108`;

        // 👉 SVG logic clearly separated
        circleUpdate(count);
      }

      // 🔹 SVG progress logic (ALAG FUNCTION ✅)
      function circleUpdate(currentCount) {
        const offset = circumference - (currentCount / max) * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }
