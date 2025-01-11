//complete this code
class Person {
	constructor(name,age){
		get name();
		set age(age);
	}
}

class Student extends Person {
	constructor(name,age){
		supper(name,age);
		
	}
	study(){
		console.log(name,'is studying');
	}
}

class Teacher extends Person {
	constructor(name,age){
		supper(name,age);
	}
	teach(){
		console.log(name, 'is teaching') ;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
