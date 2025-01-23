import Link from "next/link";

interface CategoryProps {
  categories: string[];
}

const CategoryList: React.FC<CategoryProps> = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Link key={category} href={`/category/${category}`}>
       <h1>{category}</h1>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
