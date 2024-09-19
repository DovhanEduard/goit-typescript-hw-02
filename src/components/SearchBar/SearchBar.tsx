import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

type Props = {
  onSearch: (searchValue: string) => void;
};

type SearchFormValues = {
  searchField: string;
};

function SearchBar({ onSearch }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue = event.currentTarget.search.value.trim();

    if (searchValue === '') {
      toast.error('Необхідно вести текст для пошуку зображення');
    } else {
      onSearch(searchValue);
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputSerchValue}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="bottom-center" reverseOrder={false} />
      </form>
    </header>
  );
}

export default SearchBar;
