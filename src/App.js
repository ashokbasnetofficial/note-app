import './App.css';
import NoteCategory from './component/NoteCategory/NoteCategory';
import NoteContainer from './component/notecontainer/NoteContainer';
import Search from './component/search/search';
function App() {
  return (
    <>
       <div className="container_fluid">
        <div className="container d-flex flex-column ">
           <Search />
           <NoteCategory/>
           <NoteContainer/>
        </div>
       </div>
    </>
  );
}

export default App;
