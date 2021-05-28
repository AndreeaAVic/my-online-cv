import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Projects } from './pages/Projects/Projects';
import { Recommendations } from './pages/Recommendations/Recommendations';
import { Contact } from './pages/Contact/Contact';
import { AVButton } from './components/AVButton/AVButton';
import { SocialMediaContainer } from './components/SocialMediaContainer/SocialMediaContainer';
import { Footer } from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/recommendations">
            <Recommendations />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <AVButton />
        <SocialMediaContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
