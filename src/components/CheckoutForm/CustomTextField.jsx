import { useForm, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function FormInput({ name, label }) {
	const methods = useForm();
	const { control } = methods;

	const isError = false;

	return (
		<Grid item xs={12} sm={6}>
			<Controller
				as={TextField}
				name={name}
				control={control}
				defaultValue=""
				label={label}
				fullWidth
				required
				error={isError}
			/>
		</Grid>
	);
}

export default FormInput;
