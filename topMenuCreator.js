/*let defaultConfig = {
    submenuWidth: 250
}*/

var mainMenu = (function() {

    // The "private"
    var menu = [];
    var pad = 20;
    var fc = 0;


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

                function isFunction(functionToCheck) {
                    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
                }

                function addjscode(code) {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    try {
                        s.appendChild(document.createTextNode(code));
                        document.body.appendChild(s);
                    } catch (e) {
                        s.text = code;
                        document.body.appendChild(s);
                    }
                }

                function createonclick(onclick) {
                    if (onclick != undefined) {
                        if (isFunction(onclick)) {
                            let fname = 'mm__code__' + (fc++);
                            addjscode(
                                fname + ' = ' + onclick.toString()
                            );
                            onclick = fname;
                        };
                        return ' onclick="hideall();' + onclick + '();"'
                    } else
                        return ' onclick="hideall();"';
                }
            }
        }
    }

    return {
        addItem: function(caption, name, width) {
            if (width == undefined) width = 200;
            menu.push({ title: caption, width: width, submenu: [] });
        },
        addPad: function(pad) {
            if (pad == undefined) pad = 20;
            menu.push({ pad: pad });
        },
        addSubItem: function(caption, name) {
            menu[menu.length - 1].submenu.push({ title: caption, onclick: name });
        },
        create: function() {
            createMenu(menu);
        },
        init: function() {
            menu = [];
        }
    };
})();