import { commerce } from "../../lib/commerce";

const Category = ({categoryId}) => {
	const [category, setCategory] = useState([]);

	const fetchCategory = async (categoryId) => {
		const { data } = await commerce.categories.retrieve(categoryId);
		setCategory(data);
	};

	useEffect(() => {
		fetchCategory({ categoryId });
	}, []);

	return <div>
        {category.name}
    </div>;
};

export default Category;
