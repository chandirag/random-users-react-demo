import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import UserCardComponent from "../components/UserCard/UserCardComponent";
import '../pages/UserPage.css';


const UserPage = () => {
    const [users, setUsers] = useState([]);
	// const [loading, setLoading] = useState(false);

    async function getUserData() {
        // setLoading(true);
        const res = await fetch("https://random-data-api.com/api/users/random_user?size=100");
        const data = await res.json();
        setUsers(data);
        // setLoading(false);
    }

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<main className="main-container">
			<Grid container justify="center" spacing={4}>
				{users.map((user) => (
					<Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
						<UserCardComponent user={user}/>
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default UserPage;
