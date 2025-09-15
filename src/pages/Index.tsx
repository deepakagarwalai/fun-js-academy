import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import Footer from "@/components/Footer";
import { Calculator, GitBranch, RotateCcw, Braces } from "lucide-react";

const Index = () => {
  // Learning content data
  const arithmeticExamples = [
    {
      title: "Basic Arithmetic Operators",
      code: `// Arithmetic operators in JavaScript
let a = 10, b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7  
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b); // 1000

// Increment and Decrement
let x = 5;
x++; // Increment
console.log("After increment:", x);     // 6

let y = 5;
y--; // Decrement  
console.log("After decrement:", y);     // 4`,
      explanation: "Arithmetic operators perform basic mathematical operations. Addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++), and decrement (--)."
    },
    {
      title: "Operator Examples with Output",
      code: `// All arithmetic operators with examples
console.log("=== Arithmetic Operators ===");
console.log("5 + 3 =", 5 + 3);         // 8
console.log("5 - 3 =", 5 - 3);         // 2
console.log("5 * 3 =", 5 * 3);         // 15
console.log("10 / 2 =", 10 / 2);       // 5
console.log("10 % 3 =", 10 % 3);       // 1
console.log("2 ** 3 =", 2 ** 3);       // 8

// Practical example
let price = 25;
let quantity = 4;
let total = price * quantity;
console.log(\`Total cost: $\${total}\`);  // Total cost: $100`,
      explanation: "See arithmetic operators in action with real examples and their expected outputs. Great for understanding how each operator works in practice."
    }
  ];

  const conditionalExamples = [
    {
      title: "if, if-else, and if-else if Statements",
      code: `// (a) if statement
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

// (b) if...else statement  
let marks = 40;
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// (c) if...else if...else
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}`,
      explanation: "Conditional statements help us make decisions in code. Use if for single conditions, if-else for two options, and if-else if-else for multiple conditions."
    },
    {
      title: "Switch Statement",
      code: `// (d) switch statement
let day = 3;
switch(day) {
  case 1: 
    console.log("Monday"); 
    break;
  case 2: 
    console.log("Tuesday"); 
    break;
  case 3: 
    console.log("Wednesday"); 
    break;
  case 4: 
    console.log("Thursday"); 
    break;
  case 5: 
    console.log("Friday"); 
    break;
  default: 
    console.log("Invalid day");
}

// Another switch example
let grade = 'B';
switch(grade) {
  case 'A': console.log("Excellent!"); break;
  case 'B': console.log("Good job!"); break;
  case 'C': console.log("Average"); break;
  default: console.log("Keep trying!");
}`,
      explanation: "Switch statements are perfect when you have multiple possible values for a variable. They're cleaner than multiple if-else statements for many conditions."
    }
  ];

  const loopsExamples = [
    {
      title: "for Loop and while Loop",
      code: `// (a) for loop
console.log("=== For Loop ===");
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// (b) while loop
console.log("\\n=== While Loop ===");
let i = 1;
while (i <= 5) {
  console.log("Count: " + i);
  i++;
}

// Practical example - sum of numbers
let sum = 0;
for (let num = 1; num <= 10; num++) {
  sum += num;
}
console.log("Sum of 1 to 10:", sum); // 55`,
      explanation: "For loops are perfect when you know how many times to repeat. While loops are great when you repeat based on a condition. Both are essential for processing data."
    },
    {
      title: "do-while Loop and for-of Loop",
      code: `// (c) do...while loop
console.log("=== Do-While Loop ===");
let j = 1;
do {
  console.log("Value: " + j);
  j++;
} while (j <= 5);

// (d) for...of loop (used with arrays)
console.log("\\n=== For-Of Loop ===");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// More array examples
let numbers = [2, 4, 6, 8, 10];
for (let number of numbers) {
  console.log("Double of", number, "is", number * 2);
}`,
      explanation: "Do-while loops run at least once before checking the condition. For-of loops are perfect for iterating through arrays and other collections."
    }
  ];

  const functionsExamples = [
    {
      title: "Simple and Parameterized Functions",
      code: `// (a) Simple Function
function greet() {
  console.log("Hello Students!");
}
greet(); // Hello Students!

// (b) Function with Parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// More examples with parameters
function introduce(name, course) {
  return \`Hi, I'm \${name} and I study \${course}\`;
}

function calculateArea(length, width) {
  return length * width;
}

console.log(introduce("Alice", "BCA"));
console.log("Area:", calculateArea(5, 8));`,
      explanation: "Functions are reusable blocks of code. Simple functions perform tasks, while parameterized functions accept inputs to work with different data."
    },
    {
      title: "Anonymous and Arrow Functions",
      code: `// (c) Anonymous Function
let multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 6)); // 24

// (d) Arrow Function
const square = (n) => n * n;
console.log(square(5)); // 25

// More arrow function examples
const greetStudent = (name) => \`Welcome \${name}!\`;
const isEven = (num) => num % 2 === 0;
const getGrade = (marks) => {
  if (marks >= 90) return 'A';
  if (marks >= 75) return 'B';
  return 'C';
};

console.log(greetStudent("Bob"));
console.log("Is 8 even?", isEven(8));
console.log("Grade for 82:", getGrade(82));`,
      explanation: "Anonymous functions are stored in variables. Arrow functions provide a shorter syntax and are perfect for simple operations and callbacks."
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
