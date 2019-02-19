function swFile(self) {
    let submenu = self.parentElement;
    let umenu = submenu.parentElement;

    let subdiv = submenu.getElementsByClassName("subdiv");
    for (let i = 0; i < subdiv.length; i++) {
        let cl = subdiv[i].classList;
        if (cl.value.split(" ").includes("onoff")) {
            cl.remove("onoff");
        } else {
            let sdiv = umenu.getElementsByClassName("subdiv");
            for (let i = 0; i < sdiv.length; i++) {
                sdiv[i].classList.remove("onoff");
            }
            cl.add("onoff");
        }

    };
}

function hideall() {
    let subdiv = document.getElementsByClassName('subdiv');
    for (let i = 0; i < subdiv.length; i++) {
        let cl = subdiv[i].classList;
        if (cl.value.split(" ").includes("onoff")) {
            cl.remove("onoff");
        }
    };
}

function isMenuOn(self) {
    let submenu = self.parentElement;
    let umenu = submenu.parentElement;

    let sdiv = umenu.getElementsByClassName("subdiv");
    for (let i = 0; i < sdiv.length; i++) {
        if (sdiv[i].classList.value.split(" ").includes("onoff"))
            return true;
    }
    return false;
}

function showsubmenu(self) {
    if (isMenuOn(self)) swFile(self);
}