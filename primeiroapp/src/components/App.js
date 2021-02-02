import React from 'react';
import  Post from "./post";
export default class App extends React.Component {
    render() {
        return ( <div>
           <h1> Hello world </h1>
           <Post title="aprendendo react"/>
            <Post title="primeira aula de react"/>
            <Post title="rocketseat"/>
            <Post title="muito bom"/>
            <Post title="utiliando o props captura"/>
            <Post title="a informação"/></div>
        );
    }
}