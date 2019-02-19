let defaultConfig = {
    submenuWidth: 250
}

function createMenu(menu) {
    let text = '<div class="navpos">' +
        '<div class="navbar noselect">';
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].title != undefined)
            text += createTopMenu(menu[i].title, menu[i].submenu, menu[i].width)
        else
        if (menu[i].pad != undefined)
            text += createTopPadMenu(menu[i].pad);
    }
    text += '</div></div>';
    document.getElementById('menu').innerHTML = text;
    return undefined;

    function createTopPadMenu(pad) {
        return '<div class="mmpad p' + pad + '"></div>';
    }

    function createTopMenu(name, submenu, width) {
        return '<div class="mmenu">' +
            '<div class="menupos" onclick="swFile(this);" onmouseover="showsubmenu(this)">' + name + '</div>' +
            createsubmenu(submenu, width) +
            '</div >';

        function createsubmenu(submenu, width) {
            let text = '';
            if (width == undefined) width = 250;
            if (submenu != undefined) {
                text += '<div class="subdiv" style="width:' + width + 'px" >';
                for (let i = 0; i < submenu.length; i++) {
                    text += '<div class="subele"' + createonclick(submenu[i].onclick) + '>' + submenu[i].title + '</div>';
                }
                text += '</div>';
            }
            return text;

            function createonclick(onclick) {
                if (onclick != undefined)
                    return ' onclick="hideall();' + onclick + '();"'
                else
                    return ' onclick="hideall();"';
            }
        }
    }
}