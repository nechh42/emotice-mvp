// src/components/blog/BlogPost.tsx
import { BlogPost as BlogPostType } from '@/types/blog';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostProps {
  post: BlogPostType;
  onBack?: () => void;
}

const BlogPost = ({ post, onBack }: BlogPostProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Geri butonu */}
      {onBack && (
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Blog'a Dön
        </Button>
      )}

      <Card>
        <CardContent className="p-8">
          {/* Başlık */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {/* Meta bilgileri */}
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} dakika okuma</span>
            </div>
          </div>

          {/* Özet */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 font-medium">Özet:</p>
            <p className="text-blue-700 mt-1">{post.excerpt}</p>
          </div>

          {/* İçerik */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Etiketler */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Paylaşım butonları */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Bu yazıyı paylaş:</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;