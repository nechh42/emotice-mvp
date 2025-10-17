// src/components/blog/BlogPage.tsx
import { useState, useMemo } from 'react';
import { BlogPost as BlogPostType } from '@/types/blog'; // ✅ İsim değiştir
import BlogList from './BlogList';
import BlogCategories from './BlogCategories';
import BlogSearch from './BlogSearch';
import BlogPostComponent from './BlogPost'; // ✅ Farklı isim kullan
import { blogPosts } from '@/data/blog/posts';
import { blogCategories } from '@/data/blog/categories';
import { Card, CardContent } from '@/components/ui/card';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  // Filtrelenmiş blog yazıları
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Kategori filtresi
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Arama filtresi
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.content.toLowerCase().includes(query)
      );
    }

    return filtered.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [selectedCategory, searchQuery]);

  // Post seçildiğinde
  const handlePostClick = (post: BlogPostType) => {
    setSelectedPost(post);
    // Sayfa başına scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Blog listesine dön
  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // Tekil post görünümü
  if (selectedPost) {
    return <BlogPostComponent post={selectedPost} onBack={handleBackToList} />;
  }

  // Liste görünümü
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          EMOTICE Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Duygusal sağlık, mindfulness, ilişkiler ve AI destekli mental wellness 
          hakkında güncel rehberler ve ipuçları.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Arama */}
          <Card>
            <CardContent className="p-4">
              <BlogSearch onSearch={setSearchQuery} />
            </CardContent>
          </Card>

          {/* Kategoriler */}
          <Card>
            <CardContent className="p-4">
              <BlogCategories
                categories={blogCategories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </CardContent>
          </Card>

          {/* İstatistikler */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Blog İstatistikleri</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Toplam Yazı:</span>
                  <span className="font-medium">{blogPosts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kategori:</span>
                  <span className="font-medium">{blogCategories.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Filtrelenen:</span>
                  <span className="font-medium">{filteredPosts.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ana içerik */}
        <div className="lg:col-span-3">
          {/* Filtre bilgisi */}
          {(selectedCategory || searchQuery) && (
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-600">
                      {selectedCategory && `Kategori: ${
                        blogCategories.find(cat => cat.slug === selectedCategory)?.name
                      }`}
                      {selectedCategory && searchQuery && ' • '}
                      {searchQuery && `Arama: "${searchQuery}"`}
                    </span>
                    <span className="text-gray-500 ml-2">
                      ({filteredPosts.length} yazı bulundu)
                    </span>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery('');
                    }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Blog listesi */}
          <BlogList 
            posts={filteredPosts} 
            onPostClick={handlePostClick}
          />

          {/* Sonuç yoksa */}
          {filteredPosts.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sonuç bulunamadı
                </h3>
                <p className="text-gray-600">
                  Arama kriterlerinize uygun blog yazısı bulunamadı. 
                  Lütfen farklı kelimelerle arama yapmayı deneyin.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;