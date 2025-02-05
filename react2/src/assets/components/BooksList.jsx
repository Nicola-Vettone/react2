import SingleBook from "./SingleBook";

function BookList(props) {
  return (
    <div className="d-flex flex-wrap">
      {props.list.map((book, index) => {
        return <SingleBook {...book} key={index}></SingleBook>;
      })}
    </div>
  );
}
export default BookList;
