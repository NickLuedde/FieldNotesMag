//I'm the master Routing COmponent that connects to App.js

const Router = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Router;
