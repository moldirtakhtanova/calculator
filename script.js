function calculate() {
            let result = 100;
            var education_level = document.getElementById("education").value;
            var networth = document.getElementById("networth").value;
            var castle = document.getElementById("castle").value;
            const skills_1 = document.getElementById("vehicle1");
            const skills_2 = document.getElementById("vehicle2");
            const skills_3 = document.getElementById("vehicle3");
            const skills_4 = document.getElementById("vehicle4");
            const age_1 = document.getElementById("rad1");
            const age_2 = document.getElementById("rad2");
            const age_3 = document.getElementById("rad3");
            const repu_1 = document.getElementById("repu1");
            const repu_2 = document.getElementById("repu2");
            const repu_3 = document.getElementById("repu3");

            if(education_level == "bachelor"){
                result = 100;
                result = result * 1.5;
            } else if(education_level == "college"){
                result = 100;
                result = result * 1.2;
            } else if(education_level == "high_school"){
                result = 100;
                result = result * 1.05;
            } else if(education_level == "middle_school"){
                result = 100;
                result = result * 0.9;
            }

            if(networth == "upper_class"){
                result = result * 2;
            } else if(networth == "middle_class"){
                result = result * 1.5;
            } else if(networth == "lower_class"){
                result = result * 1.2;
            } 

            if(castle == "brah"){
                result = result + 100;
            } else if(castle == "kshat"){
                result = result + 50;
            } else if(castle == "vaish"){
                result = result + 20;
            } else if(castle == "shudr"){
                result = result + 10;
            } else if(castle == "varna"){
                result = result - 50;
            } 
            
            if(skills_1.checked == true){
                result = result + 10;
            }
            if(skills_2.checked == true){
                result = result + 20;
            }
            if(skills_3.checked == true){
                result = result + 15;
            }
            if(skills_4.checked == true){
                result = result + 10;
            }

            if(age_1.checked == true){
                result = result * 1.5;
            } else if(age_2.checked == true){
                result = result * 1.2;
            } else if(age_3.checked == true){
                result = result * 0.95;
            }

            if(repu_1.checked == true){
                result = result * 0.85;
            }
            if(repu_2.checked == true){
                result = result * 0.9;
            }
            if(repu_3.checked == true){
                result = result - 20;
            }

            const res = document.getElementById("result");
            res.innerHTML = result;
        }