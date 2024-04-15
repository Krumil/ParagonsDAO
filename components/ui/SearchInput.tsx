import { FC } from "react";
import { Input } from "@/components/ui/Input";

interface SearchInputProps {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
	return (
		<Input
			className='w-full'
			type='text'
			placeholder='Search'
			value={searchTerm}
			onChange={e => setSearchTerm(e.target.value)}
		/>
	);
};

export { SearchInput };
