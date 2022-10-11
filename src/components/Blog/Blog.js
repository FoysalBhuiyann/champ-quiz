import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='mt-4'>This is Blog components</h3>
            <div className='container mt-5'>
                <h3><span>1. Qus:</span> What Is The React Router</h3>
                <p className='fw-bold'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                <h3><span>2. Qus:</span> How Does Context API Work</h3>
                <p className='fw-bold'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>
                <h3><span>3. Qus:</span> What Is useRef (Hook)</h3>
                <p className='fw-bold'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;