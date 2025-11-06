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


