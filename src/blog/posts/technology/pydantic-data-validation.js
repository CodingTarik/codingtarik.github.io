export default {
  id: 'pydantic-data-validation',
  title: 'Introduction to Pydantic: Data Validation Made Easy',
  description: 'Learn how to use Pydantic for data validation in Python, including models, validators, type hints, and integration with FastAPI.',
  date: '2025-03-18',
  author: 'Tarik',
  categories: ['Python', 'Data Validation', 'Web Development'],
  thumbnail: null,
  featured: false,
  keywords: ['pydantic', 'python', 'data validation', 'type hints', 'fastapi', 'data modeling'],
  
  content: `
# Introduction to Pydantic: Data Validation Made Easy

Pydantic is a Python library that uses Python type annotations to validate data. It's fast, easy to use, and integrates seamlessly with modern Python frameworks like FastAPI.

## What is Pydantic?

Pydantic validates Python data using type hints. It ensures data conforms to your defined models and automatically converts types when possible.

### Key Features

- **Type validation**: Automatic validation based on type hints
- **Data conversion**: Automatic type coercion
- **JSON support**: Easy serialization/deserialization
- **Fast**: Written in Rust (via pydantic-core)
- **IDE support**: Great autocomplete and type checking

## Installation

\`\`\`bash
pip install pydantic

# Or with email validation
pip install pydantic[email]

# Or with all extras
pip install pydantic[all]
\`\`\`

## Basic Usage

### Simple Model

\`\`\`python
from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    email: str

# Create instance (validates automatically)
user = User(name="John", age=30, email="john@example.com")
print(user.name)  # "John"
print(user.age)   # 30

# Invalid data raises ValidationError
try:
    user = User(name="John", age="thirty", email="john@example.com")
except ValidationError as e:
    print(e)
\`\`\`

### Automatic Type Conversion

\`\`\`python
class User(BaseModel):
    age: int

# String "30" is automatically converted to int 30
user = User(age="30")
print(user.age)  # 30 (int, not string)
print(type(user.age))  # <class 'int'>
\`\`\`

## Field Types and Validation

### Common Types

\`\`\`python
from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict
from datetime import datetime

class User(BaseModel):
    name: str
    age: int
    email: EmailStr  # Validates email format
    is_active: bool = True  # Default value
    tags: List[str] = []  # List with default
    metadata: Optional[Dict[str, str]] = None  # Optional field
    created_at: datetime  # DateTime validation
\`\`\`

### Field Validation

\`\`\`python
from pydantic import BaseModel, Field, validator

class User(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    age: int = Field(..., gt=0, lt=150)
    email: str = Field(..., regex=r'^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$')
    
    @validator('name')
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()
    
    @validator('age')
    def age_must_be_positive(cls, v):
        if v <= 0:
            raise ValueError('Age must be positive')
        return v

# Usage
user = User(name="John", age=30, email="john@example.com")
\`\`\`

## Advanced Features

### Model Config

\`\`\`python
from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    
    class Config:
        # Allow extra fields
        extra = "allow"
        
        # Forbid extra fields (default)
        # extra = "forbid"
        
        # Ignore extra fields
        # extra = "ignore"
        
        # Use enum values instead of names
        use_enum_values = True
        
        # Validate assignment
        validate_assignment = True

# With validate_assignment=True
user = User(name="John", age=30)
user.age = "thirty"  # Raises ValidationError
\`\`\`

### Nested Models

\`\`\`python
from pydantic import BaseModel
from typing import List

class Address(BaseModel):
    street: str
    city: str
    zip_code: str

class User(BaseModel):
    name: str
    age: int
    address: Address  # Nested model
    addresses: List[Address]  # List of nested models

# Usage
user = User(
    name="John",
    age=30,
    address=Address(
        street="123 Main St",
        city="New York",
        zip_code="10001"
    ),
    addresses=[
        Address(street="123 Main St", city="New York", zip_code="10001"),
        Address(street="456 Oak Ave", city="Boston", zip_code="02101")
    ]
)
\`\`\`

### JSON Serialization

\`\`\`python
from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int

user = User(name="John", age=30)

# Convert to dict
user_dict = user.dict()
# {'name': 'John', 'age': 30}

# Convert to JSON
user_json = user.json()
# '{"name":"John","age":30}'

# Create from dict
user_from_dict = User(**{'name': 'John', 'age': 30})

# Create from JSON
user_from_json = User.parse_raw('{"name":"John","age":30}')
\`\`\`

## Real-World Example

### API Request/Response Models

\`\`\`python
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    age: int = Field(..., gt=0, lt=150)
    password: str = Field(..., min_length=8)

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    age: int
    created_at: datetime
    
    class Config:
        orm_mode = True  # For SQLAlchemy integration

class UserUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=100)
    email: Optional[EmailStr] = None
    age: Optional[int] = Field(None, gt=0, lt=150)
\`\`\`

### FastAPI Integration

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    age: int

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    age: int

@app.post("/users", response_model=UserResponse)
async def create_user(user: UserCreate):
    # user is automatically validated
    # Create user in database
    return UserResponse(id=1, **user.dict())
\`\`\`

## Validators

### Field Validators

\`\`\`python
from pydantic import BaseModel, validator

class User(BaseModel):
    email: str
    password: str
    confirm_password: str
    
    @validator('email')
    def validate_email(cls, v):
        if '@' not in v:
            raise ValueError('Invalid email format')
        return v.lower()
    
    @validator('confirm_password')
    def passwords_match(cls, v, values):
        if 'password' in values and v != values['password']:
            raise ValueError('Passwords do not match')
        return v
\`\`\`

### Root Validators

\`\`\`python
from pydantic import BaseModel, root_validator

class User(BaseModel):
    start_date: datetime
    end_date: datetime
    
    @root_validator
    def validate_dates(cls, values):
        start = values.get('start_date')
        end = values.get('end_date')
        if start and end and start > end:
            raise ValueError('Start date must be before end date')
        return values
\`\`\`

## Best Practices

### 1. Use Type Hints

\`\`\`python
# Good: Explicit types
class User(BaseModel):
    name: str
    age: int

# Avoid: Using Any
from typing import Any
class User(BaseModel):
    name: Any  # Too permissive
\`\`\`

### 2. Use Field for Constraints

\`\`\`python
# Good: Use Field for validation
from pydantic import Field

class User(BaseModel):
    age: int = Field(..., gt=0, lt=150)
\`\`\`

### 3. Separate Input/Output Models

\`\`\`python
# Good: Separate models
class UserCreate(BaseModel):
    password: str  # Include in input

class UserResponse(BaseModel):
    # Exclude password from output
    name: str
    email: str
\`\`\`

## Summary

**Pydantic provides:**
- Automatic data validation
- Type conversion
- JSON serialization
- Fast performance
- Great IDE support

**Key Features:**
- **BaseModel**: Define data models
- **Field**: Add constraints and validation
- **Validators**: Custom validation logic
- **JSON**: Easy serialization/deserialization

> [!TIP]
> Pydantic is the standard for data validation in modern Python applications, especially with FastAPI. Use it for API request/response validation, configuration management, and any data validation needs.

**Key Takeaway**: Pydantic makes data validation in Python easy and type-safe. It automatically validates data based on type hints, converts types when possible, and integrates seamlessly with modern Python frameworks.
`
};

