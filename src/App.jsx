import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import PostsHeader from "./components/postsHeader";
import Posts1 from "./components/posts1";
import Posts2 from "./components/posts2";
import Posts3 from "./components/posts3";
import Posts4 from "./components/posts4";
import Followlist from "./components/followlist";
import Pinkbtn from "./components/pinkbtn";
import  Mobileheader from "./components/mobileheader";
import Login from "./components/login";
import Signup from "./components/signup"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css"
function App() {
  return (
    
    <div className="App container">
      <Header />
      <Mobileheader />
      <Hero />
      <PostsHeader />
      
      <div className="w-[full] flex justify-center">
        <div>
        
          <Posts1 />
          <Posts2 />
          <Posts3 />
          <Posts4 />
        </div>
        <div className="w-[18vw] mx-2 hidden xl:block">
          <Followlist />
        </div>
      </div>
      <Pinkbtn />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
