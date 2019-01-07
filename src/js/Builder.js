/**
 * 建造者模式（Builder）
 */
class Student{
    constructor(builder){
        this.id = builder.id;
        this.name = builder.name;
        this.passwd = builder.passwd || '123456';
        this.sex = builder.sex || '未知';
        this.address = builder.address || '未知';
    }
    toString(){
        console.log(`id->${this.id}, name->${this.name}, passwd->${this.passwd}, sex->${this.sex}, address->${this.address}`);
    }
}
Student.Builder = class {
    constructor(id, name){
        //必要参数
        this.id = id;
        this.name = name;

        //可选参数
        ['passwd', 'sex', 'address'].forEach(key => {
            this[`with${key[0].toUpperCase()+key.substring(1)}`] = (val => {
                this[key] = val;
                return this;
            });
        })
    }
    build() {
        return new Student(this);
    }
};

export default Student;