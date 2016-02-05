import React from 'react';

function Test (props) {
    return <div>Меня зовут {props.name}</div>
}

export default class App extends React.Component {
    render() {
        return <div>
            <Test name="В. Вася"/>
            <Test name="П. Петя"/>
            <Test name="А. Вассерман"/>
        </div>
    }
}