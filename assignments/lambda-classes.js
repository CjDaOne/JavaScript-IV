// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.newAge = attributes.age;
    this.newName = attributes.name;
    this.newLocation = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name} I am from ${this.location}`;
  }
}
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes); // <- this and methods
    this.newSpecialty = instructorAttributes.specialty;
    this.newFavLanguage = instructorAttributes.favLanguage;
    this.newCatchPhrase = instructorAttributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${this.newSubject}.`;
  }
  grade() {
    return `${this.student.newName} receives a perfect score on ${this.newSubject}`;
  }
}

class Student extends Person {
    constructor(studentAttributes) {
      super(studentAttributes); // <- this and methods
      this.newPreviousBackground = studentAttributes.previousBackground;
      this.newClassNamee = studentAttributes.className;
      this.newFavSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return forEach(this.newFavSubjects)
      
    }
    PRAssignment() {
      return `${this.student.newName} has submitted a PR for ${this.newSubject}`;
    }
    sprintChallenge() {
        return `${this.student.newName} has begun sprint challenge on ${this.newSubject}`;
      }
  }

  class ProjectManager extends Instructor {
    constructor(proManAttributes) {
      super(proManAttributes); // <- this and methods
      this.newGradClassName = proManAttributes.gradClassName;
      this.newFavInstructor = proManAttributes.favLanguage;
      
    }
    standup() {
      return `${this.name} announces to ${this.channel}, @channel standup times!​​​​​`;
    }
    debugsCode() {
      return `${this.name} debugs ${this.newName}'s code on {this.subject}`;
    }
  }
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
   
console.log(fred)