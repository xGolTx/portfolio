let themeSwitchers = document.querySelectorAll('.theme-button'); 

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () { 
        let theme = this.dataset.theme; 
        applyTheme(theme);
        localStorage.setItem("theme", this.dataset.theme);
    });
});

function applyTheme(themeName) {
    let themeUrl ="style-${themeName}.css";
    document.querySelector('[title="theme"]').setAttribute('href', `style-${themeName}.css`); 
}

let activeTheme = localStorage.getItem("theme");
if(activeTheme === null) {
    applyTheme("light");
} else {
    applyTheme(activeTheme);
}