export default function handler(req, res) {
  const { name } = req.query;
  const quotes = [
    "A respiração é a ponte entre o corpo e a mente.",
    "Sua liberdade começa com uma única decisão.",
    "O subconsciente não dorme, ele aprende.",
    "Sinta o ar entrando, sinta a vida mudando."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json({
    message: `Olá ${name}, preparamos seu ambiente.`,
    quote: randomQuote
  });
}