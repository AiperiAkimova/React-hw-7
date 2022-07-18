import "./App.css";
import Comment from "./components/Comment";
import { comment } from "./data/data";

function App() {

  let a=0

  return (
    <div className="App">
      {comment.map((el) => {
        return (
          <Comment
            author={el.author}
            text={el.text}
            date={el.date}
            key={a++}
            id={a++}
          />
        );
      })}
      
    </div>
  );
}

export default App;
