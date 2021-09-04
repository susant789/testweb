import React from "react";
import { Redirect, Route } from "react-router-dom";
import {selectUser} from "../Reducers/userSlice";
import {useSelector} from "react-redux"

const PrivateRoute = ({ component: Component, ...paths }) => {
	const user = useSelector(selectUser)

	return (
		<Route
			{...paths}
			render={(props) => {
				return user ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				);
			}}
		></Route>
	);
};

export default PrivateRoute