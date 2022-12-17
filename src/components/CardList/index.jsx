import Card from "../Card";

const CardList = ({ movies, searchField }) => {
  return (
    <div className="pl-7 md:pl-[4.8125rem]">
      <p className="pt-[2.0625rem] pb-[1.625rem] md:pt-[3rem] ">
        {movies !== undefined ? `Showing results for '${searchField}'` : ""}
      </p>
      <div className=" flex gap-3 no-scrollbar overflow-x-auto">
        {movies !== undefined
          ? movies.map((movie, id) => {
              return (
                <div key={id}>
                  <Card movie={movie} />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default CardList;
