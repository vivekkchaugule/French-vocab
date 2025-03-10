import React, { useState, useEffect } from "react";
import "./App.css";
import Vocab from "./Vocab-grok";

const FrenchFlashcardApp = () => {
  const flashcards = Vocab;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [showAnswerImmediately, setShowAnswerImmediately] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const [voices, setVoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showExample, setShowExample] = useState(false); // Added state for showing the example

  useEffect(() => {
    let newFilteredFlashcards = flashcards;

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
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [flashcards, selectedCategories, searchTerm]);

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


  const currentCard =
    filteredFlashcards.length > 0 ? filteredFlashcards[currentCardIndex] : null;

  return (
    <div className="flashcard-app">
      <div id="first-col">
        <div className="header">
          <h1>French Vocabulary Flashcards</h1>
        </div>

        <div className="controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for words..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button onClick={() => setSearchTerm("")} className="clear-button">
              Clear
            </button>
          </div>

          <div className="category-filters">
            <button
              className={selectedCategories.size === 0 ? "active" : ""}
              onClick={() => setSelectedCategories(new Set())}
            >
              All
            </button>
            {[...new Set(flashcards.map((card) => card.category))].map(
              (category) => (
                <button
                  key={category}
                  className={selectedCategories.has(category) ? "active" : ""}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div id="second-col">
        <div className="card-container">
          {currentCard ? (
            <div
              className={`flashcard ${isFlipped ? "flipped" : ""}`}
              onClick={
                !showAnswerImmediately && !showExample ? flipCard : undefined
              }
            >
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <p className="card-text">{currentCard.french}</p>
                  <button
                    className="audio-button"
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
                    <>
                      <p className="card-text">{currentCard.meaning}</p>
                      <p className="category-text">
                        Category: {currentCard.category}
                      </p>
                      <div className="example-text">
                        Example: {currentCard.example}
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
                      <p className="example-meaning">
                        Example: {currentCard.exampleMeaning}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="no-cards">No flashcards to display.</div>
          )}
        </div>
        <div className="card-navigation">
          <button
            onClick={prevCard}
            disabled={currentCardIndex === 0}
            className="nav-button"
          >
            ← Previous
          </button>
          <span className="card-counter">
            {filteredFlashcards.length > 0
              ? `${currentCardIndex + 1} / ${filteredFlashcards.length}`
              : "0/0"}
          </span>
          <button
            onClick={nextCard}
            disabled={filteredFlashcards.length === 0}
            className="nav-button"
          >
            Next →
          </button>
        </div>
        {/* <div className="options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showAnswerImmediately}
              onChange={handleShowAnswerChange}
            />
            Show Answer Immediately
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default FrenchFlashcardApp;
