    // Attach click event listeners to sidebar items
    document.querySelectorAll(".sidebar ul li").forEach(item => {
        item.addEventListener("click", () => {
            showContent(item.textContent.trim());
        });
    });

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // Check Local Storage for Theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️"; // Sun icon for light mode
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️"; // Switch to sun icon
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙"; // Switch to moon icon
        }
    });

    // Notes Data
    const notes = {
        "Arrays": `
             <h2>Arrays</h2>
            <p>An <strong>array</strong> is a collection of elements stored at contiguous memory locations.</p>
            <h3>Types of Arrays</h3>
            <ul>
                <li><strong>One-dimensional Array:</strong> A list of elements.</li>
                <li><strong>Multi-dimensional Array:</strong> Arrays within arrays (like a matrix).</li>
            </ul>
            <h3>Operations on Arrays</h3>
            <ul>
                <li><strong>Traversal:</strong> Accessing each element one by one.</li>
                <li><strong>Insertion:</strong> Adding an element at a specific index.</li>
                <li><strong>Deletion:</strong> Removing an element from the array.</li>
                <li><strong>Searching:</strong> Finding an element in the array.</li>
                <li><strong>Sorting:</strong> Arranging elements in a specific order.</li>
            </ul>
            <h3>Example (C Code)</h3>
            <pre>
<code>
#include &lt;stdio.h&gt;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};

    // Traversing the array
    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
</code>
            </pre>
        `,

        "Linked List": `
            <h2>Linked List</h2>
            <p>A linked list is a linear data structure where elements are stored in nodes, connected by pointers.</p>
            <h3>Types:</h3>
            <ul>
                <li>Singly Linked List</li>
                <li>Doubly Linked List</li>
                <li>Circular Linked List</li>
            </ul>
        `,

        "Stack": `
            <h2>Stack</h2>
            <p>A stack follows the <strong>Last In, First Out (LIFO)</strong> principle.</p>
            <h3>Operations:</h3>
            <ul>
                <li>Push (Insert element)</li>
                <li>Pop (Remove element)</li>
                <li>Peek (View top element)</li>
            </ul>
        `,

        "Queue": `
            <h2>Queue</h2>
            <p>A queue follows the <strong>First In, First Out (FIFO)</strong> principle.</p>
            <h3>Types:</h3>
            <ul>
                <li>Simple Queue</li>
                <li>Circular Queue</li>
                <li>Deque (Double-ended Queue)</li>
                <li>Priority Queue</li>
            </ul>
        `,

        "Sorting": `
            <h2>Sorting</h2>
            <p>Sorting is the process of arranging elements in ascending or descending order.</p>
            <h3>Sorting Algorithms:</h3>
            <ul>
                <li>Bubble Sort</li>
                <li>Selection Sort</li>
                <li>Insertion Sort</li>
                <li>Merge Sort</li>
                <li>Quick Sort</li>
            </ul>
        `,

        "Searching": `
            <h2>Searching</h2>
            <p>Searching is used to find an element in a data structure.</p>
            <h3>Types of Searching Algorithms:</h3>
            <ul>
                <li>Linear Search</li>
                <li>Binary Search</li>
                <li>Interpolation Search</li>
            </ul>
        `,

        "Graphs": `
            <h2>Graphs</h2>
            <p>A graph is a non-linear data structure consisting of vertices (nodes) and edges.</p>
            <h3>Graph Representation:</h3>
            <ul>
                <li>Adjacency Matrix</li>
                <li>Adjacency List</li>
            </ul>
            <h3>Graph Traversal:</h3>
            <ul>
                <li>Breadth-First Search (BFS)</li>
                <li>Depth-First Search (DFS)</li>
            </ul>
        `,

        "Divide & Conquer": `
            <h2>Divide & Conquer</h2>
            <p>Divide and Conquer is an algorithmic paradigm that breaks a problem into subproblems, solves them recursively, and combines the solutions.</p>
            <h3>Examples:</h3>
            <ul>
                <li>Merge Sort</li>
                <li>Quick Sort</li>
                <li>Binary Search</li>
            </ul>
        `,

        "Dynamic Programming": `
            <h2>Dynamic Programming</h2>
            <p>Dynamic Programming (DP) is a method for solving problems by breaking them into overlapping subproblems and storing solutions.</p>
            <h3>Types:</h3>
            <ul>
                <li>Top-Down (Memoization)</li>
                <li>Bottom-Up (Tabulation)</li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li>Fibonacci Series</li>
                <li>Knapsack Problem</li>
                <li>Longest Common Subsequence</li>
            </ul>
        `,

        "Greedy Approach": `
            <h2>Greedy Approach</h2>
            <p>The greedy approach makes the best choice at each step to achieve a global optimum.</p>
            <h3>Characteristics:</h3>
            <ul>
                <li>Locally optimal choices</li>
                <li>No consideration of future consequences</li>
                <li>Fast and simple to implement</li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li>Activity Selection Problem</li>
                <li>Huffman Coding</li>
                <li>Kruskal’s Algorithm</li>
                <li>Prim’s Algorithm</li>
                <li>Dijkstra’s Shortest Path Algorithm</li>
            </ul>
        `,

        "HTML": `
        <h2>HTML (HyperText Markup Language)</h2>
        <p>HTML is the standard language for creating webpages.</p>
        <h3>Basic Tags:</h3>
        <ul>
            <li><b>&lt;html&gt;:</b> Root element of an HTML page</li>
            <li><b>&lt;head&gt;:</b> Contains meta information</li>
            <li><b>&lt;body&gt;:</b> Defines the page content</li>
            <li><b>&lt;p&gt;:</b> Paragraph tag</li>
            <li><b>&lt;a&gt;:</b> Anchor tag (for links)</li>
            <li><b>&lt;img&gt;:</b> Image tag</li>
        </ul>
    `,

    "CSS": `
        <h2>CSS (Cascading Style Sheets)</h2>
        <p>CSS is used to style HTML documents.</p>
        <h3>Selectors:</h3>
        <ul>
            <li><b>Element Selector:</b> Applies styles to a specific tag</li>
            <li><b>Class Selector:</b> Uses <code>.</code> for targeting elements</li>
            <li><b>ID Selector:</b> Uses <code>#</code> for unique elements</li>
        </ul>
        <h3>Example:</h3>
        <pre><code>
body {
background-color: lightgray;
}
        </code></pre>
    `,

    "Javascript": `
        <h2>JavaScript</h2>
        <p>JavaScript is a scripting language for adding interactivity to web pages.</p>
        <h3>Features:</h3>
        <ul>
            <li>Dynamic content updates</li>
            <li>Event handling</li>
            <li>Asynchronous programming with promises</li>
        </ul>
    `,

    "Typescript": `
        <h2>TypeScript</h2>
        <p>TypeScript is a superset of JavaScript that adds static typing.</p>
        <h3>Example:</h3>
        <pre><code>
let name: string = "John";
let age: number = 25;
        </code></pre>
    `,

    "ReactJS": `
        <h2>ReactJS</h2>
        <p>React is a JavaScript library for building user interfaces.</p>
        <h3>Key Features:</h3>
        <ul>
            <li>Component-based architecture</li>
            <li>Virtual DOM for performance optimization</li>
            <li>State and Props</li>
        </ul>
    `,

    "NodeJS": `
        <h2>NodeJS</h2>
        <p>Node.js is a runtime environment for executing JavaScript outside the browser.</p>
        <h3>Features:</h3>
        <ul>
            <li>Non-blocking I/O</li>
            <li>Built-in modules for file handling</li>
        </ul>
    `,

    "NextJS": `
        <h2>NextJS</h2>
        <p>Next.js is a React framework for building server-rendered applications.</p>
        <h3>Features:</h3>
        <ul>
            <li>Server-side rendering (SSR)</li>
            <li>Static site generation (SSG)</li>
            <li>API routes</li>
        </ul>
    `,

    "Bootstrap": `
        <h2>Bootstrap</h2>
        <p>Bootstrap is a CSS framework for responsive design.</p>
        <h3>Grid System:</h3>
        <pre><code>
&lt;div class="container"&gt;
&lt;div class="row"&gt;
    &lt;div class="col-md-6"&gt;Column 1&lt;/div&gt;
    &lt;div class="col-md-6"&gt;Column 2&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
        </code></pre>
    `,

    "Tailwind CSS": `
        <h2>Tailwind CSS</h2>
        <p>Tailwind CSS is a utility-first CSS framework.</p>
        <h3>Example:</h3>
        <pre><code>
&lt;div class="bg-blue-500 text-white p-4"&gt;
Hello, Tailwind!
&lt;/div&gt;
        </code></pre>
    `,

    "Git": `
            <h2>Git</h2>
            <p>Git is a distributed version control system used for tracking changes in code.</p>
            <h3>Basic Commands:</h3>
            <ul>
                <li><code>git init</code> - Initialize a new repository</li>
                <li><code>git clone &lt;repo_url&gt;</code> - Clone an existing repository</li>
                <li><code>git add .</code> - Stage changes</li>
                <li><code>git commit -m "message"</code> - Commit changes</li>
                <li><code>git push origin main</code> - Push changes to a remote repository</li>
            </ul>
        `,

        "AWS": `
            <h2>AWS (Amazon Web Services)</h2>
            <p>AWS is a cloud computing platform that offers computing power, storage, and networking capabilities.</p>
            <h3>Popular AWS Services:</h3>
            <ul>
                <li>EC2 (Compute Power)</li>
                <li>S3 (Storage Service)</li>
                <li>Lambda (Serverless Functions)</li>
                <li>RDS (Relational Database Service)</li>
            </ul>
        `,

        "Docker": `
            <h2>Docker</h2>
            <p>Docker is a platform for developing, shipping, and running applications in containers.</p>
            <h3>Basic Commands:</h3>
            <ul>
                <li><code>docker build -t myapp .</code> - Build an image</li>
                <li><code>docker run -p 4000:4000 myapp</code> - Run a container</li>
                <li><code>docker ps</code> - List running containers</li>
                <li><code>docker stop container_id</code> - Stop a container</li>
            </ul>
        `,

        "Kubernetes": `
            <h2>Kubernetes</h2>
            <p>Kubernetes is an open-source container orchestration system for managing containerized applications.</p>
            <h3>Basic Commands:</h3>
            <ul>
                <li><code>kubectl get pods</code> - List running pods</li>
                <li><code>kubectl apply -f deployment.yaml</code> - Deploy an application</li>
                <li><code>kubectl delete pod pod_name</code> - Delete a pod</li>
            </ul>
        `,

        "Azure": `
            <h2>Azure</h2>
            <p>Microsoft Azure is a cloud computing service offering infrastructure, platform, and software services.</p>
            <h3>Common Services:</h3>
            <ul>
                <li>Azure Virtual Machines</li>
                <li>Azure Blob Storage</li>
                <li>Azure Functions</li>
                <li>Azure DevOps</li>
            </ul>
        `,

        "GCP": `
            <h2>Google Cloud Platform (GCP)</h2>
            <p>GCP provides a suite of cloud computing services for developers.</p>
            <h3>Popular Services:</h3>
            <ul>
                <li>Compute Engine</li>
                <li>Cloud Storage</li>
                <li>Cloud Functions</li>
                <li>BigQuery</li>
            </ul>
        `,

        "DevOps Roadmap": `
            <h2>DevOps Roadmap</h2>
            <p>DevOps is a combination of development and operations aimed at automating software delivery.</p>
            <h3>Key Areas:</h3>
            <ul>
                <li>Version Control (Git, GitHub)</li>
                <li>CI/CD (Jenkins, GitHub Actions)</li>
                <li>Configuration Management (Ansible, Terraform)</li>
                <li>Cloud Platforms (AWS, Azure, GCP)</li>
                <li>Monitoring & Logging (Prometheus, Grafana)</li>
            </ul>
        `,

        "SQL": `
            <h2>SQL (Structured Query Language)</h2>
            <p>SQL is a standard language for managing and querying relational databases.</p>
            <h3>Basic Commands:</h3>
            <ul>
                <li><code>SELECT * FROM table_name;</code> - Retrieve all records</li>
                <li><code>INSERT INTO table VALUES (...);</code> - Insert data</li>
                <li><code>UPDATE table SET column=value WHERE condition;</code> - Update data</li>
                <li><code>DELETE FROM table WHERE condition;</code> - Delete data</li>
            </ul>
        `,

        "MySQL": `
            <h2>MySQL</h2>
            <p>MySQL is an open-source relational database management system.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Supports ACID transactions</li>
                <li>Uses SQL for queries</li>
                <li>Replication and clustering</li>
            </ul>
        `,

        "PostgreSQL": `
            <h2>PostgreSQL</h2>
            <p>PostgreSQL is an advanced open-source relational database.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>ACID compliance</li>
                <li>JSON support</li>
                <li>Indexing techniques</li>
            </ul>
        `,

        "OQL": `
            <h2>OQL (Object Query Language)</h2>
            <p>OQL is used for querying object-oriented databases.</p>
            <h3>Example:</h3>
            <pre><code>
SELECT name FROM Employees WHERE age > 30;
            </code></pre>
        `,

        "PL/SQL": `
            <h2>PL/SQL (Procedural Language/SQL)</h2>
            <p>PL/SQL is an extension of SQL for procedural programming.</p>
            <h3>Example:</h3>
            <pre><code>
BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello, PL/SQL');
END;
            </code></pre>
        `,

        "MongoDB": `
            <h2>MongoDB</h2>
            <p>MongoDB is a NoSQL database that stores data in JSON-like documents.</p>
            <h3>Basic Commands:</h3>
            <ul>
                <li><code>db.collection.insertOne({name: "John"})</code> - Insert data</li>
                <li><code>db.collection.find()</code> - Retrieve data</li>
                <li><code>db.collection.updateOne()</code> - Update a record</li>
                <li><code>db.collection.deleteOne()</code> - Delete a record</li>
            </ul>
        `,

        "Artificial Intelligence": `
            <h2>Artificial Intelligence (AI)</h2>
            <p>AI is the simulation of human intelligence in machines.</p>
            <h3>Types of AI:</h3>
            <ul>
                <li>Narrow AI</li>
                <li>General AI</li>
                <li>Super AI</li>
            </ul>
        `,

        "Data Structure": `
            <h2>Data Structure</h2>
            <p>A data structure is a way of organizing and storing data efficiently.</p>
            <h3>Types:</h3>
            <ul>
                <li>Linear Structures (Arrays, Linked Lists, Stacks, Queues)</li>
                <li>Non-Linear Structures (Trees, Graphs, Heaps)</li>
            </ul>
        `,

        "Deep Learning": `
            <h2>Deep Learning</h2>
            <p>Deep learning is a subset of machine learning using neural networks.</p>
            <h3>Key Concepts:</h3>
            <ul>
                <li>Neural Networks</li>
                <li>Backpropagation</li>
                <li>Convolutional Neural Networks (CNNs)</li>
            </ul>
        `,

        "Linear Regression": `
            <h2>Linear Regression</h2>
            <p>Linear Regression is a statistical model for predicting numeric values.</p>
            <h3>Formula:</h3>
            <p>y = mx + b</p>
        `,

        "Data Visualization": `
            <h2>Data Visualization</h2>
            <p>Data visualization represents data graphically to uncover patterns.</p>
            <h3>Tools:</h3>
            <ul>
                <li>Matplotlib</li>
                <li>Tableau</li>
                <li>Power BI</li>
            </ul>
        `,

        "Data Mining": `
            <h2>Data Mining</h2>
            <p>Data mining is the process of finding patterns in large datasets.</p>
            <h3>Techniques:</h3>
            <ul>
                <li>Classification</li>
                <li>Clustering</li>
                <li>Association Rule Mining</li>
            </ul>
        `,

        "Neural Network": `
            <h2>Neural Network</h2>
            <p>A neural network is a series of algorithms that mimic the human brain.</p>
            <h3>Types:</h3>
            <ul>
                <li>Feedforward Neural Networks</li>
                <li>Recurrent Neural Networks (RNNs)</li>
                <li>Convolutional Neural Networks (CNNs)</li>
            </ul>
        `,

        "Big Data": `
            <h2>Big Data</h2>
            <p>Big Data refers to extremely large datasets that require special processing.</p>
            <h3>Characteristics (3Vs):</h3>
            <ul>
                <li>Volume</li>
                <li>Velocity</li>
                <li>Variety</li>
            </ul>
        `,

        "Natural Language Processing": `
            <h2>Natural Language Processing (NLP)</h2>
            <p>NLP is a branch of AI that helps machines understand human language.</p>
            <h3>Examples:</h3>
            <ul>
                <li>Speech Recognition</li>
                <li>Text Analysis</li>
                <li>Chatbots</li>
            </ul>
        `,

        "High Level Language": `
            <h2>High-Level Language</h2>
            <p>High-level languages are programming languages that are closer to human language.</p>
            <h3>Examples:</h3>
            <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
            </ul>
        `,

        "Low Level Design": `
            <h2>Low-Level Design (LLD)</h2>
            <p>LLD focuses on designing individual components and algorithms.</p>
            <h3>Concepts:</h3>
            <ul>
                <li>Class Diagrams</li>
                <li>Sequence Diagrams</li>
                <li>Data Flow Diagrams</li>
            </ul>
        `,

        "UML Design": `
            <h2>UML Design</h2>
            <p>Unified Modeling Language (UML) is used to visualize software architecture.</p>
            <h3>Types:</h3>
            <ul>
                <li>Use Case Diagram</li>
                <li>Class Diagram</li>
                <li>Activity Diagram</li>
            </ul>
        `,

        "Design Pattern": `
            <h2>Design Pattern</h2>
            <p>Design patterns are reusable solutions to common software design problems.</p>
            <h3>Types:</h3>
            <ul>
                <li>Creational Patterns (Singleton, Factory)</li>
                <li>Structural Patterns (Adapter, Decorator)</li>
                <li>Behavioral Patterns (Observer, Strategy)</li>
            </ul>
        `,

        "System Design": `
            <h2>System Design</h2>
            <p>System design focuses on architecture, scalability, and data management.</p>
            <h3>Concepts:</h3>
            <ul>
                <li>Load Balancing</li>
                <li>Microservices</li>
                <li>Database Sharding</li>
            </ul>
        `,

        "OOAD": `
            <h2>Object-Oriented Analysis and Design (OOAD)</h2>
            <p>OOAD is a methodology for designing software using object-oriented principles.</p>
            <h3>Principles:</h3>
            <ul>
                <li>Encapsulation</li>
                <li>Abstraction</li>
                <li>Polymorphism</li>
            </ul>
        `,

        "Bootcamp": `
            <h2>Bootcamp</h2>
            <p>A bootcamp is an intensive training program designed to teach coding and software development.</p>
            <h3>Popular Topics:</h3>
            <ul>
                <li>Full Stack Development</li>
                <li>Data Science</li>
                <li>Cloud Computing</li>
            </ul>
        `,

        "Memory Management": `
            <h2>Memory Management</h2>
            <p>Memory management is the process of managing computer memory allocation and deallocation.</p>
            <h3>Key Concepts:</h3>
            <ul>
                <li>Virtual Memory</li>
                <li>Paging</li>
                <li>Segmentation</li>
                <li>Heap and Stack Memory</li>
            </ul>
        `,

        "Real-Time OS": `
            <h2>Real-Time OS</h2>
            <p>RTOS is an operating system that processes tasks within a strict deadline.</p>
            <h3>Types:</h3>
            <ul>
                <li>Hard RTOS (Strict timing requirements)</li>
                <li>Soft RTOS (Less critical timing)</li>
            </ul>
        `,

        "File System": `
            <h2>File System</h2>
            <p>A file system organizes and manages how data is stored and retrieved on storage devices.</p>
            <h3>Types:</h3>
            <ul>
                <li>NTFS (Windows)</li>
                <li>EXT4 (Linux)</li>
                <li>FAT32 (Older systems)</li>
            </ul>
        `,

        "File Management": `
            <h2>File Management</h2>
            <p>File management involves creating, storing, retrieving, and modifying files on a system.</p>
        `,

        "Networking": `
            <h2>Networking</h2>
            <p>Networking is the practice of connecting computers to share resources.</p>
            <h3>Types:</h3>
            <ul>
                <li>LAN (Local Area Network)</li>
                <li>WAN (Wide Area Network)</li>
                <li>VPN (Virtual Private Network)</li>
            </ul>
        `,

        "Processes": `
            <h2>Processes</h2>
            <p>A process is a program in execution.</p>
            <h3>Process States:</h3>
            <ul>
                <li>New</li>
                <li>Ready</li>
                <li>Running</li>
                <li>Waiting</li>
                <li>Terminated</li>
            </ul>
        `,

        "Types of OS": `
            <h2>Types of Operating Systems</h2>
            <p>Operating systems manage hardware and software resources.</p>
            <h3>Examples:</h3>
            <ul>
                <li>Batch OS</li>
                <li>Multiprocessing OS</li>
                <li>Distributed OS</li>
            </ul>
        `,

        "CPU Scheduling": `
            <h2>CPU Scheduling</h2>
            <p>CPU scheduling is the process of selecting which process runs on the CPU.</p>
            <h3>Algorithms:</h3>
            <ul>
                <li>FCFS (First Come First Serve)</li>
                <li>SJF (Shortest Job First)</li>
                <li>Round Robin</li>
            </ul>
        `,

        "Embedded System": `
            <h2>Embedded System</h2>
            <p>An embedded system is a computer system dedicated to specific tasks.</p>
            <h3>Examples:</h3>
            <ul>
                <li>Smartphones</li>
                <li>IoT Devices</li>
                <li>Automotive Systems</li>
            </ul>
        `,

        "Python": `
            <h2>Python</h2>
            <p>Python is a high-level, interpreted programming language.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Simple Syntax</li>
                <li>Dynamic Typing</li>
                <li>Large Community Support</li>
            </ul>
        `,

        "Java": `
            <h2>Java</h2>
            <p>Java is an object-oriented programming language used for building cross-platform applications.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Platform Independence</li>
                <li>Automatic Garbage Collection</li>
            </ul>
        `,

        "C": `
            <h2>C Programming</h2>
            <p>C is a general-purpose programming language used for system programming.</p>
            <h3>Key Concepts:</h3>
            <ul>
                <li>Pointers</li>
                <li>Memory Management</li>
                <li>Functions</li>
            </ul>
        `,

        "C++": `
            <h2>C++</h2>
            <p>C++ is an extension of C with object-oriented features.</p>
            <h3>Concepts:</h3>
            <ul>
                <li>Classes and Objects</li>
                <li>Polymorphism</li>
                <li>Inheritance</li>
            </ul>
        `,

        "PHP": `
            <h2>PHP</h2>
            <p>PHP is a server-side scripting language for web development.</p>
        `,

        "GoLang": `
            <h2>GoLang</h2>
            <p>Go is a statically typed language developed by Google for high-performance applications.</p>
            <h3>Features:</h3>
            <ul>
                <li>Concurrency Support</li>
                <li>Garbage Collection</li>
            </ul>
        `,

        "SQL": `
            <h2>SQL</h2>
            <p>SQL is used for managing and querying relational databases.</p>
            <h3>Common Queries:</h3>
            <ul>
                <li><code>SELECT * FROM table_name;</code></li>
                <li><code>INSERT INTO table VALUES (...);</code></li>
                <li><code>UPDATE table SET column=value WHERE condition;</code></li>
            </ul>
        `,

        "R Language": `
            <h2>R Language</h2>
            <p>R is a programming language for statistical computing and graphics.</p>
            <h3>Uses:</h3>
            <ul>
                <li>Data Analysis</li>
                <li>Machine Learning</li>
            </ul>
        `,

        "Android Tutorial": `
            <h2>Android Development</h2>
            <p>Android is a mobile operating system developed by Google.</p>
            <h3>Development Tools:</h3>
            <ul>
                <li>Android Studio</li>
                <li>Kotlin and Java</li>
                <li>XML for UI Design</li>
            </ul>
        `,

        "Company-Wise": `
            <h2>Company-Wise Recruitment Process</h2>
            <p>Each company has a different selection process for hiring candidates.</p>
            <h3>Common Rounds:</h3>
            <ul>
                <li>Online Aptitude Test</li>
                <li>Technical Interview</li>
                <li>HR Interview</li>
                <li>Group Discussion (Some companies)</li>
            </ul>
            <h3>Preparation Tips:</h3>
            <ul>
                <li>Check past interview experiences</li>
                <li>Practice coding problems from company archives</li>
                <li>Prepare for behavioral questions</li>
            </ul>
        `,

        "Recuritment Process": `
             <h2>Recruitment Process</h2>
            <p>The recruitment process is the series of steps a company follows to hire candidates.</p>
            <h3>Common Stages:</h3>
            <ul>
                 <li><b>Job Posting:</b> Companies post job descriptions on job portals or career pages.</li>
                 <li><b>Resume Screening:</b> HR shortlists candidates based on resumes and eligibility criteria.</li>
                 <li><b>Aptitude Test:</b> Many companies conduct online assessments to test problem-solving skills.</li>
                 <li><b>Technical Interview:</b> Candidates solve coding problems and discuss their technical skills.</li>
                 <li><b>HR Interview:</b> Focuses on behavioral questions, salary negotiation, and company culture fit.</li>
                 <li><b>Offer & Onboarding:</b> Selected candidates receive job offers and complete onboarding formalities.</li>
             </ul>
        `,

        "Resume": `
            <h2>Resume Preparation</h2>
            <p>Your resume is the first impression you make on recruiters.</p>
            <h3>Key Sections:</h3>
            <ul>
                <li>Personal Details</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Internships</li>
                <li>Certifications</li>
            </ul>
            <h3>Tips:</h3>
            <ul>
                <li>Keep it concise (1-2 pages max)</li>
                <li>Highlight your achievements</li>
                <li>Use action words like "Developed," "Implemented," "Designed"</li>
            </ul>
        `,

        "Aptitude Preparation": `
            <h2>Aptitude Preparation</h2>
            <p>Aptitude tests evaluate problem-solving and logical thinking abilities.</p>
            <h3>Important Topics:</h3>
            <ul>
                <li>Quantitative Aptitude (Percentages, Ratios, Algebra)</li>
                <li>Logical Reasoning (Puzzles, Coding-Decoding)</li>
                <li>Verbal Ability (Reading Comprehension, Sentence Correction)</li>
            </ul>
            <h3>Preparation Resources:</h3>
            <ul>
                <li>RS Aggarwal's Aptitude Book</li>
                <li>Indiabix.com</li>
                <li>Online Mock Tests</li>
            </ul>
        `,

        "Puzzles": `
            <h2>Puzzles</h2>
            <p>Puzzles are often asked in interviews to test logical thinking.</p>
            <h3>Common Puzzle Types:</h3>
            <ul>
                <li>River Crossing Problems</li>
                <li>Chessboard Puzzles</li>
                <li>Mathematical Puzzles</li>
                <li>Logical Deduction</li>
            </ul>
            <h3>Examples:</h3>
            <p><b>Problem:</b> A farmer has a fox, a chicken, and a bag of grain. He needs to cross a river but can only take one item at a time. How does he do it?</p>
            <p><b>Solution:</b> Take the chicken first, come back alone, take the fox, return with the chicken, take the grain, and finally bring the chicken.</p>
        `,

        "College Preparation": `
            <h2>College Preparation</h2>
            <p>Getting ready for college placements and academic success.</p>
            <h3>Key Focus Areas:</h3>
            <ul>
                <li>Building Projects</li>
                <li>Competitive Coding</li>
                <li>Internship Experience</li>
                <li>Communication Skills</li>
            </ul>
            <h3>Resources:</h3>
            <ul>
                <li>Leetcode, CodeChef, GeeksforGeeks</li>
                <li>Soft Skills Courses</li>
                <li>Open Source Contributions</li>
            </ul>
        `,

        "Placement Preparation": `
            <h2>Placement Preparation</h2>
            <p>Steps to prepare for campus placements.</p>
            <h3>Strategy:</h3>
            <ul>
                <li>Master DSA (Arrays, Linked Lists, DP, Graphs)</li>
                <li>Practice Mock Interviews</li>
                <li>Build a Strong Resume</li>
                <li>Prepare for System Design (For SDE Roles)</li>
            </ul>
            <h3>Resources:</h3>
            <ul>
                <li>Striver’s SDE Sheet</li>
                <li>Cracking the Coding Interview</li>
                <li>Mock Interviews on Pramp</li>
            </ul>
        `
    };

    // Function to Show Content
    window.showContent = function(topic) {
        const displayContent = document.getElementById("display-content");
        if (notes[topic]) {
            displayContent.innerHTML = notes[topic];
        } else {
            displayContent.innerHTML = "<h2>Topic not found</h2>";
        }
    };
});
