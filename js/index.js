const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight-20}px`)
}

window.addEventListener('resize', documentHeight)
documentHeight()

let A_R_ID, A_BLU_ID, A_BLA_ID, 
    B_R_ID, B_BLU_ID, B_BLA_ID, 
    C_R_ID, C_BLU_ID, C_BLA_ID, 
    B_DP1_ID, B_DP2_ID, 
    L_Sed_ID, R_Sed_ID, L_DP_ID,
    Smoke1_ID, Smoke2_ID, Smoke3_ID, 
    TL1_ID, TL2_ID, Ress_ID, Grave_ID;

function toUTC(time) {
    var UTCTime = time.toLocaleString("en-GB", { timeZone: 'UTC' });
    return UTCTime.split(' ')[1];
}

function showTime() {
    let nowTime = new Date();
    document.getElementById("STime").innerText = toUTC(nowTime);
    setTimeout(showTime, 100);
}

function wyvern(type) {
    let nowTime = new Date();
    var cooldown;
    switch (type) {
        case 'Red': cooldown = 60; break;
        case 'Blue': cooldown = 55; break;
        case 'Black': cooldown = 50; break;
        case 'DP1': cooldown = 300; break;
        case 'DP2': cooldown = 180; break;
        case 'Sed': cooldown = 60; break;
        case 'L_DP': cooldown = 120; break;
        case 'SMOKE': cooldown = 600; break;
        case 'TL': cooldown = 1200; break;
        case 'Ress': cooldown = 1800; break;
        case 'Grave': cooldown = 600; break;
        default: alert('Wrong!');
    }
    nowTime.setSeconds(nowTime.getSeconds()+cooldown);
    return nowTime;
}

function updateCooldown(end, cdElem, textElem, popElem, timeoutID) {
    let nowTime = new Date().getTime();
    let endTime = end.getTime();
    var difference = (endTime-nowTime) / 1000;

    if (difference < 1) {
        switch (timeoutID) {
            case 'A_R':   clearInterval(A_R_ID); break;
            case 'A_BLU': clearInterval(A_BLU_ID); break;
            case 'A_BLA': clearInterval(A_BLA_ID); break;
            case 'B_R':   clearInterval(B_R_ID); break;
            case 'B_BLU': clearInterval(B_BLU_ID); break;
            case 'B_BLA': clearInterval(B_BLA_ID); break;
            case 'C_R':   clearInterval(C_R_ID); break;
            case 'C_BLU': clearInterval(C_BLU_ID); break;
            case 'C_BLA': clearInterval(C_BLA_ID); break;
            case 'B_DP1': clearInterval(B_DP1_ID); break;
            case 'B_DP2': clearInterval(B_DP2_ID); break;
            case 'L_Sed': clearInterval(L_Sed_ID); break;
            case 'R_Sed': clearInterval(R_Sed_ID); break;
            case 'L_DP':  clearInterval(L_DP_ID); break;
            case 'Smoke1':  clearInterval(Smoke1_ID); break;
            case 'Smoke2':  clearInterval(Smoke2_ID); break;
            case 'Smoke3':  clearInterval(Smoke3_ID); break;
            case 'TL1':  clearInterval(TL1_ID); break;
            case 'TL2':  clearInterval(TL2_ID); break;
            case 'Ress':  clearInterval(Ress_ID); break;
            case 'Grave':  clearInterval(Grave_ID); break;
            default: alert('Wrong!');
        }
        textElem.style.visibility = 'hidden';
        popElem.style.visibility = 'visible';
        setTimeout(() => {
            popElem.style.visibility = 'hidden';
        }, 5000);
    } else {
        cdElem.innerText = Math.floor(difference) + ' s';
    }
}

showTime();


/* HEADA */
document.getElementById('A_Red').addEventListener('click', 
    function () { 
        let endTime = wyvern('Red');
    
        document.getElementById("A_Red_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("A_Red_CD");
        const textElem = document.getElementById("A_Red_Text");
        const popElem = document.getElementById("A_Red_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(A_R_ID);

        A_R_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "A_R");
    }
);

document.getElementById('A_Blue').addEventListener('click', 
    function () { 
        let endTime = wyvern('Blue');
    
        document.getElementById("A_Blue_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("A_Blue_CD");
        const textElem = document.getElementById("A_Blue_Text");
        const popElem = document.getElementById("A_Blue_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(A_BLU_ID);

        A_BLU_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "A_BLU");
    }
);

document.getElementById('A_Black').addEventListener('click', 
    function () { 
        let endTime = wyvern('Black');
    
        document.getElementById("A_Black_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("A_Black_CD");
        const textElem = document.getElementById("A_Black_Text");
        const popElem = document.getElementById("A_Black_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(A_BLA_ID);

        A_BLA_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "A_BLA");
    }
);

/* HEADB */
document.getElementById('B_Red').addEventListener('click', 
    function () { 
        let endTime = wyvern('Red');
    
        document.getElementById("B_Red_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("B_Red_CD");
        const textElem = document.getElementById("B_Red_Text");
        const popElem = document.getElementById("B_Red_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(B_R_ID);

        B_R_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "B_R");
    }
);

document.getElementById('B_Blue').addEventListener('click', 
    function () { 
        let endTime = wyvern('Blue');
    
        document.getElementById("B_Blue_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("B_Blue_CD");
        const textElem = document.getElementById("B_Blue_Text");
        const popElem = document.getElementById("B_Blue_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(B_BLU_ID);

        B_BLU_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "B_BLU");
    }
);

document.getElementById('B_Black').addEventListener('click', 
    function () { 
        let endTime = wyvern('Black');
    
        document.getElementById("B_Black_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("B_Black_CD");
        const textElem = document.getElementById("B_Black_Text");
        const popElem = document.getElementById("B_Black_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(B_BLA_ID);

        B_BLA_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "B_BLA");
    }
);

/* HEADC */
document.getElementById('C_Red').addEventListener('click', 
    function () { 
        let endTime = wyvern('Red');
    
        document.getElementById("C_Red_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("C_Red_CD");
        const textElem = document.getElementById("C_Red_Text");
        const popElem = document.getElementById("C_Red_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(C_R_ID);

        C_R_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "C_R");
    }
);

document.getElementById('C_Blue').addEventListener('click', 
    function () { 
        let endTime = wyvern('Blue');
    
        document.getElementById("C_Blue_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("C_Blue_CD");
        const textElem = document.getElementById("C_Blue_Text");
        const popElem = document.getElementById("C_Blue_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(C_BLU_ID);

        C_BLU_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "C_BLU");
    }
);

document.getElementById('C_Black').addEventListener('click', 
    function () { 
        let endTime = wyvern('Black');
    
        document.getElementById("C_Black_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("C_Black_CD");
        const textElem = document.getElementById("C_Black_Text");
        const popElem = document.getElementById("C_Black_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(C_BLA_ID);

        C_BLA_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "C_BLA");
    }
);

/* HEADB-DP */
document.getElementById('B_DP1').addEventListener('click', 
    function () { 
        let endTime = wyvern('DP1');
    
        document.getElementById("B_DP1_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("B_DP1_CD");
        const textElem = document.getElementById("B_DP1_Text");
        const popElem = document.getElementById("B_DP1_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(B_DP1_ID);

        B_DP1_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "B_DP1");
    }
);

document.getElementById('B_DP2').addEventListener('click', 
    function () { 
        let endTime = wyvern('DP2');
    
        document.getElementById("B_DP2_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("B_DP2_CD");
        const textElem = document.getElementById("B_DP2_Text");
        const popElem = document.getElementById("B_DP2_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(B_DP2_ID);

        B_DP2_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "B_DP2");
    }
);

/* HANDS */
document.getElementById('L_Sed').addEventListener('click', 
    function () { 
        let endTime = wyvern('Sed');
    
        document.getElementById("L_Sed_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("L_Sed_CD");
        const textElem = document.getElementById("L_Sed_Text");
        const popElem = document.getElementById("L_Sed_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(L_Sed_ID);

        L_Sed_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "L_Sed");
    }
);

document.getElementById('R_Sed').addEventListener('click', 
    function () { 
        let endTime = wyvern('Sed');
    
        document.getElementById("R_Sed_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("R_Sed_CD");
        const textElem = document.getElementById("R_Sed_Text");
        const popElem = document.getElementById("R_Sed_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(R_Sed_ID);

        R_Sed_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "R_Sed");
    }
);

document.getElementById('L_DP').addEventListener('click', 
    function () { 
        let endTime = wyvern('L_DP');
    
        document.getElementById("L_DP_Time").innerText = toUTC(endTime);
        
        const cdElem = document.getElementById("L_DP_CD");
        const textElem = document.getElementById("L_DP_Text");
        const popElem = document.getElementById("L_DP_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(L_DP_ID);

        L_DP_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "L_DP");
    }
);

/* SKILLS */
document.getElementById('Smoke1').addEventListener('click', 
    function () { 
        let endTime = wyvern('SMOKE');
    
        document.getElementById("Smoke1_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("Smoke1_CD");
        const textElem = document.getElementById("Smoke1_Text");
        const popElem = document.getElementById("Smoke1_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(Smoke1_ID);

        Smoke1_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "Smoke1");
    }
);

document.getElementById('Smoke2').addEventListener('click', 
    function () { 
        let endTime = wyvern('SMOKE');
    
        document.getElementById("Smoke2_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("Smoke2_CD");
        const textElem = document.getElementById("Smoke2_Text");
        const popElem = document.getElementById("Smoke2_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(Smoke2_ID);

        Smoke2_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "Smoke2");
    }
);

document.getElementById('Smoke3').addEventListener('click', 
    function () { 
        let endTime = wyvern('SMOKE');
    
        document.getElementById("Smoke3_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("Smoke3_CD");
        const textElem = document.getElementById("Smoke3_Text");
        const popElem = document.getElementById("Smoke3_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(Smoke3_ID);

        Smoke3_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "Smoke3");
    }
);

document.getElementById('TL1').addEventListener('click', 
    function () { 
        let endTime = wyvern('TL');
    
        document.getElementById("TL1_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("TL1_CD");
        const textElem = document.getElementById("TL1_Text");
        const popElem = document.getElementById("TL1_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(TL1_ID);

        TL1_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "TL1");
    }
);

document.getElementById('TL2').addEventListener('click', 
    function () { 
        let endTime = wyvern('TL');
    
        document.getElementById("TL2_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("TL2_CD");
        const textElem = document.getElementById("TL2_Text");
        const popElem = document.getElementById("TL2_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(TL2_ID);

        TL2_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "TL2");
    }
);

document.getElementById('Ress').addEventListener('click', 
    function () { 
        let endTime = wyvern('Ress');
    
        document.getElementById("Ress_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("Ress_CD");
        const textElem = document.getElementById("Ress_Text");
        const popElem = document.getElementById("Ress_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(Ress_ID);

        Ress_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "Ress");
    }
);

document.getElementById('Grave').addEventListener('click', 
    function () { 
        let endTime = wyvern('Grave');
    
        document.getElementById("Grave_Time").innerText = ' (' + toUTC(endTime) + ')';
        
        const cdElem = document.getElementById("Grave_CD");
        const textElem = document.getElementById("Grave_Text");
        const popElem = document.getElementById("Grave_pop");

        textElem.style.visibility = 'visible';
        popElem.style.visibility = 'hidden';
        clearInterval(Grave_ID);

        Grave_ID = setInterval(updateCooldown, 100, endTime, cdElem, textElem, popElem, "Grave");
    }
);

document.getElementById('How').addEventListener('click', 
    function () { 
        alert('How to use this timer?\n\n' +
        '1. Everytime anything happens in horntail, click on the corresponding button ' +
        'to show the cooldown and estimated time.\n\n' + 
        '2. There are 2 different Dispel timers for Head B, 1st dispel happens when Head B is at 60% HP ' + 
        '(After 2nd blue wyvern wave), 2nd dispel happens when Head B is at 30% HP (After 2nd dark wyvern wave)');
    }
);