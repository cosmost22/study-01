var darkMode = localStorage["darkMode"];
var darkModeToggle = document.getElementsByClassName('darkModeToggle');

if (darkMode === "enabled") {
    // document.body.classList.add("dark-Mode");
    // localStorage["darkMode"] = 'enabled';
    for(var i=0; i<darkModeToggle.length; i++)
            darkModeToggle[i].textContent = 'Night';
}
function modeToggle(){    
    darkMode = localStorage["darkMode"];
    if (darkMode == 'enabled') {
        document.body.classList.remove('dark-Mode');
        localStorage["darkMode"] = 'disabled';
        for(var i=0; i<darkModeToggle.length; i++)
            darkModeToggle[i].textContent = 'Day';
    }else {
        document.body.classList.add('dark-Mode');
        localStorage["darkMode"] = 'enabled';
        for(var i=0; i<darkModeToggle.length; i++)
            darkModeToggle[i].textContent = 'Night';
    }
}    

for(var i=0; i<darkModeToggle.length;i++){
    darkModeToggle.item(i).addEventListener('click', modeToggle)
}