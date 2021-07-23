import React, { useState } from "react";
import axios from "axios";
const initialData = {
	name: "",
	email: "",
	password: "",
	termOfService: false,
};

export default function Form(props) {
	const { data, setData } = props;
	const [form, setForm] = useState(initialData);
	const handleChange = (e) => {
		const { value } = e.target;
		setForm({ ...form, [e.target.name]: value });
	};
	const submitForm = (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.password) return;
		debugger;
		axios.post(`https://reqres.in/api/users`, form).then((res) => {
			console.log(data);
			setData([...data, res.data]);
			setForm(initialData);
		});
	};
	return (
		<div className="formInput">
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="text"
					name="password"
					value={form.password}
					onChange={handleChange}
				/>
				<label htmlFor="termsOfService">
					Terms of Service
					<input
						type="radio"
						name="termOfService"
						checked={form.termOfService}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}
