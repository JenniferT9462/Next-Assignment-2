# Building a Counter in React

## Overview

The purpose of this assignment is to deepen your understanding of state management in React using the useState hook. You will build two components: a counter that can increase, decrease, and reset its value, and a form that captures user input in a controlled manner. This exercise will reinforce the concepts of stateful logic in functional components and demonstrate the power of React's reactivity system.

# Set Up

- In your system terminal make sure you are in the directory that you want your Next app to go. To see where you are you can run:

        pwd

- If you need to navigate somewhere else, to see the files in your current directory, you can run:

        ls

- You can move into the correct directory by running:

        cd <desired directory>

- Create a New Next.js Application
    * Run - NOTE: if we run w/out a project name, the terminal will ask us to enter a project name. 

            npx create-next-app@latest
    
- You will then be asked a series of questions...

    ![terminal questions](<terminal.png>)

- Navigate to your new project by running:

        cd next-assignment-3

- Then you can open a VScode window by running: 

        code .

- Create a new repository on Github. NOTE: don't select add README or .gitignore
    * Quick set up will pop up...Run the code that says Add repo to existing repo on the command-line. 

- Add your Next app to your new repository by running this in bash terminal:

        git remote add origin https://github.com/yourusername/your-repository.git
        git branch -M main
        git push -u origin main
- In your editor's terminal(bash) run:

        npm install

    * To install dependencies
    
- To start development server run:

        npm run dev

- This will start the development server, and your Next.js app will be accessible at http://localhost:3000 in your web browser.

# Functionality

* You will need to import useState to be able to declare and update state variables within the components: 

        import { useState } from 'react';

* Inside the functional component, call useState with a initial value: 

        const [count, setCount] = useState(0);

    - The 'count' is the variable that holds the current state value.
    - The 'setCount' is a function used to update the state variable. 

* To update the 'count' you call 'setCount':

        setCount(newValue);

* Example of the useState hook being used to make a counter app:

        export default function MyCounterApp() {
            const [count, setCount] = useState(0);
            function increment() {
                setCount(count + 1)
            };
            function decrement() {
                //Math.max to set the decrement with a max of 0
                setCount(Math.max(count - 1, 0)) 
            };

            return (
                <div>
                    <h1>My Counter App</h1>
                    <h2>Count: {count}</h2>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            );
        }
     
# Requirements:

* Counter page
    - Create a page for your counter. For example, src/pages/sheep/index.js
    - Feel free to choose something else to count.
    - Export your page with export default

* Display the Counter:
    - The counter starts at 0 and should be displayed on the screen.

* Increment Button:
    - The application should have an "Increment" button.
    - When this button is clicked, the counter value should increase by 1.

* Decrement Button:
    - The application should have a "Decrement" button.
    - When this button is clicked, the counter value should decrease by 1.

* Prevent Negative Values:
    - The counter should not go below 0. Ensure that when the user tries to decrement below 0, it stays at 0.

## Stretch Goals:

* Reset Button:
    - Add a "Reset" button that resets the counter to 0 when clicked.

* Custom Step Increment/Decrement:
    - Allow users to input a custom step size. For example, instead of always increasing or decreasing by 1, users can set the step size (e.g., 2, 5, etc.).

* Double Increment/Decrement:
    - Add buttons for "Double Increment" and "Double Decrement" to increase or decrease the counter by 2 in one click.

