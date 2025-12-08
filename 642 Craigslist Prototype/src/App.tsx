import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SearchResultsPage } from './components/SearchResultsPage';
import { ListingDetailPage } from './components/ListingDetailPage';
import { ChatPage } from './components/ChatPage';
import { ClothingPage } from './components/ClothingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search' | 'listing' | 'chat' | 'clothing'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSearchQuery('');
  };

  const handleViewListing = () => {
    setCurrentPage('listing');
  };

  const handleGoToChat = () => {
    setCurrentPage('chat');
  };

  const handleBackToListing = () => {
    setCurrentPage('listing');
  };

  const handleGoToClothing = () => {
    setCurrentPage('clothing');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' && (
        <HomePage 
          onSearch={handleSearch} 
          onGoToChat={handleGoToChat}
          onGoToClothing={handleGoToClothing}
        />
      )}
      {currentPage === 'search' && (
        <SearchResultsPage 
          searchQuery={searchQuery} 
          onBackToHome={handleBackToHome}
          onViewListing={handleViewListing}
          onGoToChat={handleGoToChat}
        />
      )}
      {currentPage === 'listing' && (
        <ListingDetailPage 
          onBackToHome={handleBackToHome}
          onGoToChat={handleGoToChat}
        />
      )}
      {currentPage === 'chat' && (
        <ChatPage 
          onBackToHome={handleBackToHome}
          onBack={handleBackToListing}
        />
      )}
      {currentPage === 'clothing' && (
        <ClothingPage 
          onBackToHome={handleBackToHome}
          onGoToChat={handleGoToChat}
          onSearch={handleSearch}
        />
      )}
    </div>
  );
}