/**
 * Google Sheets API Integration
 * Handles communication with Google Sheets via Apps Script Web App
 */

/**
 * Parse spreadsheet data format: Wort;;;Übersetzung;;;;Weitere Erklärung;;;Rating_General;;;;Last_Review_date;;;;Next_Review_date
 * @param {string} row - Row data from spreadsheet
 * @returns {Object} Parsed card object
 */
export function parseCardRow(row) {
  const parts = row.split(';;;;');
  
  if (parts.length < 2) {
    console.error('Invalid row format:', row);
    return null;
  }

  return {
    word: parts[0]?.trim() || '',
    translation: parts[1]?.trim() || '',
    explanation: parts[2]?.trim() || '',
    ratingGeneral: parseInt(parts[3]) || 0,
    lastReviewDate: parts[4]?.trim() || null,
    nextReviewDate: parts[5]?.trim() || null,
    interval: parseInt(parts[6]) || 0,
    easeFactor: parseFloat(parts[7]) || 2.5,
    repetitions: parseInt(parts[8]) || 0
  };
}

/**
 * Format card object to spreadsheet row format
 * @param {Object} card - Card object
 * @returns {string} Formatted row string
 */
export function formatCardRow(card) {
  return [
    card.word || '',
    card.translation || '',
    card.explanation || '',
    card.ratingGeneral || 0,
    card.lastReviewDate || '',
    card.nextReviewDate || '',
    card.interval || 0,
    card.easeFactor || 2.5,
    card.repetitions || 0
  ].join(';;;;');
}

/**
 * Fetch all cards from Google Sheets
 * @param {string} scriptUrl - URL of the deployed Apps Script web app
 * @returns {Promise<Array>} Array of card objects
 */
export async function fetchCardsFromSheet(scriptUrl) {
  try {
    const response = await fetch(`${scriptUrl}?action=getAll`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to fetch cards');
    }

    return data.cards.map(row => parseCardRow(row)).filter(card => card !== null);
  } catch (error) {
    console.error('Error fetching cards from sheet:', error);
    throw error;
  }
}

/**
 * Add a new card to Google Sheets
 * @param {string} scriptUrl - URL of the deployed Apps Script web app
 * @param {Object} card - Card object to add
 * @returns {Promise<Object>} Response from API
 */
export async function addCardToSheet(scriptUrl, card) {
  try {
    const cardData = formatCardRow(card);
    const url = `${scriptUrl}?action=add&card=${encodeURIComponent(cardData)}`;
    
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to add card');
    }

    return data;
  } catch (error) {
    console.error('Error adding card to sheet:', error);
    throw error;
  }
}

/**
 * Update an existing card in Google Sheets
 * @param {string} scriptUrl - URL of the deployed Apps Script web app
 * @param {number} rowIndex - Row index (0-based, excluding header)
 * @param {Object} card - Updated card object
 * @returns {Promise<Object>} Response from API
 */
export async function updateCardInSheet(scriptUrl, rowIndex, card) {
  try {
    const cardData = formatCardRow(card);
    const url = `${scriptUrl}?action=update&rowIndex=${rowIndex}&card=${encodeURIComponent(cardData)}`;
    
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to update card');
    }

    return data;
  } catch (error) {
    console.error('Error updating card in sheet:', error);
    throw error;
  }
}

/**
 * Delete a card from Google Sheets
 * @param {string} scriptUrl - URL of the deployed Apps Script web app
 * @param {number} rowIndex - Row index to delete (0-based, excluding header)
 * @returns {Promise<Object>} Response from API
 */
export async function deleteCardFromSheet(scriptUrl, rowIndex) {
  try {
    const url = `${scriptUrl}?action=delete&rowIndex=${rowIndex}`;
    
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to delete card');
    }

    return data;
  } catch (error) {
    console.error('Error deleting card from sheet:', error);
    throw error;
  }
}

/**
 * Generate Google Apps Script template
 * @returns {string} Apps Script code
 */
export function generateAppsScriptTemplate() {
  return `// Google Apps Script for Vocabulary Deck
// Deploy as Web App with "Anyone" access

function doGet(e) {
  const action = e.parameter.action;
  
  try {
    if (action === 'getAll') {
      return createJsonResponse(getAllCards());
    }
    
    if (action === 'add') {
      const cardData = e.parameter.card;
      return createJsonResponse(addCard(cardData));
    }
    
    if (action === 'update') {
      const rowIndex = parseInt(e.parameter.rowIndex);
      const cardData = e.parameter.card;
      return createJsonResponse(updateCard(rowIndex, cardData));
    }
    
    if (action === 'delete') {
      const rowIndex = parseInt(e.parameter.rowIndex);
      return createJsonResponse(deleteCard(rowIndex));
    }
    
    return createJsonResponse({ success: false, error: 'Invalid action' });
  } catch (error) {
    return createJsonResponse({ success: false, error: error.toString() });
  }
}

function doPost(e) {
  // Redirect POST to GET for CORS compatibility
  return doGet(e);
}

function createJsonResponse(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function getAllCards() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  const cards = data.slice(1).map(row => row.join(';;;;'));
  
  return { success: true, cards: cards };
}

function addCard(cardData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = cardData.split(';;;;');
  sheet.appendRow(values);
  
  return { success: true, message: 'Card added successfully' };
}

function updateCard(rowIndex, cardData) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = cardData.split(';;;;');
  const actualRow = rowIndex + 2; // +1 for header, +1 for 1-based indexing
  
  for (let i = 0; i < values.length; i++) {
    sheet.getRange(actualRow, i + 1).setValue(values[i]);
  }
  
  return { success: true, message: 'Card updated successfully' };
}

function deleteCard(rowIndex) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const actualRow = rowIndex + 2; // +1 for header, +1 for 1-based indexing
  sheet.deleteRow(actualRow);
  
  return { success: true, message: 'Card deleted successfully' };
}
`;
}

/**
 * Generate template spreadsheet structure
 * @returns {Array} Header row for spreadsheet
 */
export function getSpreadsheetHeaders() {
  return [
    'Wort',
    'Übersetzung',
    'Weitere Erklärung',
    'Rating_General',
    'Last_Review_date',
    'Next_Review_date',
    'Interval',
    'Ease_Factor',
    'Repetitions'
  ];
}

