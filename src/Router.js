import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { history } from "./history";
import { ContextLayout } from "./layout";
import { ToastContainer } from 'react-toastify';

const Dashboard = lazy(() => import("./views/dashboard/index"));
const Register = lazy(() => import("./views/auth/register/index"));
const Login = lazy(() => import("./views/auth/login/index"));
const ClientRegister = lazy(() => import("./views/auth/register/client"));
const WorkerRegister = lazy(() => import("./views/auth/register/worker"));
const RecoverPassword = lazy(() => import("./views/auth/recovery/index"));
const ConfirmUser = lazy(() => import("./views/auth/confirm-user/index"));

const WorkerHome = lazy(() => import("./views/home/worker/worker-home/index"));
const WorkerProfile = lazy(() => import("./views/home/worker/worker-profile/index"));
const WorkerDocument = lazy(() => import("./views/home/worker/worker-document/index"));
const WorkerReference = lazy(() => import("./views/home/worker/worker-reference/index"));

const WorkerShiftProgress = lazy(() => import("./views/home/worker/worker-shift/progress/index"));
const WorkerUpcomingShift = lazy(() => import("./views/home/worker/worker-shift/upcoming/index"));
const WorkerShiftHistory = lazy(() => import("./views/home/worker/worker-shift/history/index"));
const WorkerShiftAvailable = lazy(() => import("./views/home/worker/worker-shift/available/index"));

const WorkerBillingInvoice = lazy(() => import("./views/home/worker/worker-billing/invoice/index"));
const WorkerBillingInstant = lazy(() => import("./views/home/worker/worker-billing/instant/index"));
const WorkerBillingReport = lazy(() => import("./views/home/worker/worker-billing/report/index"));
const WorkerBillingTax = lazy(() => import("./views/home/worker/worker-billing/tax/index"));

const ClientHome = lazy(() => import("./views/home/client/client-home/index"));
const ClientProfile = lazy(() => import("./views/home/client/client-profile/index"));
const ClientPost = lazy(() => import("./views/home/client/client-post/index"));

const ClientShiftProgress = lazy(() => import("./views/home/client/client-shift/progress/index"));
const ClientShiftSchedule = lazy(() => import("./views/home/client/client-shift/schedule/index"));
const ClientShiftPosted = lazy(() => import("./views/home/client/client-shift/posted/index"));
const ClientShiftDedicated = lazy(() => import("./views/home/client/client-shift/dedicated/index"));
const ClientShiftHistory = lazy(() => import("./views/home/client/client-shift/history/index"));

const ClientWallet = lazy(() => import("./views/home/client/client-wallet/index"));
const ClientPrevious = lazy(() => import("./views/home/client/client-previous/index"));

const ClientBillingHistory = lazy(() => import("./views/home/client/client-billings/payment-history/index"));
const ClientBillingInvoice = lazy(() => import("./views/home/client/client-billings/invoice/index"));
const ClientBillingCard = lazy(() => import("./views/home/client/client-billings/creditcards/index"));
const ClientBillingStatement = lazy(() => import("./views/home/client/client-billings/accountstatement/index"));

const SetAvailable = lazy(() => import("./views/home/total/settings/setavailable/index"));
const SetRate = lazy(() => import("./views/home/total/settings/setrate/index"));
const SetDistance = lazy(() => import("./views/home/total/settings/setdistance/index"));
const SetPassword = lazy(() => import("./views/home/total/settings/setpassword/index"));
const SetNotification = lazy(() => import("./views/home/total/settings/setnotification/index"));

const Faq = lazy(() => import("./views/home/total/faq/index"));
const ContactUs = lazy(() => import("./views/home/total/contact-us/index"));
const HowItWorks = lazy(() => import("./views/home/total/how-it-works/index"));
const Downloads = lazy(() => import("./views/home/total/downloads/index"));
const AboutUs = lazy(() => import("./views/home/total/about-us/index"));
const Loading = lazy(() => import("./views/baseComponent/Loading"));

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
		return <Redirect to={"/"} />
	}
	for (let i in data.children) {
		if (data.children[i].props.path === data.location.pathname) {
			return data.children.slice(0, data.children.length - 1)
		}
	}
	return data.children.slice(data.children.length - 1, data.children.length)
};

class AppRouter extends React.Component {

	render() {
		return (
			<Router history={history}>
				{ this.props.loading && <Loading /> }
				<Switch>
					<AppRoute path="/" exact component={Dashboard} MainLayout />
					<AppRoute path="/login" exact component={Login} MainLayout />
					<AppRoute path="/register" exact component={Register} MainLayout />
					<AppRoute path="/recover-password" exact component={RecoverPassword} MainLayout />
					<AppRoute path="/confirm-user" exact component={ConfirmUser} MainLayout />
					<AppRoute path="/client-register" exact component={ClientRegister} MainLayout />
					<AppRoute path="/worker-register" exact component={WorkerRegister} MainLayout />
					<AppRoute path="/how-it-works" exact component={HowItWorks} MainLayout />
					<AppRoute path="/downloads" exact component={Downloads} MainLayout />
					<AppRoute path="/about-us" exact component={AboutUs} MainLayout />
					<RequireAuth>
						<AppRoute path="/worker-home" exact component={WorkerHome} MainLayout />
						<AppRoute path="/worker-profile" exact component={WorkerProfile} MainLayout />
						<AppRoute path="/worker-document" exact component={WorkerDocument} MainLayout />
						<AppRoute path="/worker-reference" exact component={WorkerReference} MainLayout />

						<AppRoute path="/worker-shift-progress" exact component={WorkerShiftProgress} MainLayout />
						<AppRoute path="/worker-upcoming-shifts" exact component={WorkerUpcomingShift} MainLayout />
						<AppRoute path="/worker-shift-history" exact component={WorkerShiftHistory} MainLayout />
						<AppRoute path="/worker-shift-available" exact component={WorkerShiftAvailable} MainLayout />

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

						<AppRoute path="/client-home" exact component={ClientHome} MainLayout />
						<AppRoute path="/client-profile" exact component={ClientProfile} MainLayout />

						<AppRoute path="/client-shift-progress" exact component={ClientShiftProgress} MainLayout />
						<AppRoute path="/client-shifts-schedule" exact component={ClientShiftSchedule} MainLayout />
						<AppRoute path="/client-shift-posted" exact component={ClientShiftPosted} MainLayout />
						<AppRoute path="/client-dedicated-posted" exact component={ClientShiftDedicated} MainLayout />
						<AppRoute path="/client-shift-history" exact component={ClientShiftHistory} MainLayout />

						<AppRoute path="/client-post" exact component={ClientPost} MainLayout />
						<AppRoute path="/previous-workers" exact component={ClientPrevious} MainLayout />
						<AppRoute path="/client-wallet" exact component={ClientWallet} MainLayout />

						<AppRoute path="/client-billing-history" exact component={ClientBillingHistory} MainLayout />
						<AppRoute path="/client-invoice" exact component={ClientBillingInvoice} MainLayout />
						<AppRoute path="/client-add-card" exact component={ClientBillingCard} MainLayout />
						<AppRoute path="/client-statement" exact component={ClientBillingStatement} MainLayout />

						<AppRoute exact component={Dashboard} MainLayout />
					</RequireAuth>
				</Switch>
				<ToastContainer />
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