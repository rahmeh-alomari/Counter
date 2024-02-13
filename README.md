I have two components: MultiCounter and Counter, as well as a utility file for FontAwesome icons.

Multi-Counter Component:
This component manages an array of counters in its state using the useState hook.
It renders each counter using the Counter component and passes the counter object.
It provides a button to add new counters.
The handleAdd function adds a new counter to the array of counters, and the handleRemove function removes a counter based on its id. 

Counter Component:
- This component represents an individual counter.
- It receives the counter object and a function to remove the counter as props.
- The handleIncrement and handleDecrement functions update the counter value accordingly.
Utility File (FontAwesome):
This file imports the necessary FontAwesome icons and exports them along with the FontAwesomeIcon component.



