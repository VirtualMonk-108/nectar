'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryGrid from '@/components/CategoryGrid';
import BottomNav from '@/components/BottomNav';
import { categories } from '@/data/dummyData';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('shop');
  const [categoryData] = useState(categories); // Initialize with imported data

  // Filter categories based on search query
  const filteredCategories = categoryData?.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handleCategoryClick = (category) => {
    router.push(`/category/${category.id}`);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header title="Find Products" />
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        <main className="flex-1 overflow-y-auto pb-16">
          <CategoryGrid
            categories={filteredCategories}
            onCategoryClick={handleCategoryClick}
          />
        </main>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </>
  );
}