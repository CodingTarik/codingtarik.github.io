export default {
  id: 'named-entity-recognition-ner',
  title: 'What is Named Entity Recognition (NER)?',
  description: 'Learn about Named Entity Recognition (NER), a fundamental NLP technique for identifying and classifying named entities in text, with examples and applications.',
  date: '2024-09-18',
  author: 'Tarik',
  categories: ['Computer Science', 'Natural Language Processing', 'Machine Learning', 'NLP'],
  thumbnail: null,
  featured: false,
  keywords: ['ner', 'named entity recognition', 'nlp', 'natural language processing', 'text mining', 'information extraction'],
  
  content: `
# What is Named Entity Recognition (NER)?

Named Entity Recognition (NER) is a fundamental task in Natural Language Processing (NLP) that involves identifying and classifying named entities in text into predefined categories such as person names, organizations, locations, dates, and more.

## What are Named Entities?

Named entities are real-world objects that can be denoted with a proper name. Common categories include:

- **Person** (PER): Names of people (e.g., "Barack Obama", "Albert Einstein")
- **Organization** (ORG): Companies, institutions (e.g., "Microsoft", "Harvard University")
- **Location** (LOC): Places, cities, countries (e.g., "New York", "Germany", "Mount Everest")
- **Date** (DATE): Temporal expressions (e.g., "January 2024", "yesterday", "2024-09-18")
- **Time** (TIME): Time expressions (e.g., "3 PM", "midnight")
- **Money** (MONEY): Monetary values (e.g., "$100", "€50", "£25")
- **Percent** (PERCENT): Percentages (e.g., "50%", "25 percent")
- **Miscellaneous** (MISC): Other named entities

## Example

Consider the following sentence:

> "Apple Inc. was founded by Steve Jobs in Cupertino, California on April 1, 1976."

A NER system would identify:

- **Apple Inc.** → Organization (ORG)
- **Steve Jobs** → Person (PER)
- **Cupertino, California** → Location (LOC)
- **April 1, 1976** → Date (DATE)

## Why is NER Important?

### Applications

1. **Information Extraction**: Extract structured information from unstructured text
2. **Question Answering**: Identify entities to answer questions
3. **Machine Translation**: Preserve named entities during translation
4. **Content Classification**: Categorize documents based on entities
5. **Search Engines**: Improve search by understanding entity queries
6. **Chatbots**: Understand user queries containing entities
7. **Knowledge Graph Construction**: Build knowledge bases from text

### Real-World Use Cases

\`\`\`python
# Example: Extracting entities from news articles
text = """
Elon Musk announced that Tesla will open a new factory in Berlin, Germany 
in 2024. The investment is expected to be around $5 billion.
"""

# NER would extract:
# - Person: Elon Musk
# - Organization: Tesla
# - Location: Berlin, Germany
# - Date: 2024
# - Money: $5 billion
\`\`\`

## How NER Works

### Traditional Approaches

#### 1. Rule-Based Methods

Use handcrafted rules and patterns:

\`\`\`python
import re

def rule_based_ner(text):
    entities = {}
    
    # Pattern for dates (simplified)
    date_pattern = r'\\b(January|February|March|April|May|June|July|August|September|October|November|December)\\s+\\d{1,2},?\\s+\\d{4}\\b'
    dates = re.findall(date_pattern, text)
    entities['DATE'] = dates
    
    # Pattern for money
    money_pattern = r'\\$[\\d,]+(?:\\.\\d{2})?'
    money = re.findall(money_pattern, text)
    entities['MONEY'] = money
    
    return entities

# Example
text = "The price is $1,234.56 on January 15, 2024."
result = rule_based_ner(text)
print(result)
# {'DATE': ['January 15, 2024'], 'MONEY': ['$1,234.56']}
\`\`\`

**Limitations:**
- Requires domain expertise
- Doesn't generalize well
- Hard to maintain

#### 2. Dictionary-Based Methods

Use predefined lists of entities:

\`\`\`python
# Dictionary of known entities
PERSON_NAMES = ["Barack Obama", "Albert Einstein", "Steve Jobs"]
ORGANIZATIONS = ["Apple", "Microsoft", "Google"]
LOCATIONS = ["New York", "California", "Germany"]

def dictionary_ner(text):
    entities = {}
    text_lower = text.lower()
    
    for name in PERSON_NAMES:
        if name.lower() in text_lower:
            entities.setdefault('PERSON', []).append(name)
    
    for org in ORGANIZATIONS:
        if org.lower() in text_lower:
            entities.setdefault('ORG', []).append(org)
    
    return entities
\`\`\`

**Limitations:**
- Incomplete coverage
- Doesn't handle variations
- Requires constant updates

### Modern Approaches

#### 3. Machine Learning-Based

Use supervised learning with labeled data:

\`\`\`python
# Using spaCy (popular NLP library)
import spacy

# Load pre-trained model
nlp = spacy.load("en_core_web_sm")

def spacy_ner(text):
    doc = nlp(text)
    entities = {}
    
    for ent in doc.ents:
        entities.setdefault(ent.label_, []).append(ent.text)
    
    return entities

# Example
text = "Apple Inc. was founded by Steve Jobs in Cupertino, California on April 1, 1976."
result = spacy_ner(text)
print(result)
# {
#   'ORG': ['Apple Inc.'],
#   'PERSON': ['Steve Jobs'],
#   'GPE': ['Cupertino', 'California'],  # GPE = Geopolitical Entity
#   'DATE': ['April 1, 1976']
# }
\`\`\`

#### 4. Deep Learning-Based

Use neural networks (LSTM, BERT, etc.):

\`\`\`python
# Using transformers (BERT-based)
from transformers import pipeline

# Load pre-trained NER model
ner_pipeline = pipeline("ner", model="dbmdz/bert-large-cased-finetuned-conll03-english")

def bert_ner(text):
    results = ner_pipeline(text)
    entities = {}
    
    for result in results:
        label = result['entity']
        word = result['word']
        entities.setdefault(label, []).append(word)
    
    return entities
\`\`\`

## NER Tagging Schemes

### BIO Tagging

The most common tagging scheme:

- **B** (Beginning): First token of an entity
- **I** (Inside): Token inside an entity
- **O** (Outside): Token not part of any entity

**Example:**

\`\`\`python
sentence = "Apple Inc. was founded by Steve Jobs"
tokens = ["Apple", "Inc.", "was", "founded", "by", "Steve", "Jobs"]
tags = ["B-ORG", "I-ORG", "O", "O", "O", "B-PER", "I-PER"]
\`\`\`

### BILOU Tagging

More detailed scheme:

- **B** (Beginning): First token of an entity
- **I** (Inside): Token inside an entity
- **L** (Last): Last token of an entity
- **O** (Outside): Token not part of any entity
- **U** (Unit): Single-token entity

## Evaluation Metrics

### Precision, Recall, and F1-Score

\`\`\`python
def evaluate_ner(predicted, gold_standard):
    """
    Calculate precision, recall, and F1-score for NER.
    """
    # Convert to sets for comparison
    pred_set = set(predicted)
    gold_set = set(gold_standard)
    
    # True positives: entities found in both
    tp = len(pred_set & gold_set)
    
    # False positives: entities in predicted but not in gold
    fp = len(pred_set - gold_set)
    
    # False negatives: entities in gold but not in predicted
    fn = len(gold_set - pred_set)
    
    # Calculate metrics
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0
    
    return {
        'precision': precision,
        'recall': recall,
        'f1_score': f1
    }
\`\`\`

## Challenges in NER

### 1. Ambiguity

The same word can be different entity types:

- "Apple" → Organization (Apple Inc.) or Fruit
- "Washington" → Person, Location, or Organization

### 2. Entity Variations

Entities can appear in different forms:

- "U.S.A." vs "United States" vs "USA"
- "Dr. Smith" vs "John Smith" vs "Smith, John"

### 3. Multi-Word Entities

Entities can span multiple tokens:

- "New York City"
- "United States of America"
- "Barack Hussein Obama"

### 4. Domain-Specific Entities

Different domains have different entity types:

- Medical: Diseases, Symptoms, Medications
- Legal: Laws, Cases, Courts
- Financial: Stocks, Companies, Indices

### 5. Low-Resource Languages

Limited training data for many languages.

## Popular NER Tools and Libraries

### 1. spaCy

\`\`\`python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

for ent in doc.ents:
    print(f"{ent.text:20} {ent.label_:10} {spacy.explain(ent.label_)}")
\`\`\`

### 2. NLTK

\`\`\`python
import nltk
from nltk import ne_chunk, pos_tag, word_tokenize

text = "Apple is looking at buying U.K. startup for $1 billion"
tokens = word_tokenize(text)
pos_tags = pos_tag(tokens)
tree = ne_chunk(pos_tags)
print(tree)
\`\`\`

### 3. Stanford NER

Java-based, high accuracy.

### 4. Transformers (BERT, RoBERTa, etc.)

State-of-the-art performance using pre-trained models.

## Best Practices

### 1. Choose the Right Model

- **General domain**: Use pre-trained models (spaCy, transformers)
- **Specific domain**: Fine-tune or train custom models
- **Low-resource**: Use transfer learning

### 2. Handle Ambiguity

\`\`\`python
# Use context to disambiguate
def disambiguate_entity(text, entity, context_window=5):
    """
    Use surrounding context to determine entity type.
    """
    # Implementation would use context clues
    # e.g., "Apple Inc." vs "apple fruit"
    pass
\`\`\`

### 3. Post-Processing

\`\`\`python
def post_process_entities(entities):
    """
    Clean and normalize extracted entities.
    """
    cleaned = []
    for entity in entities:
        # Remove extra whitespace
        entity = ' '.join(entity.split())
        # Normalize case
        entity = entity.title()
        cleaned.append(entity)
    return cleaned
\`\`\`

### 4. Evaluation

Always evaluate on a held-out test set:

\`\`\`python
# Split data
train_data, test_data = split_data(annotated_data)

# Train model
model = train_ner_model(train_data)

# Evaluate
metrics = evaluate_ner(model.predict(test_data), test_data.labels)
print(f"F1-Score: {metrics['f1_score']:.2f}")
\`\`\`

## Summary

Named Entity Recognition is a crucial NLP task that:

- **Identifies** named entities in text
- **Classifies** them into predefined categories
- **Enables** many downstream NLP applications
- **Uses** various approaches from rule-based to deep learning
- **Faces** challenges like ambiguity and domain specificity

> [!TIP]
> For most applications, start with pre-trained models like spaCy or transformers. They provide good performance out-of-the-box and can be fine-tuned for specific domains if needed.

**Key Takeaway**: NER is the foundation for many NLP applications. Understanding how it works and choosing the right approach for your use case is essential for building effective NLP systems.
`
};

