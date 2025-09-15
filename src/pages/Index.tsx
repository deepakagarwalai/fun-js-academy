import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import Footer from "@/components/Footer";
import { Calculator, GitBranch, RotateCcw, Braces } from "lucide-react";

const Index = () => {
  // Learning content data
  const arithmeticExamples = [
    {
      title: "Basic Operations",
      code: `// Arithmetic operators in JavaScript
let a = 10;
let b = 5;

let sum = a + b;        // Addition: 15
let difference = a - b; // Subtraction: 5
let product = a * b;    // Multiplication: 50
let quotient = a / b;   // Division: 2
let remainder = a % b;  // Modulus: 0

console.log("Sum:", sum);
console.log("Product:", product);`,
      explanation: "Learn the fundamental arithmetic operators: addition (+), subtraction (-), multiplication (*), division (/), and modulus (%)."
    },
    {
      title: "Advanced Calculations",
      code: `// More complex arithmetic
let price = 29.99;
let quantity = 3;
let taxRate = 0.08;

let subtotal = price * quantity;
let tax = subtotal * taxRate;
let total = subtotal + tax;

console.log(\`Subtotal: $\${subtotal.toFixed(2)}\`);
console.log(\`Tax: $\${tax.toFixed(2)}\`);
console.log(\`Total: $\${total.toFixed(2)}\`);`,
      explanation: "Apply arithmetic operators in real-world scenarios like calculating totals, taxes, and formatted currency values."
    }
  ];

  const conditionalExamples = [
    {
      title: "If-Else Statements",
      code: `// Conditional logic
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(\`Score: \${score}, Grade: \${grade}\`);`,
      explanation: "Control program flow with if-else statements to make decisions based on different conditions."
    },
    {
      title: "Ternary Operator",
      code: `// Shorthand conditional
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";

let weather = "sunny";
let activity = weather === "sunny" ? 
    "Go to the beach" : 
    "Stay indoors";

console.log(\`Status: \${status}\`);
console.log(\`Activity: \${activity}\`);`,
      explanation: "Use the ternary operator (? :) for concise conditional expressions and quick decision making."
    }
  ];

  const loopsExamples = [
    {
      title: "For Loops",
      code: `// For loop iteration
console.log("Counting up:");
for (let i = 1; i <= 5; i++) {
    console.log(\`Count: \${i}\`);
}

console.log("\\nArray iteration:");
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}`,
      explanation: "Master for loops to repeat code a specific number of times and iterate through arrays efficiently."
    },
    {
      title: "While Loops",
      code: `// While loop example
let number = 1;
let sum = 0;

while (number <= 10) {
    sum += number;
    console.log(\`Adding \${number}, sum is now: \${sum}\`);
    number++;
}

console.log(\`Final sum: \${sum}\`);

// Do-while example
let input;
do {
    input = prompt("Enter 'quit' to exit:");
    console.log(\`You entered: \${input}\`);
} while (input !== "quit");`,
      explanation: "Use while and do-while loops when you need to repeat code based on a condition rather than a fixed count."
    }
  ];

  const functionsExamples = [
    {
      title: "Function Declaration",
      code: `// Function declaration
function greetStudent(name, course) {
    return \`Hello \${name}! Welcome to \${course}.\`;
}

// Function expression
const calculateGPA = function(grades) {
    let sum = grades.reduce((total, grade) => total + grade, 0);
    return (sum / grades.length).toFixed(2);
};

// Arrow function
const isPassingGrade = (grade) => grade >= 60;

// Using the functions
console.log(greetStudent("Alice", "JavaScript"));
console.log("GPA:", calculateGPA([85, 92, 78, 88]));
console.log("Passing:", isPassingGrade(75));`,
      explanation: "Create reusable code blocks with functions. Learn declaration syntax, expressions, and modern arrow functions."
    },
    {
      title: "Advanced Functions",
      code: `// Function with default parameters
function createStudent(name, age = 18, major = "Computer Science") {
    return {
        name: name,
        age: age,
        major: major,
        study: function() {
            return \`\${this.name} is studying \${this.major}\`;
        }
    };
}

// Higher-order function
function processGrades(grades, processor) {
    return grades.map(processor);
}

const student = createStudent("Bob", 20, "BCA");
console.log(student.study());

const grades = [78, 85, 92, 88];
const curved = processGrades(grades, grade => grade + 5);
console.log("Curved grades:", curved);`,
      explanation: "Explore advanced function concepts including default parameters, object methods, and higher-order functions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        <LearningSection
          id="arithmetic"
          title="Arithmetic Operators"
          description="Master the building blocks of programming with JavaScript's arithmetic operators. Learn addition, subtraction, multiplication, division, and modulus operations."
          icon={Calculator}
          examples={arithmeticExamples}
          variant="arithmetic"
          gradientClass="gradient-arithmetic"
        />
        
        <LearningSection
          id="conditionals"
          title="Conditional Statements"
          description="Control the flow of your programs with if-else statements, switch cases, and ternary operators. Make your code smart and responsive."
          icon={GitBranch}
          examples={conditionalExamples}
          variant="conditional"
          gradientClass="gradient-conditional"
        />
        
        <LearningSection
          id="loops"
          title="Loops"
          description="Automate repetitive tasks with for loops, while loops, and iteration methods. Process arrays and collections efficiently."
          icon={RotateCcw}
          examples={loopsExamples}
          variant="loops"
          gradientClass="gradient-loops"
        />
        
        <LearningSection
          id="functions"
          title="Functions"
          description="Create reusable, modular code with JavaScript functions. Learn declarations, expressions, arrow functions, and advanced concepts."
          icon={Braces}
          examples={functionsExamples}
          variant="functions"
          gradientClass="gradient-functions"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
