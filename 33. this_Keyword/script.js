const user = {
    firstName: "Aashish",
    lastName: "Kumar",
    tags: ["e", "f", "g"],
    printTags(){
        this.tags.forEach(function(){
            console.log(this);
        }, this)
    }
}

