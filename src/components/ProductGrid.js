const ProductCard = ({ product, onAddToCart }) => {
    return (
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-contain mb-4"
        />
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.volume || product.quantity}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-semibold">${product.price.toFixed(2)}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  const ProductGrid = ({ products, onAddToCart }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    );
  };
  
  export default ProductGrid;