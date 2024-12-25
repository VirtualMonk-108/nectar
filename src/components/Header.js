import { ArrowLeft } from 'lucide-react';

const Header = ({ title, showBack = false, onBack }) => {
  return (
    <div className="sticky top-0 z-50 w-full bg-white p-4 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        {showBack && (
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Header;