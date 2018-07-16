/**
 * 组合（Composite）
 */
class Component {
    constructor(name) {
        if(new.target == Component) {
            throw new Error('Component is an abstract.');
        }
        this.name = name;
    }
    print(level=0){}
    add(component){}
    remove(component){}
}

class Composite extends Component {
    constructor(name) {
        super(name);
        this.child = [];
    }
    print(level=0) {
        console.log('--'.repeat(level) + 'Composite:' + this.name);

        this.child.forEach(component => {
            component.print(level + 1);
        })
    }
    add(component) {
        this.child.push(component);
    }
    remove(component) {
        let index = this.child.indexOf(component);
        if(-1 != index){
            this.child.splice(index, 1);
        }
    }
}

class Leaf extends Component {
    constructor(name) {
        super(name);
    }
    print(level=0) {
        console.log('--'.repeat(level) + 'Left:' + this.name);
    }
    add(component) {
        throw new Error('This is a leaf.');
    }
    remove(component) {
        throw new Error('This is a leaf.');
    }
}

export {
    Composite,
    Leaf
}