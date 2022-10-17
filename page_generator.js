export const PageGenerator = {
    _home: document.body,
    _curr: document.body,
    // functions for adding elements
    addBox: function (id){
        let container = document.createElement("div");
        container.id = id;
        container.classList.add("box");
        this.insert(container);
    },
    addHBox: function (id){
        let container = document.createElement("div");
        container.id = id;
        container.classList.add("hbox");
        this.insert(container);
    },
    addVBox: function (id){
        let container = document.createElement("div");
        container.id = id;
        container.classList.add("vbox");
        this._curr.append(container)
        this.insert(container);;
    },
    addPara: function (text, id){
        console.log(this._curr);
        let node = document.createElement("p");
        node.innerText = text;
        node.id = id;
        node.classList.add("para");
        this._curr.append(node)
        this.insert(node)
    },
    addTitle: function (text, id){
        console.log(this._curr);
        let node = document.createElement("h1");
        node.innerText = text;
        node.id = id;
        node.classList.add("title");
        this._curr.append(node)
        this.insert(node)
    },
    addButton: function(text, id, callback){
        let button = document.createElement("button");
        button.id = id;
        button.innerText = text;
        button.onclick = callback;
        button.classList.add("button");
        this.insert(button);
    },
    addLink: function(text, id, href, callback){
        let button = document.createElement("p");
        button.id = id;
        button.innerText = text;
        button.onclick = callback;
        button.src = href;
        button.classList.add("link");
        // add .link
        this.insert(button);
    },
    addImage: function(link, id, callback, alt){
        let img = document.createElement("img");
        img.id = id;
        img.src = link;
        img.onclick = callback;
        img.alt = alt;
        this.insert(img);
    },
    addCustom: function(path){
        // grabs content from path and adds it to page
    },

    // pointer control
    insert: function(node){
        this._curr.appendChild(node); // adds node to document
        this.select(node); // and selects it
    },
    goHome: function (node){
        this._curr = this._home; // sets document body as the current node
    },
    setHome: function(id){
        this._home = document.getElementById(id);
    },
    select: function (node){
        this._curr = node; // sets node as the current node 
    },
    selectById: function (id){
        this._curr = document.getElementById(id); // selects a node by id, useful for adding content to containers
    },

    // page styling
    setBackgroundColor: function(value){
        document.body.style.setProperty(`--background`, value) 
    },
    setBackgroundImage: function(value){
        document.body.style.setProperty(`background-image`, `url(${value})`)
    },
    setNeutralColor: function(value){
        document.body.style.setProperty(`--neutral`, value)
    },
    setPrimaryColor: function(value){
        document.body.style.setProperty(`--primary`, value)
    },
    setSecondaryColor: function(value){
        document.body.style.setProperty(`--secondary`, value)
    },
    setTextColor: function(value){
        document.body.style.setProperty(`--text`, value)
    },

    // sets the style of element by given id
    setStyle: function(id, prop, value){
        let el = document.getElementById(id);
        el.style.setProperty(`${prop}`, value);

    }
}