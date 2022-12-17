const SearchBox = ({ onChangeHandler }) => {
  return (
    <div className="flex flex-col pt-14 px-7 md:px-[4.8125rem]">
      <label htmlFor="search">Search</label>
      <input
        type="search"
        className=" border border-black focus:outline-none focus:border-black shadow-sm p-1 bg-offWhite"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
