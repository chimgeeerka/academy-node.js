class Student {
constructor (name, age){
    this.name = name
    this.age = age
}
introduce() {
    return "Hi, I'm " + this.name + "  and I'm " + this.age + " years old."
} 
}

const student = new Student("Sara", 20);
console.log(student.introduce()); // "Hi, I'm Sara and I'm 20 years old."