'use strict';

function Menu(ui, body) {
    var menu = null, Item = ui.Item;
    ui.upds.push(function(i, name) {
        var li = i._li;
        if(!li) return;
        li.onclick = i._ex;
        if(typeof name !== 'string') return;
        if(name === "-") {li.className = "msep"; return;}
        var cec = li.childElementCount;
        if(cec)
        {
            for(var x = 0, t = []; x < cec; x++) t.push(li.children[x]);
            li.textContent = name;
            for(var x in t) li.appendChild(t[x]);
        } else li.textContent = name;
    });
	ui.growers.push(function(item, parent) {
		var pli = parent._li;
		if(!pli) return;
		var ul = pli.children.length ? pli.children[0] : createChild('ul', pli);
		var li = createChild('li', ul);
		li.innerText = item._name;
		item._li = li;
	});
	
	function make(item, parent) {
		var li = item._li;
		if(!li)
		{
			li = createChild('li', parent);
			item._li = li;
		}
		if(item._name) li.innerText = item._name;
		li.onclick = item._ex;
		var ul = null;
		for(var x in item) if(item.hasOwnProperty(x) && x.charAt(0) !== '_')
		{
			if(!ul) ul = createChild('ul', li);
			make(item[x], ul);
		}
	}
    function makeMenu() {
        if(!menu)
        {
            menu = createChild('menu', body); 
            menu.className = 'hmenu';
        }
        if(arguments.length) for(var x in arguments)
        {
            var a = arguments[x];
            if(!this[a]) this[a] = new Item(this);
            make(this[a], menu);
        }
	else make(this, menu);
    }
    Item.prototype.makeMenu = makeMenu;
    ui.makeMenu = makeMenu;
}

Menu(ui);
