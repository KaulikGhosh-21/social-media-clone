import FeedPage from './pages/FeedPage/FeedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SideBar from './components/Sidebar/SideBar';
import Widget from './components/Widget/Widget';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <BrowserRouter>
          <Route exact path="/" component={FeedPage}/>
          <Route exact path="/profile" component={ProfilePage}/>
      </BrowserRouter>
      <Widget />
    </div>
  );
}

export default App;
