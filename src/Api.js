import { NEWS_API_KEY } from './components/config';

export const getNewsArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};