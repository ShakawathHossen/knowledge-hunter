import React from 'react';

const Question = () => {
    return (

        <div className='bg-white py-6 px-4 my-4 font-semibold rounded text-xl'>
            <div className='pb-5'>
                <h1 className='py-5 text-purple-500'>Different Between Props and State</h1>
                <p className='text-justify text-md font-light'>Props (short for properties) are used to transfer data from one component to another. Props are read-only, meaning they cannot be changed within the child component. The data passed through props is owned and controlled by the parent component, and any changes to the data must be made in the parent component. Props are passed as parameters to components and accessed within the component via the this.props object. <br />
                    State, on the other hand, is used to manage data within a component itself. State is mutable, which means that it can be modified within the component. When the state changes, React will re-render the component and its children to reflect the updated state. State is defined and initialized in the constructor of the component, and is accessed within the component using the this.state object.
                </p>
            </div>
            <div className='py-5'>
                <h1 className='py-5 text-purple-500'>Work of UseState in react</h1>
                <p className='text-justify text-md font-light'>useState is a hook provided by React that allows functional components to have state. Prior to the introduction of hooks, state could only be managed in class components using the setState method.

                    The useState hook takes an initial state value as a parameter and returns an array containing two elements: the current state value and a function that can be used to update the state value. The function returned by useState can be called with a new value to update the state. When the state is updated, React will re-render the component to reflect the updated state.
                </p>
            </div >
            <div className='py-5'>
                <h1 className='py-5 text-purple-500'>The usage of UseEffect in react besides of data load</h1>
                <p className='text-justify text-md font-light'>
                    Here are some other use cases for useEffect:
                    1.Updating the title of the page: You can use useEffect to update the title of the page based on the state of the component. <br />
                    2. Subscribing to an event: You can use useEffect to subscribe to an event, such as a mouse or keyboard event. <br />
                    3.Animations: You can use useEffect to trigger animations when a component mounts or updates. <br />
                    4. Timers and intervals: You can use useEffect to start and stop timers and intervals.
                </p>
            </div>
            <div className='py-5'>
                <h1 className='py-5 text-purple-500'>How does react work?</h1>
                <p className='text-justify text-md font-light'>When a React application is started, React creates a virtual representation of the UI, which is called the Virtual DOM. The Virtual DOM is a lightweight representation of the actual DOM, and it allows React to efficiently update the UI without having to re-render the entire page.

                    When a component's state changes, React updates the Virtual DOM, compares it to the previous version, and determines which parts of the actual DOM need to be updated. This process is called reconciliation.

                    React uses a declarative approach to building UIs, which means that you describe what you want your UI to look like, and React figures out how to make it happen. This is different from an imperative approach, where you would have to manually manipulate the DOM to achieve the same result.
                </p>
            </div>
        </div>

    );
};

export default Question;