import logo from './logo.svg';
import './App.css';
function Header(props) {
  return (
    <header>
    <h1><a href="/" onClick={function(e) {
      e.preventDefault();
      props.eventTest();
    }}>{props.title}</a></h1>
  </header>
  );
}
function Nav(props) {
  const lis = [];
  for(let i=0;i<props.tt.length;i++) {
    let t = props.tt[i];
    lis.push(
        <li key = {t.id}>
          <a id = {t.id} href={"/read/"+t.id} onClick = {(e)=>{
            e.preventDefault();
            props.evTest(e.target.id);
          }}>{t.title}</a>
        </li>
      )
  }
  return (
    <nav>
    <ol>
      {lis}
    </ol>
  </nav>
  );
}
function Art(props) {
  
  return (
      <article>
        <h2>Welcome</h2>
        Hello, bob : {props.test}
      </article>
  );
}

function App() {
  const topics = [
    {id:1, title:'html',body:'html is ...'},
    {id:2, title:'css',body:'css is ...'},
    {id:3, title:'javascript',body:'javascript is ...'}
  ];
  return (
    <div>
      <Header title ="WEB" eventTest = {function() {
        alert('hi event test');
      }} ></Header>
      <Header></Header>
      <Header></Header>
      <Nav tt = {topics} evTest ={(id)=> {
        alert(id);
      }} ></Nav>
      <Art></Art>
      <Art></Art>
      <Art></Art>
      <Art></Art>
      <Art test = "hahaha"></Art>
    </div>
  );
}

export default App;
