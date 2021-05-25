import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { history } from "./history";
import { ContextLayout } from "./layout";

const Dashboard = lazy(() => import("./views/dashboard/index"));
const Register = lazy(() => import("./views/auth/register/index"));
const ClientRegister = lazy(() => import("./views/auth/register/client"));
const WorkerRegister = lazy(() => import("./views/auth/register/worker"));
const WorkerHome = lazy(() => import("./views/home/worker/index"));
const WorkerProfile = lazy(() => import("./views/home/worker-profile/index"));

const RouteConfig = ({ component: Component, MainLayout, HomeLayout, AuthLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag = MainLayout === true && context.MainLayout
            return (
              <LayoutTag {...props}>
                <Suspense fallback={<></>}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)

const AppRoute = connect(null)(RouteConfig)

const RequireAuth = (data) => {
  const isAuthorized = useSelector((state) => state.auth.isAuth);

  console.log(isAuthorized)

  if (!isAuthorized) {
    return <Redirect to={"/"}/>;
  }
  for(let i in data.children) {
    if(data.children[i].props.path === data.location.pathname) {
      console.log(data.children.slice(0, data.children.length-1), "-")
      return data.children.slice(0, data.children.length-1);
    }
  }
  console.log(data.children.slice(data.children.length-1, data.children.length), "2")
  return data.children.slice(data.children.length-1, data.children.length);
};

class AppRouter extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <Router history={history}>
        {/* { this.props.loading && <Loading /> } */}
        <Switch>
          <AppRoute path="/" exact component={Dashboard} MainLayout />
          <AppRoute path="/register" exact component={Register} MainLayout />
          <AppRoute path="/client-register" exact component={ClientRegister} MainLayout />
          <AppRoute path="/worker-register" exact component={WorkerRegister} MainLayout />
          <RequireAuth>
            <AppRoute path="/worker-home" exact component={WorkerHome} MainLayout />
            <AppRoute path="/worker-profile" exact component={WorkerProfile} MainLayout />
            <AppRoute path="/worker-home1" exact component={WorkerHome} MainLayout />
          </RequireAuth>
        </Switch>
      </Router>
    )
  }
}

const mapStateToPropss = (state) => ({
  loading: state.base.loading,
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
}

export default connect(mapStateToPropss, mapDispatchToProps)(AppRouter);