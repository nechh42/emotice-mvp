// src/components/blog/BlogCategories.tsx
import { BlogCategory } from '@/types/blog';
import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categorySlug: string | null) => void;
}

const BlogCategories = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: BlogCategoriesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-gray-900">Kategoriler</h3>
      
      <div className="space-y-2">
        {/* Tümü seçeneği */}
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          className="w-full justify-start"
          onClick={() => onCategorySelect(null)}
        >
          <span className="flex-1 text-left">Tümü</span>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
            {categories.reduce((total, cat) => total + cat.count, 0)}
          </span>
        </Button>

        {/* Kategoriler */}
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.slug ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => onCategorySelect(category.slug)}
          >
            <span className="flex-1 text-left">{category.name}</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {category.count}
            </span>
          </Button>
        ))}
      </div>

      {/* Mobil için yatay scroll */}
      <div className="block md:hidden overflow-x-auto pb-2">
        <div className="flex space-x-2 min-w-max">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => onCategorySelect(null)}
          >
            Tümü ({categories.reduce((total, cat) => total + cat.count, 0)})
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              size="sm"
              onClick={() => onCategorySelect(category.slug)}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;