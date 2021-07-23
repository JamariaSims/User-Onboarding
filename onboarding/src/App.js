import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://reqres.in/api/users`)
			.then((res) => setData(res.data.data));
	}, []);
	return (
		<div className="App">
			<h1>OnBoard</h1>
			<Form data={data} setData={setData} />
			{data &&
				data.map((x, y) => (
					<>
						<p>{JSON.stringify(x)}</p>
					</>
				))}
			*
		</div>
	);
}

export default App;
