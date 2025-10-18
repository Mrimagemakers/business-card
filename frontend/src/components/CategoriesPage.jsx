import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft } from 'lucide-react';

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-white/50"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/gallery')}
            className="border-2 border-purple-300 hover:bg-purple-50"
          >
            My Gallery
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Choose a Category
          </h1>
          <p className="text-xl text-gray-600">
            Select a category to explore coloring pages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden border-4 group"
              style={{ borderColor: category.color }}
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={category.thumbnail} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle 
                  className="text-2xl mb-2"
                  style={{ color: category.color }}
                >
                  {category.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
                <p className="text-sm text-gray-500 mt-3">6 pages available</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
