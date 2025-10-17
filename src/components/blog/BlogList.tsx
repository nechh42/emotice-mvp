// src/components/blog/BlogList.tsx
import { BlogPost } from '@/types/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick?: (post: BlogPost) => void;
}

const BlogList = ({ posts, onPostClick }: BlogListProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card 
          key={post.id}
          className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => onPostClick?.(post)}
        >
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} dk okuma</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Henüz blog yazısı bulunmuyor.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;