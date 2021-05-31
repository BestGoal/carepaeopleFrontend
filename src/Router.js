import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { history } from "./history";
import { ContextLayout } from "./layout";

const Dashboard = lazy(() => import("./views/dashboard/index"));
const Register = lazy(() => import("./views/auth/register/index"));
const ClientRegister = lazy(() => import("./views/auth/register/client"));
const WorkerRegister = lazy(() => import("./views/auth/register/worker"));

const WorkerHome = lazy(() => import("./views/home/worker/worker-home/index"));
const WorkerProfile = lazy(() => import("./views/home/worker/worker-profile/index"));
const WorkerDocument = lazy(() => import("./views/home/worker/worker-document/index"));
const WorkerReference = lazy(() => import("./views/home/worker/worker-reference/index"));
const WorkerRefferal = lazy(() => import("./views/home/worker/worker-refferal/index"));

const ShiftCurrent = lazy(() => import("./views/home/worker/worker-shift/current/index"));
const ShiftJobHistory = lazy(() => import("./views/home/worker/worker-shift/job-history/index"));
const ShiftAvailable = lazy(() => import("./views/home/worker/worker-shift/available/index"));

const WorkerBillingInvoice = lazy(() => import("./views/home/worker/worker-billing/invoice/index"));
const WorkerBillingInstant = lazy(() => import("./views/home/worker/worker-billing/instant/index"));
const WorkerBillingReport = lazy(() => import("./views/home/worker/worker-billing/report/index"));
const WorkerBillingTax = lazy(() => import("./views/home/worker/worker-billing/tax/index"));

const Faq = lazy(() => import("./views/home/faq/index"));
const ContactUs = lazy(() => import("./views/home/contact-us/index"));

const SetAvailable = lazy(() => import("./views/home/settings/setavailable/index"));
const SetRate = lazy(() => import("./views/home/settings/setrate/index"));
const SetDistance = lazy(() => import("./views/home/settings/setdistance/index"));
const SetPassword = lazy(() => import("./views/home/settings/setpassword/index"));
const SetNotification = lazy(() => import("./views/home/settings/setnotification/index"));

// const BillingPaymentHistory = lazy(() => import("./views/home/worker/worker-billings/payment-history/index"));
// const BillingPaymentInvoices = lazy(() => import("./views/home/worker/worker-billings/invoice/index"));
// const BillingCreditCards = lazy(() => import("./views/home/worker/worker-billings/creditcards/index"));
// const BillingAccountStatement = lazy(() => import("./views/home/worker/worker-billings/accountstatement/index"));

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
  if (!isAuthorized) {
    return <Redirect to={"/"} />;
  }
  for (let i in data.children) {
    if (data.children[i].props.path === data.location.pathname) {
      return data.children.slice(0, data.children.length - 1);
    }
  }
  return data.children.slice(data.children.length - 1, data.children.length);
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
            <AppRoute path="/worker-document" exact component={WorkerDocument} MainLayout />
            <AppRoute path="/worker-reference" exact component={WorkerReference} MainLayout />
            <AppRoute path="/worker-refferal" exact component={WorkerRefferal} MainLayout />

            <AppRoute path="/shift-current" exact component={ShiftCurrent} MainLayout />
            <AppRoute path="/shift-job-history" exact component={ShiftJobHistory} MainLayout />
            <AppRoute path="/shift-available" exact component={ShiftAvailable} MainLayout />

            <AppRoute path="/worker-billing-invoice" exact component={WorkerBillingInvoice} MainLayout />
            <AppRoute path="/worker-billing-instant" exact component={WorkerBillingInstant} MainLayout />
            <AppRoute path="/worker-billing-report" exact component={WorkerBillingReport} MainLayout />
            <AppRoute path="/worker-billing-tax" exact component={WorkerBillingTax} MainLayout />

            <AppRoute path="/faq" exact component={Faq} MainLayout />
            <AppRoute path="/contact-us" exact component={ContactUs} MainLayout />

            <AppRoute path="/set-available" exact component={SetAvailable} MainLayout />
            <AppRoute path="/set-rate" exact component={SetRate} MainLayout />
            <AppRoute path="/set-distance" exact component={SetDistance} MainLayout />
            <AppRoute path="/set-password" exact component={SetPassword} MainLayout />
            <AppRoute path="/set-nitification" exact component={SetNotification} MainLayout />

            {/* <AppRoute path="/billing-payment-history" exact component={BillingPaymentHistory} MainLayout />
            <AppRoute path="/billing-invoices" exact component={BillingPaymentInvoices} MainLayout />
            <AppRoute path="/billing-credit-cards" exact component={BillingCreditCards} MainLayout />
            <AppRoute path="/billing-account-statement" exact component={BillingAccountStatement} MainLayout /> */}

            <AppRoute exact component={Dashboard} MainLayout />
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