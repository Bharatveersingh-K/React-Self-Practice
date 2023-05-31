/* const heading=React.createElement(
    "h1",
    {id:'1',
    
},
    "Hello World");
console.log(heading);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

const main=React.createElement("div", {id:'main'},[
React.createElement('div',{id:'container'},[
React.createElement('h1',{id:'heading'},'This is the beging of the new world!'),
React.createElement('h2',{id:'heading'},'This is the beging of the new world!')
]),
React.createElement('div',{id:'container'},[
    React.createElement('h3',{id:'heading'},'This is the beging of the new world!'),
    React.createElement('h4',{id:'heading'},'This is the beging of the new world!')
    ])
])
console.log(main);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(main);