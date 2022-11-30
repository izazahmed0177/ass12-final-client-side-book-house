import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gray-100 text-gray-100 m-4">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 m-3">
                <div className="flex items-center justify-between">
                    <span className="text-smtext-gray-400">Jun 12, 2022</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900">React</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">1. What are the different ways to manage a state in a React application ?</a>
                    <p className="mt-2">As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.
                        <br />
                        There are four main types of state you need to properly manage in your React apps:
                        <br />

                        1 Local state
                        <br />
                        2 Global state
                        <br />
                        3 Server state
                        <br />
                        4 URL state
                        <br />
                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        <br />
                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.
                        <br />
                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        <br />
                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </div>

            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 m-3">
                <div className="flex items-center justify-between">
                    <span className="text-smtext-gray-400">Sep 14, 2022</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900">Javascript</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">2. How does prototypical inheritance work ?</a>
                    <p className="mt-2">JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.
                        <br />
                        Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                        <br />
                        All JavaScript objects inherit properties and methods from a prototype:
                        <br />
                        Date objects inherit from Date.prototype.
                        <br />
                        Array objects inherit from Array.prototype.
                        <br />
                        Player objects inherit from Player.prototype.
                        The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.
                    </p>
                    <div>
                        <p>Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let’s take a look at the key downsides to look out for as you write a prototype-based program:

                            Inheritance cannot flow in circles as this will create an error. For example, if user linked premiumFamily as a prototype in the above program, an error would occur as this would create a loop.

                            Objects cannot inherit from multiple prototypes. As we saw above, they can inherit multiple object’s properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is within the same chain. For example, familyPremium could not have explicit links to both premiumUser and user.

                            Prototypical relationships can only be made to objects. This is because the __proto__ function works as a forwarder, directing the program where to find the value it is looking for. As the program either knows where to look or it doesn’t, the function can be only either null or an object. All other types will be discarded.</p>
                    </div>
                </div>

            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 m-3">
                <div className="flex items-center justify-between">
                    <span className="text-smtext-gray-400">Oct 18, 2022</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900">React</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">3. What is a unit test? Why should we write unit tests ?</a>
                    <p className="mt-2">Testing software is as important as developing it, since, testing helps find out whether the software meets the actual requirements or not. A thoroughly tested software product ensures dependability, security, and high performance, which leads to time-saving, customer satisfaction, and cost-effectiveness.

                        ReactJS is a popular JavaScript library that is used for building highly rich user interfaces. Its popularity can be gauged from the significant increase in the number of downloads over the years as seen below.
                        <br />
                        A few reasons that make React a popular framework among developers are:
                        <br />
                        Ease of Learning: React JS has a short learning curve as compared to other front-end libraries or frameworks, hence any developer with a basic knowledge of JavaScript can start learning and building apps using React JS in a short period of time.
                        Quick Rendering: React JS uses virtual DOM and algorithms like diffing, which makes the development process fast and efficient.
                        One-way data-binding: React JS follows one-way data binding, which means you get more control over the flow of the application.
                        High Performance: The best advantage of React JS is its performance. There are many features that make it possible:
                        React uses virtual DOM, which enables the re-rendering of nodes only when they are required to.
                        React JS also supports bundling and tree shaking, which minimizes the end user’s resource load.
                        This tutorial deep dives into performing unit testing of React Apps using JEST.
                        <br />
                        Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component.
                        <br />
                        “Unit testing is a great discipline, which can lead to 40% – 80% reductions in bug density.” – Eric Elliotte
                        <br />
                        Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages. Some of the core benefits of Unit Testing are:
                        <br />
                        Process Becomes Agile: Agile Testing process is the main advantage of unit testing. When you add more features to the software, it might affect the older designs and you might need to make changes to the old design and code later. This can be expensive and require extra effort. But if you do unit testing, the whole process becomes much faster and easier.
                        <br />
                        Quality of code: Unit testing significantly improves the quality of the code. It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.

                        <br />
                        Facilitates change: Refactoring the code or updating the system library becomes much easier when you test each component of the app individually.
                        <br />
                        Smooth Debugging: The debugging process is very simplified by doing unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.
                        <br />
                        Reduction in cost: When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let’s say during production, which can be really expensive.
                        <br />
                    </p>
                </div>

            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 m-3">
                <div className="flex items-center justify-between">
                    <span className="text-smtext-gray-400">Nov 22, 2022</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900">Framework</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">4. React vs. Angular vs. Vue ?</a>
                    <p className="mt-2">There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                        Each framework is component-based and allows the rapid creation of UI features.

                        However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.
                        <br /></p>
                    <div>
                        <h1 className='text-2xl'>React</h1>
                        <p>
                            React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.

                            ReactDOM.render(
                            <h1>Hello, world!</h1>,
                            document.getElementById('root')
                            );
                            React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.
                            <br />
                            React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.
                            <br />
                            Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.
                            <br />
                            React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
                            <br />
                            Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl'>Vue</h1>
                        <p>
                            The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                            <br />
                            Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.
                            <br />
                            Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.
                            <br />
                            Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.
                            <br />
                            SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.
                        </p>
                    </div>

                    <div>
                        <h1 className='text-2xl'>Angular</h1>
                        <p>
                            In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.
                            <br />
                            AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.
                            <br />
                            Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.
                            <br />
                            Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.
                            <br />
                            Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.
                            <br />
                            Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.
                            <br />
                            Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.

                        </p>
                    </div>



                </div>

            </div>



        </div>
    );
};

export default Blog;
