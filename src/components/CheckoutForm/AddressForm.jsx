import { useState, useEffect } from "react";
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { commerce } from "../../lib/commerce";

import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken, next }) => {
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState("");
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState("");
	const methods = useForm();

	const fetchShippingCountries = async (checkoutTokenId) => {
		const {
			countries,
		} = await commerce.services.localeListShippingCountries(
			checkoutTokenId
		);
		setShippingCountries(countries);
		setShippingCountry(Object.keys(countries)[0]);
	};

	const fetchShippingOptions = async (
		checkoutTokenId,
		country,
		stateProvince = null
	) => {
		const options = await commerce.checkout.getShippingOptions(
			checkoutTokenId,
			{ country, region: stateProvince }
		);
		setShippingOptions(options);
		setShippingOption(options[0].id);
	};

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id);
	}, []);

	useEffect(() => {
		if (shippingCountry)
			fetchShippingOptions(checkoutToken.id, shippingCountry);
	}, [shippingCountry]);

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Στοιχεία αποστολής
			</Typography>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) =>
						next({ ...data, shippingCountry, shippingOption })
					)}
				>
					<Grid container spacing={3}>
						<FormInput name="firstName" label="Όνομα" />
						<FormInput name="lastName" label="Επίθετο" />
						<FormInput name="address1" label="Διεύθυνση" />
						<FormInput name="email" label="Email" />
						<FormInput name="phone" label="Τηλέφωνο" />
						<FormInput name="city" label="Πόλη" />
						<FormInput name="zip" label="Ταχ.κώδικας" />

						<Grid item xs={12} sm={6}>
							<InputLabel>Χώρα</InputLabel>
							<Select
								value={shippingCountry}
								fullWidth
								onChange={(e) =>
									setShippingCountry(e.target.value)
								}
							>
								{Object.entries(shippingCountries)
									.map(([code, name]) => ({
										id: code,
										label: name,
									}))
									.map((item) => (
										<MenuItem key={item.id} value={item.id}>
											{item.label === "Greece"
												? "Ελλάδα"
												: "Other"}
										</MenuItem>
									))}
							</Select>
						</Grid>

						<Grid item xs={12} sm={6}>
							<InputLabel>Έξοδα αποστολής</InputLabel>
							<Select
								value={shippingOption}
								fullWidth
								onChange={(e) =>
									setShippingOption(e.target.value)
								}
							>
								{shippingOptions
									.map((sO) => ({
										id: sO.id,
										label: `${sO.price.formatted_with_symbol}`,
									}))
									.map((item) => (
										<MenuItem key={item.id} value={item.id}>
											{item.label}
										</MenuItem>
									))}
							</Select>
						</Grid>
					</Grid>
					<br />
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Button component={Link} to="/cart" variant="outlined">
							ΠΙΣΩ ΣΤΟ ΚΑΛΑΘΙ
						</Button>
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							ΕΠΟΜΕΝΟ
						</Button>
					</div>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
