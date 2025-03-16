import React, { useState, useEffect } from "react";
import Vocab from "./Vocab-grok";

const FrenchFlashcardApp = () => {
  const flashcards = Vocab;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [showAnswerImmediately] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const [voices, setVoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showExample, setShowExample] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    // Initialize favorites from localStorage during component initialization
    const savedFavorites = localStorage.getItem('frenchVocabFavorites');
    return savedFavorites ? new Set(JSON.parse(savedFavorites)) : new Set();
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState('flashcard'); // 'flashcard' or 'list'

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('frenchVocabFavorites', JSON.stringify([...favorites]));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  useEffect(() => {
    let newFilteredFlashcards = flashcards;

    // Filter by favorites if enabled
    if (showFavoritesOnly) {
      newFilteredFlashcards = newFilteredFlashcards.filter(card => 
        favorites.has(card.french)
      );
    }

    // Filter by category
    if (selectedCategories.size > 0) {
      newFilteredFlashcards = newFilteredFlashcards.filter((card) =>
        selectedCategories.has(card.category)
      );
    }

    // Filter by search term
    if (searchTerm) {
      newFilteredFlashcards = newFilteredFlashcards.filter(
        (card) =>
          card.french.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFlashcards(newFilteredFlashcards);
    
    // Only reset card index if the current card is no longer in the filtered list
    if (currentCard && !newFilteredFlashcards.find(card => card.french === currentCard.french)) {
      setCurrentCardIndex(0);
    }
    
    setIsFlipped(false);
  }, [flashcards, selectedCategories, searchTerm, showFavoritesOnly, favorites]);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);

      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    } else {
      console.error("SpeechSynthesis is not supported.");
      alert("Speech synthesis is not supported in your browser.");
    }
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const playAudio = (text) => {
    if (!speechSynthesis) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.7;
    utterance.pitch = 0.6;
    const frenchVoice = voices.find((voice) => voice.lang.startsWith("fr"));
    if (frenchVoice) utterance.voice = frenchVoice;
    speechSynthesis.speak(utterance);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setShowExample(false); // Hide the example when flipping
  };

  const nextCard = () => {
    const newIndex = (currentCardIndex + 1) % filteredFlashcards.length; // Loop back to the start
    setCurrentCardIndex(newIndex);
    setIsFlipped(false);
    setShowExample(false); // Hide example when switching
    speechSynthesis?.cancel();
  };

  const prevCard = () => {
    const newIndex =
      (currentCardIndex - 1 + filteredFlashcards.length) %
      filteredFlashcards.length; // Loop to the end
    setCurrentCardIndex(newIndex);
    setIsFlipped(false);
    setShowExample(false); // Hide example when switching
    speechSynthesis?.cancel();
  };

  const toggleCategory = (category) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
  };

  const toggleFavorite = (e, card) => {
    e.stopPropagation(); // Prevent card flip when clicking the heart
    if (!card) return;
    
    const newFavorites = new Set(favorites);
    if (newFavorites.has(card.french)) {
      newFavorites.delete(card.french);
    } else {
      newFavorites.add(card.french);
    }
    setFavorites(newFavorites);
  };

  const currentCard =
    filteredFlashcards.length > 0 ? filteredFlashcards[currentCardIndex] : null;

  const renderFlashcardView = () => (
    <div className="space-y-6">
      <div className="aspect-[3/2] w-full max-w-lg mx-auto">
        {currentCard ? (
          <div
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={!showAnswerImmediately && !showExample ? flipCard : undefined}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front bg-white">
                <button
                  onClick={(e) => toggleFavorite(e, currentCard)}
                  className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Toggle favorite"
                >
                  <span className="text-2xl">
                    {favorites.has(currentCard.french) ? "❤️" : "🤍"}
                  </span>
                </button>
                <p className="text-2xl md:text-3xl font-bold text-gray-800">
                  {currentCard.french}
                </p>
                <button
                  className="audio-button mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(currentCard.french);
                  }}
                >
                  <span role="img" aria-label="play">
                    🔊
                  </span>
                </button>
              </div>
              <div className="flashcard-back">
                {!showExample && (
                  <div className="space-y-4">
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">
                      {currentCard.meaning}
                    </p>
                    <p className="text-sm text-gray-600">
                      Category: {currentCard.category}
                    </p>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-700">
                        Example: {currentCard.example}
                      </p>
                      <button
                        className="audio-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(currentCard.example);
                        }}
                      >
                        <span role="img" aria-label="play">
                          🔊
                        </span>
                      </button>
                    </div>
                    <p className="text-lg text-gray-700">
                      {currentCard.exampleMeaning}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full bg-white rounded-lg shadow-lg">
            <p className="text-xl text-gray-600">No flashcards to display.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prevCard}
          disabled={currentCardIndex === 0}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <span className="text-gray-600">
          {filteredFlashcards.length > 0
            ? `${currentCardIndex + 1} / ${filteredFlashcards.length}`
            : "0/0"}
        </span>
        <button
          onClick={nextCard}
          disabled={filteredFlashcards.length === 0}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Favorite Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFlashcards.map((card) => (
            <div
              key={card.french}
              className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{card.french}</h3>
                <button
                  onClick={(e) => toggleFavorite(e, card)}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <span className="text-xl">❤️</span>
                </button>
              </div>
              <p className="text-gray-600 mb-2">{card.meaning}</p>
              <p className="text-sm text-gray-500 mb-2">Category: {card.category}</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-700">Example: {card.example}</p>
                <p className="text-sm text-gray-600">{card.exampleMeaning}</p>
              </div>
              <button
                onClick={() => playAudio(card.french)}
                className="mt-2 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              >
                <span role="img" aria-label="play">🔊</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                French Vocabulary Flashcards
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-gray-600">
                  Favorites: {favorites.size}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('flashcard')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      viewMode === 'flashcard'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Flashcards
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      viewMode === 'list'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    List View
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Search for words..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategories.size === 0 && !showFavoritesOnly
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedCategories(new Set());
                    setShowFavoritesOnly(false);
                  }}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    showFavoritesOnly
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                >
                  Favorites Only
                </button>
                {[...new Set(flashcards.map((card) => card.category))].map(
                  (category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedCategories.has(category)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            {viewMode === 'flashcard' ? renderFlashcardView() : renderListView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchFlashcardApp;
