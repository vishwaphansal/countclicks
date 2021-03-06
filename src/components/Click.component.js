import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="displayedNumber">{count}</div>
            <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}>Count me!</button>
            <button type="button" class="btn btn-primary" onClick={() => setCount(count - 1)}>Count me back!</button>
            <button type="button" class="btn btn-primary" onClick={() => setCount(0)}>Reset</button>
            <next />
        </div>
    );

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;
