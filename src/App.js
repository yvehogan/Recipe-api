import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AppState, { AppContext } from './components/appstate';
import { useContext, useEffect } from 'react';
import Navbar from './pages/Navbar';

import Register from './pages/Register';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Login from './pages/Login';

function App() {
  const context = useContext(AppContext);
	console.log(context);

	useEffect(() => {}, []);

  return ( 

  <div className="App">

  	<BrowserRouter>
			<AppState>
    <Navbar />

    <Switch>
      
    <Route exact path='/home'>
        <Home />
      </Route>
     
    <Route exact path="/">

  <Redirect to="/home" />

</Route>

      <Route exact path='/register'>
        <Register />
      </Route>

    
      <Route exact path='/login'>
        <Login />
      </Route>

     
     
      <Route exact path='/todos/:userId'>
        <Todos />
      </Route>

    </Switch>
    </AppState>
		</BrowserRouter>
 
    
</div>
  );
}

export default App; 
