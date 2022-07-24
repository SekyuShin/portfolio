import './App.css';
import {useState} from 'react';

function Head(props){
  return (
    <h1><a href="/test" onClick={(e)=> {
      e.preventDefault();
      props.onChangeFunc();
    }}>{props.title}</a></h1>
  );
}
function Nav(props) {
  let lists = [];
  for(let i =0;i<props.topic.length;i++) {
    let tmpTopic = props.topic[i];
    lists.push(<li key = {tmpTopic.id}>
      <a id = {tmpTopic.id} href={'/read/'+tmpTopic.id} onClick = {(e)=>{
        e.preventDefault();
        props.onChangeFunc_2(Number(e.target.id));
      }}>{tmpTopic.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lists}
      </ol>
    </nav>
  );
}
function Article(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.body}
    </div>
  );
}
function Create(props) {
  let _body = null;
  _body = <form onSubmit={(e)=>{
    let title,body;  
    e.preventDefault();
    title = e.target.title.value;
    body = e.target.body.value;
    props.onCreate(title,body);
  }}>
            <p><input type="text" name = "title" placeholder='title'></input></p>
            <p><textarea name = "body" placeholder='body'></textarea></p>
            <p><input type="submit" value = "create"></input></p>
          </form>;
  return (
    <Article title = "Create" body = {_body}></Article>
  );
}
function Update(props) {
  let _body = null;
  const [title,setTitle] = useState(props.title);
  const [body,setBody] = useState(props.body); 
  _body = <form onSubmit={(e)=>{
    e.preventDefault();
    props.onUpdate(title,body);
  }}>
            <p><input type="text" name = "title" placeholder="title" value = {title} onChange={e=>{
              setTitle(e.target.value);
            }}></input></p>
            <p><textarea name = "body" placeholder= "body" value ={body} onChange={e=>{
              setBody(e.target.value);
            }}></textarea></p>
            <p><input type="submit" value = "update"></input></p>
          </form>;
  return (
    <Article title = "Update" body = {_body}></Article>
  );
}
function App() {
  const [mode,setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  const [countId,setCountId] = useState(4);
  const [topics,setTopics] = useState( [
    {id:1, title:'html', body: 'html is ...' },
    {id:2, title:'css', body: 'css is ...' },
    {id:3, title:'javascript', body: 'javascript is ...' }
  ]);
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME') {
    content = <Article title = 'WELCOME' body = 'Hello, Web'></Article>
  } else if(mode === 'READ') {
    let title, body = null;
    // for(let i=0;i<topics.length;i++) {
    //   if(topics[i].id === id) {
    //     title = topics[i].title;
    //     body = topics[i].body;
    //     //break;
    //   }
    // } 
    title = topics[id-1].title;
    body = topics[id-1].body;
    content = <Article title = {title} body = {body}></Article>
    contextControl = <div>
      <li><a href="./" onClick={e=>{
        e.preventDefault();
        setMode('UPDATE');
      }}>UPDATE</a></li>
      <li><a href="./" onClick={e=>{
        e.preventDefault();
        setMode('DELETE');
      }}>DELETE</a></li>
    </div>
    
      /*
        <li><input type = "button" value = "Delete" onClick={()=>{
          const newTopics = [];
          for(let i=0;i<topics.length;i++) {
            if(topics[i].id !== id) {
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
        }}></input></li>
      */
  } else if(mode === 'CREATE') {
      content = <Create onCreate = {(_title,_body)=>{
        let newTopics = [...topics];
        let newTopic = {id:countId, title:_title,body:_body};
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode('READ');
        setId(countId);
        setCountId(countId+1);
        console.log(newTopics);
        console.log(countId);
      }}></Create>
  } else if(mode === 'UPDATE') {
    let curTopic = topics[id-1];
    content = <Update title = {curTopic.title} body = {curTopic.body} onUpdate = {(_title,_body)=>{
      let newTopics = [...topics];
      let updateTopic = {id:curTopic.id, title:_title, body:_body};
      newTopics[curTopic.id-1] = updateTopic;
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  } else if(mode === 'DELETE') {
    let newTopics = [...topics];
    let ret = newTopics.splice(id-1,1);
    if(ret != -1) {
      for(let i=id-1;i<newTopics.length;i++) {
        newTopics[i].id = newTopics[i].id -1;
      }
    }
    setTopics(newTopics);
    setCountId(countId-1);
    setMode('WELCOME');
  }
  return (
    <div>
        <Head title = "WEB" onChangeFunc = {()=>{
          setMode('WELCOME');
          //alert('hi this is test : '+para);
        }}></Head>
        <Nav topic = {topics} onChangeFunc_2 = {(paraId)=> {
          setMode('READ');
          setId(paraId);
          //alert('navi is '+paraId);
        }}></Nav>
        {content}
        <ul>
          <li>
            <a href="./" onClick={e=>{
              e.preventDefault();
              setMode('CREATE');
            }}>CREATE</a>
          </li>
          {contextControl}
        </ul>
    </div>
  );
}

export default App;
