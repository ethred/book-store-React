export default function CreateBook() {
  return (
    <>
      <h1>Create Book </h1>
      <div>
        <input type="text" placeholder="Enter book name" />
        <select name="auther">
          <option value="volvo">Select books By auther</option>
          <option value="saab">Anthony Onyekachukwu Okonta</option>
          <option value="mercedes">Mayur Patil</option>
          <option value="audi">Adam Boduch </option>
        </select>
        <button type="submit">Add Book</button>
      </div>
    </>
  );
}
