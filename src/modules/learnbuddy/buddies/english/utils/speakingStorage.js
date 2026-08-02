/**
 * Speaking Storage for English Buddy
 * Stores voice conversations, audio messages, and analysis results
 */

const STORAGE_KEY = 'english_speaking_conversations';

/**
 * Get all saved conversations
 */
export function getAllConversations() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Save a new conversation
 */
export function saveConversation(conversationData) {
  const conversations = getAllConversations();
  const newConversation = {
    id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...conversationData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  conversations.push(newConversation);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  return newConversation;
}

/**
 * Update an existing conversation
 */
export function updateConversation(conversationId, updates) {
  const conversations = getAllConversations();
  const index = conversations.findIndex(c => c.id === conversationId);
  if (index === -1) return null;
  
  conversations[index] = {
    ...conversations[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  return conversations[index];
}

/**
 * Get a single conversation by ID
 */
export function getConversation(conversationId) {
  const conversations = getAllConversations();
  return conversations.find(c => c.id === conversationId) || null;
}

/**
 * Delete a conversation
 */
export function deleteConversation(conversationId) {
  const conversations = getAllConversations();
  const filtered = conversations.filter(c => c.id !== conversationId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Get conversations by topic
 */
export function getConversationsByTopic(topicId) {
  const conversations = getAllConversations();
  return conversations.filter(c => c.topicId === topicId);
}

/**
 * Add a message to a conversation
 */
export function addMessageToConversation(conversationId, message) {
  const conversation = getConversation(conversationId);
  if (!conversation) return null;
  
  if (!conversation.messages) {
    conversation.messages = [];
  }
  
  const newMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...message,
    timestamp: new Date().toISOString()
  };
  
  conversation.messages.push(newMessage);
  updateConversation(conversationId, { messages: conversation.messages });
  return newMessage;
}

/**
 * Update a message in a conversation (e.g., add analysis)
 */
export function updateMessageInConversation(conversationId, messageId, updates) {
  const conversation = getConversation(conversationId);
  if (!conversation || !conversation.messages) return null;
  
  const messageIndex = conversation.messages.findIndex(m => m.id === messageId);
  if (messageIndex === -1) return null;
  
  conversation.messages[messageIndex] = {
    ...conversation.messages[messageIndex],
    ...updates
  };
  
  updateConversation(conversationId, { messages: conversation.messages });
  return conversation.messages[messageIndex];
}



