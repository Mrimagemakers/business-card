import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSavedArtworks, deleteArtwork } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, Download, Trash2, Image as ImageIcon } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

const GalleryPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [artworks, setArtworks] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    loadArtworks();
  }, []);

  const loadArtworks = () => {
    setArtworks(getSavedArtworks());
  };

  const handleDownload = (artwork) => {
    const link = document.createElement('a');
    link.download = `gallery-${artwork.id}.png`;
    link.href = artwork.imageData;
    link.click();
    
    toast({
      title: 'Downloaded!',
      description: 'Your artwork has been saved'
    });
  };

  const handleDelete = (id) => {
    deleteArtwork(id);
    loadArtworks();
    setDeleteId(null);
    
    toast({
      title: 'Deleted',
      description: 'Artwork removed from gallery'
    });
  };

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
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Your colorful masterpieces
          </p>
        </div>

        {artworks.length === 0 ? (
          <div className="text-center py-20">
            <ImageIcon className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Your gallery is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Start coloring and save your artworks to see them here!
            </p>
            <Button 
              onClick={() => navigate('/categories')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
            >
              Start Coloring
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map((artwork) => (
              <Card 
                key={artwork.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 group"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden bg-white">
                    <img 
                      src={artwork.imageData} 
                      alt={artwork.pageName}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(artwork)}
                        className="bg-white hover:bg-gray-100"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => setDeleteId(artwork.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50">
                    <p className="font-semibold text-gray-800">{artwork.pageName}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(artwork.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Artwork?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your artwork from the gallery.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => handleDelete(deleteId)}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default GalleryPage;
