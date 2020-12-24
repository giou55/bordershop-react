import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { commerce } from "../../lib/commerce";

const ProductDetails = ({ onAddToCart, products }) => {
	const [product, setProduct] = useState({});

	let { id } = useParams();

	// const fetchProduct = async (productId) => {
	// 	const { data } = await commerce.products.list();
	// 	const { data } = await commerce.products.retrieve(productId);
	// 	console.log(data);
	// 	setProduct(data);
	// };

	// useEffect(() => {
	// 	fetchProduct(id);
	// }, []);

	return (
		<Container maxWidth="lg">
			{products
				.filter((product) => product.id === id)
				.map((product) => (
					<div key={product.id}>{product.name}</div>
				))}
		</Container>
	);
};

export default ProductDetails;
