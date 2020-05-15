import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Formik1 from './components/forms/formik1';
import Formik2 from './components/forms/formik2';
import Formik3 from './components/forms/formik3';

import CreateArticle from './pages/CreateArticle/CreateArticle';
import Formik4 from './components/forms/Formik4';
import Formik5 from './components/forms/Formik5';
import Home from './components/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/formik6" component={CreateArticle} />
      <Route path="/formik1" component={Formik1} />
      <Route path="/formik2" component={Formik2} />
      <Route path="/formik3" component={Formik3} />
      <Route path="/formik4" component={Formik4} />
      <Route path="/formik5" component={Formik5} />
    </Switch>
  );
};

export default Routes;
