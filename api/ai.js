import * as googleTTS from 'google-tts-api';
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Nome é obrigatório' });

  const text = `Olá ${name}. Bem-vindo ao primeiro protocolo. Durante os próximos minutos, seu cérebro começará a aprender uma nova forma de responder aos antigos gatilhos.`;

  try {
    const url = googleTTS.getAudioUrl(text, { lang: 'pt-BR', slow: false, host: 'https://translate.google.com' });
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar áudio' });
  }
}
