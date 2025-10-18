import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { categories, coloringPages } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft } from 'lucide-react';

const CategoryPagesView = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const pages = coloringPages.filter(p => p.categoryId === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category not found</h2>
          <Button onClick={() => navigate('/categories')}>Back to Categories</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/categories')}
            className="hover:bg-white/50"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Categories
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ color: category.color }}
          >
            {category.name}
          </h1>
          <p className="text-xl text-gray-600">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pages.map((page) => (
            <Card 
              key={page.id}
              className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl overflow-hidden border-2 group"
              style={{ borderColor: category.color }}
              onClick={() => navigate(`/color/${page.id}`)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden bg-white">
                  <img 
                    src={page.image} 
                    alt={page.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold text-lg">Start Coloring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPagesView;
