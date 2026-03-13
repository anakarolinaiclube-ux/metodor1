import googleTTS from "google-tts-api";

export default function handler(req, res) {

  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  const text = `Olá ${name}. Bem vindo ao primeiro protocolo. Respire profundamente e prepare sua mente para uma nova percepção de liberdade.`;

  const url = googleTTS.getAudioUrl(text, {
    lang: "pt-BR",
    slow: false,
  });

  res.status(200).json({ url });

}
