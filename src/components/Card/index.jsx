const Card = ({ movie }) => {
  return (
    <div>
      <div className=" h-[12.5rem] w-[12.5rem] rounded-xl bg-black text-white flex justify-center items-center p-6 text-center">
        <p>{movie.Title}</p>
      </div>
    </div>
  );
};

export default Card;
