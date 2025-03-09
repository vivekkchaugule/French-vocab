import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

const FrenchFlashcardApp = () => {
  const flashcards = useMemo(
    () => [
      { french: "avoir", meaning: "to have", category: "Verbs" },
      { french: "mal", meaning: "bad, badly, wrong", category: "Adjectives" },
      { french: "vraiment", meaning: "really, truly", category: "Adverbs" },
      {
        french: "sens",
        meaning: "direction, meanings, smell",
        category: "Nouns",
      },
      { french: "court", meaning: "run, jogs, is running", category: "Verbs" },
      { french: "couleur", meaning: "color", category: "Nouns" },
      { french: "jambe", meaning: "leg", category: "Body Parts" },
      { french: "long", meaning: "long", category: "Adjectives" },
      { french: "sympa", meaning: "nice", category: "Adjectives" },
      { french: "nez", meaning: "nose, headland", category: "Body Parts" },
      { french: "œil", meaning: "eye", category: "Body Parts" },
      { french: "yeux", meaning: "eyes", category: "Body Parts" },
      {
        french: "bouche",
        meaning: "mouth, lips, covers",
        category: "Body Parts",
      },
      { french: "visage", meaning: "face", category: "Body Parts" },
      { french: "bras", meaning: "arm", category: "Body Parts" },
      { french: "pied", meaning: "foot", category: "Body Parts" },
      {
        french: "droit",
        meaning: "right, law, straight",
        category: "Adjectives",
      },
      { french: "oreille", meaning: "ear", category: "Body Parts" },
      { french: "qu'", meaning: "only, that, than", category: "Other" },
      { french: "papa", meaning: "dad, father, daddy", category: "Family" },
      { french: "maman", meaning: "mom, mum, mommy", category: "Family" },
      { french: "moins", meaning: "fewer, less", category: "Adverbs" },
      { french: "riche", meaning: "rich", category: "Adjectives" },
      {
        french: "mince",
        meaning: "thin, faint, shoot",
        category: "Adjectives",
      },
      { french: "vieux", meaning: "old", category: "Adjectives" },
      { french: "vieil", meaning: "old", category: "Adjectives" },
      { french: "ciel", meaning: "sky, heaven", category: "Nature" },
      { french: "printemps", meaning: "spring", category: "Seasons" },
      { french: "décembre", meaning: "December", category: "Months" },
      { french: "gris", meaning: "gray", category: "Colors" },
      { french: "saison", meaning: "season", category: "Seasons" },
      { french: "bleu", meaning: "blue, bruise", category: "Colors" },
      { french: "novembre", meaning: "November", category: "Months" },
      { french: "pleuvoir", meaning: "to rain", category: "Weather" },
      { french: "neiger", meaning: "to snow", category: "Weather" },
      {
        french: "faire",
        meaning: "to do, (to) make, (to) prepare",
        category: "Verbs",
      },
      { french: "pluie", meaning: "rain", category: "Weather" },
      { french: "toute la journée", meaning: "all day", category: "Time" },
      { french: "mais", meaning: "but, yet, although", category: "Other" },
      {
        french: "neige",
        meaning: "snow, (he/she/it) snows/is snowing, (he/she/it) snows",
        category: "Weather",
      },
      {
        french: "pleut",
        meaning: "rains, is raining, rain",
        category: "Weather",
      },
      {
        french: "soleil",
        meaning: "sun, Catherine wheel, grand circle",
        category: "Weather",
      },
      { french: "vent", meaning: "wind", category: "Weather" },
      { french: "nuage", meaning: "cloud", category: "Weather" },
      { french: "octobre", meaning: "October", category: "Months" },
      {
        french: "dehors",
        meaning: "outside, outside of, apart from",
        category: "Places",
      },
      { french: "automne", meaning: "fall, autumn", category: "Seasons" },
      { french: "août", meaning: "August", category: "Months" },
      {
        french: "froid",
        meaning: "cold, callous, coldness",
        category: "Weather",
      },
      {
        french: "chaud",
        meaning: "hot, warm, hot / warm",
        category: "Weather",
      },
      { french: "fait", meaning: "is, makes, made", category: "Verbs" },
      {
        french: "beau",
        meaning: "beautiful, handsome, nice",
        category: "Weather",
      },
      {
        french: "en général",
        meaning: "in general, generally",
        category: "Adverbs",
      },
      {
        french: "quart",
        meaning: "quarter, a quarter-litre bottle, a quarter-litre pitcher",
        category: "Time",
      },
      { french: "veillent", meaning: "watch", category: "Verbs" },
      { french: "réveillent", meaning: "awake", category: "Verbs" },
      { french: "dent", meaning: "tooth", category: "Body Parts" },
      { french: "coucher", meaning: "put ... to bed", category: "Verbs" },
      {
        french: "vite",
        meaning: "fast, quickly, rapidly",
        category: "Adverbs",
      },
      {
        french: "préparez",
        meaning: "make, are making, prepare",
        category: "Verbs",
      },
      { french: "cheveux", meaning: "hair, hairs", category: "Body Parts" },
      {
        french: "brosser",
        meaning: "brushing, to brush, brush",
        category: "Verbs",
      },
      {
        french: "regardons",
        meaning: "look at, look, let's watch",
        category: "Verbs",
      },
      { french: "demie", meaning: "thirty, half", category: "Time" },
      { french: "te", meaning: "you, yourself, to you", category: "Pronouns" },
      {
        french: "se",
        meaning: "themselves, himself, oneself",
        category: "Pronouns",
      },
      { french: "me", meaning: "I, at me, me", category: "Pronouns" },
      { french: "réveiller", meaning: "wake up, waking", category: "Verbs" },
      { french: "miroir", meaning: "mirror, glass", category: "Household" },
      {
        french: "faites-vous",
        meaning: 'are you doing, are you (ref to "size"), do you do',
        category: "Questions",
      },
      { french: "fais-tu", meaning: "are you doing", category: "Questions" },
      {
        french: "le soir",
        meaning: "in the evening, at night",
        category: "Time",
      },
      { french: "que", meaning: "that, what, than", category: "Questions" },
      { french: "d'habitude", meaning: "usually", category: "Adverbs" },
      {
        french: "sport",
        meaning: "sports, exercise, sport",
        category: "Activities",
      },
      { french: "le matin", meaning: "in the morning", category: "Time" },
      {
        french: "fais",
        meaning: "am making, are doing, done",
        category: "Verbs",
      },
      {
        french: "toujours",
        meaning: "always, still, anyway",
        category: "Adverbs",
      },
      {
        french: "faites",
        meaning: "made, packed, are doing",
        category: "Verbs",
      },
      { french: "bain", meaning: "bath", category: "Bathroom" },
      { french: "animaux", meaning: "animals, animals'", category: "Animals" },
      {
        french: "voici",
        meaning: "here is, here are, this is",
        category: "Other",
      },
      {
        french: "géniaux",
        meaning: "great, fantastic",
        category: "Adjectives",
      },
      { french: "juillet", meaning: "July", category: "Months" },
      {
        french: "journaux",
        meaning: "newspapers",
        category: "Reading Materials",
      },
      {
        french: "interdit",
        meaning: "prohibited, forbidden, banned",
        category: "Other",
      },
      {
        french: "réception",
        meaning: "front desk, reception",
        category: "Hotel",
      },
      { french: "animal", meaning: "animal", category: "Animals" },
      { french: "wi-fi", meaning: "Wi-Fi", category: "Hotel" },
      {
        french: "génial",
        meaning: "brilliant, awesome, great",
        category: "Adjectives",
      },
      { french: "non-fumeur", meaning: "non-smoking", category: "Hotel" },
      { french: "mot de passe", meaning: "password", category: "Other" },
      {
        french: "compris",
        meaning: "understood, included, figuring",
        category: "Other",
      },
      { french: "mai", meaning: "May", category: "Months" },
      { french: "juin", meaning: "June", category: "Months" },
      { french: "douche", meaning: "shower", category: "Bathroom" },
      { french: "propre", meaning: "own, clean", category: "Adjectives" },
      { french: "simple", meaning: "simple, straight", category: "Adjectives" },
      { french: "double", meaning: "double, pass", category: "Hotel" },
      { french: "combien de", meaning: "how many", category: "Questions" },
      { french: "nuits", meaning: "nights, night", category: "Time" },
      { french: "télévision", meaning: "TV, television", category: "Hotel" },
      { french: "adresse", meaning: "address", category: "Other" },
      { french: "réserver", meaning: "to book", category: "Verbs" },
      { french: "clé", meaning: "key", category: "Hotel" },
      { french: "serviette", meaning: "napkin, towel", category: "Restaurant" },
      { french: "joli", meaning: "pretty, lovely", category: "Adjectives" },
      {
        french: "choisissent",
        meaning: "choose, are choosing",
        category: "Verbs",
      },
      { french: "leurs", meaning: "their", category: "Pronouns" },
      {
        french: "finit",
        meaning: "finishes, is finishing, ends",
        category: "Verbs",
      },
      { french: "leur", meaning: "their, them", category: "Pronouns" },
      {
        french: "choisit",
        meaning: "chooses, is choosing, choose",
        category: "Verbs",
      },
      {
        french: "finissent",
        meaning: "finish, are finishing, finishing",
        category: "Verbs",
      },
      { french: "idée", meaning: "idea, thought", category: "Other" },
      {
        french: "finissez",
        meaning: "finish, are finishing, finishing",
        category: "Verbs",
      },
      {
        french: "finissons",
        meaning: "finish, are finishing",
        category: "Verbs",
      },
      {
        french: "choisissons",
        meaning: "choose, are choosing, let's choose",
        category: "Verbs",
      },
      { french: "dix-neuf", meaning: "nineteen", category: "Numbers" },
      {
        french: "choisissez",
        meaning: "choose, are choosing",
        category: "Verbs",
      },
      { french: "avril", meaning: "April", category: "Months" },
      { french: "date", meaning: "date", category: "Time" },
      { french: "besoin de", meaning: "need", category: "Other" },
      {
        french: "choisis",
        meaning: "choose, are choosing, am choosing",
        category: "Verbs",
      },
      {
        french: "finis",
        meaning: "finish, no more, am finishing",
        category: "Verbs",
      },
      {
        french: "horaire",
        meaning: "schedule, timetable, time",
        category: "Time",
      },
      { french: "dix-huit", meaning: "eighteen, 18", category: "Numbers" },
      {
        french: "choisir",
        meaning: "to choose, (to) select, go",
        category: "Verbs",
      },
      { french: "jet", meaning: "cast", category: "Other" },
      { french: "as besoin", meaning: "need", category: "Other" },
      {
        french: "finir",
        meaning: "to finish, (to) end, (to) complete",
        category: "Verbs",
      },
      { french: "projet", meaning: "project, plan", category: "School" },
      { french: "chef", meaning: "chef, boss", category: "Work" },
      { french: "mars", meaning: "March, Mars", category: "Months" },
      { french: "seize", meaning: "sixteen, 16", category: "Numbers" },
      { french: "besoin", meaning: "need", category: "Other" },
      { french: "dix-sept", meaning: "seventeen", category: "Numbers" },
      {
        french: "réunion",
        meaning: "Réunion (island), meeting",
        category: "Work",
      },
      { french: "salle", meaning: "room", category: "Places" },
      { french: "lentement", meaning: "slowly", category: "Adverbs" },
      { french: "comprenons", meaning: "understand", category: "Verbs" },
      {
        french: "apprenons",
        meaning: "are learning, learn, study",
        category: "Verbs",
      },
      { french: "sac à dos", meaning: "backpack", category: "School" },
      { french: "salle de classe", meaning: "classroom", category: "School" },
      { french: "plus", meaning: "more, plus (maths)", category: "Adverbs" },
      {
        french: "comprend",
        meaning: "includes, understand, include",
        category: "Verbs",
      },
      {
        french: "apprennent",
        meaning: "are learning, learn, study",
        category: "Verbs",
      },
      { french: "comprennent", meaning: "understand", category: "Verbs" },
      { french: "est-ce qu'", meaning: "is, do, does", category: "Questions" },
      {
        french: "apprend",
        meaning: "learns, is studying, learn",
        category: "Verbs",
      },
      { french: "élève", meaning: "student", category: "School" },
      { french: "tout", meaning: "everything, all, right", category: "Other" },
      { french: "comprenez", meaning: "understand", category: "Verbs" },
      { french: "est-ce que", meaning: "do, did, does", category: "Questions" },
      {
        french: "apprenez",
        meaning: "learn, study, are studying",
        category: "Verbs",
      },
      { french: "septembre", meaning: "September", category: "Months" },
      {
        french: "apprends",
        meaning: "are studying, are learning, hear",
        category: "Verbs",
      },
      { french: "comprends", meaning: "understand", category: "Verbs" },
      { french: "matière", meaning: "material, subject", category: "School" },
      { french: "dictionnaire", meaning: "dictionary", category: "School" },
      { french: "examen", meaning: "quiz, exam, test", category: "School" },
      { french: "apprendre", meaning: "to learn", category: "Verbs" },
      { french: "comprendre", meaning: "to understand", category: "Verbs" },
      { french: "cours", meaning: "class, course", category: "School" },
      { french: "leçon", meaning: "lesson", category: "School" },
      { french: "facile", meaning: "easy", category: "Adjectives" },
      {
        french: "difficile",
        meaning: "difficult, hard, challenging",
        category: "Adjectives",
      },
      { french: "année", meaning: "year", category: "Time" },
      {
        french: "cet",
        meaning: "this, that, this (before vowel)",
        category: "Other",
      },
      { french: "été", meaning: "been, summer, was", category: "Seasons" },
      {
        french: "faire de la plongée",
        meaning: "to scuba dive",
        category: "Activities",
      },
      { french: "janvier", meaning: "January", category: "Months" },
      { french: "faire du ski", meaning: "to ski", category: "Activities" },
      {
        french: "faire un voyage",
        meaning: "to take a trip",
        category: "Travel",
      },
      { french: "février", meaning: "February", category: "Months" },
      {
        french: "montagne",
        meaning: "mountain, mountains",
        category: "Nature",
      },
      { french: "hiver", meaning: "winter", category: "Seasons" },
      { french: "temps", meaning: "time, weather, tense", category: "Time" },
      { french: "mois", meaning: "month", category: "Time" },
      { french: "lui", meaning: "him, her, it", category: "Pronouns" },
      { french: "passer", meaning: "to spend, to pass", category: "Verbs" },
      { french: "rester", meaning: "to stay", category: "Verbs" },
      {
        french: "photo",
        meaning: "picture, photo, photograph",
        category: "Other",
      },
      { french: "partir", meaning: "to leave", category: "Verbs" },
      { french: "demain", meaning: "tomorrow", category: "Time" },
      { french: "voir", meaning: "to see", category: "Verbs" },
      { french: "week-end", meaning: "weekend", category: "Time" },
      { french: "prochain", meaning: "next, upcoming", category: "Time" },
      { french: "céréales", meaning: "cereal", category: "Food" },
      { french: "adorent", meaning: "love", category: "Verbs" },
      { french: "prendre", meaning: "getting, make, take", category: "Verbs" },
      { french: "yaourt", meaning: "yogurt", category: "Food" },
      { french: "fraise", meaning: "strawberry", category: "Food" },
      {
        french: "café au lait",
        meaning: "coffee with milk",
        category: "Drinks",
      },
      { french: "minérale", meaning: "mineral", category: "Other" },
      { french: "boit", meaning: "is drinking, drinks", category: "Verbs" },
      { french: "jus d'orange", meaning: "orange juice", category: "Drinks" },
      { french: "l'eau", meaning: "water", category: "Drinks" },
      {
        french: "confiture",
        meaning: "jam, marmalade, preserve",
        category: "Food",
      },
      { french: "de la brioche", meaning: "some brioche", category: "Food" },
      { french: "de la confiture", meaning: "jam", category: "Food" },
      { french: "du sucre", meaning: "some sugar", category: "Food" },
      { french: "déteste", meaning: "hate, hates", category: "Verbs" },
      { french: "préfères", meaning: "prefer", category: "Verbs" },
      { french: "brioche", meaning: "brioche", category: "Food" },
      {
        french: "beurre",
        meaning: "butter, (I) butter, (you) butter!",
        category: "Food",
      },
      { french: "miel", meaning: "honey", category: "Food" },
      { french: "du miel", meaning: "honey", category: "Food" },
      { french: "préfère", meaning: "prefer, prefers", category: "Verbs" },
      {
        french: "bois",
        meaning: "drink, are drinking, drinks",
        category: "Verbs",
      },
      { french: "détestes", meaning: "hate", category: "Verbs" },
      { french: "du café", meaning: "coffee", category: "Drinks" },
      { french: "du thé", meaning: "(some) tea, tea", category: "Drinks" },
      {
        french: "au petit déjeuner",
        meaning: "at breakfast",
        category: "Meals",
      },
      { french: "adore", meaning: "loves, love", category: "Verbs" },
      { french: "du lait", meaning: "milk", category: "Drinks" },
      { french: "nageons", meaning: "swim, are swimming", category: "Verbs" },
      { french: "dessinez", meaning: "draw", category: "Verbs" },
      { french: "nager", meaning: "to swim", category: "Verbs" },
      {
        french: "dessines",
        meaning:
          "(you) take shape/are taking shape, (you) design, (you) draw/are drawing",
        category: "Verbs",
      },
      { french: "nagent", meaning: "swim, are swimming", category: "Verbs" },
      {
        french: "nage",
        meaning: "swim, am swimming, swims",
        category: "Verbs",
      },
      { french: "dessiner", meaning: "to draw", category: "Verbs" },
      { french: "étudier", meaning: "to study", category: "Verbs" },
      { french: "étudions", meaning: "study, are studying", category: "Verbs" },
      {
        french: "écouter",
        meaning: "to listen to, to listen",
        category: "Verbs",
      },
      { french: "chanter", meaning: "to sing", category: "Verbs" },
      { french: "chantes", meaning: "sing, are singing", category: "Verbs" },
      {
        french: "chante",
        meaning: "am singing, sings, sing",
        category: "Verbs",
      },
      {
        french: "écoutes",
        meaning: "are listening to, listen to, listen",
        category: "Verbs",
      },
      { french: "visitez", meaning: "are visiting, visit", category: "Verbs" },
      { french: "visitent", meaning: "visit, are visiting", category: "Verbs" },
      {
        french: "danse",
        meaning: "am dancing, is dancing, dances",
        category: "Verbs",
      },
      { french: "danser", meaning: "to dance", category: "Verbs" },
      {
        french: "danses",
        meaning: "(you) dance/are dancing, dance, dances",
        category: "Verbs",
      },
      {
        french: "marches",
        meaning: "are walking, steps, walk",
        category: "Verbs",
      },
      {
        french: "marche",
        meaning: "work, walks, is walking",
        category: "Verbs",
      },
      {
        french: "attendre",
        meaning: "wait for, waiting, wait",
        category: "Verbs",
      },
      { french: "en retard", meaning: "late", category: "Time" },
      { french: "pouvez-vous", meaning: "can you", category: "Questions" },
      { french: "bagage", meaning: "luggage, bag", category: "Travel" },
      { french: "vol", meaning: "theft, flight, robbery", category: "Travel" },
      { french: "question", meaning: "question", category: "Questions" },
      {
        french: "venez-vous",
        meaning: "are you, do you come",
        category: "Questions",
      },
      { french: "Afrique", meaning: "Africa", category: "Places" },
      { french: "nation", meaning: "nation", category: "Other" },
      {
        french: "quelle",
        meaning: "what an, what a, what",
        category: "Questions",
      },
      { french: "destination", meaning: "destination", category: "Travel" },
      { french: "nationalité", meaning: "nationality", category: "Other" },
      { french: "profession", meaning: "profession", category: "Work" },
      { french: "Sénégal", meaning: "Senegal", category: "Places" },
      {
        french: "voyagez-vous",
        meaning: "are you traveling",
        category: "Questions",
      },
      { french: "venez", meaning: "come, are coming", category: "Verbs" },
      { french: "quel", meaning: "which", category: "Questions" },
      { french: "prénom", meaning: "first name", category: "Other" },
      { french: "nom", meaning: "name, last name", category: "Other" },
      { french: "manger", meaning: "to eat, eating, eaten", category: "Verbs" },
      { french: "voulez-vous", meaning: "do you want", category: "Questions" },
      { french: "boire", meaning: "to drink, drinking", category: "Verbs" },
      { french: "quelque chose", meaning: "something", category: "Other" },
      {
        french: "voyagez",
        meaning: "travel, are traveling",
        category: "Verbs",
      },
      { french: "pouvez", meaning: "can, may", category: "Verbs" },
      { french: "madame", meaning: "ma'am, Mrs., Ms.", category: "Other" },
      { french: "excusez-moi", meaning: "excuse me", category: "Other" },
      { french: "mademoiselle", meaning: "miss", category: "Other" },
      { french: "monsieur", meaning: "sir, gentleman, man", category: "Other" },
      { french: "de rien", meaning: "you're welcome", category: "Other" },
      { french: "salle de bain", meaning: "bathroom", category: "Places" },
      { french: "trop de", meaning: "too much, too many", category: "Other" },
      { french: "trop", meaning: "too many, too, too much", category: "Other" },
      { french: "sel", meaning: "salt", category: "Food" },
      {
        french: "de l'après-midi",
        meaning: "in the afternoon",
        category: "Time",
      },
      {
        french: "placard",
        meaning: "closet, cupboard, cabinet",
        category: "Household",
      },
      { french: "s'il te plaît", meaning: "please", category: "Other" },
      { french: "un peu de", meaning: "a little", category: "Other" },
      {
        french: "sucre",
        meaning: "sugar, sugar cube, piece of sugar",
        category: "Food",
      },
      { french: "beaucoup de", meaning: "a lot of", category: "Other" },
      { french: "lait", meaning: "milk", category: "Drinks" },
      { french: "plaît", meaning: "like, enjoy, pleases", category: "Other" },
      { french: "frigo", meaning: "fridge", category: "Household" },
      {
        french: "du soir",
        meaning: "at night, evenings, p.m",
        category: "Time",
      },
      { french: "il est", meaning: "he's, it's", category: "Other" },
      { french: "devez", meaning: "have to, must, need to", category: "Verbs" },
      {
        french: "du matin",
        meaning: "morning, in the morning, a.m.",
        category: "Time",
      },
      { french: "horloge", meaning: "clock", category: "Time" },
      {
        french: "rentre",
        meaning: "go back, fits, is going home",
        category: "Verbs",
      },
      { french: "tôt", meaning: "early", category: "Time" },
      { french: "tard", meaning: "late", category: "Time" },
      {
        french: "rentrer",
        meaning: "go back, go home to, go home",
        category: "Verbs",
      },
      { french: "heure", meaning: "time, hour", category: "Time" },
      {
        french: "sors",
        meaning: "get out, leave, are coming out",
        category: "Verbs",
      },
      { french: "sortir", meaning: "to go out", category: "Verbs" },
      {
        french: "chez",
        meaning: "to X's place, to X's house, 's",
        category: "Places",
      },
      { french: "midi", meaning: "noon", category: "Time" },
      { french: "avant", meaning: "before, for, beforehand", category: "Time" },
      { french: "minuit", meaning: "midnight", category: "Time" },
      { french: "chambre", meaning: "room, bedroom", category: "Places" },
      { french: "habitez-vous", meaning: "do you live", category: "Questions" },
      { french: "avez-vous", meaning: "do you have", category: "Questions" },
      { french: "avec qui", meaning: "with who", category: "Questions" },
      { french: "problème", meaning: "problem", category: "Other" },
      { french: "prends-tu", meaning: "do you take", category: "Questions" },
      {
        french: "étudiez-vous",
        meaning: "do you study",
        category: "Questions",
      },
      {
        french: "travailles-tu",
        meaning: "do you work",
        category: "Questions",
      },
      { french: "semaine", meaning: "week", category: "Time" },
      { french: "vas-tu", meaning: "are you going", category: "Questions" },
      { french: "sont-ils", meaning: "are they, are", category: "Questions" },
      {
        french: "est-il",
        meaning: "is he, is it, did he",
        category: "Questions",
      },
      { french: "belge", meaning: "Belgian", category: "Other" },
      { french: "pourquoi", meaning: "why", category: "Questions" },
      {
        french: "aimes-tu",
        meaning: "are you fond of, do you love, do you like",
        category: "Questions",
      },
      {
        french: "travaillent-elles",
        meaning: "do they work",
        category: "Questions",
      },
      {
        french: "parlez-vous",
        meaning: "do you speak/talk",
        category: "Questions",
      },
      {
        french: "est-elle",
        meaning: "is it, is she, did she",
        category: "Questions",
      },
      {
        french: "maintenant",
        meaning: "now, nowadays, today",
        category: "Time",
      },
      { french: "êtes-vous", meaning: "are you", category: "Questions" },
      {
        french: "québécois",
        meaning: "Quebecois, from Quebec",
        category: "Other",
      },
      { french: "voulez", meaning: "want", category: "Verbs" },
      {
        french: "tous les jours",
        meaning: "every day, daily",
        category: "Time",
      },
      {
        french: "prenez",
        meaning: "are getting, are having, getting",
        category: "Verbs",
      },
      { french: "achetez", meaning: "buy, are buying", category: "Verbs" },
      { french: "baguette", meaning: "baguette, wand", category: "Food" },
      { french: "lisez", meaning: "read, are reading", category: "Verbs" },
      { french: "nos", meaning: "our", category: "Pronouns" },
      { french: "avez", meaning: "have, get", category: "Verbs" },
      { french: "vos", meaning: "your", category: "Pronouns" },
      { french: "allez", meaning: "go, are going, come on", category: "Verbs" },
      { french: "amie", meaning: "friend", category: "Family" },
      { french: "notre", meaning: "our", category: "Pronouns" },
      { french: "marié", meaning: "groom, married", category: "Family" },
      { french: "ami", meaning: "friend", category: "Family" },
      { french: "votre", meaning: "your", category: "Pronouns" },
      {
        french: "mariée",
        meaning: "bride, married, got married",
        category: "Family",
      },
      { french: "habitez", meaning: "live, are living", category: "Verbs" },
      {
        french: "ensemble",
        meaning: "together, at the same time, cohesion",
        category: "Other",
      },
      {
        french: "aimez",
        meaning: "love (person/pet), like (thing), love",
        category: "Verbs",
      },
      {
        french: "mariés",
        meaning: "married, bride and groom",
        category: "Family",
      },
      { french: "étudiez", meaning: "study, are studying", category: "Verbs" },
      { french: "vous êtes", meaning: "you're", category: "Other" },
      {
        french: "parlez",
        meaning: "speak, are speaking, talk",
        category: "Verbs",
      },
      { french: "cuisinez", meaning: "cook, are cooking", category: "Verbs" },
      { french: "travaillez", meaning: "work, are working", category: "Verbs" },
      { french: "dansez", meaning: "dance", category: "Verbs" },
      { french: "êtes", meaning: "are", category: "Verbs" },
      {
        french: "vous",
        meaning: "you, yourselves, yourself",
        category: "Pronouns",
      },
      { french: "troisième", meaning: "third, ninth grade", category: "Other" },
      {
        french: "visiter",
        meaning: "visiting, to visit, visit",
        category: "Verbs",
      },
      { french: "lieu", meaning: "place, premises", category: "Places" },
      { french: "dangereux", meaning: "dangerous", category: "Adjectives" },
      {
        french: "trouver",
        meaning: "to find, find, finding",
        category: "Verbs",
      },
      { french: "deuxième", meaning: "second", category: "Other" },
      { french: "près", meaning: "near, close, closely", category: "Other" },
      { french: "loin", meaning: "far, far away", category: "Other" },
      { french: "pont", meaning: "bridge", category: "Places" },
      { french: "route", meaning: "road, runs", category: "Places" },
      { french: "près du", meaning: "close to the", category: "Other" },
      { french: "près de", meaning: "close to", category: "Other" },
      {
        french: "derrière",
        meaning: "behind, in the back, at the back",
        category: "Other",
      },
      { french: "habiter", meaning: "to live", category: "Verbs" },
      {
        french: "meuble",
        meaning: "piece of furniture, softer",
        category: "Household",
      },
      { french: "intéressant", meaning: "interesting", category: "Adjectives" },
      {
        french: "immeuble",
        meaning: "apartment building, building",
        category: "Places",
      },
      { french: "gauche", meaning: "left", category: "Other" },
      {
        french: "première",
        meaning: "premiere, first, eleventh grade",
        category: "Other",
      },
      {
        french: "tourner",
        meaning: "to turn, turn, (to) turn",
        category: "Verbs",
      },
      { french: "à gauche", meaning: "to the left", category: "Other" },
      {
        french: "devant",
        meaning: "in front of, ahead of, before",
        category: "Other",
      },
      { french: "à droite", meaning: "to the right", category: "Other" },
      { french: "marcher", meaning: "work, walking, works", category: "Verbs" },
      { french: "dois", meaning: "have to, need to, must", category: "Verbs" },
      { french: "aller", meaning: "to go, go, going", category: "Verbs" },
      { french: "rue", meaning: "street", category: "Places" },
      { french: "important", meaning: "important", category: "Adjectives" },
      {
        french: "parler",
        meaning: "speak, to speak, talking",
        category: "Verbs",
      },
      { french: "quatorze", meaning: "fourteen, 14", category: "Numbers" },
      { french: "quinze", meaning: "fifteen, 15", category: "Numbers" },
      { french: "ont-ils", meaning: "do they have", category: "Questions" },
      {
        french: "peux",
        meaning: "am able to, can, are able to",
        category: "Verbs",
      },
      {
        french: "brun",
        meaning: "dark, dark-haired, brown",
        category: "Colors",
      },
      { french: "treize", meaning: "thirteen", category: "Numbers" },
      { french: "quel âge", meaning: "how old", category: "Questions" },
      { french: "douze", meaning: "twelve, 12", category: "Numbers" },
      { french: "onze", meaning: "eleven, 11", category: "Numbers" },
      { french: "qui", meaning: "that, whom, who", category: "Questions" },
      { french: "as-tu", meaning: "do you have", category: "Questions" },
      { french: "venons", meaning: "come, are coming", category: "Verbs" },
      { french: "quand", meaning: "when", category: "Questions" },
      {
        french: "parlons",
        meaning: "talk, speak, let's talk",
        category: "Verbs",
      },
      { french: "n'est", meaning: "isn't", category: "Other" },
      { french: "n'", meaning: "not", category: "Other" },
      { french: "blond", meaning: "blond", category: "Colors" },
      { french: "jeune", meaning: "young", category: "Adjectives" },
      { french: "quoi", meaning: "what", category: "Questions" },
      { french: "ne", meaning: "not", category: "Other" },
      { french: "viennent", meaning: "come, are coming", category: "Verbs" },
      { french: "pas", meaning: "not, no, step", category: "Other" },
      { french: "italien", meaning: "Italian", category: "Other" },
      {
        french: "vient",
        meaning: "is coming, coming, come",
        category: "Verbs",
      },
      {
        french: "viens",
        meaning: "come, are coming, am coming",
        category: "Verbs",
      },
      { french: "japonais", meaning: "Japanese", category: "Other" },
      { french: "main", meaning: "hand", category: "Body Parts" },
      { french: "canadien", meaning: "Canadian", category: "Other" },
      { french: "rouges", meaning: "red", category: "Colors" },
      { french: "rouge", meaning: "red", category: "Colors" },
      { french: "dix", meaning: "ten, tenth", category: "Numbers" },
      {
        french: "achètes",
        meaning: "buy, buying, are buying",
        category: "Verbs",
      },
      { french: "t-shirt", meaning: "T-shirt", category: "Clothing" },
      { french: "veste", meaning: "jacket", category: "Clothing" },
      { french: "coûtent", meaning: "cost, are", category: "Verbs" },
      { french: "neuf", meaning: "nine, new, 9", category: "Numbers" },
      {
        french: "du",
        meaning: "of the, from the, about the",
        category: "Other",
      },
      { french: "achète", meaning: "am buying, buy, get", category: "Verbs" },
      { french: "jupe", meaning: "skirt", category: "Clothing" },
      {
        french: "combien",
        meaning: "how much, how many",
        category: "Questions",
      },
      { french: "huit", meaning: "eight, eighth", category: "Numbers" },
      { french: "prix", meaning: "fare, price, prizes", category: "Other" },
      { french: "coûte", meaning: "costs, cost, is", category: "Verbs" },
      { french: "sept", meaning: "seven, 7", category: "Numbers" },
      {
        french: "chers",
        meaning: "expensive, fondest",
        category: "Adjectives",
      },
      { french: "chères", meaning: "expensive", category: "Adjectives" },
      { french: "euro", meaning: "euro, euros", category: "Other" },
      { french: "chaussure", meaning: "shoe", category: "Clothing" },
      { french: "sac", meaning: "bag", category: "Clothing" },
      { french: "vêtements", meaning: "clothes", category: "Clothing" },
      { french: "six", meaning: "six, 6", category: "Numbers" },
      {
        french: "cher",
        meaning: "expensive, dear, a lot (of money)",
        category: "Adjectives",
      },
      { french: "chère", meaning: "expensive, dear", category: "Adjectives" },
      { french: "robe", meaning: "dress", category: "Clothing" },
      {
        french: "pantalon",
        meaning: "pants, pair of pants",
        category: "Clothing",
      },
      { french: "parfois", meaning: "sometimes", category: "Adverbs" },
      { french: "samedi", meaning: "Saturday", category: "Days" },
      { french: "radio", meaning: "radio", category: "Other" },
      { french: "dimanche", meaning: "Sunday", category: "Days" },
      {
        french: "écoute",
        meaning: "listens to, is listening, listen to",
        category: "Verbs",
      },
      {
        french: "écoutons",
        meaning: "listen to, listen, are listening to",
        category: "Verbs",
      },
      { french: "jeudi", meaning: "Thursday", category: "Days" },
      {
        french: "dors",
        meaning: "sleeping, sleep, are sleeping",
        category: "Verbs",
      },
      { french: "vendredi", meaning: "Friday", category: "Days" },
      { french: "lit", meaning: "reads, is reading, bed", category: "Verbs" },
      { french: "nuit", meaning: "night", category: "Time" },
      { french: "mercredi", meaning: "Wednesday", category: "Days" },
      { french: "après-midi", meaning: "afternoon", category: "Time" },
      {
        french: "lis",
        meaning: "am reading, read, are reading",
        category: "Verbs",
      },
      { french: "souvent", meaning: "often, frequently", category: "Adverbs" },
      {
        french: "journal",
        meaning: "newspaper, diary, journal",
        category: "Other",
      },
      { french: "mardi", meaning: "Tuesday", category: "Days" },
      {
        french: "joue",
        meaning: "cheek, am playing, is acting",
        category: "Verbs",
      },
      { french: "après", meaning: "after, afterwards, from", category: "Time" },
      {
        french: "jouent",
        meaning: "are playing, are acting, play",
        category: "Verbs",
      },
      { french: "soir", meaning: "night, evening, evenings", category: "Time" },
      { french: "enfant", meaning: "child, kid", category: "Family" },
      { french: "lundi", meaning: "Monday", category: "Days" },
      { french: "chaque", meaning: "each, every", category: "Other" },
      {
        french: "regardent",
        meaning: "are watching, look at, watch",
        category: "Verbs",
      },
      {
        french: "regarde",
        meaning: "am watching, look at, look",
        category: "Verbs",
      },
      { french: "télé", meaning: "TV, television", category: "Other" },
      { french: "jour", meaning: "day", category: "Time" },
      {
        french: "cuisine",
        meaning: "kitchen, cooks, is cooking",
        category: "Places",
      },
      {
        french: "cuisines",
        meaning: "cook, are cooking, cooking",
        category: "Verbs",
      },
      {
        french: "bonnes",
        meaning: "well, right, tasty",
        category: "Adjectives",
      },
      { french: "bons", meaning: "well, right, tasty", category: "Adjectives" },
      { french: "plat", meaning: "dish, flat, still", category: "Food" },
      { french: "légume", meaning: "vegetable", category: "Food" },
      { french: "bon", meaning: "good, right, tasty", category: "Adjectives" },
      {
        french: "préparent",
        meaning: "make, prepare, are making",
        category: "Verbs",
      },
      {
        french: "bonne",
        meaning: "well, right, tasty",
        category: "Adjectives",
      },
      { french: "fruit", meaning: "fruit, fruits", category: "Food" },
      { french: "pomme", meaning: "apple", category: "Food" },
      { french: "banane", meaning: "banana", category: "Food" },
      { french: "repas", meaning: "meal", category: "Meals" },
      { french: "ces", meaning: "these, those", category: "Other" },
      { french: "prêt", meaning: "ready, loan, prepared", category: "Other" },
      {
        french: "prépares",
        meaning: "make, making, are making",
        category: "Verbs",
      },
      {
        french: "prête",
        meaning: "is lending, lending, am lending",
        category: "Verbs",
      },
      {
        french: "prépare",
        meaning: "is making, makes, am making",
        category: "Verbs",
      },
      { french: "gâteau", meaning: "cake, biscuit", category: "Food" },
      { french: "cette", meaning: "this, that", category: "Other" },
      {
        french: "préparons",
        meaning: "make, let's make, are making",
        category: "Verbs",
      },
      {
        french: "déjeuner",
        meaning: "to have lunch, lunch",
        category: "Meals",
      },
      { french: "dîner", meaning: "dinner, to have dinner", category: "Meals" },
      {
        french: "prennent",
        meaning: "are getting, are having, getting",
        category: "Verbs",
      },
      {
        french: "prenons",
        meaning: "let's take, are having, getting",
        category: "Verbs",
      },
      { french: "petit déjeuner", meaning: "breakfast", category: "Meals" },
      { french: "œuf", meaning: "egg", category: "Food" },
      { french: "matin", meaning: "morning", category: "Time" },
      {
        french: "venir",
        meaning: "to come, (to) come, comes",
        category: "Verbs",
      },
      { french: "nu", meaning: "naked", category: "Adjectives" },
      {
        french: "utilise",
        meaning: "is using, am using, use",
        category: "Verbs",
      },
      { french: "utilises", meaning: "use, are using", category: "Verbs" },
      { french: "travailler", meaning: "to work", category: "Verbs" },
      { french: "numéro", meaning: "number", category: "Other" },
      {
        french: "téléphone",
        meaning: "phone, call, telephone",
        category: "Other",
      },
      {
        french: "écrivent",
        meaning: "are writing, write, writing",
        category: "Verbs",
      },
      {
        french: "écrit",
        meaning: "written, is writing, writes",
        category: "Verbs",
      },
      { french: "e-mail", meaning: "email", category: "Other" },
      { french: "portable", meaning: "phone, cell phone", category: "Other" },
      { french: "message", meaning: "message, text", category: "Other" },
      { french: "sur", meaning: "on, on top of, to", category: "Other" },
      {
        french: "écris",
        meaning: "written, writing, are writing",
        category: "Verbs",
      },
      { french: "lettre", meaning: "letter", category: "Other" },
      { french: "stylo", meaning: "pen", category: "Other" },
      { french: "ordinateur", meaning: "computer", category: "Other" },
      { french: "lègue", meaning: "leaves", category: "Other" },
      { french: "bureau", meaning: "office, desk, board", category: "Work" },
      {
        french: "travaillons",
        meaning: "work, are working",
        category: "Verbs",
      },
      { french: "collègue", meaning: "colleague, coworker", category: "Work" },
      { french: "usine", meaning: "factory", category: "Places" },
      { french: "médecin", meaning: "doctor", category: "Work" },
      { french: "chauffeur", meaning: "driver", category: "Work" },
      { french: "métier", meaning: "occupation", category: "Work" },
      { french: "des", meaning: "the, about, to the", category: "Other" },
      { french: "ouvrent", meaning: "are opening, open", category: "Verbs" },
      { french: "fleur", meaning: "flower", category: "Nature" },
      { french: "blancs", meaning: "white, blank", category: "Colors" },
      {
        french: "ouvrons",
        meaning:
          "(we) open/are opening, (we) turn on/are turning on, (we) undo/are undoing",
        category: "Verbs",
      },
      { french: "blanches", meaning: "white, blank", category: "Colors" },
      { french: "pièce", meaning: "coin, play, room", category: "Places" },
      { french: "chaise", meaning: "chair", category: "Household" },
      { french: "salon", meaning: "salon, living room", category: "Places" },
      {
        french: "ouvres",
        meaning:
          "(you) initiate/are initiating, (you) draw back/are drawing back, (you) turn on/are turning on",
        category: "Verbs",
      },
      { french: "blanche", meaning: "white, blank", category: "Colors" },
      { french: "être", meaning: "to be, being, looked", category: "Verbs" },
      {
        french: "blanc",
        meaning: "white, white (ball), white wine",
        category: "Colors",
      },
      {
        french: "ouvre",
        meaning: "is opening, opens, open",
        category: "Verbs",
      },
      { french: "fenêtre", meaning: "window", category: "Household" },
      {
        french: "porte",
        meaning: "has on, am wearing, is wearing",
        category: "Verbs",
      },
      { french: "gentilles", meaning: "kind", category: "Adjectives" },
      { french: "gentille", meaning: "kind", category: "Adjectives" },
      {
        french: "livres",
        meaning: "pounds, books, deliver",
        category: "Other",
      },
      { french: "vache", meaning: "cow", category: "Animals" },
      { french: "gentil", meaning: "kind", category: "Adjectives" },
      { french: "gentils", meaning: "kind", category: "Adjectives" },
      { french: "il y a", meaning: "there is", category: "Other" },
      { french: "voisin", meaning: "neighbor", category: "People" },
      { french: "arbre", meaning: "tree", category: "Nature" },
      { french: "veulent", meaning: "want", category: "Verbs" },
      {
        french: "château",
        meaning: "castle, manor (house), chateau",
        category: "Places",
      },
      { french: "église", meaning: "church", category: "Places" },
      {
        french: "voyageons",
        meaning: "travel, are traveling",
        category: "Verbs",
      },
      {
        french: "voyagent",
        meaning: "travel, are traveling",
        category: "Verbs",
      },
      { french: "aux", meaning: "to the, with, of the", category: "Other" },
      { french: "plage", meaning: "beach", category: "Places" },
      { french: "visites", meaning: "tours, visits, visit", category: "Verbs" },
      {
        french: "voyager",
        meaning: "traveling, travel, to travel",
        category: "Verbs",
      },
      { french: "musée", meaning: "museum", category: "Places" },
      {
        french: "visitons",
        meaning: "visit, are visiting, let's visit",
        category: "Verbs",
      },
      {
        french: "voyages",
        meaning: "travel, trips, are traveling",
        category: "Verbs",
      },
      {
        french: "vacances",
        meaning: "vacation, vacations, holidays",
        category: "Travel",
      },
      {
        french: "vont",
        meaning: "are going to, are going, going",
        category: "Verbs",
      },
      {
        french: "voyage",
        meaning: "am traveling, trip, travel",
        category: "Verbs",
      },
      {
        french: "visite",
        meaning: "am visiting, is visiting, tour",
        category: "Verbs",
      },
      { french: "Mexique", meaning: "Mexico", category: "Places" },
      {
        french: "pays",
        meaning: "country, countries, land",
        category: "Places",
      },
      { french: "Japon", meaning: "Japan", category: "Places" },
      { french: "Brésil", meaning: "Brazil", category: "Places" },
      { french: "cinq", meaning: "five, 5", category: "Numbers" },
      { french: "aujourd'hui", meaning: "today", category: "Time" },
      {
        french: "fermé",
        meaning: "closed, closed up, closed off",
        category: "Other",
      },
      { french: "quatre", meaning: "four", category: "Numbers" },
      { french: "ville", meaning: "city, town", category: "Places" },
      { french: "vélo", meaning: "bike", category: "Other" },
      {
        french: "plante",
        meaning: "plants, is planting, plant",
        category: "Nature",
      },
      { french: "vert", meaning: "green", category: "Colors" },
      {
        french: "ouvert",
        meaning: "open, opened, initiated",
        category: "Other",
      },
      { french: "hôpital", meaning: "hospital", category: "Places" },
      { french: "pharmacie", meaning: "pharmacy", category: "Places" },
      { french: "station", meaning: "station", category: "Places" },
      { french: "supermarché", meaning: "supermarket", category: "Places" },
      {
        french: "petites",
        meaning: "short, small, little",
        category: "Adjectives",
      },
      {
        french: "petite",
        meaning: "little, short, small",
        category: "Adjectives",
      },
      {
        french: "universités",
        meaning: "universities, colleges",
        category: "Places",
      },
      {
        french: "grandes",
        meaning: "great, tall, big",
        category: "Adjectives",
      },
      {
        french: "grande",
        meaning: "large, great, tall",
        category: "Adjectives",
      },
      { french: "écoles", meaning: "schools", category: "Places" },
      { french: "grand", meaning: "big, great, tall", category: "Adjectives" },
      {
        french: "petit",
        meaning: "small, little, lesser known",
        category: "Adjectives",
      },
      {
        french: "petits",
        meaning: "little, babies, short",
        category: "Adjectives",
      },
      { french: "grands", meaning: "tall, big, great", category: "Adjectives" },
      { french: "magasin", meaning: "store", category: "Places" },
      {
        french: "addition",
        meaning: "check, accumulation, addition",
        category: "Restaurant",
      },
      { french: "fromage", meaning: "cheese", category: "Food" },
      { french: "dessert", meaning: "dessert", category: "Food" },
      { french: "salade", meaning: "salad", category: "Food" },
      { french: "pain", meaning: "bread", category: "Food" },
      {
        french: "rend",
        meaning: "is making, makes, making",
        category: "Verbs",
      },
      {
        french: "prend",
        meaning: "are having, getting, takes",
        category: "Verbs",
      },
      { french: "bouteille", meaning: "bottle", category: "Drinks" },
      { french: "sandwich", meaning: "sandwich", category: "Food" },
      { french: "d'eau", meaning: "water", category: "Drinks" },
      { french: "verre", meaning: "drink, glass", category: "Drinks" },
      { french: "vin", meaning: "wine", category: "Drinks" },
      { french: "bière", meaning: "beer", category: "Drinks" },
      { french: "tasse", meaning: "cup, mug", category: "Drinks" },
      { french: "aussi", meaning: "too, as, also", category: "Other" },
      {
        french: "jus",
        meaning: "juice, fruit juice, gravy",
        category: "Drinks",
      },
      {
        french: "voudrais",
        meaning: "would like, would want",
        category: "Verbs",
      },
      {
        french: "café",
        meaning: "coffee shop, coffee, café",
        category: "Drinks",
      },
      { french: "serveur", meaning: "server, waiter", category: "Restaurant" },
      {
        french: "serveuses",
        meaning: "waitresses, servers",
        category: "Restaurant",
      },
      { french: "thé", meaning: "tea", category: "Drinks" },
      { french: "moi", meaning: "me", category: "Pronouns" },
      { french: "toilettes", meaning: "restroom", category: "Places" },
      { french: "pour", meaning: "for, to, in order to", category: "Other" },
      {
        french: "restaurants",
        meaning: "restaurants, diners",
        category: "Places",
      },
      { french: "table", meaning: "table", category: "Restaurant" },
      {
        french: "personne",
        meaning: "no one, anyone, nobody",
        category: "Other",
      },
      { french: "amusantes", meaning: "funny", category: "Adjectives" },
      {
        french: "intelligents",
        meaning: "smart, intelligent",
        category: "Adjectives",
      },
      {
        french: "contentes",
        meaning: "happy, pleased",
        category: "Adjectives",
      },
      {
        french: "intelligentes",
        meaning: "intelligent, smart",
        category: "Adjectives",
      },
      { french: "amusants", meaning: "funny", category: "Adjectives" },
      {
        french: "contents",
        meaning: "pleased with, happy, glad",
        category: "Adjectives",
      },
      { french: "américains", meaning: "American", category: "Other" },
      {
        french: "françaises",
        meaning: "French, French women",
        category: "Other",
      },
      { french: "anglaises", meaning: "English", category: "Other" },
      { french: "mexicaines", meaning: "Mexican", category: "Other" },
      { french: "mexicains", meaning: "Mexican", category: "Other" },
      { french: "américaines", meaning: "American", category: "Other" },
      { french: "amusant", meaning: "funny", category: "Adjectives" },
      {
        french: "intelligente",
        meaning: "intelligent, clever, smart",
        category: "Adjectives",
      },
      {
        french: "contente",
        meaning: "happy, glad, pleased",
        category: "Adjectives",
      },
      { french: "amusante", meaning: "funny", category: "Adjectives" },
      {
        french: "content",
        meaning: "happy, glad, pleased",
        category: "Adjectives",
      },
      {
        french: "intelligent",
        meaning: "intelligent, smart",
        category: "Adjectives",
      },
      { french: "ses", meaning: "her, one's, his", category: "Pronouns" },
      { french: "ce", meaning: "it, this, that", category: "Other" },
      {
        french: "ce sont",
        meaning: "they are, those are, these are",
        category: "Other",
      },
      { french: "bébé", meaning: "baby", category: "Family" },
      { french: "aiment", meaning: "like, love, enjoy", category: "Verbs" },
      { french: "tes", meaning: "your", category: "Pronouns" },
      { french: "mes", meaning: "my", category: "Pronouns" },
      {
        french: "parents",
        meaning: "parents, relatives, folks",
        category: "Family",
      },
      { french: "sœurs", meaning: "sisters, sisters'", category: "Family" },
      { french: "frères", meaning: "brothers, brothers'", category: "Family" },
      { french: "voitures", meaning: "cars", category: "Travel" },
      { french: "pizzas", meaning: "pizzas, pizza", category: "Food" },
      { french: "chiens", meaning: "dogs, dogs'", category: "Animals" },
      { french: "journalistes", meaning: "journalists", category: "Work" },
      { french: "ont", meaning: "get, have", category: "Verbs" },
      { french: "trains", meaning: "trains", category: "Travel" },
      { french: "étudiants", meaning: "students", category: "School" },
      { french: "étudient", meaning: "study, are studying", category: "Verbs" },
      { french: "habitent", meaning: "live, are living", category: "Verbs" },
      {
        french: "professeurs",
        meaning: "professors, teachers",
        category: "School",
      },
      { french: "étudiantes", meaning: "students", category: "School" },
      {
        french: "travaillent",
        meaning: "work, are working",
        category: "Verbs",
      },
      { french: "hommes", meaning: "men", category: "People" },
      { french: "oranges", meaning: "oranges", category: "Food" },
      { french: "mangent", meaning: "are eating, eat", category: "Verbs" },
      {
        french: "parlent",
        meaning: "are talking, speak, talking",
        category: "Verbs",
      },
      { french: "femmes", meaning: "women", category: "People" },
      { french: "elles", meaning: "hers, they, them", category: "Pronouns" },
      { french: "sont", meaning: "feel, are, is", category: "Verbs" },
      { french: "ils", meaning: "they", category: "Pronouns" },
      { french: "les", meaning: "your, the, they", category: "Other" },
      { french: "garçons", meaning: "boys", category: "People" },
      { french: "chats", meaning: "cats, cats'", category: "Animals" },
      { french: "filles", meaning: "girls", category: "People" },
      { french: "deux", meaning: "two", category: "Numbers" },
      { french: "croissants", meaning: "croissants", category: "Food" },
      { french: "trois", meaning: "three, 3", category: "Numbers" },
      {
        french: "cinéma",
        meaning: "movie theater, cinema, movies",
        category: "Places",
      },
      { french: "bus", meaning: "bus, buses", category: "Travel" },
      { french: "aimes", meaning: "like, love, enjoy", category: "Verbs" },
      { french: "zoo", meaning: "zoo", category: "Places" },
      { french: "parc", meaning: "park", category: "Places" },
      { french: "travail", meaning: "work, job", category: "Work" },
      {
        french: "boulangerie",
        meaning: "bakery, bakery trade, baker's",
        category: "Places",
      },
      {
        french: "métro",
        meaning: "subway, underground, underground train",
        category: "Travel",
      },
      { french: "sommes", meaning: "are", category: "Verbs" },
      { french: "allons", meaning: "going, are going, go", category: "Verbs" },
      { french: "banque", meaning: "bank", category: "Places" },
      {
        french: "école",
        meaning: "school, education system, training",
        category: "Places",
      },
      { french: "veux", meaning: "want", category: "Verbs" },
      {
        french: "eux",
        meaning: "themselves, them, they",
        category: "Pronouns",
      },
      { french: "livre", meaning: "book, pound", category: "Other" },
      { french: "musique", meaning: "music", category: "Other" },
      {
        french: "chocolat",
        meaning: "chocolate, chocolate-brown (coloured)",
        category: "Food",
      },
      { french: "aime", meaning: "loves, likes, like", category: "Verbs" },
      { french: "aimons", meaning: "like, love", category: "Verbs" },
      { french: "lire", meaning: "to read", category: "Verbs" },
      { french: "habitons", meaning: "live, are living", category: "Verbs" },
      {
        french: "mangeons",
        meaning: "eat, eating, are eating",
        category: "Verbs",
      },
      { french: "avons", meaning: "get, have", category: "Verbs" },
      { french: "nous", meaning: "we, us, our", category: "Pronouns" },
      { french: "voulons", meaning: "want, want to", category: "Verbs" },
      { french: "d'", meaning: "of, any, with", category: "Other" },
      { french: "jardin", meaning: "garden, yard, park", category: "Places" },
      { french: "appartement", meaning: "apartment, flat", category: "Places" },
      { french: "maison", meaning: "house, home, firm", category: "Places" },
      { french: "dans", meaning: "in, to, of", category: "Other" },
      { french: "veut", meaning: "wants, want", category: "Verbs" },
      { french: "grand-mère", meaning: "grandmother", category: "Family" },
      { french: "grand-père", meaning: "grandfather", category: "Family" },
      { french: "chouette", meaning: "owl", category: "Animals" },
      { french: "animal de compagnie", meaning: "pet", category: "Animals" },
      { french: "mari", meaning: "husband", category: "Family" },
      { french: "fils", meaning: "son, sons, cords", category: "Family" },
      { french: "de", meaning: "of, to, in", category: "Other" },
      { french: "ma", meaning: "my", category: "Pronouns" },
      { french: "sœur", meaning: "sister", category: "Family" },
      { french: "mère", meaning: "mother, mom", category: "Family" },
      { french: "sa", meaning: "her, his, your", category: "Pronouns" },
      {
        french: "famille",
        meaning: "family, body, people",
        category: "Family",
      },
      {
        french: "ta",
        meaning: "your, tone (of voice), key",
        category: "Pronouns",
      },
      { french: "son", meaning: "her, one's, sound", category: "Pronouns" },
      { french: "son", meaning: "her, one's, sound", category: "Pronouns" }, // Duplicated in the source, kept here.
      { french: "chat", meaning: "cat", category: "Animals" },
      {
        french: "ton",
        meaning: "your, tone (of voice), shade",
        category: "Pronouns",
      },
      { french: "chien", meaning: "dog", category: "Animals" },
      { french: "frère", meaning: "brother", category: "Family" },
      { french: "père", meaning: "father, dad", category: "Family" },
      { french: "mon", meaning: "my", category: "Pronouns" },
      { french: "la", meaning: "her, the, it", category: "Other" },
      {
        french: "comment",
        meaning: "how, how come, what",
        category: "Questions",
      },
      { french: "ça va", meaning: "how's it going", category: "Questions" },
      { french: "tu", meaning: "you", category: "Pronouns" },
      { french: "où", meaning: "where, when", category: "Questions" },
      { french: "je", meaning: "I", category: "Pronouns" },
      { french: "es", meaning: "are", category: "Verbs" },
      { french: "suis", meaning: "am", category: "Verbs" },
      { french: "est", meaning: "is, east, is from", category: "Verbs" },
      {
        french: "bonjour",
        meaning: "hello, good morning, good day",
        category: "Greetings",
      },
      { french: "au revoir", meaning: "goodbye", category: "Greetings" },
      { french: "merci", meaning: "thank you, thanks", category: "Greetings" },
      { french: "et", meaning: "and", category: "Other" },
      { french: "bien", meaning: "well, good, really", category: "Other" },
      { french: "très", meaning: "very", category: "Adverbs" },
      { french: "un", meaning: "one, a, an", category: "Numbers" },
      { french: "une", meaning: "one, a, an", category: "Numbers" },
      { french: "le", meaning: "it, the, him", category: "Other" },
      { french: "l'", meaning: "the, it, him", category: "Other" },
      { french: "oui", meaning: "yes", category: "Other" },
      { french: "non", meaning: "no", category: "Other" },
      { french: "a", meaning: "has, gets", category: "Verbs" },
    ],
    []
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [showAnswerImmediately, setShowAnswerImmediately] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState(null); // Store the speechSynthesis object
  const [voices, setVoices] = useState([]); // Store available voices

  useEffect(() => {
    setFilteredFlashcards(
      flashcards.filter(
        (card) =>
          selectedCategories.size === 0 || selectedCategories.has(card.category)
      )
    );
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [flashcards, selectedCategories]);

  useEffect(() => {
    // Initialize SpeechSynthesis when the component mounts
    if ("speechSynthesis" in window) {
      setSpeechSynthesis(window.speechSynthesis);

      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };
      //  Load voices.  This can be asynchronous, so we use an event listener.
      loadVoices(); // Try loading immediately
      window.speechSynthesis.onvoiceschanged = loadVoices; // ...and when voices change
    } else {
      console.error("SpeechSynthesis is not supported in this browser.");
      alert(
        "Speech synthesis is not supported in your browser. Please use a modern browser like Chrome, Firefox, or Safari."
      ); //User friendly error
    }
    // Cleanup function to remove event listener when component unmounts
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const playAudio = (text) => {
    if (!speechSynthesis) {
      console.error("SpeechSynthesis is not initialized.");
      return; //Prevent further action if it is not available.
    }

    // Stop any currently playing audio
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";

    // Find a French voice if available
    const frenchVoice = voices.find((voice) => voice.lang.startsWith("fr")); //Use startsWith for broader match (fr-CA, fr-FR, etc)
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }
    // utterance.rate = 0.8;  // Optional: Adjust rate
    // utterance.pitch = 1; // Optional: Adjust pitch

    // Start speaking
    speechSynthesis.speak(utterance);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentCardIndex < filteredFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      speechSynthesis?.cancel(); // Stop any audio from previous card
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      speechSynthesis?.cancel(); // Stop any audio
    }
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

  const handleShowAnswerChange = () => {
    setShowAnswerImmediately(!showAnswerImmediately);
    setIsFlipped(true);
  };

  const currentCard =
    filteredFlashcards.length > 0 ? filteredFlashcards[currentCardIndex] : null;

  return (
    <div className="flashcard-app">
      <h1>French Flashcards</h1>

      <div className="category-filters">
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

      <div className="card-navigation">
        <button onClick={prevCard} disabled={currentCardIndex === 0}>
          Previous
        </button>
        <span>
          Card {currentCardIndex + 1} of {filteredFlashcards.length}
        </span>
        <button
          onClick={nextCard}
          disabled={currentCardIndex === filteredFlashcards.length - 1}
        >
          Next
        </button>
      </div>

      <label>
        <input
          type="checkbox"
          checked={showAnswerImmediately}
          onChange={handleShowAnswerChange}
        />
        Show Answer Immediately
      </label>

      {currentCard ? (
        <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={!showAnswerImmediately ? flipCard : undefined}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p>{currentCard.french}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(currentCard.french);
                }}
              >
                Play Audio
              </button>
            </div>
            <div className="flashcard-back">
              <p>{currentCard.meaning}</p>
              <p>Category: {currentCard.category}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>No flashcards to display. Add some or select a category.</div>
      )}
    </div>
  );
};

export default FrenchFlashcardApp;
