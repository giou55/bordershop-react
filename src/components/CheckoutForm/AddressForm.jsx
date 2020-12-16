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

import { commerce } from "../../lib/commerce";

import FormInput from "./CustomTextField";

const AddressForm = ({ checkoutToken }) => {
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState("");
	const methods = useForm();

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Στοιχεία αποστολής
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit="">
					<Grid container spacing={3}>
						<FormInput required name="firstName" label="Όνομα" />
						<FormInput required name="lastName" label="Επίθετο" />
						<FormInput required name="address1" label="Διεύθυνση" />
						<FormInput required name="email" label="Email" />
						<FormInput required name="phone" label="Τηλέφωνο" />
						<FormInput required name="city" label="Πόλη" />
						<FormInput required name="zip" label="Ταχ.κώδικας" />

						{/* <Grid item xs={12} sm={6}>
							<InputLabel>Shipping Options</InputLabel>
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
										label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
									}))
									.map((item) => (
										<MenuItem key={item.id} value={item.id}>
											{item.label}
										</MenuItem>
									))}
							</Select>
						</Grid> */}
					</Grid>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
