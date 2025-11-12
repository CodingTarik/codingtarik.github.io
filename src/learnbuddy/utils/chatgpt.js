/**
 * ChatGPT API Integration for translations and AI features
 */

/**
 * Translate text using ChatGPT API
 * @param {string} text - The text to translate
 * @param {string} targetLanguage - Target language code (e.g., 'de', 'es', 'fr')
 * @param {string} apiKey - OpenAI API key
 * @param {string} detailLevel - 'simple', 'normal', or 'detailed'
 * @returns {Promise<Object>} Translation result with text and optional phonetics
 */
export async function translateWithChatGPT(text, targetLanguage, apiKey, detailLevel = 'normal') {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  const languageNames = {
    de: 'German',
    es: 'Spanish',
    fr: 'French',
    it: 'Italian',
    pt: 'Portuguese',
    ru: 'Russian',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    ar: 'Arabic',
    tr: 'Turkish'
  };

  const targetLanguageName = languageNames[targetLanguage] || targetLanguage;
  
  let systemPrompt = `You are a helpful translation assistant. Translate English text to ${targetLanguageName}.`;
  let userPrompt = '';

  // Adjust prompt based on detail level
  switch (detailLevel) {
    case 'simple':
      userPrompt = `Translate this English text to ${targetLanguageName}. Provide ONLY the translation, nothing else:\n\n"${text}"`;
      break;
    
    case 'detailed':
      userPrompt = `Translate this English text to ${targetLanguageName}. Provide:
1. The translation
2. A brief explanation of key words or idioms (if any)
3. Alternative translations (if applicable)

English text: "${text}"`;
      break;
    
    case 'normal':
    default:
      userPrompt = `Translate this English text to ${targetLanguageName}:\n\n"${text}"`;
      break;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using gpt-4o-mini for cost-effectiveness
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.3, // Lower temperature for more consistent translations
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (response.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await response.json();
    const translation = data.choices[0].message.content.trim();

    return {
      translation,
      detailLevel,
      model: 'gpt-4o-mini'
    };

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

/**
 * Get pronunciation help for a word using ChatGPT
 * @param {string} word - The word to get pronunciation for
 * @param {string} apiKey - OpenAI API key
 * @returns {Promise<Object>} Pronunciation guide
 */
export async function getPronunciation(word, apiKey) {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key.');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a pronunciation expert. Provide IPA (International Phonetic Alphabet) transcription and simple pronunciation guide.'
          },
          {
            role: 'user',
            content: `Provide the IPA transcription and a simple pronunciation guide for the English word: "${word}"\n\nFormat your response as:\nIPA: [transcription]\nSimple: (simple guide)`
          }
        ],
        temperature: 0.1,
        max_tokens: 100
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get pronunciation');
    }

    const data = await response.json();
    const result = data.choices[0].message.content.trim();
    
    // Parse the response
    const ipaMatch = result.match(/IPA:\s*\[(.*?)\]/);
    const simpleMatch = result.match(/Simple:\s*\((.*?)\)/);

    return {
      ipa: ipaMatch ? ipaMatch[1] : '',
      simple: simpleMatch ? simpleMatch[1] : result
    };

  } catch (error) {
    console.error('Pronunciation error:', error);
    return null;
  }
}

/**
 * Check if API key is valid
 * @param {string} apiKey - OpenAI API key to validate
 * @returns {Promise<boolean>} Whether the key is valid
 */
export async function validateApiKey(apiKey) {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    return false;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Correct and improve English text using ChatGPT
 * @param {string} text - The text to correct
 * @param {string} apiKey - OpenAI API key
 * @returns {Promise<Object>} Correction result with grammar fixes, suggestions, and improved version
 */
export async function correctTextWithChatGPT(text, apiKey) {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  const systemPrompt = `You are an expert English teacher and writing assistant. Your task is to help students improve their English writing by:
1. Correcting grammar and spelling errors
2. Providing general improvement suggestions
3. Creating an improved version of the text

Format your response as JSON with the following structure:
{
  "grammarCorrections": "List of grammar and spelling errors found, with explanations",
  "suggestions": "General suggestions for improvement (style, clarity, vocabulary, etc.)",
  "improvedVersion": "The complete improved version of the text"
}`;

  const userPrompt = `Please correct and improve the following English text:\n\n"${text}"\n\nProvide your response as valid JSON only, no additional text.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (response.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await response.json();
    const resultText = data.choices[0].message.content.trim();
    
    // Parse JSON response
    let result;
    try {
      result = JSON.parse(resultText);
    } catch (parseError) {
      // Fallback: try to extract JSON from markdown code blocks
      const jsonMatch = resultText.match(/```json\s*([\s\S]*?)\s*```/) || resultText.match(/```\s*([\s\S]*?)\s*```/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[1]);
      } else {
        // Last resort: return as plain text
        result = {
          grammarCorrections: 'Could not parse corrections',
          suggestions: 'Could not parse suggestions',
          improvedVersion: resultText
        };
      }
    }

    return {
      grammarCorrections: result.grammarCorrections || result.grammar_corrections || '',
      suggestions: result.suggestions || '',
      improvedVersion: result.improvedVersion || result.improved_version || resultText,
      model: 'gpt-4o-mini'
    };

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

/**
 * Generate a good example text for a writing topic
 * @param {Object} topic - The writing topic object
 * @param {string} apiKey - OpenAI API key
 * @param {string} language - Language code ('en' or 'de')
 * @returns {Promise<string>} Example text
 */
export async function generateExampleText(topic, apiKey, language = 'en') {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  const topicTitle = topic.title[language] || topic.title.en;
  const topicTips = topic.tips[language] || topic.tips.en;
  const tense = topic.tense;
  const typicalSentences = topic.typicalSentences.join('\n- ');
  const vocabulary = topic.vocabulary.join(', ');

  const systemPrompt = `You are an expert English teacher. Your task is to write a high-quality example text that demonstrates excellent English writing for a specific topic and writing style.`;

  const userPrompt = `Write a high-quality example text for the following writing topic:

Topic: ${topicTitle}
Category: ${topic.category}
Tense to use: ${tense}

Guidelines:
${topicTips}

Typical sentences that might be used:
- ${typicalSentences}

Useful vocabulary: ${vocabulary}

Requirements:
- Write a complete, well-structured text (approximately 150-300 words)
- Use the specified tense correctly
- Include some of the suggested vocabulary naturally
- Make it engaging and well-written
- Follow the style appropriate for this topic type
- Write ONLY the example text, no explanations or additional comments

Write the example text now:`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7, // Slightly higher for more creative variation
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (response.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await response.json();
    const exampleText = data.choices[0].message.content.trim();
    
    // Clean up the text (remove any markdown formatting or quotes if present)
    let cleanedText = exampleText;
    // Remove markdown code blocks if present
    cleanedText = cleanedText.replace(/```[\w]*\n?/g, '');
    // Remove quotes at start/end if present
    cleanedText = cleanedText.replace(/^["']|["']$/g, '');

    return cleanedText.trim();

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

/**
 * Transcribe audio using OpenAI Whisper API
 * @param {Blob} audioBlob - The audio file as a Blob
 * @param {string} apiKey - OpenAI API key
 * @returns {Promise<string>} Transcribed text
 */
export async function transcribeAudio(audioBlob, apiKey) {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  try {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-1');
    formData.append('language', 'en');

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (response.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await response.json();
    return data.text;

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

/**
 * Convert audio blob to WAV format
 * @param {Blob} audioBlob - The audio file as a Blob
 * @returns {Promise<Blob>} WAV formatted audio blob
 */
async function convertToWav(audioBlob) {
  try {
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Decode the audio data
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    
    // Convert to WAV
    const wavBuffer = audioBufferToWav(audioBuffer);
    return new Blob([wavBuffer], { type: 'audio/wav' });
  } catch (error) {
    console.error('Error converting to WAV:', error);
    // Fallback: try to convert using MediaRecorder if available
    throw new Error('Could not convert audio to WAV format');
  }
}

/**
 * Convert AudioBuffer to WAV format
 * @param {AudioBuffer} audioBuffer - The audio buffer to convert
 * @returns {ArrayBuffer} WAV formatted array buffer
 */
function audioBufferToWav(audioBuffer) {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;
  
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  
  const length = audioBuffer.length;
  const arrayBuffer = new ArrayBuffer(44 + length * numChannels * bytesPerSample);
  const view = new DataView(arrayBuffer);
  
  // WAV header
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length * numChannels * bytesPerSample, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, length * numChannels * bytesPerSample, true);
  
  // Convert audio data
  let offset = 44;
  for (let i = 0; i < length; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(channel)[i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }
  
  return arrayBuffer;
}

/**
 * Analyze spoken English audio for grammar, pronunciation, and improvement tips
 * Uses Whisper for transcription (with strict no-correction prompt) and GPT-4o for analysis
 * @param {Blob} audioBlob - The audio file as a Blob
 * @param {string} apiKey - OpenAI API key
 * @returns {Promise<Object>} Analysis result with transcription, corrections, and tips
 */
export async function analyzeSpokenEnglish(audioBlob, apiKey) {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  try {
    // Step 1: Transcribe with Whisper using a strict prompt to preserve errors
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-1');
    formData.append('language', 'en');
    // Critical: Add prompt to preserve errors and not auto-correct
    formData.append('prompt', 'Transcribe exactly what you hear. Do NOT correct grammar, vocabulary, or pronunciation errors. Preserve all mistakes exactly as spoken, including wrong words, grammatical errors, and mispronunciations. This is for language learning analysis where we need to see the actual mistakes.');

    const transcriptionResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      body: formData
    });

    if (!transcriptionResponse.ok) {
      const errorData = await transcriptionResponse.json();
      
      if (transcriptionResponse.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (transcriptionResponse.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (transcriptionResponse.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`Transcription error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const transcriptionData = await transcriptionResponse.json();
    const rawTranscription = transcriptionData.text;

    // Step 2: Analyze the transcription with GPT-4o
    const systemPrompt = `You are an expert English teacher specializing in spoken English. Your task is to analyze a student's spoken English transcription and provide:
1. Grammar and vocabulary corrections
2. Pronunciation tips (based on common errors that might be inferred)
3. Naturalness and fluency suggestions
4. An improved version of what they said

IMPORTANT: The transcription you receive may contain errors. Analyze it as-is and provide corrections and improvements.

Format your response as JSON with the following structure:
{
  "transcription": "The transcription as provided (preserving original errors)",
  "grammarCorrections": "List of grammar and vocabulary errors found, with explanations",
  "pronunciationTips": "Tips for pronunciation improvement",
  "fluencySuggestions": "Suggestions for making the speech more natural and fluent",
  "improvedVersion": "A more natural and correct version of what they said"
}`;

    const userPrompt = `Please analyze this spoken English transcription. The transcription may contain errors - analyze it as-is and provide detailed feedback:\n\n"${rawTranscription}"`;

    const analysisResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000
      })
    });

    if (!analysisResponse.ok) {
      const errorData = await analysisResponse.json();
      
      if (analysisResponse.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (analysisResponse.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (analysisResponse.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await analysisResponse.json();
    const resultText = data.choices[0].message.content.trim();
    
    // Parse JSON response
    let result;
    try {
      result = JSON.parse(resultText);
    } catch (parseError) {
      // Fallback: try to extract JSON from markdown code blocks
      const jsonMatch = resultText.match(/```json\s*([\s\S]*?)\s*```/) || resultText.match(/```\s*([\s\S]*?)\s*```/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[1]);
      } else {
        // Last resort: return as plain text
        result = {
          transcription: rawTranscription,
          grammarCorrections: 'Could not parse corrections',
          pronunciationTips: 'Could not parse pronunciation tips',
          fluencySuggestions: 'Could not parse suggestions',
          improvedVersion: resultText
        };
      }
    }

    return {
      transcription: result.transcription || rawTranscription,
      grammarCorrections: result.grammarCorrections || result.grammar_corrections || '',
      pronunciationTips: result.pronunciationTips || result.pronunciation_tips || '',
      fluencySuggestions: result.fluencySuggestions || result.fluency_suggestions || '',
      improvedVersion: result.improvedVersion || result.improved_version || rawTranscription,
      model: 'gpt-4o-mini'
    };

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

/**
 * Helper function to convert blob to base64
 */
async function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Generate AI voice response using OpenAI TTS API
 * @param {string} text - The text to convert to speech
 * @param {string} apiKey - OpenAI API key
 * @param {string} voice - Voice option: 'alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer' (default: 'nova')
 * @returns {Promise<Blob>} Audio blob
 */
export async function generateVoiceResponse(text, apiKey, voice = 'nova') {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: voice
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (response.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const audioBlob = await response.blob();
    return audioBlob;

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

/**
 * Generate conversational AI response for speaking practice
 * @param {string} userMessage - The user's transcribed message
 * @param {string} topicContext - Context about the speaking topic/situation
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @param {string} apiKey - OpenAI API key
 * @returns {Promise<string>} AI response text
 */
export async function generateConversationalResponse(userMessage, topicContext, conversationHistory = [], apiKey) {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    throw new Error('Invalid or missing API key. Please configure your ChatGPT API key in settings.');
  }

  const systemPrompt = `You are a friendly English conversation partner helping someone practice their speaking skills. 
You are role-playing in the following situation: ${topicContext}

Guidelines:
- Keep responses natural and conversational
- Match the formality level of the situation
- Keep responses relatively short (2-3 sentences) to encourage back-and-forth conversation
- Ask follow-up questions to keep the conversation going
- Be encouraging and supportive
- Stay in character for the situation`;

  const messages = [
    {
      role: 'system',
      content: systemPrompt
    }
  ];

  // Add conversation history (last 5 messages to keep context manageable)
  const recentHistory = conversationHistory.slice(-5);
  recentHistory.forEach(msg => {
    if (msg.role === 'user') {
      messages.push({ role: 'user', content: msg.text || msg.transcription });
    } else if (msg.role === 'assistant') {
      messages.push({ role: 'assistant', content: msg.text });
    }
  });

  // Add current user message
  messages.push({ role: 'user', content: userMessage });

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 150
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your ChatGPT API key in settings.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again in a moment.');
      } else if (response.status === 402) {
        throw new Error('Insufficient credits. Please check your OpenAI account.');
      } else {
        throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
      }
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();

  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}

