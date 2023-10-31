class MenuItem{
    menuItem = []

    constructor(name,price,description){
        this.name = name
        this.price = price
        this.description = description
    }

    addMenuItem(customer,menuitem,quantity){
        this.menuItem.push(customer,menuitem,quantity)
    }

    getMenuItem(){
        return this.menuItem
    }
}

module.exports = MenuItem