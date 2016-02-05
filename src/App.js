import React from 'react';
import Rooms from './components/Rooms';
import Chat  from './components/Chat';

var data = {
    user: 'Загадочный ловелас',
    room: 'Общий чат',
    rooms: [
        'Общий чят',
        'Новости',
        'Домашние животные',
        'Мотороллеры',
        'Что делать если я Геннадий?'
    ],
    messages: [
        {from: 'Кайл', msg: 'всем привет!!'},
        {from: 'Кенни', msg: 'ыыыы'},
        {from: '_^^nogibat0r9000^^_', msg: 'ыыыыыы!!'},
        {from: 'Стен', msg: 'ЫЫЫЫЫЫ!'},
        {from: '_^^nogibat0r9000^^_', msg: 'sss111111'},
        {from: 'Кайл', msg:'яснопонятно =('}
    ]
};

export default class App extends React.Component {

    selectRoom(room)
    {
        console.log(room);
    }

    render() {
        return <div>
            <Rooms room={data.room} items={data.rooms} onSelect={(r) => this.selectRoom(r)} />
            <Chat items={data.messages} user={data.user}/>
        </div>
    }
}