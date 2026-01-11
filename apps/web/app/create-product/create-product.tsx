export default async function CreateProduct() {
  return (
    <form>
      <h1>Create Product</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />

        <button type="submit">Create Product</button>
      </div>
    </form>
  );
}
