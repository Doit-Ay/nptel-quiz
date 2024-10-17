const questions = [
    // Quiz 1
    {
        quiz: 1, questions: [
            { q: "What is the primary focus of Java programming?", options: ["Low-level optimizations", "Hardware-specific operations", "Platform independence", "Assembly language programming"], answer: "Platform independence" },
            { q: "Which of the following programming principles is a key aspect of Java?", options: ["Code obfuscation", "Platform dependence", "Object-oriented programming", "Global variables"], answer: "Object-oriented programming" },
            { q: "What is the last step in the Java programming process?", options: ["Java Program Execution", "Java Program Editing", "Java Program Compilation", "C/C++ versus Java"], answer: "Java Program Execution" },
            { q: "Which of the following is NOT a Java programming tool?", options: ["Eclipse", "NetBeans", "IntelliJ IDEA", "GCC"], answer: "GCC" },
            { q: "What does the term 'Write Once, Run Anywhere' imply in Java?", options: ["Code reusability", "Platform independence", "Cross-compilation", "Dynamic typing"], answer: "Platform independence" },
            { q: "In Java, what is used to store multiple values of the same type?", options: ["Structures", "Pointers", "Arrays", "Lists"], answer: "Arrays" },
            { q: "Which of the following is a valid identifier in Java?", options: ["123identifier", "_identifier", "#identifier", "identifier-123"], answer: "_identifier" },
            { q: "What is the primary purpose of the Java Virtual Machine (JVM)?", options: ["Code optimization", "Platform independence", "Memory management", "Hardware-specific operations"], answer: "Platform independence" },
            { q: "Which keyword is used to create a constant in Java?", options: ["const", "final", "static", "constant"], answer: "final" },
            { q: "What is the correct syntax to print a message in Java?", options: ["print()", "println()", "System.out.print()", "System.out.println()"], answer: "System.out.println()" }
        ]
    },
    // Quiz 2
    {
        quiz: 2, questions: [
            { q: "In Java programming, an object can take many forms. This feature is called ______.", options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"], answer: "Polymorphism" },
            { q: "Which of the following is a valid declaration of an object of class NPTEL?", options: ["NPTEL obj = new NPTEL();", "NPTEL obj = new NPTEL;", "obj = new NPTEL();", "new NPTEL obj;"], answer: "NPTEL obj = new NPTEL();" },
            { q: "A default constructor:", options: ["has no arguments", "has no return type", "has one argument but no return type", "has two arguments"], answer: "has no arguments" },
            { q: "A top-level class may have which one of the following access modifiers?", options: ["package", "private", "protected", "public"], answer: "public" },
            { q: "Integer in Java is a/an ______.", options: ["Adapter class", "Inner class", "Not a class", "Wrapper class"], answer: "Wrapper class" },
            { q: "What is true about the 'new' operator?", options: ["returns a pointer to a variable", "creates a variable called 'new'", "obtains memory for a new variable", "tells how much memory is available"], answer: "obtains memory for a new variable" },
            { q: "Which one is not supported by OOP?", options: ["Abstraction", "Polymorphism", "Encapsulation", "Global variables"], answer: "Global variables" },
            { q: "Which of the following modifiers can be used to disallow a method from being overridden?", options: ["final", "transient", "volatile", "static"], answer: "final" },
            { q: "Consider the following code: class Question { public static void main(String[] args) { System.out.print('Welcome to NPTEL'); } } Where is the error?", options: ["line 1", "line 2", "line 3", "line 4"], answer: "line 2" },
            { q: "Which of the following is TRUE about print() and println() methods?", options: ["print() prints in a single line", "println() prints and then appends a line break", "println() prints in a single line", "print() prints and then appends a line break"], answer: "println() prints and then appends a line break" }
        ]
    },
    {
        quiz: 3, questions: [
            { q: "Which of the following statement is true regarding the order of execution of constructors in an inheritance hierarchy?", options: ["Base class constructor will be called followed by the derived class constructor.", "Derived class constructor will be called followed by the base class constructor.", "Only Base class constructor will be called.", "Only derived class constructor will be called."], answer: "Base class constructor will be called followed by the derived class constructor." },
            { q: "The super() method is used to:", options: ["Call constructor of friend class", "Is a declared method", "Call constructor of the parent class", "Call constructor"], answer: "Call constructor of the parent class" },
            { q: "What will be the output of the following Java program?\nclass A { int i; void display() { System.out.println(i); } }\nclass B extends A { int j; void display() { System.out.println(j); } }\nclass inheritance_demo { public static void main(String args[]) { B obj = new B(); obj.i = 1; obj.j = 2; obj.display(); } }", options: ["0", "1", "2", "Compilation Error"], answer: "2" },
            { q: "In Java, is it possible to override a static method?", options: ["Yes, we can override a static method just like we do with instance methods.", "No, static methods cannot be overridden because they belong to the class, not the object.", "It depends on whether the static method is declared as final or not.", "It depends on the access modifier of the static method."], answer: "No, static methods cannot be overridden because they belong to the class, not the object." },
            { q: "What is the output of the following Java program?\npublic class Vehicle { public void move() { System.out.println(\"The vehicle moves\"); } }\npublic class Car extends Vehicle { public void move() { System.out.println(\"The car moves\"); } }\npublic class Main { public static void main(String[] args) { Vehicle vehicle = new Car(); vehicle.move(); } }", options: ["The vehicle moves", "The car moves", "The code does not compile", "None of the above"], answer: "The car moves" },
            { q: "What is the output of the below Java program with inheritance?\nclass Sweet { void price() { System.out.print(\"Sweet=$10 \"); } }\nclass Sugar extends Sweet { void price() { super.price(); System.out.print(\"Sugar=$20\"); } }\npublic class JavaInheritance1 { public static void main(String[] args) { Sugar su = new Sugar(); su.price(); } }", options: ["Sweet=$10 Sugar=$20", "Sweet=$10 Sugar=$10", "Sweet=$20 Sugar=$20", "Compiler error"], answer: "Sweet=$10 Sugar=$20" },
            { q: "What is the purpose of method hiding in Java inheritance?", options: ["To prevent a subclass from inheriting methods", "To override superclass methods with new implementations", "To expose private methods of the superclass", "To define methods with the same name in both the superclass and subclass"], answer: "To define methods with the same name in both the superclass and subclass" },
            { q: "What is the output of the following Java program?\nclass Parent { String name = \"parent\"; String message() { return \"from parent\"; } }\nclass Child extends Parent { String name = \"child\"; String message() { return \"from child\"; } }\npublic class Main { public static void main(String[] args) { Parent p = new Child(); System.out.println(p.name + \" \" + p.message()); } }", options: ["parent from parent", "child from child", "parent from child", "child from parent"], answer: "parent from child" },
            { q: "Can a class be marked as both “final” and “abstract” in Java?", options: ["Yes, but only if it has no methods.", "Yes, a class can be marked as both “final” and “abstract.”", "No, a class cannot be both “final” and “abstract.”", "Yes, but only if it is marked as “protected.”"], answer: "No, a class cannot be both “final” and “abstract.”" },
            { q: "In Java, is it possible to override a static method?", options: ["Yes, we can override a static method just like we do with instance methods.", "No, static methods cannot be overridden because they belong to the class, not the object.", "It depends on whether the static method is declared as final or not.", "It depends on the access modifier of the static method."], answer: "No, static methods cannot be overridden because they belong to the class, not the object." }
        ]
    },
    {
        quiz: 4, questions: [
            { q: "Which is the keyword used to specify the default access modifier in Java?", options: ["default", "DEFAULT", "package", "“There is no keyword”"], answer: "“There is no keyword”" },
            { q: "What is the output of the Java program with access modifiers?\npackage nptel1;\npublic class ProgrammingInJava { public String week = \"FOUR\"; }\n// ---------------\npackage nptel2;\nimport nptel1.*;\npublic class Course { public static void main(String[] args) { ProgrammingInJava java = new ProgrammingInJava(); System.out.println(java.week); } }", options: ["FOUR", "Runtime Error", "null", "Compiler Error"], answer: "Compiler Error" },
            { q: "What is the output of the below Java Code Snippet with access modifiers?\npackage nptel1;\npublic class ProgrammingInJava { int weeks = 12; // course duration }\n// ------------------\npackage nptel1;\npublic class Course { public static void main(String[] args) { ProgrammingInJava obj = new ProgrammingInJava(); System.out.println(\"Weeks = \" + obj.weeks); } }", options: ["Weeks = 0", "Weeks = 12", "No Error, blank output", "Compiler error"], answer: "Weeks = 12" },
            { q: "Which of the following is the correct representation of access modifiers in order of increasing visibility?", options: ["private < default < protected < public", "private < protected < default < public", "public < protected < default < private", "protected < default < private < public"], answer: "private < default < protected < public" },
            { q: "Which of the following package stores all the standard java classes?", options: ["java.util", "java.lang", "java.java", "java.packages"], answer: "java.lang" },
            { q: "Which of the following is/are true about packages in Java?\n1. Every class is part of some package.\n2. All classes in a file are part of the same package.\n3. If no package is specified, the classes in the file go into a special unnamed package.\n4. If no package is specified, a new package is created with the folder name of the class and the class is put in this package.", options: ["Only 1, 2 and 3", "Only 1, 2 and 4", "Only 4", "Only 1 and 3"], answer: "Only 1, 2 and 3" },
            { q: "What is the output of following Java program?\nimport static java.lang.System.*;\nclass ProgrammingInJava { public static void main(String args[]) { out.println(\"Welcome!\"); } }", options: ["Compiler Error", "Runtime Error", "Welcome!", "None of the above"], answer: "Welcome!" },
            { q: "Which of these access specifiers can be used for an interface?", options: ["Public", "Protected", "Private", "All of the mentioned"], answer: "Public" },
            { q: "Which of the following is the correct way of implementing an interface NPTEL by class Java?", options: ["class Java extends NPTEL {}", "class Java implements NPTEL {}", "class Java imports NPTEL {}", "none of the mentioned"], answer: "class Java implements NPTEL {}" },
            { q: "What will be the output of the following Java program?\ninterface calculate { void cal(int item); }\nclass display implements calculate { int x; public void cal(int item) { x = item * item; } }\nclass interfaces { public static void main(String args[]) { display arr = new display(); arr.x = 0; arr.cal(2); System.out.print(arr.x); } }", options: ["0", "2", "4", "Compiler Error"], answer: "4" }
        ]
    },
    {
        quiz: 5, questions: [
            { q: "Which of the following is an incorrect statement about interfaces?", options: ["Interfaces specify what a class must do but not how it does.", "Interfaces are specified public if they are to be accessed by any code in the program.", "All variables in interface are implicitly final and static.", "All variables are static and methods are public if interface is defined public."], answer: "All variables are static and methods are public if interface is defined public." },
            { q: "How do you access a static method of an interface?", options: ["By creating an object of the class that implements the interface.", "By creating an object of the interface.", "By calling the method directly using the class name.", "By using the interface name followed by the method name."], answer: "By using the interface name followed by the method name." },
            { q: "Which of the following statements is true about default methods in interfaces?", options: ["Default methods must be overridden in classes that implement the interface.", "A class can inherit default methods from multiple interfaces, even if they have the same name.", "Default methods cannot be overridden.", "Default methods are private by default."], answer: "A class can inherit default methods from multiple interfaces, even if they have the same name." },
            { q: "Which of the following is not allowed in an interface?", options: ["Static methods", "Abstract methods", "Private methods", "Protected methods"], answer: "Protected methods" },
            { q: "Which of the following are characteristics of an interface?", options: ["An interface can contain default methods", "An interface can contain static methods", "An interface can extend multiple interfaces", "All of the above"], answer: "All of the above" },
            { q: "What is the correct syntax for a lambda expression?", options: ["(x, y) -> { return x + y; }", "x -> return x;", "x => return x;", "(x) -> { return x; }"], answer: "(x, y) -> { return x + y; }" },
            { q: "Which of these is an advantage of using functional interfaces and lambda expressions in Java?", options: ["Improved readability and conciseness of code", "Improved security", "Increased complexity", "Slower performance"], answer: "Improved readability and conciseness of code" },
            { q: "Can a lambda expression have multiple parameters?", options: ["Yes", "No", "Only for public methods", "Only for static methods"], answer: "Yes" },
            { q: "How can we define a functional interface?", options: ["By declaring a single abstract method", "By declaring multiple methods", "By declaring at least one abstract method and one static method", "By declaring a constructor"], answer: "By declaring a single abstract method" },
            { q: "What will be the output of the following code?\nimport java.util.function.Function;\nclass LambdaDemo { public static void main(String[] args) { Function<Integer, Integer> square = x -> x * x; System.out.println(square.apply(5)); } }", options: ["5", "10", "25", "None of the above"], answer: "25" }
        ]
    },
    {
        quiz: 6, questions: [
            { q: "Which exception is thrown when dividing by zero?", options: ["NullPointerException", "NumberFormatException", "ArithmeticException", "ArrayIndexOutOfBoundsException"], answer: "ArithmeticException" },
            { q: "What is the purpose of the finally block in exception handling?", options: ["To handle the exception", "To execute code regardless of whether an exception is thrown or not", "To throw an exception", "To catch the exception"], answer: "To execute code regardless of whether an exception is thrown or not" },
            { q: "Which keyword is used to manually throw an exception?", options: ["throw", "throws", "catch", "final"], answer: "throw" },
            { q: "What is the parent class of all exceptions in Java?", options: ["IOException", "Throwable", "RuntimeException", "Exception"], answer: "Throwable" },
            { q: "Which of the following is not a type of exception in Java?", options: ["Checked exception", "Unchecked exception", "Runtime exception", "Compiler exception"], answer: "Compiler exception" },
            { q: "Which method is used to retrieve the description of an exception?", options: ["getMessage()", "printStackTrace()", "toString()", "getDescription()"], answer: "getMessage()" },
            { q: "What is the output of the following Java program?\nclass TestException { public static void main(String[] args) { try { int a = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Arithmetic Exception\"); } finally { System.out.println(\"Finally block\"); } } }", options: ["Arithmetic Exception", "Arithmetic Exception Finally block", "Finally block", "Compilation Error"], answer: "Arithmetic Exception Finally block" },
            { q: "Which block is mandatory in exception handling?", options: ["try block", "catch block", "finally block", "none"], answer: "try block" },
            { q: "What happens if the finally block throws an exception?", options: ["It will override any previously thrown exceptions", "It will be ignored", "It will be caught by the previous catch block", "None of the above"], answer: "It will override any previously thrown exceptions" },
            { q: "Which of the following exceptions is a checked exception?", options: ["IOException", "NullPointerException", "ArithmeticException", "IndexOutOfBoundsException"], answer: "IOException" }
        ]
    },
    {
        quiz: 7, questions: [
            { q: "Which of the following is not a feature of threads in Java?", options: ["Concurrency", "Parallelism", "Lightweight", "Distributed"], answer: "Distributed" },
            { q: "Which method is used to start a thread execution?", options: ["run()", "start()", "init()", "call()"], answer: "start()" },
            { q: "Which method is executed by the thread after calling start()?", options: ["run()", "init()", "start()", "main()"], answer: "run()" },
            { q: "What will be the output of the following Java code?\nclass MyThread extends Thread { public void run() { System.out.println(\"Thread is running\"); } }\npublic class TestThread { public static void main(String args[]) { MyThread t1 = new MyThread(); t1.start(); } }", options: ["Thread is running", "Runtime Error", "Compilation Error", "Thread is not running"], answer: "Thread is running" },
            { q: "Which method is used to pause the execution of a thread?", options: ["wait()", "pause()", "sleep()", "stop()"], answer: "sleep()" },
            { q: "Which of the following is true about the yield() method?", options: ["The yield() method stops the execution of the thread", "The yield() method pauses the current thread for a specified time", "The yield() method gives the thread scheduler a chance to execute another thread", "The yield() method stops the execution of the thread permanently"], answer: "The yield() method gives the thread scheduler a chance to execute another thread" },
            { q: "Which method is used to stop the execution of a thread permanently?", options: ["terminate()", "stop()", "exit()", "destroy()"], answer: "stop()" },
            { q: "What is the default priority of a thread?", options: ["0", "1", "5", "10"], answer: "5" },
            { q: "Which method waits for a thread to die?", options: ["join()", "stop()", "wait()", "exit()"], answer: "join()" },
            { q: "What is the state of a thread after it has been created and started?", options: ["New", "Runnable", "Running", "Terminated"], answer: "Runnable" }
        ]
    },
    {
        quiz: 8, questions: [
            { q: "What is a Java collection?", options: ["A group of related classes and interfaces", "A group of objects", "A framework for managing data", "A library for thread management"], answer: "A group of objects" },
            { q: "Which of the following is an ordered collection in Java?", options: ["Set", "List", "Map", "Queue"], answer: "List" },
            { q: "Which of the following classes implements the List interface?", options: ["HashSet", "LinkedList", "TreeMap", "PriorityQueue"], answer: "LinkedList" },
            { q: "Which of the following is the correct way to create a List in Java?", options: ["List list = new List();", "List list = new ArrayList();", "List list = new Set();", "List list = new LinkedHashSet();"], answer: "List list = new ArrayList();" },
            { q: "What is the purpose of the Set interface in Java?", options: ["To store ordered elements", "To store duplicate elements", "To store unordered and unique elements", "To store elements with null values"], answer: "To store unordered and unique elements" },
            { q: "Which of the following is a class that implements the Set interface?", options: ["ArrayList", "HashSet", "PriorityQueue", "TreeMap"], answer: "HashSet" },
            { q: "Which collection class allows you to retrieve elements in the order in which they were inserted?", options: ["HashSet", "LinkedHashSet", "TreeSet", "ArrayList"], answer: "LinkedHashSet" },
            { q: "Which interface provides the functionality to maintain key-value pairs?", options: ["List", "Set", "Queue", "Map"], answer: "Map" },
            { q: "Which method is used to remove all elements from a collection?", options: ["clear()", "delete()", "removeAll()", "remove()"], answer: "clear()" },
            { q: "Which method is used to retrieve the first element of a List?", options: ["getFirst()", "first()", "get(0)", "head()"], answer: "get(0)" }
        ]
    },
    {
        quiz: 9, questions: [
            { q: "What is the function of a Java Stream?", options: ["To store data", "To process sequences of elements", "To manage collections", "To handle input and output operations"], answer: "To process sequences of elements" },
            { q: "Which method is used to filter elements in a Java Stream?", options: ["filter()", "map()", "reduce()", "collect()"], answer: "filter()" },
            { q: "Which method in Stream can be used to transform the elements of a collection?", options: ["map()", "filter()", "collect()", "reduce()"], answer: "map()" },
            { q: "Which method in Stream can be used to aggregate the elements?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "reduce()" },
            { q: "Which of the following is NOT a type of Stream in Java?", options: ["Parallel Stream", "Sequential Stream", "Double Stream", "Lazy Stream"], answer: "Lazy Stream" },
            { q: "Which of the following methods can convert a Stream into a Collection?", options: ["collect()", "map()", "reduce()", "filter()"], answer: "collect()" },
            { q: "What is the main purpose of the forEach() method in Java Streams?", options: ["To modify elements", "To perform an action for each element", "To filter elements", "To aggregate elements"], answer: "To perform an action for each element" },
            { q: "Which method is used to count the number of elements in a Stream?", options: ["count()", "sum()", "size()", "length()"], answer: "count()" },
            { q: "Which of the following operations in Stream is known as a terminal operation?", options: ["map()", "filter()", "reduce()", "peek()"], answer: "reduce()" },
            { q: "Which of the following operations in Stream is known as an intermediate operation?", options: ["forEach()", "collect()", "filter()", "reduce()"], answer: "filter()" }
        ]
    },{
    quiz: 10, questions: [
        { q: "What is the parent class of all AWT components?", options: ["java.awt.Panel", "java.awt.Component", "java.awt.Container", "java.awt.Frame"], answer: "java.awt.Component" },
        { q: "Which event is generated when a user clicks a button in AWT?", options: ["MouseEvent", "ActionListener", "KeyEvent", "WindowEvent"], answer: "ActionListener" },
        { q: "Which architecture does the Swing framework use?", options: ["MVC", "MVP", "Layered architecture", "Master-Slave architecture"], answer: "MVC" },
        { q: "Which is the basic class for all SWING UI components?", options: ["Container", "JComponent", "Component", "Jbox"], answer: "JComponent" },
        { q: "Which event is generated when a window is resized in AWT?", options: ["WindowEvent", "ComponentEvent", "ResizeEvent", "ContainerEvent"], answer: "ComponentEvent" },
        { q: "Which method is used to remove a component from a container in AWT?", options: ["remove()", "deleteComponent()", "removeComponent()", "destroy()"], answer: "remove()" },
        { q: "What is true about adding two buttons to a JFrame without specifying layout?", options: ["Both buttons are added but only the second is visible", "Only the first button is added", "Neither button is added", "Code throws an error"], answer: "Both buttons are added but only the second is visible" },
        { q: "Which function is used to generate the application's top-level window?", options: ["JPanel", "JFrame", "JCombo", "JBox"], answer: "JFrame" },
        { q: "What is the primary purpose of a layout manager?", options: ["To manage memory allocation", "To arrange GUI components within a container", "To handle exceptions", "To control database connections"], answer: "To arrange GUI components within a container" },
        { q: "Which layout manager divides the container into five regions?", options: ["Border Layout", "Grid Layout", "Flow Layout", "Card Layout"], answer: "Border Layout" }
    ],
    
    quiz: 11, questions: [
        { q: "Which class provides methods to work with URLs?", options: ["URLConnection", "HtpURL", "NetURLg", "URL"], answer: "URL" },
        { q: "What is created by extending JFrame and adding a button in Swing?", options: ["A JFrame with a button", "A JPanel", "Compilation error", "Message dialog"], answer: "A JFrame with a button" },
        { q: "What happens when a button is clicked in a Swing application?", options: ["The program exits", "A dialog is shown", "The button label changes", "Nothing"], answer: "A dialog is shown" },
        { q: "Which Swing component is used to input a password?", options: ["JTextField", "JButton", "JTextArea", "JPasswordField"], answer: "JPasswordField" },
        { q: "Which layout divides the screen into North, South, East, West, and Center?", options: ["Grid Layout", "Border Layout", "Flow Layout", "Card Layout"], answer: "Border Layout" },
        { q: "What is the primary difference between AWT and Swing?", options: ["AWT is platform-dependent, Swing is not", "AWT is older", "Swing uses heavyweight components", "They are the same"], answer: "AWT is platform-dependent, Swing is not" },
        { q: "Which method in AWT is used to change the size of a component?", options: ["resize()", "setSize()", "updateSize()", "dimension()"], answer: "setSize()" },
        { q: "What is the role of an ActionListener in Swing?", options: ["Handling keyboard events", "Handling mouse clicks", "Handling button clicks", "Handling window resize"], answer: "Handling button clicks" },
        { q: "Which method is used to add a component to a JFrame?", options: ["add()", "put()", "place()", "insert()"], answer: "add()" },
        { q: "Which method in JFrame is used to close the application?", options: ["dispose()", "close()", "setDefaultCloseOperation()", "exit()"], answer: "setDefaultCloseOperation()" }
    ],
    
    quiz: 12, questions: [
        { q: "What is the output of a try-finally block when an exception occurs?", options: ["The program exits immediately", "The finally block is executed", "The try block is skipped", "The program crashes"], answer: "The finally block is executed" },
        { q: "What does the following program output: `System.out.print(1/0)`?", options: ["0", "Compile-time error", "Run-time error", "No output"], answer: "Run-time error" },
        { q: "Which method is used to handle exceptions in Java?", options: ["throw()", "catch()", "try()", "final()"], answer: "catch()" },
        { q: "What will be the output of the following code: `public static void main(String[] args) { System.out.println(10/0); }`?", options: ["0", "Infinity", "Exception", "No output"], answer: "Exception" },
        { q: "What happens if an exception is not caught in a try-catch block?", options: ["The finally block handles it", "The exception is ignored", "The exception is thrown to the caller method", "The program terminates immediately"], answer: "The exception is thrown to the caller method" },
        { q: "Which exception is thrown when an array is accessed with an invalid index?", options: ["IndexOutOfBoundsException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"], answer: "ArrayIndexOutOfBoundsException" },
        { q: "Which keyword is used to manually throw an exception?", options: ["throw", "throws", "try", "catch"], answer: "throw" },
        { q: "What is the purpose of the `finally` block in exception handling?", options: ["To handle an exception", "To clean up resources", "To throw an exception", "To log errors"], answer: "To clean up resources" },
        { q: "Which of the following is a checked exception?", options: ["NullPointerException", "IOException", "IndexOutOfBoundsException", "ArithmeticException"], answer: "IOException" },
        { q: "Which method is used to log an exception message?", options: ["getMessage()", "logMessage()", "printMessage()", "displayMessage()"], answer: "getMessage()" }
    ]
},
    // Continue with quizzes 6-12 using the same structure...
    
    // Quiz 3-12 would be added similarly...
    // You can continue to populate the next sets of questions
];

// Render quiz buttons
const quizListDiv = document.getElementById('quiz-list');
for (let i = 1; i <= 12; i++) {
    let button = document.createElement('button');
    button.innerText = `Quiz ${i}`;
    button.onclick = () => loadQuiz(i);
    quizListDiv.appendChild(button);
}

// Load selected quiz
function loadQuiz(quizNumber) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-number').innerText = quizNumber;
    document.getElementById('results').innerHTML = '';

    const quizData = questions.find(q => q.quiz === quizNumber).questions;
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';

    quizData.forEach((item, index) => {
        let questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${index + 1}. ${item.q}</p>`;
        item.options.forEach(option => {
            let optionElem = document.createElement('input');
            optionElem.type = 'radio';
            optionElem.name = `q${index}`;
            optionElem.value = option;
            questionDiv.appendChild(optionElem);
            questionDiv.innerHTML += `<label>${option}</label><br>`;
        });
        questionsDiv.appendChild(questionDiv);
    });
}

// Submit and check answers
document.getElementById('submit').onclick = () => {
    const quizNumber = document.getElementById('quiz-number').innerText;
    const quizData = questions.find(q => q.quiz === parseInt(quizNumber)).questions;
    let score = 0;

    quizData.forEach((item, index) => {
        const userAnswer = document.querySelector(`input[name=q${index}]:checked`);
        const questionDiv = document.querySelectorAll('.question')[index];
        let result = document.createElement('span');
        if (userAnswer && userAnswer.value === item.answer) {
            score++;
            result.innerHTML = `<span class="correct-answer">Correct</span>`;
        } else {
            result.innerHTML = `<span class="wrong-answer">Correct answer: ${item.answer}</span>`;
        }
        questionDiv.appendChild(result);
    });

    document.getElementById('results').innerHTML = `<p>Your score: ${score}/${quizData.length}</p>`;
};

// Back to Home button
document.getElementById('back-home').onclick = () => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
};
