import CreateProduct from './create-product/create-product';
import Products from './product/product';

export const dynamic = 'force-dynamic';
export default function HomePage() {
  return (
    <main>
      <CreateProduct></CreateProduct>

      <Products></Products>
    </main>
  );
}
