'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ProductGrid from '@/components/ProductGrid';
import BottomNav from '@/components/BottomNav';
import { categories, beverages, eggProducts } from '@/data/dummyData';

export default function CategoryPage() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('shop');

  // Find the current category
  const category = categories.find(cat => cat.id === parseInt(params.id));

  // Get products based on category
  const getProductsForCategory = (categoryId) => {
    switch (parseInt(categoryId)) {
      case 6: // Beverages
        return beverages;
      case 5: // Dairy & Eggs
        return eggProducts;
      default:
        return [];
    }
  };

  const products = getProductsForCategory(params.id);

  const handleBack = () => {
    window.history.back();
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // Implement cart functionality
  };

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header 
          title={category?.name || 'Category'} 
          showBack={true}
          onBack={handleBack}
        />
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        <main className="flex-1 overflow-y-auto pb-16">
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </main>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </>
  );
}