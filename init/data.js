const sampleData = [
    {
      title: "Introduction to JavaScript",
      author: "Zohaib Azmi",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: `JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a versatile language used for both client-side and server-side development. JavaScript is primarily known for its role in web development, where it is used to create interactive and dynamic user interfaces.
  
      In recent years, JavaScript has seen significant growth in popularity due to the rise of frameworks and libraries such as React, Angular, and Vue.js. These frameworks have made it easier for developers to build complex web applications efficiently.
  
      As a programmer, understanding JavaScript is essential for building modern web applications. With its wide range of features and flexibility, JavaScript continues to be a cornerstone of web development.`,
    },
    {
      title: "Python Basics",
      author: "Zohaib Azmi",
      content: `Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used for various purposes such as web development, data analysis, artificial intelligence, and scientific computing.
  
      One of the key features of Python is its extensive standard library, which provides a wide range of modules and packages for performing common tasks. This allows developers to write concise and maintainable code without having to reinvent the wheel`,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Node.js Fundamentals",
      author: "Zohaib Azmi",
      content: `Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side and networking applications. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient.
  
      One of the key features of Node.js is its package ecosystem, npm, which is the largest ecosystem of open source libraries in the world. With npm, developers can easily install and manage dependencies for their Node.js projects.
  
      Node.js is commonly used for building web servers, APIs, and real-time applications. Its asynchronous nature makes it suitable for handling high concurrency and I/O-bound operations. As a result, Node.js has become increasingly popular for building scalable and performant server-side applications.`,
      image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "React.js Essentials",
      author: "Zohaib Azmi",
      content: `React.js is a JavaScript library for building user interfaces. Developed by Facebook, React.js allows developers to create reusable UI components and build complex UIs with ease.
  
      One of the key concepts in React.js is the use of a virtual DOM, which is a lightweight representation of the actual DOM. By using a virtual DOM, React.js can efficiently update the UI without re-rendering the entire DOM tree.
  
      React.js also promotes a component-based architecture, where UIs are broken down into small, reusable components. This makes it easier to manage complex UIs and encourages code reusability.
  
      With its declarative syntax and efficient rendering mechanism, React.js has become one of the most popular choices for building modern web applications.`,
      image: "https://images.unsplash.com/photo-1610986602726-19f650133f7a?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "JavaScript Promises and Async/Await",
      author: "Zohaib Azmi",
      content: `JavaScript Promises and Async/Await are modern approaches to asynchronous programming in JavaScript. They provide a more readable and maintainable way to work with asynchronous code compared to traditional callback-based methods.
  
      Promises were introduced in ECMAScript 6 (ES6) and provide a way to represent asynchronous operations. A Promise can be in one of three states: pending, fulfilled, or rejected. This allows developers to chain asynchronous operations together and handle errors more effectively.
  
      Async/Await, introduced in ECMAScript 8 (ES8), builds on top of Promises and provides a syntactic sugar for writing asynchronous code. Async functions allow developers to write asynchronous code in a synchronous-like manner, making it easier to understand and reason about.
  
      Together, JavaScript Promises and Async/Await provide powerful tools for handling asynchronous code in JavaScript applications, making them more maintainable and easier to debug.`,
      image: "https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "MongoDB Basics",
      author: "Zohaib Azmi",
      content: `MongoDB is a popular NoSQL database that is known for its flexibility and scalability. It stores data in flexible, JSON-like documents, making it easy to work with data in a variety of formats.
  
      One of the key features of MongoDB is its scalability. It can handle large volumes of data and can be easily scaled horizontally by adding more servers to a MongoDB cluster.
  
      MongoDB is commonly used for building web applications, mobile apps, and real-time analytics platforms. Its flexible data model and powerful querying capabilities make it suitable for a wide range of use cases.
  
      With its ease of use and scalability, MongoDB has become one of the leading choices for developers building modern applications.`,
      image: "https://plus.unsplash.com/premium_photo-1661386257356-c17257862be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Express.js Basics",
      author: "Zohaib Azmi",
      content: `Express.js is a minimalist web framework for Node.js, designed to make building web applications and APIs fast and easy. It provides a robust set of features for building single-page, multi-page, and hybrid web applications.
  
      One of the key features of Express.js is its middleware system, which allows developers to easily add functionality to their applications. Middleware functions can be used for tasks such as parsing request bodies, handling authentication, and logging requests.
  
      Express.js also provides a powerful routing system, which allows developers to define routes for handling different HTTP requests. This makes it easy to create RESTful APIs and build scalable web applications.
  
      With its simplicity and flexibility, Express.js has become one of the most popular choices for building web applications and APIs with Node.js.`,
      image: "https://images.unsplash.com/photo-1543013309-0d1f4edeb868?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Diving into Vue.js",
      author: "Zohaib Azmi",
      content: `Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, meaning that developers can start small and scale up as needed.
  
      One of the key features of Vue.js is its reactivity system, which allows developers to build dynamic and interactive user interfaces with ease. Vue.js automatically updates the DOM when the underlying data changes, making it easy to keep the UI in sync with the application state.
  
      Vue.js also provides a flexible and intuitive component system, which encourages code reusability and maintainability. Components can be easily composed to build complex UIs, making it easy to manage large-scale applications.
  
      With its simplicity and flexibility, Vue.js has gained widespread adoption among developers building modern web applications.`,
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Bootstrap Essentials",
      author: "Zohaib Azmi",
      content: `Bootstrap is a popular front-end framework for building responsive and mobile-first web applications. Developed by Twitter, Bootstrap provides a set of CSS and JavaScript components for building modern and attractive user interfaces.
  
      One of the key features of Bootstrap is its grid system, which allows developers to create responsive layouts with ease. The grid system is based on a 12-column layout, making it easy to create complex grid-based designs.
  
      Bootstrap also provides a variety of pre-styled components, such as buttons, forms, and navigation bars, which can be easily customized to match the design of your application. This makes it easy to create consistent and visually appealing user interfaces.
  
      With its extensive documentation and large community, Bootstrap has become one of the most popular choices for front-end development.`,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Data Structures in Python",
        author: "Zohaib Azmi",
        content: `Data structures are a crucial part of programming, and Python provides a rich set of built-in data structures to work with. Some of the commonly used data structures in Python include lists, tuples, dictionaries, sets, and arrays.
    
        Lists are ordered collections of items that can be modified. They allow for easy manipulation of data and are commonly used for tasks such as storing multiple values in a single variable.
    
        Tuples are similar to lists but are immutable, meaning that their elements cannot be changed after they are created. They are often used to represent fixed collections of items, such as coordinates or database records.
    
        Dictionaries are unordered collections of key-value pairs. They provide a way to store and retrieve data using a unique key, making them ideal for tasks such as building lookup tables or mapping relationships between items.
    
        Sets are unordered collections of unique elements. They provide a way to perform set operations such as union, intersection, and difference, making them useful for tasks such as removing duplicates from a list or testing for membership.
    
        Arrays are collections of items that are stored in contiguous memory locations. They are commonly used for tasks such as numerical computing or working with large datasets.
    
        Understanding data structures is essential for writing efficient and maintainable code in Python, and mastering them can greatly improve your programming skills.`,
        image: "https://plus.unsplash.com/premium_photo-1673688152102-b24caa6e8725?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "RESTful API Design",
        author: "Zohaib Azmi",
        content: `RESTful APIs are a popular architectural style for building web services that are scalable, flexible, and easy to maintain. REST stands for Representational State Transfer, and it is based on a set of principles for designing networked applications.
    
        One of the key principles of RESTful API design is the use of resources, which are identified by unique URIs (Uniform Resource Identifiers). Resources represent entities in the system, such as users, products, or orders, and they can be manipulated using standard HTTP methods such as GET, POST, PUT, and DELETE.
    
        Another important principle of RESTful API design is statelessness, which means that each request from a client to the server must contain all the information necessary to understand and process the request. This allows for better scalability and reliability, as the server does not need to maintain any client state between requests.
    
        RESTful APIs also promote a uniform interface, which simplifies the client-server communication and makes it easier to evolve the API over time. This includes using standard HTTP status codes to indicate the outcome of a request and using hypermedia links to navigate between resources.
    
        By following these principles, developers can create RESTful APIs that are easy to understand, maintain, and extend, making them ideal for building modern web applications and microservices architectures.`,
        image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "React Native Basics",
        author: "Zohaib Azmi",
        content: `React Native is a framework for building native mobile applications using JavaScript and React. It allows developers to write mobile apps using the same codebase for multiple platforms, such as iOS and Android, while still producing a native user experience.
    
        One of the key features of React Native is its component-based architecture, which allows developers to build reusable UI components that can be shared across different platforms. This makes it easy to maintain a consistent look and feel across your mobile apps, while still taking advantage of platform-specific features and performance optimizations.
    
        React Native also provides a hot-reloading feature, which allows developers to see their changes instantly reflected in the running app without having to rebuild it from scratch. This makes the development process faster and more efficient, allowing developers to iterate quickly and experiment with different ideas.
    
        With its simplicity and flexibility, React Native has become a popular choice for building mobile applications, particularly for startups and small businesses looking to create high-quality apps on a limited budget.`,
        image: "https://images.unsplash.com/photo-1685558593626-686907d7ee4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Asynchronous JavaScript in Depth",
        author: "Zohaib Azmi",
        content: `Asynchronous programming is a key aspect of JavaScript, and it allows developers to write non-blocking, event-driven code that can handle multiple tasks simultaneously. JavaScript provides several mechanisms for working with asynchronous code, including callbacks, promises, and async/await.
    
        Callbacks are the most basic way to handle asynchronous code in JavaScript. They allow you to pass a function as an argument to another function, which will be called when the asynchronous operation completes.
    
        Promises were introduced in ECMAScript 6 (ES6) as a way to represent asynchronous operations. They provide a cleaner and more flexible alternative to callbacks, allowing you to chain multiple asynchronous operations together and handle errors more effectively.
    
        Async/await is a syntactic sugar built on top of promises, which allows you to write asynchronous code in a synchronous-like manner. Async functions return a promise, and you can use the await keyword inside them to pause execution until a promise is resolved or rejected.
    
        Understanding how asynchronous code works in JavaScript is essential for building modern web applications, and mastering these techniques can greatly improve the performance and maintainability of your codebase.`,
        image: "https://images.unsplash.com/photo-1516116412344-6663387e8590?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

module.exports = { data: sampleData };