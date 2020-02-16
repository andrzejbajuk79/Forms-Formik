import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/hoc/layout';
import Formik1 from './components/formik1';
import Formik2 from './components/formik2';

import Example from './components/autosuggest';
import Formik3 from './components/formik3';

const Routes = () => {
 return (
  <Layout>
   <Switch>
    <Route exact path="/formik1" component={Formik1} />
    <Route exact path="/formik2" component={Formik2} />
    <Route exact path="/formik3" component={Formik3} />
    <Route exact path="/example" component={Example} />
   </Switch>
  </Layout>
 );
};

export default Routes;
