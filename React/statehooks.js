import React, { useState } from 'react';

function Counter() {
	// Declare a state variable `count` with initial value 0
	const [count, setCount] = useState(0);

	return (
    	<div>
        	<p>Current count: {count}</p>
        	<button onClick={() => setCount(count + 1)}>Increment</button>
    	</div>
	);
}

//export default Counter;



import React, { useState, useEffect } from 'react';

function Timer() {
	// State to hold the current time
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	// useEffect hook to set up a timer that updates the time every second
	useEffect(() => {
    	// Function to update the time state
    	const updateTime = () => {
        	setTime(new Date().toLocaleTimeString());
    	};

    	// Set up an interval to call updateTime every second
    	const intervalId = setInterval(updateTime, 1000);

    	// Clean up function to clear the interval when the component unmounts
    	return () => clearInterval(intervalId);
	}, []); // Empty dependency array means this effect runs once when the component mounts

	return (
    	<div>
        	<p>Current time: {time}</p>
    	</div>
	);
}

export default Timer;
