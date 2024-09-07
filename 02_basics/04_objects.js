/* 
    Objects de-structure and Json
*/

// destructuring of course object
const course = {
    name: "JS Beginner to Advanced",
    cost: "Free",
    modules: 30,
}

// destructuring modules value from course object and storing in variable no_of_modules
const {modules: no_of_modules} = course;

// destructuring course name value from course object and storing in variable course_name
const {name: course_name} = course;

console.log(no_of_modules);
console.log(course_name);


/* JSON structure is similar to object structure:
    > {
        "name" : "JS Beginner to Advanced",
        "price" : "Free",
        "modules" : "30"
      }

      You would encounter json formats in API calls when datas would be sent in
      json formats or in array of objects format.

      [
        {},
        {},
        {}
      ]
*/