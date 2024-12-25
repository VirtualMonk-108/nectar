import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1"
    >
      <Icon
        className={`w-6 h-6 ${active ? 'text-green-500' : 'text-gray-500'}`}
      />
      <span
        className={`text-xs ${
          active ? 'text-green-500 font-medium' : 'text-gray-500'
        }`}
      >
        {label}
      </span>
    </button>
  );
};

const BottomNav = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <NavItem
          icon={Home}
          label="Shop"
          active={activeTab === 'shop'}
          onClick={() => onTabChange('shop')}
        />
        <NavItem
          icon={Search}
          label="Explore"
          active={activeTab === 'explore'}
          onClick={() => onTabChange('explore')}
        />
        <NavItem
          icon={ShoppingCart}
          label="Cart"
          active={activeTab === 'cart'}
          onClick={() => onTabChange('cart')}
        />
        <NavItem
          icon={Heart}
          label="Favourite"
          active={activeTab === 'favourite'}
          onClick={() => onTabChange('favourite')}
        />
        <NavItem
          icon={User}
          label="Account"
          active={activeTab === 'account'}
          onClick={() => onTabChange('account')}
        />
      </div>
    </div>
  );
};

export default BottomNav;