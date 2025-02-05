import SingleBook from "./SingleBook";

function BookList(props) {
  return (
    <div className="d-flex flex-wrap">
      {props.list.map((book) => {
        return <SingleBook {...book} key={book.asin}></SingleBook>;
      })}
    </div>
  );
}
export default BookList;
